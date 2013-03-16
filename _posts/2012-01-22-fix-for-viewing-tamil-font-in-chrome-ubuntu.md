---
title: 'Fix for viewing Tamil font in Chrome &#8211; Ubuntu'
author: Veera
layout: post
permalink: /2012/01/fix-for-viewing-tamil-font-in-chrome-ubuntu/
categories:
  - How To
  - Tech
tags:
  - chrome
  - font
  - howto
  - indic
  - regional
  - sans
  - serif
  - tamil
  - ttf
  - Ubuntu
---
# Fix for viewing Tamil font in Chrome &#8211; Ubuntu

It seems like the Chrome browser in Ubuntu has some issues in displaying Tamil fonts. I guess, other Indian languages also might be having the same issue. The weirdest thing is Firefox was displaying the Tamil content properly.

So, after searching through the Chromium group for a while, found the fix for this issue.

## To fix Tamil font in Ubuntu Chrome

1.  Open Terminal
2.  Go to the folder: **cd /usr/share/fonts/truetype/freefont**
3.  Delete *FreeSerif.ttf: ***sudo rm FreeSerif.ttf**
4.  Delete *FreeSans.ttf: ***sudo rm FreeSans.ttf**
5.  Close and re-open the browser.

The Tamil font should be displayed properly now.