---
layout: post
title: 'ES6 - Iterator, Generator Example'
categories:
  - javascript
tags:
  - web
  - code
  - javascript
---

ES6 comes with lots of [new *cool* features](https://github.com/lukehoban/es6features). Out of which, **Iterators** and **Generators** took some time to get used to. Here's an example that shows how to use ES6 Iterators and Generators.

Since this is experimental stuff, you need latest version of Chrome/Firefox to run the code. I used [Chrome's Dev tool snippets](https://developer.chrome.com/devtools/docs/authoring-development-workflow#snippets) to author/run the given example code.

Let's start with the problem definition.

Assume that you have a business class `Basket` that used to hold a list of items and other related methods. Now you need a way to iterate through all the items inside the `Basket`. Since `Basket` is a custom class, you can not use JavaScript's `for..in`. You need to write your own custom logic that iterates, as shown below.

## Iterating `Basket` using `for` loop
{% highlight javascript %}
'use strict';

function Basket() {
	// array to hold things inside the basket
	this.container = [];
}

// business method add that puts the given item in the basket
Basket.prototype.add = function(item) {
	if (!!item) {
		this.container.push(item);
	}
}

function test() {
	
	// create new instance of Basket.
	var fruitBasket = new Basket();
	
	// put fruits in the fruitBasket
	fruitBasket.add('apple');
	fruitBasket.add('banana');
	fruitBasket.add('orange');
	
	// list all fruits in the fruitBasket
	for(let index=0; index < fruitBasket.container.length; index++){
	    console.log(fruitBasket.container[index]);
	}

};

test();
{% endhighlight %}

### Problems with `for` loop approach

1. The `for` loop inside the `test` method is accessing a property `container` which is supposed to be internal to the `fruitBasket` object. There is no need for the outer world to know the internal of an object to iterate it. Of course, there are other ways to fix it, but for this article's purpose, lets not go there.
2. You can't use `for(let fruit in fruitBasket)` to iterate through the items. Because, althogh semantically `fruitBasket` is a list, technically it is not a list or an array. So, you can't use the elegant way of `for..each`. So sad!

Let's fix this with the use of Iterators.

## Enter `Iterator`

Given the above problem, we need a way to tell JavaScript that our custom object is indeed a `list` and let it use `for..each` in our object. How do we do it? With the help of `Iterator`, of course. We need to define a method in our object that JavaScript will invoke when it wants to iterate our object. And, what method will that be?

If you are coming from Java background, you must be aware of `Interface`. If an object tends to implement an interface, then the Java run time knows for sure that the object will have an implementation of all methods defined in that interface. So, without fear, it will invoke that method. 

But, JavaScript is not Java and we don't have Interfaces here. What else we have? **ES6**.

ES6 defines two new protocols `iterator` and `iterable`, which in layman terms means that, you can define custom iterator methods in your object and tell JavaScript that that's our iterator method.

For example, you can say,
{% highlight javascript %}
var myObj = {};
myObj[Symbols.iterator] = function () {
	return {
		next: function() {
			return {
				value: 'anything',
				done: false // or true if completed iterating
			}
		}
	}
}
{% endhighlight %}

and you can use, 
{% highlight javascript %}
for(let thing of myObj) { console.log(thing); }
{% endhighlight %}

All you need to do is from your custom iterator function, return an object that has a method `next()` defined which inturn will return an object in the format of `{value: 'val', done: false}` . JavaScript will use the *well-known* `Symbol.iterator` to identify if an object is iterable and has an iterator function defined in it. ([More about Symbol.iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator))

How sweet! Let's use this concept in our `Basket` problem.
{% highlight javascript %}
'use strict';

function Basket() {
	this.container = [];

	// maintain the state of current index value while iterating
	this._index = 0;
}

Basket.prototype.add = function(item) {
	if (!!item) {
		this.container.push(item);
	}
}

// define custom iterator
Basket.prototype[Symbol.iterator] = function() {
	return {
		next: function() {
			var result;
			if (this._index < this.container.length) {
				result = {
					value: this.container[this._index],
					done: false
				};
				this._index++;
			} else {
				// completed iterating through all items.
				result = {
					done: true
				}
			}

			return result;
		}.bind(this)
	};
}

function test() {

	var fruitBasket;

	fruitBasket = new Basket();
	fruitBasket.add('apple');
	fruitBasket.add('banana');
	fruitBasket.add('orange');

	for (let fruit of fruitBasket) {
		console.log('fruit fetched through iterator is ', fruit);
	}

};

test();
{% endhighlight %}

Now our code has improved a bit. From our `fruitBasket`, we are not exposing the internals to the outer world to iterate. And we get to use `for..of` to iterate `fruitBasket`.

But still, there's a problem. If you look at the code inside our custom iterator, you will notice that we are maintaining the state manually using the variable `_index`. We manually update this value as we iterate through the list. Is there an alternative to this?

Yes and it's called as **Generator** functions.

## Enter `Generator`

By definition, A generator is a special type of function that works as a factory for iterators. In English, a generator in a function returns a `{value: 'val', done: false}` if there are items left and returns `{done:true}` if there are no items. And, it maintains internal state by its own.

A Generator function should have,

1. `function* ()` syntax
2. One or more `yield` expressions inside the function body. `yield` is a special keyword that will return a value in the form of `{value: 'val', done: false}`.  ([More about Yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield))

Let's put this together in our `Basket` problem.

{% highlight javascript %}


'use strict';

function Basket() {
	this.container = [];
}

Basket.prototype.add = function(item) {
	if (!!item) {
		this.container.push(item);
	}
}

Basket.prototype[Symbol.iterator] = function*() {
	for(let index=0; index < this.container.length; index++){
		yield this.container[index];
	}
	
}

function test() {

	var fruitBasket, i;

	fruitBasket = new Basket();
	fruitBasket.add('apple');
	fruitBasket.add('banana');
	fruitBasket.add('orange');
	
	
	for(let fruit of fruitBasket){
		console.log('fruit fetched through iterator/generator is', fruit);
	}

};

test();
{% endhighlight %}

Notice how simple our iterator method has become.

Hopefully, this article sheds some light on the ES6 Iterator / Generator concepts. Please leave your questions / feedback (if any) in the comment section.