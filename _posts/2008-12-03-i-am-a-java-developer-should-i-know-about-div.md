---
title: I am a Java developer. Should I know about DIV ?
author: Veera
layout: post
permalink: /2008/12/i-am-a-java-developer-should-i-know-about-div/
views:
  - 276
ratings_users:
  - 1
ratings_score:
  - 5
ratings_average:
  - 5
show_ad:
  - yes
dsq_thread_id:
  - 891104337
categories:
  - Java
tags:
  - css
  - Design
  - html
  - Java
  - javascript
  - tips
  - Web
---
# I am a Java developer. Should I know about DIV ?

Recently one of my colleague asked me the question

> 'I am a Java resource. Is it necessary for me to learn and understand the web design?'

I've seen many newcomers to Java language has been discussing this topic with themselves when they are given training in HTML and web design. For many of those folks, JavaScript is the another name for a nightmare. They just don't understand the necessity for a Java developer to learn HTML. This happens mainly for the people who are switching from a AS400/Mainframe or any other non-web technologies to Java. If these developers are going to design a web site without the proper understanding of web design techniques, they simply fail or got struck even for a simple mistake in the HTML code.

In my opinion, knowledge about (at least in a basic level) HTML/JavaScript/CSS is a must for any Java developer, unless you are completely going to work in Java SE. For all those Java developers, I would like to give some tips from my own experience in reviewing some Java developers page design markup:

*   **Close all the HTML tags properly:**
    If all the HTML tags are closed properly (i.e. inner tags are closed first and then the outer) most of the page layout problems will be solved. Most Java developers would be using a CSS written some other web designers and a template HTML page. When they want to modify or add any data to the HTML page, they usually cut and paste HTML tags and forgetting to close them properly. This may affect CSS styling and the page layout may collapse. Properly closing the HTML tags may save lots of HTML debugging time to those Java developers.
*   **Never use inline CSS styling / Scripting:**
    This is the frequent mistake I've seen most of the Java developers doing while designing the page. They just embed  in the servlet/JSP page itself. Avoid this kind inline definitions. Externalize styling and scripting. It makes the page to be re-designed easily without much effort. and helps us to organize the code better.
*   **Learn basics of CSS / JavaScript:**
    By learning this, you need not to wait for a web designer to come and fix your page for a proper layout. Also it helps you to add two more technologies to your resume. ![:-)][1] ) 
*   **Use Firefox and Firebug:**
    I would recommend this combination to a seasoned web designer, but it is also good for the beginners to know about this. Firebug is the best thing that happened to JavaScript ever. With this little Firefox plug-in debugging JavaScript becomes much easier. Inspecting DOM elements also possible in Firebug, so finding out which CSS style affects which HTML element is no longer harder.

Above simple tips, if followed, could save lots and lots of time for a web design beginner.

Would you like to add anything to it? What are your tips / suggestions for a Java developer turned web designer?

 [1]: http://veerasundar.com/blog/wp-includes/images/smilies/icon_smile.gif