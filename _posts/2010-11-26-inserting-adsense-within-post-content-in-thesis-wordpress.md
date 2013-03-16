---
title: Inserting Adsense within post content in Thesis WordPress
author: Veera
layout: post
permalink: /2010/11/inserting-adsense-within-post-content-in-thesis-wordpress/
categories:
  - How To
  - PHP
tags:
  - ad
  - adsense
  - code
  - codex
  - css
  - dollor
  - filter
  - howto
  - html
  - money
  - PHP
  - thesis
  - wordpress
---
# Inserting Adsense within post content in Thesis WordPress

**The usual placement of ads in a blog post is either *before* the post content or *after *it. But, if you want to place the ads *within* your content, then there's a way to do it in WordPress. This same technique works in Thesis theme too!

Using **wordpress filters**, we can insert ads (or any content you wish) within the post content. Filters are great way to modify a content. They take one input, apply the modifications and return the output. That's what we are going to do now for your post content. We are going to put a place holder for ads in our post content and using filters we are going to replace this placeholder with Adsense.

Follow these steps:

1.  Get your Adsense code.
2.  Open **functions.php** or **custom_functions.php**(if you are using Thesis theme) in your wordpress dashboard and add the below code (take a backup before, if you like): 
        function insertAdInPost($post_content){
          $ad='[your-Ad]';
          return str_replace("[adsense]", $ad, $post_content);
        }
        add_filter("the_content", "insertAdInPost");

3.  Replace the place holder '[Your-Ad]' with your adsense code and save the file.
4.  Edit any post in which you want to add Adsense, and place the markup '[adsense]' where you want to insert the ad.

That's it! Your own smart Adsense, without using any plug-ins stuff!