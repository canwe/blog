---
layout: post
title: 'Rewriting Twikural from scratch in Play framework'
categories:
  - web
tags:
  - web
  - twikural
  - application
  - appengine
  - java
  - play
  - code
---
I hope some of you might remember the application [Twikural that I built](http://veerasundar.com/blog/2012/04/open-sourcing-twikural-an-app-engine-project/) a while ago. I recently rebuilt the entire application from scratch using Play framework. This post explains why.

Back then, I was looking for a platform to quicky build and deploy a Java application. App Engine was easily the platform of choice because it was free to start and its Eclipse SDK was awesome. All you had to do is download the SDK, write your code following the set rules, click a button to deploy to cloud and viola! your application is up and running. 

Apart from the easy to use tools, App Engine gave me additonal features such as Emailing and scheduling cron jobs, which I needed both for Twikural. Hence I built the [first version of Twikural](http://veerasundar.com/blog/2012/08/twikural-how-it-works/) in App Engine.

The application stayed in that shape for a quite long time, untouched, undisturbed and sometimes forgotten :). However, I wasn't happy with [the code](https://github.com/vraa/twikural-old) I wrote for the first version of Twikural. It was crude, messy and in templates I used lot of scriptlets (guilty!). Also, with App Engine, I kinda felt that I was never in full control. So, I always had a item in my todo list to redo the application, but never had the time to sit and do it until now.

In past couple of years, I learnt to setup and run a Linux box on my own (I use Linode, btw). Also, while building [Feedmerang](http://feedmerang.com) I got a pretty good experience with [Play framework](https://www.playframework.com/).

So, there it is: A Linux machine, just sitting idle (most of the time) and pretty good Java web application framework waiting to be played! Finally decided to mix them both and the end result is, **Twikural is now running on my own machine** (ah! the feeling of happiness).

<a href="http://twikural.veerasundar.com"><img src="http://i.imgur.com/h54rKlR.png" title="Twikural" /></a>

Working with Play framework is an awesome experience because of its 'Hit Refresh workflow'. You would never beleive that you are developing a Java web application, which tends to be slower because of constant redeployments. But with Play, you make changes, refresh the browser and your changes are there. As if you are writing a JavaScript application!

Now just the boosted productivity, the Play framework itself is enjoyable to work with - easy to learn folder structure, inetgration with CoffeeScript and LESS css and its stateless architecture. It has become my first framework of choice for my every projects.

So, enough with my ramblings. Here's the [source code](https://github.com/vraa/twikural) - it's completely open source. If you are interested in contributing to this project, just fork and send me a PR.
