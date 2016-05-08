---
title: IE8 and Triggering event on hidden submit button
layout: post
categories:
  - web
tags:
  - javascript
  - web
  - code
  - browser
  - js
  - ie8
---
Recently, I was bitten by a IE bug. 

On one of the page I am working on, there are two radio buttons. The requirement is to auto-submit the page when the user clicks on one of the radio button. Apart from the radio buttons, there is an `<input type="submit" onclick="someJavaScript(param1, param2);" />` element too, but this is hidden as per the UI requirements.

So, in order to do auto-submit of the page on click of radio button, my first approach was to, bind an event handler to the radio button and programmatically click on the submit button. Below is the source code to do this:

{% highlight javascript %}
(function(){
  $('#radioBtnId').on('click', function(event){
    $('#submitBtnId').click();
  });
}());
{% endhighlight %}

Well, a simple & straight forward code, isn't it!? But, IE8 doesn't think so (surprise!).

While the above code works well in Chrome / Firefox / IE9, it is failing in IE8. On investigating, I came to know that IE8 does not trigger events for the hidden elements.

So, IE is just being an IE here and I had to look for other ways to implement the auto-submit.

Luckily, in my case, the submit button need not to be clicked. It is enough if I could just invoke the `onclick` event handler defined in the submit element (this is a framework generated code, so I don't have control over it).

In JavaScript, you can call a function in multiple ways. 

1. You can simple use the name of the function to call it: `doSomething()`.
2. In case of anonymous function, you can directly invoke it: `(function(){}());` This is known as [IIFE] (http://en.wikipedia.org/wiki/Immediately-invoked_function_expression "Immediately Invoked Function Expression").
3. You can either use `call` or `apply`. For example, `doSomething.apply(context, [])` / `doSomething.call(context, arg1, arg2)`.

So, I can use the third approach to invoke the `onclick` event handler here, as shown below.

{% highlight javascript %}
(function(){
  $('#radioBtnId').on('click', function(event){
    var submitBtn = document.getElementById('submitBtnId');
    submitBtn.onclick.apply(submitBtn);
  });
}());
{% endhighlight %}

That finally fixed it in IE8 and other browsers obliged too!