---
title: Hosting Google App Engine application in your own domain
author: Veera
layout: post
permalink: /2011/04/hosting-google-app-engine-application-in-your-own-domain/
categories:
  - How To
  - Java
  - Web
tags:
  - app
  - app-engine
  - apps
  - appspot
  - cpanel
  - gae
  - google
  - google-apps
  - hosting
  - How To
  - howto
  - Java
  - tutorial
  - Web
---
# Hosting Google App Engine application in your own domain

Note: This post is written by/for the Java web developer who is using Google App Engine. Even if you are not an Java developer, but interested, you are welcome to read further.

![google-app-engine-logo][1]

 [1]: http://veerasundar.com/img/2011/04/google-app-engine.png "google-app-engine"

When you create a new application in Google App Engine, you'll get a domain name 'yourapp.appspot.com'Â. But, who'll want to host their app with such a suffix (unless you like it!)?

To improve your app branding, the best thing to do is to host your app in '**www.yourapp.com**'. So, how to do this in App Engine?

There are two ways.

1.  You can buy a new domain name with Google partnered sites (such as GoDaddy).
2.  If you have already bought a domain, you can map that domain to 'yourapp.appspot.com'Â.

I'm going to explain the second method in this post.

## Steps to host GAE app in your own domain

### 1. Buy Hosting Space and Signup for Google Apps

1.  The first step, obviously, is you should buy a **domain hosting**. You will be adding CNAME entry in the DNS mapping to make things work and some hosting providers wont let you to add CNAME if you just bought only the domain name from them. So, it is good to buy the domain name as well as the hosting space so that you have full control over it.
2.  Then you need to signup for **Google apps** with your domain name. You can get a [free Google Apps version][2] which is pretty much sufficient for a small company/individual. You'll be asked to verify the ownership of your domain. Just follow the steps given there. You'll be also creating a admin account to manage Google Apps.

 [2]: https://www.google.com/a/cpanel/domain/new "Free version of Google Apps - Signup page"

### 2. Add your application to Google Apps account

1.  Next, login to  and go to the Dashboard of your app and choose '**Application Settings -> Domain Setup -> Add Domain**'.
2.  In the '**Add Domain**'Â screen, enter your domain name. You'll be asked to login to Google Apps with the admin account which you would have created during the second step. Once you login, your application will be added to your Google Apps account.

### 3. Add 'Ëœwww.yourapp.com' sub-domain mapping to yourapp.appspot.com

1.  Now login to **www.google.com/a/yourapp.com **with your admin account (if you are not logged in already). There you can see you app engine application listed in the Google Apps dashboard. Click on your appspot application.
2.  In the next screen, enterÂ **www** in the text box to add a URL in the form ofÂ **www.yourapp.com**. As Google app engine does not support naked domains, you have to map the sub-domain, in our case **www**, to the appspot application. Once you add the URL you'll be given steps to add the CNAME record in your domain. After adding the CNAME record (explained in next steps), you should come back to this page and click complete.

### 4. Using CPanel, add a CNAME entry to ghs.google.com

1.  Now login to your domain admin panel. Since most of the hosting providers support CPanel, i'm giving the steps for CPanel.
2.  Login to **yourapp.com/cpanel **and go to '**Advanced DNS Zone editor'Â **where you can see the DNS mappings.
3.  Click the 'Edit'Â link against the **www.yourapp.com **and type '**ghs.google.com**'Â against the CNAME field. Leave other fields as it is. Save the changes.
4.  Thats it. It will take some time for the DNS propagation to happen. After that you can start accessing your appspot application with the URL **www.yourapp.com**!