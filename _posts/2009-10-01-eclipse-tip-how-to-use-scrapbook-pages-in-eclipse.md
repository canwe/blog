---
title: '[Eclipse Tip] How to use Scrapbook pages in Eclipse?'
author: Veera
layout: post
permalink: /2009/10/eclipse-tip-how-to-use-scrapbook-pages-in-eclipse/
categories:
  - Java
tags:
  - code
  - eclipse
  - How To
  - scrapbook
  - tip
---

When ever I code a complex logic in Java, I often wants to test a part of that complex code to check my logic correctness or to evaluate a code snippet. I usually do this, by creating a sample class named SandBox with a main method and placing whatever code that I wanted to test inside the main method. Then run the SandBox class. This solved my problem most of the times. But recently, I came to know that Eclipse has a elegant way of doing this in the name of Scrapbook Page.

So, **what is Scrapbook Page?** To put it simply, it's just a file where you can place your Java code snippet and execute it directly from the Scrapbook. No need to create any temperory classes (like I did in the previous para). You can even put one line of Java statement like System.out.println('Hello') in the Scrapbook and execute it. You'll get the 'ËœHello' printed on your console. Cool, Isn't it?

That said, I guess now you know the potential of Scrapbook. Let's see **how to use Scrapbook**. To add a scrapbook to your project, go to **File -> New -> Other -> Java -> Java Run/Debug -> Scrapbook page**. This will add a new file with an extension '.jpage'. In this file you can place any Java statements and you can select the Java statements, right click and either choose to:

*   **Inspect **- which will show the return value of your statements in an popup box.
*   **Display **- which will insert the return value of your statements to the Scrapbook itself.
*   **Execute **- which will run your selected Java statements.

Apart from running Java statements, Scrapbook pages supports content assist also. So, when you type your code in Scrapbook, you'll get the Autosuggestions as well.

i hope, this information helps you to use Eclipse effectively for your Java development. Do let me know your thought's about this article.