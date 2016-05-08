---
title: Intercepting onclick event in JavaScript using JQuery
author: Veera
layout: post
permalink: /2011/10/intercepting-onclick-event-in-javascript-using-jquery/
categories:
  - How To
  - Web
tags:
  - code
  - howto
  - javascript
  - jquery
  - onclick
  - Web
---

Let's say you are using some external components in your web page that renders a button as below:

    

The above code will call the *delete() *method when user clicks on the button.

But, what if you want to show a confirmation box before calling the *delete()*? Since the code is rendered by a external component, most probably you won't be having control over how its code generated.

So, you have to intercept the onclick event and block it until your method is called and then invoke the original method.

Lets do it..

    var btn = $("#btn");
    btn.data("funcToCall", btn.attr("onclick"));
    $("#btn").removeAttr("onclick");
    $("#btn").bind("click", function(e){
    	if(confirm("Are you sure?")){
    		var func = $(this).data("funcToCall");
    		eval(func);
    	}
    });

As you can see, the *onclick *function is first stored into that element and then the *onclick *attribute is removed. Finally when the button in clicked, our custom method is called first and based on the user decision, the *delete() *method is either called or not called.