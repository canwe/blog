---
title: Shortcut to console.log
author: Veera
layout: post
permalink: /2012/02/shortcut-to-console-log/
categories:
  - How To
  - Web
tags:
  - code
  - console
  - javascript
  - logging
  - Web
---

Sometimes, I'm just lazy to type 'Ëœ*console.log*'Ëœ to print some data on the Firebug console. I often wanted to have a simple *echo() *function that spits whatever it gets to the console.

So, in every single JavaScript project I work on, I used to have this utility method:

    function echo(obj){
      console.log(obj);
    }
    ...
    echo('Hello World');

It worked well. But there was a problem. The printed message on the console will always show the line number of *console.log  *as the source line number instead of showing the where exactly the *echo() *function is invoked.

There's another way to solve this. Instead of creating a new *echo() *method, I just need to bind it to the existing *console.log() *to a variable and the logging works like a charm. Like this,

    window.echo = console.log.bind(console);
    window.oops = console.error.bind(console);
    ...
    echo('hello world');
    ...
    oops('I did it again');

The the methods became shorter and the correct line numbers printed on the console!