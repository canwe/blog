---
layout: post
title: 'func() == func'
categories:
  - javascript
tags:
  - web
  - code
  - javascript
---

Here's something I learned new today from a JavaScript tricky question posted by [@frantic](https://github.com/frantic/currying). Per the question, the code below must return **true** in both cases, and you need to implement the function that does so.

{% highlight javascript %}
console.log(func() == 42); // true
console.log(func == 42); // true
{% endhighlight %}

Which basically means that a function is equal to the value it returns. Been thinking a lot on how a function can be equal to a primitive value but couldn't come up with an answer. So, I gave up and looked into the spoiler code which had the solution.

Apparently, there's a method called [`valueOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) which you can use to define the primitive value equivalent of any JavaScript object. Since JavaScript functions are objects too, you can define a `valueOf()` method to a JavaScript function and return any value from it. 

Here's the code that explains this.

{% highlight javascript %}

// define a function.
var answerToEverything = function(){
	return 42;
}

// define the valueOf method.
answerToEverything.valueOf = function() { 
	return 42; 
}

// test the equivalency by calling the function
console.log( answerToEverything() == 42); // true

// test the equivalency directly.
console.log( answerToEverything == 42); // true
{% endhighlight %}

And, of course, if you use `===` instead of `==`, `answerToEverything === 42` will return false, because `===` will match both value and type.

JavaScript, you never stop to amaze me with your little quirks!