---
title: Creating a shortcut to console.log in Sublime Text 2
author: Veera
layout: post
permalink: /2012/11/creating-a-shortcut-to-console-log-in-sublime-text-2/
categories:
  - How To
  - Web
tags:
  - console
  - echo
  - editor
  - How To
  - howto
  - log
  - shortcut
  - sublime
  - sublimetext
  - tip
  - Web
---

While writing JavaScript code, I often write debug messages to console using *console.log.* Though it is shorter than *System.out.println()* (hey, you Java!), which I am used to a lot, I still find it ineffective to type it every time.

So, I was following the approach to [bind console.log function to shorter name][1]. Here's another technique which is specific to Sublime Text.

 [1]: http://veerasundar.com/blog/2012/02/shortcut-to-console-log/ "Shortcut to console.log"

Using Sublime Text *Snippets* option, you can create a shortcut to a template and then you can insert that template in multiple places just by triggering the shortcut. Here's how I did it so that every time, I type *echo*, Sublime Text converts it into *console.log();*

Go to *Tools -> New Snippet*. Sublime will open a template in a new file. Now make sure you have this content in that file (or change it the way you want).

    <snippet>
    <content><![CDATA[
    console.log(
    ]]></content>
    <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
    <tabTrigger>echo</tabTrigger> -->
    <!-- Optional: Set a scope to limit where the snippet will trigger -->
    <scope>source.js</scope>
    </snippet>

Then save this snippet file as *echo.sublime-snippet* under *Packages/User* folder. To find the location of *Packages/User* folder, in Sublime, go to *Preferences -> Browser packages* and note the location.

Restart sublime and then in a JavaScript file, start typing *echo* and Sublime will provide you with a drop down to replace *echo* with the template you just created.