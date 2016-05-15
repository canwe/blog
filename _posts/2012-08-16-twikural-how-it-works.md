---
layout: post
title: 'Twikural &#8211; How it works?'
categories:
  - Java
  - Tech
  - Web
tags:
  - app-engine
  - code
  - github
  - google
  - Java
  - open-source
  - opensource
  - tech
  - twikural
  - twitter
  - Web
---

It's been few months since I started the [twikural][1] service. For the people who didn't know about Twikural;

 [1]: http://twikural.veerasundar.com/ "Twikural - Daily thirukural"

[Twikural][2] is a web service that sends two couplets from the well known *[Thirukkural book][3] *everyday to its subscribers. People can subscribe to the service via either [Twitter][4] or [Facebook][5].

I have already open sourced the [code behind twikural][6]. If you like to browse the source code, you are welcomed to do so in [Github][7].

 [2]: http://twikural.veerasundar.com/ "Twikural - Daily Thirukural"
 [3]: http://en.wikipedia.org/wiki/TirukkuÃ¡¹€ºaÃ¡¸· "Thirukkural"
 [4]: https://twitter.com/twikural "twikural"
 [5]: https://www.facebook.com/twikural
 [6]: http://veerasundar.com/blog/2012/04/open-sourcing-twikural-an-app-engine-project/ "Open sourcing Twikural"
 [7]: https://github.com/vraa/twikural "Twikural source code in Github"

In this post, I'm going to explain the details behind the project and how the entire thing works. Lets begin.

## The Big Picture

[![][9]][9]

 []: http://twikural.veerasundar.com

The site runs on **Google App Engine **and built using **Java 7**. The Java code does not use any fancy frameworks - it's all plain old Servlets and JSPs. But in the front end, I am using **Twitter Bootstrap** to ease the designing task and supporting different screen sizes. To interact with Twitter, I'm using **Twitter4j**.

There are two *cron jobs *that scheduled to run at 9 AM and 6PM respectively and sends out the tweets and Direct messages to the subscribed users. Then twitter takes care of updating the Facebook status of Twikural page.

As you can see in the above picture, the site talks only to Twitter, even though it supports Facebook as a subscription channel. This made possible by using the Facebook integration feature that Twitter provides. Using this, whenever there's a tweet is published, Twitter will automatically update the connected Facebook page status.

Users can subscribe via either [Twitter][9] or [Facebook][5]. The advantage of subscribing via Twitter is that the user will get an direct message (and possibly an SMS if he'd enabled it).

 [9]: https://twitter.com/twikural

So that's pretty much about what's happening behind Twikural at a higher level. If you'd like to read Thirukkural everyday, you should [subscribe to Twikural][10]. And feel free to share your feedback. The comments are always welcomed.

 [10]: http://twikural.veerasundar.com/subscribe.jsp "Subscribe to Twitter"