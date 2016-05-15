---
title: Day one of JSFoo
author: Veera
layout: post
permalink: /2012/10/day-one-of-jsfoo/
thesis_javascript_libs:
  - 'a:1:{s:6:"jquery";s:0:"";}'
categories:
  - Tech
  - Web
tags:
  - bangalore
  - community
  - conference
  - event
  - javascript
  - js
  - jsfoo
  - nimhans
  - tech
  - Web
---

Day one of [JSFoo][1] is just got over. Went to the event with lot of expectations and came back with some new ideas/topics to explore. Here's a summary of what I learnt from today's sessions.

 [1]: http://jsfoo.in

Except the keynote, rest of the sessions simultaneously happened in [two tracks][2]. So, I had to opt for one session while missing the other one. Anyway, the organizers seems to be recording the whole event. So, I hope I can catch up with the sessions I missed later in video format.

 [2]: http://jsfoo.in/2012/#schedule

The first session I chose was '**Scaling node at Errorception**' by [Errorception][3] founder, [Rakesh Pai][4]. As I'm exploring node for my own web app, its very obvious for me to go for this. The speaker talked about how he's running Errorception on Node Mongodb stack. The highlights from his speech was:

 [3]: http://errorception.com/ "Errorception"
 [4]: http://blog.rakeshpai.me/ "Rakesh Pai"

1.  Don't write monolithic app. Instead break them into several micro apps (front end, queue processor, etc). This helps you to maintain it without much pain and deploy/take down the apps without affecting each other.
2.  Build a Queue layer for inter-app communication. That way, even if you take down a app, the messages won't be lost and they'll just be there in the queue until your app pick them up. He seems to be using **redis **for this purpose at Errorception.
3.  CPU bound app? Run away from node.

Then there was a 30 minutes of Q/A session about '**Web Storage**'. The presenter talked about different options for storing data locally at browser. It was new information to me that developers (ab)used the **window.name **property in order to persist data. This hack is totally an insecure way to preserve data and should never be considered for anything secure.

After a delicious lunch (I always complain about food in Bangalore, so when I say delicious, it is DELICIOUS!), I sit there in the '**Create JS**' session by [Harish Sivaramakrishnan][5].** **He totally inspired the audience by building a game from scratch in 45 minutes using [CreateJS][6] library. This library lets you to draw objects on Canvas instead of directly manipulating pixels by hand. A totally cool JS lib and if you are into game/visual programming using Canvas, you shouldn't miss this one.

 [5]: http://hsivaram.com/
 [6]: http://www.createjs.com/#!/CreateJS

The final sessions I attended were about using JQuery Deferred instead of inner-nesting callbacks and I18N Wikimedia libraries. Both provided some good information which I'll be using in my next projects.

Final session of the day was from Rakesh Pai who demoed his project of Controlling a toy car using Node server. He'd integrated the toy car with the Raspberry pi computer and ran the node server in it. A cool hardware hack, received great appreciation from the crowd.

With that the first day got over.