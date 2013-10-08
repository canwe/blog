---
title: Using wordpress custom fields to control Ads in your blog
author: Veera
layout: post
permalink: /2008/10/using-wordpress-custom-fields-to-control-ads-in-your-blog/
views:
  - 385
ratings_users:
  - 0
ratings_score:
  - 0
ratings_average:
  - 0
dsq_thread_id:
  - 891104068
categories:
  - How To
  - PHP
tags:
  - blog
  - PHP
  - tip
  - wordpress
---
# Using wordpress custom fields to control Ads in your blog

Custom fields are the user defined information that are assigned to any blog post in WordPress. They are also called as **meta-data**. Blog authors usually define the custom fields when they write the blog post to give some extra information like mood, whether,etc. Custom fields are **key/value** pairs, that means you can define any key and assign any value to this key. To know more about custom fields check out [WordPress.org][1] site. With this explanation, it is easy to control the ad presence in your blog post easily with custom fields.  


 [1]: http://codex.wordpress.org/Using_Custom_Fields

### Control ad presence in blog post with custom fields

As a blog author, you may want to include ad in some of your blog posts and may not want to have ads in other blogs. But it will be tedious to make a code change every time you post a blog. So we are going to define a custom field `$show_ad` and in the blog template we will check for this custom field. And, if it is YES we will include the advertisement and if it is NO or NULL we are not going to insert the advertisement.

### Code changes to check for a custom field

1.  Open the *single.php* wordpress template file
2.  Search for the text `the_content` and after this line, insert the below code. This will put the advertisement in the bottom of every post. If you want to place your ad on top of every post, copy below code above to the `the_content` line.
3.  *Code to be inserted* 
        
        

4.  Save the changes.
5.  After this, when ever you want to insert ad in your blog post, just define a custom field `show_ad` and give it a value 'YES'Â. Your ad code will be inserted to this post alone. If you don't want to insert ad, just don't define any custom fields. So simple, isn't it?