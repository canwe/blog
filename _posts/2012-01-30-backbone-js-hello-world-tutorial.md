---
title: 'Backbone JS &#8211; Hello World tutorial'
author: Veera
layout: post
permalink: /2012/01/backbone-js-hello-world-tutorial/
categories:
  - How To
  - Web
tags:
  - backbone
  - helloworld
  - javascript
  - tutorial
  - Web
---

[Backbone.js][1] is recently getting lots of traction among the web developers because of its ability to organize the JavaScript code. It provides the structure (Model-View) around which we can build our JavaScript heavy web applications.

 [1]: http://documentcloud.github.com/backbone/

I have started learning backbone.js for my personal project and I'm going to document my learning along the way. Let's start with a simplest possible example: A Hello World tutorial in Backbone.js (duh!)

You are welcomed to point out any anti-patterns/mistakes that I made in this tutorial so that I can update the content for better.

[Demo][2] | [Source code][3]

 [2]: http://veerasundar.com/app/hello-backbone/ "Backbone JS - Hello World tutorial"
 [3]: https://github.com/vraa/hello-backbone "Fork the source code in GitHub"

## The need for Backbone.js

Generally, we use JavaScript to handle UI events (*click*, *keypress*, etc), to process the UI data (*innerHTML*,Â etc) and to render DOM elements (*appendChild*, etc).

Without a framework like Backbone.js, each developer would implement the above logic in his/her own coding style. This might cause someÂ maintenance issues if multiple developers are involved.

Backbone.js provides a structure to do the above operations so that it is easy to write a maintainable code with less effort.

With Backbone, you get the following constructs:

1.  **Model** - used to represent your application data. For example, an *Employee*Â model.
2.  **Collection** - used to hold a list of your model objects. For example, anÂ *Employees* collection which contains a list of *Employee* model.
3.  **Views** - each model & collection can be associated with a Backbone view. You can also create a view for an existing DOM element so that the view can respond to events generated from that DOM element.

That said, Let's start building our application step by step.

## 0. Requirement

Our requirement is to [create a application][4] that gets a name from the user and says 'Hello {name}' and appends it to a list.

 [4]: http://veerasundar.com/app/hello-backbone/

## 1. Create the User Interface

Let's create our user interface first.

    <body>
        <header>
            <h1>Backbone JS - Hello World Tutorial!</h1>
            <h5>&lt;= <a href='#'>back to the article</a>
            </h5>
        </header>
        <section id='UserInput'>
            <fieldset>
                <legend>Enter a name and click say hello!</legend>
                <input type="text" name="hello" placeholder="your friend name" value="veera" /> &#160; <button>Say hello</button>
            </fieldset>
        </section>
        <ol id="HelloList"/>
        <script type="text/javascript" src="jquery-1.7.1.min.js"/>
        <script type="text/javascript" src="underscore-min.js"/>
        <script type="text/javascript" src="backbone-min.js"/>
        <script type="text/javascript" src="hello.js"/>
    </body>

As you can see, it's a simple HTML document with a textbox, button to accept user input and a empty OL element to hold the list of hello messages.

## 2. Create the Backbone Views to represent the UI elements

We have two views in our UI: One that accepts user input and one that shows the accepted inputs as a list. So, we'll create two Backbone views for this. Open the *hello.js* and type in the below code.

    (function($) {
    
    	var UserInputView = Backbone.View.extend({
    
    		el : '#UserInput',
    
    		initialize : function() {
    			this.helloListView = new HelloListView();
    		},
    
    		events : {
    			'click button' : 'addToHelloCollection'
    		},
    
    		addToHelloCollection : function(e) {
    		}
    	});
    
    	var HelloListView = Backbone.View.extend({
    
    		el : '#HelloList',
    
    	});
    
    	new UserInputView();
    
    })(jQuery);

Because we are creating the Backbone views to represent the existing DOM elements, we can mention the elements in *el* option. You can use the CSS3 selector syntax here and Backbone will find the element for you.

All Backbone objects has an *initialize()* function. Above we are initializing the *UserInputView* with a reference to the *HelloListView*.

Each view can accept a *events* object. Within this, you can specify what are all the events this view will trigger and method name to handle the event. In our case, we have a *click* event for the *button* element and a method *addToHelloCollection* to handle the click event. It is important to note that Backbone searches for the elements mentioned inside the *events* hash (in this case *button*) inside the *el*. So the *el* element should contain whatever element you give in the *events* object.

## 3. Create Backbone Model, Collection and a view to represent the model

It's time to create a Backbone Model to hold our application data. We can map each hello message to a model. Since we have list of messages, we'll create a Backbone Collection too. Lets look at the code.

    var Hello = Backbone.Model.extend({
    		initialize : function() {
    			this.name = 'name'
    		}
    	});
    
    	var HelloView = Backbone.View.extend({
    		tagName : 'li',
    		render : function() {
    			$(this.el).html('Hello '   this.model.get('name'));
    			return this;
    		}
    	});
    
    	var HelloList = Backbone.Collection.extend({
    		model : Hello
    	});

*Hello* is the model object with a property *name* initialized to 'name'. *HelloList* is the collection and we set this collection *model *property to our *Hello* model.

In Backbone, each Model and Collection can have it's own view to render themselves. So, we created a *HelloView* for the *Hello* model with the *render()* method to generate the HTML output. Since this view is not associated with any existing DOM elements and Backbone needs a wrapper tag to surround the rendered output, we provide the *tagName* property with 'li'. Because of this, when the *Hello* model generates its HTML code (in *render()* method), it will be surrounded by *li* tag.

## 4. Combine everything: The final code for hello.js

Lets update our *hello.js* file with this final JavaScript.

    (function($) {
    
    	var UserInputView = Backbone.View.extend({
    
    		el : '#UserInput',
    
    		initialize : function() {
    			this.helloListView = new HelloListView();
    		},
    
    		events : {
    			'click button' : 'addToHelloCollection'
    		},
    
    		addToHelloCollection : function(e) {
    			var hello = new Hello({
    				name : this.$('input').val()
    			});
    			this.helloListView.collection.add(hello);
    		}
    	});
    
    	var Hello = Backbone.Model.extend({
    		initialize : function() {
    			this.name = 'name'
    		}
    	});
    
    	var HelloView = Backbone.View.extend({
    		tagName : 'li',
    		render : function() {
    			$(this.el).html('Hello '   this.model.get('name'));
    			return this;
    		}
    	});
    
    	var HelloList = Backbone.Collection.extend({
    		model : Hello
    	});
    
    	var HelloListView = Backbone.View.extend({
    
    		el : '#HelloList',
    
    		initialize : function() {
    			_.bindAll(this, 'render', 'appendToHelloUL');
    			this.collection = new HelloList();
    			this.collection.bind('add', this.appendToHelloUL);
    		},
    
    		render:function(){
    
    			$.each(this.collection.models, function(i, helloModel){
    				self.appendToHelloUL(helloModel);
    			});
    		},
    
    		appendToHelloUL : function(helloModel) {
    			var helloView = new HelloView({
    				model : helloModel
    			});
    			$(this.el).append(helloView.render().el);
    		}
    	});
    
    	new UserInputView();
    
    })(jQuery);

As you can see, we have two Backbone views:

1.  *UserInputView* - which listens to the user interface events(*button click*) and update the model object with user input.
2.  *HelloListView* - which listens to the changes in our model(*add* event) and update the user interface with the model values.

Everything starts when we create a *new UserInputView()* which triggers *initialize* function for each objects and sets up event listeners. When user interacts with the view, the respective event listeners are called and the model gets updated. Then the *HelloListView*Â which is listening to model changes gets triggered and the user interface is updated.

Well, that concludes this tutorial. You can see the [completed application in action][2] or [fork the code in GitHub][5].

 [5]: https://github.com/vraa/hello-backbone "Github source"