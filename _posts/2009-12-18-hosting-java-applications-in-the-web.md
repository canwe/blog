---
title: Hosting Java applications in the web
author: Veera
layout: post
permalink: /2009/12/hosting-java-applications-in-the-web/
dsq_needs_sync:
  - 1
categories:
  - Java
  - Web
tags:
  - amazon
  - app-engine
  - application
  - cloud
  - development
  - ec2
  - gae
  - hosting
  - isp
  - Java
  - Web
---
# Hosting Java applications in the web

As a Java developer, I always choose Java as my first programming language to develop any of my ideas into a real application. If I want this application to be available for the world, then I have to put it on the web. But, when you compare with the options available for hosting a PHP application, with the Java's options, you can see a whole lot of difference. Usually, the Java hosting providers charge too much which you can not afford if your app is going to be a FREE service.

One of the main reason for Java not catching up with PHP in web programming, is the hassles that are involved in hosting a Java web application. As your Java web application is going be on a shared server, which will also shared by some other applications as well, maintaining your application on this environment becomes hard. You can not release a new version of your app, with out affecting other applications. If a change in your web app needed a re-start of server which may not be possible at all in a shared environment. But for PHP, none of these matters. That's the reason you can see a n-number of [PHP hosting][1] providers, but very few for Java.

 [1]: http://www.webhostingsearch.com/php-web-hosting.php "PHP hosting"

So, In order to host your Java application in a **lower cost** you have the following options (as of today) in your hand.

## 1. Hosting Java application in Google App Engine

[![Google App Engine Logo][3]Google App Engine][3] is a free service from Google that [allows the Java applications][3] to be hosted on the cloud. And, it is completely free for starters. You only need to pay if you want more bandwidth or storage space, etc. But if your application is going to be a small one, you hardly need to pay anything for hosting your Java web applications in Google App Engine.

 []: http://code.google.com/appengine/ "Run your web apps on Google's infrastructure."
 [3]: http://veerasundar.com/blog/2009/04/google-has-brought-the-java-to-appengine/ "Google has brought the Java to AppEngine"

## 2. Amazon EC2 - Cloud Hosting

![Amazon EC2 Logo][4]Another hosting service from a biggie. Amazon provides this **[Elastic Compute Cloud][5]** (EC2) for all kind of computing resources. You can host your Java application in EC2 in very cheap rates. Hosting on EC2 costs you on-demand basis. i.e. if your web application is going to get lot more hits, which means increased bandwidth and computing on cloud, you get to pay more. Otherwise, you get to pay less. Pay for what you use, that's the advantage of EC2 (off course, there are lot more than this one!).

 [4]: http://i187.photobucket.com/albums/x201/talktoveera/logo_aws.gif
 [5]: http://aws.amazon.com/ec2/ "Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale computing easier for developers."

## 3. JavaProvider.net - Cheap Java Hosting

**  
[![JavaProvider.net Logo][7]JavaProvider.net][7] is one the cheap Java hosting provider that I could find on Google. At around 5$/month, this service provides some competitive plans with good number features. They are using *CentOS* as their operating system and they even allow you to start/stop tomcat, which will be a good thing.  


 []: http://javaprovider.net/ "Hosting JSP/Servlets should not be expensive. We provide cheap but high quality Java hosting for developers from around the world."

## 4. Lot more Java hosting providers

![Java Hosting Provider Directory][7]Not content with the above list? You can always check this BIG [directory of providers supporting Servlet][8]. The website claims that the list contains the ISPs who support Servlet. But I'm not sure whether they provide proper Java application environment or not. You need to enquire the ISP properly if you are going to choose one from this list.

 [7]: http://i187.photobucket.com/albums/x201/talktoveera/servlets_logo_rnd-90short.jpg
 [8]: http://servlets.com/isps/servlet/ISPViewAll "List of ISPs who support Servlet hosting"

I hope this list gives you the starting point for your [Java hosting provider][9] search. Are you aware of any of the ISP provider which is not listed here? **Do leave a comment, then!** Your input will be very much appreciated.

 [9]: http://www.google.co.in/search?q=java hosting provider "Google Search - Java Hosting Provider"

If want to learn java for the web then join [test king][10] web development course and get free [testking 70-680][11] tutorials and [testking 642-825][12] demos to learn how to use java applications in web development.

 [10]: http://www.testking.com
 [11]: http://www.testking.com/70-680.htm
 [12]: http://www.testking.com/642-825.htm