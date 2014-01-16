---
title: Changing root password in Ubuntu
author: Veera
layout: post
permalink: /2008/07/changing-root-password-in-ubuntu/
related_posts:
  - 's:254:"a:2:{s:4:"time";i:1220829306;s:13:"related_posts";s:194:"<ul class="related_post"><li><a href="http://veerasundar.com/blog/2008/06/27/sharepoint-story-installation/" title="SharePoint story - installation">SharePoint story - installation</a></li></ul>";}";'
views:
  - 304
ratings_users:
  - 0
ratings_score:
  - 0
ratings_average:
  - 0
dsq_thread_id:
  - 891103737
categories:
  - How To
tags:
  - experience
  - linux
  - password
  - tips
  - Ubuntu
---

Four months back, I had installed Ubuntu on my laptop and completely forgot about that after the installation. Yesterday, when I tried to install Java and Netbeans IDE on Ubuntu, I had to do some admin works, but I dont remember what password I gave for the 'Ëœroot' user during the installation. So, I thought I forgot the root password and I would have to re-install Ubuntu.

But, when searching on the Internet, I came to know that during the installation, Ubuntu do not ask any password for the root user (but I forgot this!). So, by default the root password is set to blanks. So, now I am happy that I don't need to re-install Ubuntu. ![:)][1] 

 [1]: http://veerasundar.com/blog/wp-includes/images/smilies/icon_smile.gif

But to change the root password in Ubuntu, which blanks by default, follow this step:

1.  Open Terminal/Command
2.  Type **sudo passwd**
3.  Ubuntu will ask you for current user password. Type in the current password and press enter.
4.  Now Ubuntu will ask you to enter the new password for the root. Type in the new password, confirm it again and you are done.PS: It is not possible to log-in as a 'Ëœroot' user. I guess this feature is de-activated in Ubuntu.