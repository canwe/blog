---
title: Parent Views and Child views in Backbone
layout: post
categories:
  - web
tags:
  - web
  - backbone
  - javascript
  - code
  - mvc
  - organize
  - view
---
For the Backbone application I [talked about](http://veerasundar.com/blog/2013/04/communicating-between-views-in-backbone/) earlier in this blog, I needed a way to organize child views of my main `ApplicationView`. At present, the main view contains three child views: `HeaderView`, `DocumentView` and `SidebarView`. 

Initially my approach was to use an array. So, I created a property named `childViews : []` in my `ApplicationView` and added child views as below.

{% highlight javascript %}
createChildViews : function(){
  this.childViews = [];
  this.childViews['header'] = new HeaderView();
  this.childViews['document'] = new DocumentView();
  this.childViews['sidebar'] = new SidebarView();
}
{% endhighlight %}

This worked well until I tried to iterate the `childViews` array using Underscore's `_.each` method. Both native `Array.forEach()` and `_.each()` failed to iterate through `childViews[]`. Later, when I debugged, I found out that `childViews.length` was returning 0.

That got me puzzled, as I was clearly adding elements to the array, but the code says the array length was zero. Seriously, JS?

After a couple of minutes of Googling, figured out that, in JavaScript, when you add an element to an Array using **named index**, it doesn't affect the length property of that array.

For example, have a look at below code:
{% highlight javascript %}
var myArray = [];
myArray['header'] = 'Element Header';
myArray['document'] = 'Element Document';
alert(myArray.length); // alerts 0
myArray[0] = 'Zeroth element';
alert(myArray.length); // alerts 1
{% endhighlight %}

As you can see, when we add elements to `myArray` using named indexes, it doesn't affect the array length at all. But, when you add an element using an integer index, the array's length property changes. 

So, with that learning, I dumped the arrays and changed my Backbone view code to handle the child views as below:

{% highlight javascript %}
createChildViews : function(){
  this.childViews = {
    header : new HeaderView(),
    doc : new DocumentView(),
    sidebar : new SidebarView()
  };
}

iterateChildViews : function(){
  _.each(this.childViews, function(childView){
    // make sure we are not touching other properties of childViews object.
    if(childView instanceof Backbone.View){
      // Do something with the view.
    }
  }, this);
}
{% endhighlight %}

With this code, even if I want to access my child views as `this.childViews['header']`, I am still be able to do so. And I could iterate my child views as well. Win! 