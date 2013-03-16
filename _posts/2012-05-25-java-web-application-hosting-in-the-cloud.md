---
title: Java web application hosting in the cloud
author: Veera
layout: post
permalink: /2012/05/java-web-application-hosting-in-the-cloud/
thesis_javascript_libs:
  - 'a:1:{s:6:"jquery";s:0:"";}'
categories:
  - Java
  - Web
tags:
  - amazon
  - app-engine
  - aws
  - azure
  - ec2
  - gae
  - heroku
  - hosting
  - Java
  - jelastic
  - openshift
  - paas
  - platform
  - sdk
  - service
  - Web
---
# Java web application hosting in the cloud

It's been an year since I wrote the first part of [Hosting Java applications in the web][1]. Since then, the Java hosting arena has become crowded with the so many players, which is a good news to the developers like us.

 [1]: http://veerasundar.com/blog/2009/12/hosting-java-applications-in-the-web/ "Hosting Java applications in the web"

Hence here I am, with the list of such hosting providers.

Disclaimer: This is just a *list* and not a comparison between the listed cloud providers.

## 1. Google App Engine (GAE)

[![][3]][3]

 []: https://developers.google.com/appengine/

Long term player in the cloud platform services. I've been running my two web apps ([timethetask][3] and [twikural][4]) for an year and haven't faced any issues yet. But you need to change your design strategy in order to abide by the rules put in by this platform (not an show stopper, though).

 [3]: http://www.timethetask.com/ "TimeTheTask"
 [4]: http://twikural.veerasundar.com/ "Twikural"

## 2. Amazon Web Services / Elastic Computing Cloud (EC2)

[![][6]][6]

 []: http://aws.amazon.com/

Not a platform (i.e. you don't need an SDK in order to develop Java apps) but provides machine that you can have full control over it. There are pre-configured machines with Java environment. Pretty popular in the dev circles.

## 3. Windows Azure - Java

[![][7]][7]

 []: http://www.windowsazure.com/en-us/develop/java/

From Microsoft. ![:)][7] 

 [7]: http://veerasundar.com/blog/wp-includes/images/smilies/icon_smile.gif

## 4. Jelastic

[![][9]][9]

 []: http://jelastic.com/

The good thing about Jelastic is you don't need to code to any API (unlike the GAE). You can upload any of your Java web app and Jelactic can run it/scale it for you.

## 5. Heroku

[![][10]][10]

 []: http://www.heroku.com/

I've already covered this news over here: [Heroku runs Java][10].

 [10]: http://veerasundar.com/blog/2011/08/heroku-runs-java/

## 6. OpenShift by Red Hat

[![][12]][12]

 []: https://openshift.redhat.com/app/

Haven't personally used it, but from the reviews around the web, it seems like the platform that you can get started very easily. Try it out and tell me if its true.

**Would you like to add anything to the above list? Feel free to comment.**