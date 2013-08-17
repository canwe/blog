---
title: JavaScript Closures
layout: post
categories:
  - javascript
tags:
  - javascript
  - closure
  - web
---
Closures are very important topic in JavaScript that you must understand if you want to master the language. The earlier you know about Closures, the better you will write your JavaScript code. But, from my experience, most of the JavaScript beginners either do not understand Closure or do not know that the existence of the topic at all.

So, in this post, I am trying to write down my understanding of Closures and their practical usages, in the hope that it will help some of you.

## What is a Closure?

So, what is it? As per the [definition](https://encrypted.google.com/search?hl=en&q=define%20closure "Define Closure")

> *Closure* : A thing that closes or seals something

So, a closure is kind of a box with some contents in it. 

<a href="http://www.flickr.com/photos/bryanalexander/3295316720/" title="Fenestra in a box by BryanAlexander, on Flickr"><img src="http://farm4.staticflickr.com/3655/3295316720_e284d62308.jpg" width="500" height="430" alt="Fenestra in a box"></a>

Lets say, you have a cat and you placed it inside a box along with a bunch of balls and sealed it. So, now the box acts like a closure that closes the cat and the balls. The cat still has access to the balls and it can access them whenever it pleases to do so.

## JavaScript Closure

When it comes to JavaScript, instead of cats and balls, a Closure contains a function and all the variables that were in scope when the function got declared. Instead of cat, JavaScript places the function and instead of balls, it places all the variables that were in scope to that function.

<a href="http://www.flickr.com/photos/94921037@N05/9499522885/" title="JavaScript Closure by v33ra, on Flickr"><img src="http://farm4.staticflickr.com/3677/9499522885_525b651880.jpg" width="491" height="166" alt="JavaScript Closure"></a>

The important thing to note here is that the function that is inside the closure still has access to all the variables inside the closure. As long as the function exists, the variables inside closure will not get garbage collected, letting the function access them whenever it pleases do so.

## Coding the Closure

Enough with english. Let's see some JavaScript. 

Consider the below code.

{% highlight javascript %}
function sayHello(){
  var message = "Hello"; // 1. Define a local variable.
  console.log(message); // 2. Prints Hello, as 'message' is still in scope.
}
sayHello(); 
{% endhighlight %}

As you'd expect, the code will print 'Hello' on the console. Now, let's tweak the code a little bit. Instead of printing the `message`, lets return a function that will print the message.

{% highlight javascript %}
function sayHello(){
  var message = "Hello"; // 1. Define a local variable.
  return function(){ // 2. Return a function from sayHello.
    console.log(message); // 4. Is 'message' still in scope?
  }
}
var helloSayer = sayHello();
helloSayer(); // 3. call the inner function returned from sayHello.
{% endhighlight %}

In the above, 

1. We define a variable `message` that is local to the function `sayHello` and only accessible from it. 
2. We declare a function and return it thus returning from `sayHello`. As common JavaScript knowledge goes, when we return from `sayHello`, all local variables inside that function will go out of scope and garbage collected. Will it happen to `message`? Let's see.
3. We call the inner function returned from `sayHello`. 
4. Surprisingly, the code will strill prints 'Hello' and we can see that the inner function has access to the variable `message` even though we returned from the function. This is because of closure.

If we recall, in JavaScript, a closure will contain the function and the set of variables that were in scope when the function got declared.

In the above code, when we declare the inner function at line #2, JavaScript creates a closure and puts this function and the variable `message` (which is accessible to the function) in it. So, when the inner function getting called after we return from `sayHello` it still has access to the variable `message`.

That explains the basics of Closure. In my next post, I'll be covering some more [examples of closure](http://veerasundar.com/blog/2013/08/javascript-closure-examples/). Feel free to comment if you have any feedback.