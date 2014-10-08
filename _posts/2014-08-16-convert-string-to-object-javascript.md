---
layout: post
title: 'Convert a namespaced string, value pair to an JavaScript object'
categories:
  - javascript
tags:
  - javascript
  - code
  - hash
---
Here's a little code snippet that I wrote recently to convert a namespaced string, value into an JavaScript object. i.e. if passed a value `("foo.bar.baz", 10)` the function will return an JavaScript object `{foo:{bar:{baz:10}}}`.

{% highlight javascript %}
// @input key = "foo.bar.baz", value = 10
// @output {foo:{bar:{baz:10}}}
function toHash(key, value){
    var parts = key.split('.').reverse(),
        i, foo = {}, bar = {};
    foo[parts.shift()] = value;
    bar = foo;
    for(i=0; i<parts.length; i++){  
        bar = {};
        bar[parts[i]] = foo;
        foo = bar;
    }
    return bar;
}
{% endhighlight %}

Run this code in JSFiddle: [http://jsfiddle.net/z89jr0k3/](http://jsfiddle.net/z89jr0k3/)
