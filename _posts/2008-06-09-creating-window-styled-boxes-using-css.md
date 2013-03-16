---
title: Creating window styled boxes using CSS
author: Veera
layout: post
permalink: /2008/06/creating-window-styled-boxes-using-css/
related_posts:
  - 's:1205:"a:2:{s:4:"time";i:1220588429;s:13:"related_posts";s:1144:"<ul class="related_post"><li><a href="http://veerasundar.com/blog/2008/08/19/how-to-create-a-horizontal-navigation-website-using-jquery/" title="How to create a horizontal navigation website using JQuery.">How to create a horizontal navigation website using JQuery.</a></li><li><a href="http://veerasundar.com/blog/2008/06/12/getting-your-web-identity/" title="Getting your web identity!">Getting your web identity!</a></li><li><a href="http://veerasundar.com/blog/2008/08/11/code-snippet-for-including-content-based-on-post-length-in-wordpress/" title="Code snippet for including content based on post length in Wordpress">Code snippet for including content based on post length in Wordpress</a></li><li><a href="http://veerasundar.com/blog/2008/08/10/mozilla-concept-series-future-of-web-browser/" title="Mozilla concept series : Future of Web browser">Mozilla concept series : Future of Web browser</a></li><li><a href="http://veerasundar.com/blog/2008/08/05/tip-to-avoid-typing-password-every-time-you-open-vss/" title="Tip to avoid typing password every time you open VSS">Tip to avoid typing password every time you open VSS</a></li></ul>";}";'
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
# Creating window styled boxes using CSS

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