---
layout: post
title: '5 nifty JavaScript tricks that you may not know'
categories:
  - javascript
tags:
  - javascript
  - code
  - howto
  - tip
  - tricks
---
Over the years, I have seen several JavaScript techniques that are particularly clever. Here's a short list of 5 such techniques that I have been using again and again. I hope it inspires you too to rethink how you write certain piece of code.

And, please note that some people may think clever coding impacts readability and they might be right. So, grasp the concept and apply it in your code wherever you think it helps.

## 1. A compact string comparision

Let's say you want to check if a string value is present in a set of strings. You obviously go for a `if` statement as below.

{% highlight javascript %}
if(fruit === 'apple' || fruit === 'banana' || fruit === 'chikoo'){
	doMagic();
}
{% endhighlight %}

Here's a compact version of above code:
{% highlight javascript %}
if({apple:1,banana:1,chikoo:1}[fruit]){
	doMagic();
}
{% endhighlight %}

This trick works well only if you have a small set of strings to compare.

## 2. !!

Here's a shortest way to convert any JavaScript value to its truthy / falsy representation - just use `!!val`. Very useful if you want to check if a value is a present or not.

For example,
{% highlight javascript %}
if(!!document.addEventListener){
	doMagic();
}
{% endhighlight %}

But `!!` might confuse people with `!` operator which has a different meaning. So make a good judgement before you use `!!` everywhere.

## 3. Conditional function call

If a value is true, you want to call a function foo() otherwise you want to call bar(). You go for `if`, right?

{% highlight javascript %}
if(param){
	foo();
}else{
	bar();
}
{% endhighlight %}

Here's an alternative, short approach:

{% highlight javascript %}
param ? foo() : bar();
{% endhighlight %}

yay!

## 4. Chaining of function calls

You have three functions `one()`, `two()` and `three()`. You want to call these functions one after other, but only when a previous function returns a truthy value. For example, if all three functions returns a truthy value, then all will be called. But if the function `two()` returns false/null then function `three()` won't be called. 

So, you go for `if`, obviously.

{% highlight javascript %}
if(one()){
	if(two()){
		three();
	}
}
{% endhighlight %}

But let's rewrite with this one:

{% highlight javascript %}
one() && two() && three();
{% endhighlight %}

## 5. IIFE

**IIFE** is short for **Immediately Invoked Function Expression**. It means, you define a function and then you call it immediately. IIFE helped me in some usecases where I don't want to create a new function but I needed the logic to be inside a function block.

For example, lets say you are initializing variables and for one variable, the initial value needs to be calculated using some complex logic. If you don't want to separate this calculation logic to a seperate function, but you still want to wrap it in it's own block, you can IIFE. Like below:

{% highlight javascript %}
function doMagic(){
	var foo = 1,
		bar = 2,
		zoo = (function(){
			// some complex stuff
			// some more complex stuff
			return stuff;
		}()),
		baz = 3;
}
{% endhighlight %}

So, what do you think about these tricks? Do you think these are usefull or affect the code readability? Feel free to comment your thoughts.