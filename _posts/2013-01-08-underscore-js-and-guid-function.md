---
title: Underscore.js and guid function
author: Veera
layout: post
permalink: /2013/01/underscore-js-and-guid-function/
categories:
  - Web
tags:
  - backbone
  - guid
  - javascript
  - underscore
  - uuid
  - Web
---
# Underscore.js and guid function

Underscore library comes with the [uniqueId()][1] function that generates globally unique IDs to use in code. But it was not enough for my [Backbone][2] models as I needed the IDs to be unique across  invocations and users, i.e. something like [UUID][3].

 [1]: http://underscorejs.org/#uniqueId "UniqueId function to generate globally unique IDs"
 [2]: http://veerasundar.com/blog/2012/01/backbone-js-hello-world-tutorial/ "Backbone JS Hello World"
 [3]: http://en.wikipedia.org/wiki/Universally_unique_identifier "Universally unique identifier"

I have been using [this code snippet][4] to generate pseudo unique IDs for sometime. Since it's a utility function and it made lots of sense to move it to Underscore itself. Here's how I did it.

 [4]: http://stackoverflow.com/a/2117523/42372 "guid in JavaScript"

  {% highlight js %}
    _.mixin({
        guid : function(){
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
          });
        }
      });
  {% endhighlight %}

Once the above code is in place, then creating a unique ID is as simple as calling *_.guid()*.