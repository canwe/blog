---
title: Organize imports in Eclipse
author: Veera
layout: post
permalink: /2012/07/organize-imports-in-eclipse/
thesis_javascript_libs:
  - 'a:1:{s:6:"jquery";s:0:"";}'
categories:
  - Java
tags:
  - eclipse
  - import
  - Java
  - organize
  - productivity
  - tip
---
# Organize imports in Eclipse

Today I learned a neat trick to organize imports in Eclipse. Of course, one can useÂ **Ctrl Shift OÂ **to remove the unused imports at file level. But what if you want to remove the unused imports for several files, may be at package level?

Simple - in theÂ **Package Explorer** window, right click on the package that you want to modify and then selectÂ **source -> Organize ImportsÂ **which will analyse all the files inside that package and then remove the unused imports.

One more nifty trick is that you can automatically organize the imports when you save the file. To enable this, go toÂ **Windows -> Preferences -> Java -> Editor -> Save ActionsÂ **and then enableÂ **Perform the selected action on save -> Organize imports**. After this, whenever you save a java file, eclipse will remove the unused imports automatically.