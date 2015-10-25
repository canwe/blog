---
layout: post
title: 'Rewriting Iterator, Generator example in ES6'
description: 'Learn how to write ES6 code that uses Iterator and Generator with a simple example.'
categories:
  - javascript
tags:
  - web
  - code
  - javascript
  - es6
  - iterator
  - generator
---
In my previous post, I showed you a simple [example of ES6 Iterator and Generator](http://veerasundar.com/blog/2015/10/es6-iterator-generator-example/). In that example, I used simple JavaScript constructor functions to illustrate Iterator and Generator concepts, because I did not want to confuse the readers with ES6 classes. Let's fix that in this post.

##Rewrite `Basket` class in ES6.

{% highlight javascript %}
'use strict';

class Basket {

	constructor() {
		this.container = [];
	}

	*[Symbol.iterator]() {
		for (let index = 0; index < this.container.length; index++) {
			yield this.container[index];
		}
	}

	add(item) {
		if (item) {
			this.container.push(item);
		}
	}
}

function test() {

	let fruitBasket, i, fruit;

	fruitBasket = new Basket();
	fruitBasket.add('apple');
	fruitBasket.add('banana');
	fruitBasket.add('orange');


	for (fruit of fruitBasket) {
		console.log('Fruit fetched is: ', fruit);
	}

};

test();
{% endhighlight %}

Now that we have a complte ES6 classes with Iterator/Generator in it, lets optimize our Iterator method a little bit.

## Reusing Array's Iterator

If you notice, the `Basket` class uses an Array type `container` to hold the items. As Array type has a built-in Iterator, we can use that Iterator instead of writing our own in our classes ([thanks to this tip](https://www.reddit.com/r/javascript/comments/3p3o4z/es6_iterator_generator_example/cw32o60)). With this, we can rewrite our Iterator method like this:

{% highlight javascript %}
[Symbol.iterator]() {
	return this.container[Symbol.iterator]();	
}
{% endhighlight %}

Notice that our Iterator is no longer a generator function (lack of `*` syntax), because it need not be.
