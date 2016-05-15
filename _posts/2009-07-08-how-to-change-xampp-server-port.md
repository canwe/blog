---
title: How to change XAMPP server port?
author: Veera
layout: post
permalink: /2009/07/how-to-change-xampp-server-port/
dsq_thread_id:
  - 891104795
categories:
  - How To
tags:
  - How To
  - port
  - server
  - tip
  - xampp
---

Follow these steps to change the XAMPP server port number:

1.  Stop the XAMPP server, if it is running already.
2.  Open the file **[XAMPP Installation Folder]/apache/conf/httpd.conf**.
3.  Now search for the string `Listen 80` (I'm assuming that your XAMPP was using the port 80. Otherwise, just search for the string 'Listen'). This is the port number which XAMPP uses. Change this 80 to any other number which you prefer.
4.  Then search for the string `ServerName` and update the port number there also.
5.  Now save and re-start XAMPP server and you are done.

{% include post-ad.html %}

## Why do we need to change the port number? 

Because, these days, it is very common that a web developer needs to have multiple web servers running, all at the same time. For example, an XAMPP server can be used to run the local WordPress blog, while a JBoss server also needs to be up for testing a java web applications. In such scenarios, if two or more servers are trying to use the same port number, then the late comer will fail to get the port. So, it becomes necessary to change any one server's port number to avoid the conflict.