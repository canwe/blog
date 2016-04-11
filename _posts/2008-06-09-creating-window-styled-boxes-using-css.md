---
title: Creating window styled boxes using CSS
author: Veera
layout: post
permalink: /2008/06/creating-window-styled-boxes-using-css/
ratings_users:
  - 0
ratings_score:
  - 0
ratings_average:
  - 0
views:
  - 92
categories:
  - How To
tags:
  - css
  - html
  - tip
  - tutorial
  - Web
---

While I was designing my home page [Veerasundar.com][1], I came up with this style definition which can create window styled boxes in a HTML page. I am sharing the style definitions and HTML snippet here, so that if anybody else wants to create the same, they could re-use the same. Off course, there are multiple advanced scripts are available, but below is very basic one, which if you know little HTML and CSS, you can extend it for your own need.

 [1]: http://www.veerasundar.com



CSS Style definitions:  
  


    #Box
    {
    margin:5px;
    text-align:left;
    }
    #Box #BoxTitle
    {
    background-color:#EEE;
    border:1px solid #DDD;
    font-weight:bold;
    
    padding:3px;
    font-size:14px;
    }
    
    #Box #BoxContent
    {
    background-color:#FFF;
    padding:10px;
    border:1px solid #DDD;
    border-top-style:none;
    line-height:1.5;
    font-size:13px;
    }

  
HTML Code:  


  
  
Here goes the Window Title!  
  
  
Here goes the content for your Windowed HTML box.  
  
  


If you want to see examples of the CSS boxes, then take a look at [Veerasundar.com][1] (As of June, I was having a template with Boxes in it. Hope I will not change this template in future! ![:D][2] )

 [2]: http://veerasundar.com/blog/wp-includes/images/smilies/icon_biggrin.gif



Tags: [css-tips][3], [html-boxes][4], [windows-in-html][5]

 [3]: http://technorati.com/tag/css-tips
 [4]: http://technorati.com/tag/html-boxes
 [5]: http://technorati.com/tag/windows-in-html