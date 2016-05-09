---
title: JavaScript Closure - examples
layout: post
categories:
  - javascript
tags:
  - javascript
  - closure
  - web
  - code
---
Earlier, I talked about the [basics of JavaScript Closure](http://veerasundar.com/blog/2013/08/javascript-closures/). In this post, lets continue to explore Closure with the help of some practical examples.

Before we begin, just to recap, 

>Closure encloses function and the set of variables that were in scope of the function when it was declared. The variables inside the closure kept alive as long as the function alive.

With that in mind, let's make some closures.

## 1. Maintain State between function calls

Let's say you have function `add()` and you'd like it to add all the values passed to it in several calls and return the sum. For example,

{% highlight javascript %}
add(5); // returns 5
add(20); // returns 25 (5+20)
add(3); // returns 28 (25 + 3)
{% endhighlight %}

Of course, you can use a global variable in order to hold the total. But keep in mind that [this dude](http://en.wikipedia.org/wiki/Tyrannosaurus) will eat you alive if you (ab)use globals. 

For scenarios like this, Closure is the best candidate for maintaining state between function calls without using globals. Let's see how.

{% highlight javascript %}
// Using IIFE, to not to pollute global namespace.
(function(){

  var addFn = function addFn(){
    // local to closure and hold the value inbetween multiple calls.
    var total = 0;
    return function(val){
      total += val;
      return total;
    }

  };

  var add = addFn();

  console.log(add(5)); // 5
  console.log(add(20)); // 25
  console.log(add(3)); // 28

}());
{% endhighlight %}

[Run this example on JSFiddle](http://jsfiddle.net/gHZjA/).

## 2. Partial application, a.k.a Currying

Suppose you have a function that takes several arguments and you only know values for some of the arguments in the beginning. For this scenario, you can make use of [Currying](http://en.wikipedia.org/wiki/Currying) technique to pre-fill the values for known arguments and supply values for the rest of the arguments later.

Here's an example, illustrating Currying using Closure. 

Assume you have a `showMessage()` function that shows given message on screen with the given type and position. It takes three arguments. So, every time you want to call this function, you need to supply these three values.

{% highlight javascript %}
(function(){
  function showMessage(type, position, message){
    // displays a message at position and sets it type (for CSS styling)
  }

  showMessage('error', 'top', 'Not good.');
  showMessage('info', 'top', 'You better know this.');

}());
{% endhighlight %}

What if you want to make this function call, simpler? What if you create two other methods, namely, `showError()` and `showInfo()` that prefill the message type and position and supply the actual message in a later point in time? Let's Curry them.

The Curry function is taken from [John Resig's post](http://ejohn.org/blog/partial-functions-in-javascript/) (which btw is a good read [about Currying](http://ejohn.org/blog/partial-functions-in-javascript/)).

{% highlight javascript %}
(function(){

  // Lets add Curry method to Function so that we can call it on any function we want.
  Function.prototype.curry = function(){
    var fn = this, args = Array.prototype.slice.call(arguments);
    return function(){
      return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
    };
  };

  // Core method.
  function showMessage(type, position, message){
    console.log('showing [' + message + '] of type [' + type + '] at [' + position + '].' );
  }

  // Create special versions of Core method using Currying.
  var showError = showMessage.curry('error', 'top');
  var showInfo = showMessage.curry('info', 'bottom');

  // Call our special methods.
  showError('Not good.');
  showInfo('You better know this.');
  
}());
{% endhighlight %}
[Run this example of JSFiddle](http://jsfiddle.net/3GqcW/)

## 3. Private methods in JavaScript?

Yes, we can emulate private methods in JavaScript using Closure. Let'e see how.

{% highlight javascript %}

(function(){

  var makeCar = function(){

    // private variable
    var fuel = 0;

    // private method
    function burnFuel(){
      fuel-=10;
      console.log('Burned fuel [10]');
    }

    return {
      accelerate : function(){
        if(fuel > 0){
          burnFuel();
        }else{
          console.log('Out of gas. Fill now.');
        }
      },

      fillGas : function(gas){
        if(fuel <= 100){
          fuel += gas;
        }else{
          console.log('Reached capacity. Stop spilling.');
        }
      }
    }

  };

  var car = makeCar();
  car.accelerate(); // Out of gas. Fill now.
  car.fillGas(75);
  car.accelerate(); // Burned fuel [10]
  car.accelerate(); // Burned fuel [10]

}());

{% endhighlight %}

[Run this example on JSFiddle](http://jsfiddle.net/Fka3b/)

As you can see, the `makeCar()` function returns an object with two methods: `accelerate` and `fillGas`. These two methods has access to the private method `burnFuel` and private variable `fuel`. But the outer world can not directlty access these two.

So, with the help of closure you can simulate object oriented programming in JavaScript.

With that, I am concluding this post of Closure examples. Of course, these are not the *only* examples of Closures. There are lot many out there. Btw, If you have written closure for an interesting use case, feel free to share it in the comments section.
