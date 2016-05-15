---
title: How I scrape web pages
author: Veera
layout: post
permalink: /2012/02/how-i-scrap-web-pages/
categories:
  - How To
  - Web
tags:
  - firefox
  - javascript
  - jquery
  - scrap
  - scraping
  - scratchpad
  - Web
---

Often I need to pull some content out of web pages. Of course, I can always do a simple *Ctrl C*. But many times, I want the scrapped content to be in a different format than it's already in. So, I used to write Java code that downloads the content and do some XML parsing and then converts it into the format I want. But, this became a tedious process soon.

So, these days I figured out another easy way to do the web scraping. JQuery!

IMO, JQuery is the best tool to do the DOM parsing and content extraction. Of course, that's why the JQuery library is built for.

But the problem here is, not all websites include JQuery with them and even if they do, you can't just go and execute your JavaScript code in amother person's website.

Thanks to Scratchpad from Firefox which solves the above problem. Starting last August, Firefox comes with a built-in webdev tool - [Scratchpad][1] that enables you to execute your own JavaScript code in the context of any website.

 [1]: http://blog.mozilla.com/devtools/2011/08/15/introducing-scratchpad/ "Introducing Scratchpad"

So, this is what I do to scrape any public content from any web page:

1.  Open the page in Firefox.
2.  Press **Shift F4 **or go to **Firefox menu->Web developer->Scratchpad** to open the JavaScript editor.
3.  Include the below lines to add JQuery library to the current page ([thanks to this page][2]). 
        var GM_JQ = document.createElement('script');
        GM_JQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js';
        GM_JQ.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(GM_JQ);

4.  After that I can use any valid JQuery statement to navigate through the page content and parse it. 
        var pages = [];
        $("#Text1 table a").each(function(){
            pages.push($(this).attr('href'));
        });

 [2]: http://blogs.ischool.berkeley.edu/i290-04f09/2009/09/12/add-jquery-to-any-or-every-webpage/ "Add jQuery to any (or every) webpage"

Caution: Some websites may prohibit web scraping. So, please make your own judgment before scraping their content! Just saying! ![:)][3] 

 [3]: http://veerasundar.com/blog/wp-includes/images/smilies/icon_smile.gif