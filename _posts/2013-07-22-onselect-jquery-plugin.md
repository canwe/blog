---
title: onSelect - JQuery Plugin
layout: post
categories:
  - web
tags:
  - javascript
  - jquery
  - code
  - plugin
  - select
  - onselect
---
Let's say, I have a page with HTML Select box in it. The requirement is to reload the page whenever the user changes Select box value. For example, if you have country names dropdown and you need to show a new set of address fields whenever the user changes the country. As a long time JQuery user, coding this is a piece of cake.

{% highlight javascript %}
$('#selectBox').on('change', function(event){
  // Reload page.
});
{% endhighlight %}

That works well, in all browsers, as long as the user use mouse to select a new value.

But the problem arises when the user has to use keyboard arrow / TAB keys to select a new value. 

* Chrome and Internet Exlorer 9 fires a *change* event as soon as you use arrow keys to select a new value.
* Firefox will wait till the Select box loose focus **and then** fires the *change* event. So, in Firefox, you have to use down/up arrow keys to choose the value and then press TAB in order to fire the *change* event.

In my case, this inconsistency was not acceptable. I wanted the Firefox behavior in IE/Chrome too, as it is more appropriate to reload the page once the user completed done with selecting a new value, instead of reloading every time the user press down arrow on Select box.

So, I came up with following piece of code and wrapped it as a JQuery plugin.

{% highlight javascript %}
(function($){

  $.fn.onSelect = function(callback){

    return this.each(function(){

      if(!$(this).is('select')){
        // this plug-in is only for Select elements.
        return;
      }

      var selectBox = $(this);
      selectBox.data('previousValue', selectBox.val());
      
      selectBox.on('keyup', function(event){
        if(event.which === 13){
          selectBox.blur();
        }
      });

      selectBox.on('click blur', function(event){
        if(selectBox.data('previousValue') != selectBox.val()){
          selectBox.data('previousValue', selectBox.val());
          callback.call(selectBox, event);
        }
        return false;
      });

    });

  };

}(jQuery));
{% endhighlight %}

So, after adding the above code, I can do this:

{% highlight javascript %}
$('#selectBox').onSelect(function(event){
  // Reload page.
});
{% endhighlight %}

The above code will reload page only when the user done with selecting a new value. The behavior will be consistent across Chrome / Firefox / Internet Explorer. I.e. the call back you pass to `onSelect` will be called:

* When user selects a new value using mouse.
* When user uses keyboard / arrow keys to scroll to different values of dropdown box and press TAB or ENTER key after choosing a value.

The code is hosted at Github - [onSelect](https://github.com/vraa/onselect) and you are free to modify and use the code anyway you like.



