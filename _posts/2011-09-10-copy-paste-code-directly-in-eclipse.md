---
title: Copy paste code directly in Eclipse
author: Veera
layout: post
permalink: /2011/09/copy-paste-code-directly-in-eclipse/
categories:
  - Java
tags:
  - code
  - copy
  - eclipse
  - ide
  - Java
  - paste
  - tip
  - trick
---
# Copy paste code directly in Eclipse

Recently learned a really cool trick for copy-pasting code in Eclipse.

Lets say you have the following code:

    package com.veerasundar.demo;
    
    public class CopyCode {
    	private int nothing;
    }

Now copy the above code, go to any Eclipse project and right click on *source *folder and paste. See what happens! Impressive isn't it!?

Here's what Eclipse did: it parsed the clipboard, found that there's a Java code in it, create the necessary package structure for the code to fit in and then copied the code there.

Neat!