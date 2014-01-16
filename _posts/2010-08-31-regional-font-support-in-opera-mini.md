---
title: Regional font support in Opera Mini
author: Veera
layout: post
permalink: /2010/08/regional-font-support-in-opera-mini/
categories:
  - How To
  - Tech
tags:
  - browser
  - font
  - How To
  - mini
  - mobile
  - opera
  - script
  - tech
---

If you are using your Opera Mini mobile browser to access regional websites, you might have faced this issue. Instead of seeing the proper regional content (in my case, its Tamil), you might have seen boxes all over there in that tiny mobile screen. This is because, by default, Opera Mini browser couldn't be able to render the complex scripts, i.e. regional fonts. 

So, to enable the regional (Tamil or Telugu or you name it!) language in Opera Mini browser,

1.  Open the address **about:config** in your opera mini browser. This will open the browser's option page.
2.  Scroll down until you see something like this: **Use bitmap fonts for complex scripts**.
3.  Set the above option value to **yes** and then click on **Save** button.

  
That's it. Now you'll be able to enjoy the local content from your Opera Mini browser.

## Technicalities:

All the web traffic from Opera Mini browser goes through Opera's proxy servers, which optimize the web content for mobile experience. As I said above, Opera Mini does not have the capability to render complex scripts in mobile. So, by setting the above option, we are letting the Opera's proxy servers to render the complex scripts as images and send those images to mobile browser. Thus you'll see the regional content as images, instead of fonts.

PS: came to know about this tip when I met the Tamil tweeters on last Sunday. Thanks to them for sharing this info.