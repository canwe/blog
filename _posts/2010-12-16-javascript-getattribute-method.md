---
title: JavaScript getAttribute method
author: Veera
layout: post
permalink: /2010/12/javascript-getattribute-method/
categories:
  - Web
tags:
  - classname
  - code
  - css
  - getattribute
  - html
  - ie
  - internet-explorer
  - javascript
  - quirk
  - Web
---

![ie-wtf][1]Sometimes you might want to read the 'class' attribute value of an HTML tag (for example *div*) from your JavaScript for processing. Almost all major JavaScript frameworks provide method to read attribute values, using which we can easily get the value of 'class' attribute.

 [1]: http://veerasundar.com/img/2010/12/ie-wtf.jpg "ie-wtf"

But if you're not allowed to use any such libraries, then you would have to rely on the browser's built-in method ***getAttribute* **to achieve the functionality.

Before you use the JavaScript's *getAttribute *method, do keep in mind that its implementation (especially for 'class' attribute) differs from browser-to-browser. I.e., IE does it differently from what other browsers are doing (as you would have expected!).

The below code would alert the *class* value of *'myElem' *in all browser's. But, Internet Explorer would just say 'null'!

    var elem = document.getElementById("myElem");
    alert(elem.getAttribute("class"));

To make that work in Internet Explorer, change to 'className' and see what happens!

    var elem = document.getElementById("myElem");
    alert(elem.getAttribute("className"));

Now the above code will work **only in Internet Explorer **but will fail in all other browsers. ![:)][2] 

 [2]: http://veerasundar.com/blog/wp-includes/images/smilies/icon_smile.gif

So what's the correct solution that works in **all browser? **Well, don't use the *getAttribute() *method at all. Instead, use the property **className **to get the class attribute value.

Here's the cross-browser solution:

    var elem = document.getElementById("myElem");
    alert(elem.className);

That should do the trick!