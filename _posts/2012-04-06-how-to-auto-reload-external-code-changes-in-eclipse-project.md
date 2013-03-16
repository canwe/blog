---
title: How to auto reload external code changes in Eclipse project
author: Veera
layout: post
permalink: /2012/04/how-to-auto-reload-external-code-changes-in-eclipse-project/
thesis_javascript_libs:
  - 'a:1:{s:6:"jquery";s:0:"";}'
categories:
  - How To
  - Java
tags:
  - eclipse
  - howto
  - ide
  - Java
  - productivity
  - refresh
  - reload
  - sublime
  - sync
  - synchronize
---
# How to auto reload external code changes in Eclipse project

I have started using [Sublime text][1] as my preferred code editor (for JS, CSS, Coffee). But, I still rely on Eclipse for writing Java code because it auto-imports Java packages and auto suggests variables and method names from my custom class files.

 [1]: http://veerasundar.com/blog/2012/03/unix-alias-with-parameters-or-opening-sublime-text-editor-from-command-line/

Working on multiple editors throws in another problem: whenever I make a change in some file outside of Eclipse, the IDE does not silently reload. It shows a blank page saying 'The resource is out of sync. Press F5 to reload'. The message started annoying me soon as I had to switch back and forth often.

It is not just for the multiple editors. Even when I do a *git pull,* the resources go out of sync.

Then, I found a workaround for this. Eclipse provides a built-in option that auto reloads a resource if its out f sync. Here's how you  can enable it.

Go to **Window -> Preferences -> General -> Workspace **and check the option **'Refresh using native hooks or polling'**.

So, the next time when you try to open a out of sync file, the IDE will sync it for you (thus saving you a keystroke, one at a time ![:)][2] ).

 [2]: http://veerasundar.com/blog/wp-includes/images/smilies/icon_smile.gif