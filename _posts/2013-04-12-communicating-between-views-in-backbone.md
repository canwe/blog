---
title: Communicating between views in Backbone
layout: post
categories:
  - web
tags:
  - javascript
  - backbone
  - web
  - code
  - mvc
---
The backbone application that I am currently working on has a document section and a sidebar section.

![Backbone Application](http://veerasundar.com/media/backbone-application.png)

To represent the above structure in Backbone, I came up with following views.

 1. `ApplicationView` - the container for the sub views.
 2. `DocumentView` - represents a current document being edited/displayed.
 3. `SidebarView` - shows relevant information for the document that is there in the DocumentView.

My top level `ApplicationView` is holding references to both child views - `DocumentView` and `SidebarView`. The view hierarchy is:

![Backbone View structure](http://veerasundar.com/media/backbone-view-structure.png)

Now, when there is some user intraction happening in one of the child views, I need to communicate that event to the other child view. Since the child views do not know about each other (in other words, they don't hold references to each other, unlike the Parent view which holds references to all of its child views), I need to rely on some eventing mechanism. 

After googling & reading other people opinions, following are the three different approaches that I considered in order achieve this.

1. Using the parent view as an Event relay
--------------------------------------

In the first approach, I used the parent `ApplicationView` to relay the events between its child views. Since the parent view has reference to all its child views, its easy to relay the event through the parent.

![Backbone event relay through parent views](http://veerasundar.com/media/backbone-view-event-relay.png)

The JavaScript code will be:

{% highlight javascript %}
var ApplicationView = Backbone.View.extend({
  
  initialize : function(){
    this.documentView = new DocumentView({parent:this});
    this.sidebarView = new SidebarView({parent:this});

    this.documentView.on('edit', this.documentEdited, this);
  },

  documentEdited : function(){
    // do some stuff
    this.sidebarView.trigger('documentEdit');
  }

});

var DocumentView = Backbone.View.extend({
  
  onEdit : function(){
    this.trigger('edit');
  }

});

var SidebarView = Backbone.View.extend({
  
  initialize : function(){
    this.on('documentEdit', this.onDocumentEdit, this);
  },

  onDocumentEdit : function(){
    // react to document edit.
  }

});
{% endhighlight %}

But, this approach is not so effective in real. Because I had to introduce an additional event handler method `documentEdited()` in the `ApplicationView` just to pass around the events. When there are several events that I need to pass, then it will become a nightmare to add event handlers for all those events in the parent view.

So, I looked at the second approach.

2. Using an EventBus to communicate between views
----------------------------------------------

In this approach, I extended the `Backbone.Events` object and created an `EventBus` object. Then I injected this `EventBus` to all child views which then used to propogate events.

![Backbone views event communication through event bus](http://veerasundar.com/media/backbone-views-event-bus.png)

The JavaScript code for this appraoch will be:

{% highlight javascript %}
var ApplicationView = Backbone.View.extend({
  
  initialize : function(){

    this.eventBus = _.extend({}, Backbone.Events);

    this.documentView = new DocumentView({
      eventBus : this.eventBus
    });
    this.sidebarView = new SidebarView({
      eventBus : this.eventBus
    });

  },

});

var DocumentView = Backbone.View.extend({

  initialize : function(options){
    this.eventBus = options.eventBus;
  },
  
  onEdit : function(){
    this.eventBus.trigger('documentEdit');
  }

});

var SidebarView = Backbone.View.extend({
  
  initialize : function(options){
    this.eventBus = options.eventBus;
    this.eventBus.on('documentEdit', this.onDocumentEdit, this);
  },

  onDocumentEdit : function(){
    // react to document edit.
  }

});
{% endhighlight %}

In this approach, I am using the `EventBus` object like a global event registry. If I want to views to talk between each other, I just inject the common `EventBus` in both of them and then trigger events/listen to events using te `EventBus`.

**Note**: If you do not want a global event registry, you can still create module / view level event buses and share them across child modules/views.

This approach is much better than the first approach. But we have to manually inject the `EventBus` to each child views. So, there's some room for improvement in here. Hence, the third approach.

3. Using Backbone as the event bus
----------------------------------

In the second approach, I created a seperate event bus object, extending `Backbone.Events`. But later, I learned that `Backbone` object itself is mixed with `Events`. So, if I use `Backbone` to propogate events, I can avoid creating one more event bus. 

As an added advantage, I don't need to manually inject `Backbone` into each and every sub view since it is already available.

![Using backbone as the event bus](http://veerasundar.com/media/backbone-views-backbone-event-bus.png)

The JavaScript implementation will be:

{% highlight javascript %}
var ApplicationView = Backbone.View.extend({
  
  initialize : function(){
    this.documentView = new DocumentView();
    this.sidebarView = new SidebarView();
  },

});

var DocumentView = Backbone.View.extend({
  
  onEdit : function(){
    Backbone.trigger('documentEdit');
  }

});

var SidebarView = Backbone.View.extend({
  
  initialize : function(options){
    Backbone.on('documentEdit', this.onDocumentEdit, this);
  },

  onDocumentEdit : function(){
    // react to document edit.
  }

});
{% endhighlight %}

Conclusion
-----------

For now, I'm using the third approach, which uses the Backbone object as an event bus, in my project. IMO, this approach is somewhat cleaner than the other two (It still relies on Global `Backbone` object though, but it's okay in my case).

So, what approach would you use in your project? Feel free to share if you are following any better approaches than these to communicate between backbone views.






