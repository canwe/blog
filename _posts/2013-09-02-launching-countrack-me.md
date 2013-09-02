---
title: Launching Countrack.me - my new side project
layout: post
categories:
  - web
tags:
  - countrack
  - project
  - code
  - launch
---
Today, I am very happy to announce the launch of [countrack.me](http://countrack.me "A tool to track your activities anonymously").

  > Countrack.me is a HTML5 / JavaScript application to track your daily activities anonymously.

It's been developed out of my own need to keep track of my activities. The idea-to-app happened in just 2 weeks, as 13 days ago I made [the first commit](https://github.com/vraa/countrack/commit/85f66b46476dba790e73ccf928ee4069ae4d2b8f). I designed the application, primarily keeping Mobile as the platform of choice.

Here's what the application looks like.

<a href="http://countrack.me" title="countrack.me - A tool to track your activities anonymously"><img src="http://farm8.staticflickr.com/7452/9654303220_fbe8facf08_c.jpg" width="800" height="600" alt="countrack.me screenshot"></a>

Here are some of the bullet points that tries to explain you about the application.

* Its 100% `JavaScript` application with no server code (except for the `nginx` that serves the static files).
* Its Free & [Open Source](http://github.com/vraa/countrack).
* There are no signup / signin BS (that makes one less password to remember). You can start using the application right now, as everything is client side, including your activity data which gets stored in browser's `localStorage`.
* Optionally, you can upload your data to [Firebase](http://firebase.com) if you happen to clear your browser cache often and want to keep a backup of your data. This is completely **opt-in** and without you uploading, the application won't send any of your data to any server.
* Offline mode enabled. Lost the internet connection? You can still use [countrack.me](http://countrack.me "A tool to track your activities anonymously")

It would be great if you [try out this tool](http://countrack.me "A tool to track your activities anonymously") and let me know your feedback. 

This is just a start and I am hoping to add few more features to the app in the upcoming releases. If you happen to have any suggestion, please feel free to contact me or [open an issue](https://github.com/vraa/countrack/issues).