---
title: Using multiple versions of JDK and Eclipse in single machine
author: Veera
layout: post
permalink: /2012/07/using-multiple-versions-of-jdk-and-eclipse-in-single-machine/
thesis_javascript_libs:
  - 'a:1:{s:6:"jquery";s:0:"";}'
categories:
  - How To
  - Java
tags:
  - cli
  - eclipse
  - howto
  - ide
  - Java
  - jdk
  - jre
  - powershell
  - productivity
  - scripts
  - windows
---
# Using multiple versions of JDK and Eclipse in single machine

This post will be useful if you are doing Java development in a Windows machine. Others, please feel free to browse [other posts][1].

In my office laptop, I have installed two versions of JDK. For the office work, I need JDK6 because the internal framework needs it. I'm using JDK7 for my personal projects and exploring the latest and greatest in Java. I have two versions of Eclipse too (one for office work and one is the latest Juno).

 [1]: http://veerasundar.com/blog/archives/ "Archive"

But, the tricky thing is to manage these multiple JDKs and IDEs. It's a piece of cake if I just use Eclipse for compiling my code, because the IDE allows me to configure multiple versions of Java runtime. Unfortunately (or fortunately), I have to use the command line/shell to build my code. So, it is important that I have the right version of JDK present in the PATH and other related environment variables (such as JAVA_HOME).

Manually modifying the environment variables every time I want to switch between JDKs, isn't a happy task. But, thanks to Windows Powershell, I'm able to write a scriplet that can do theÂ heavy-liftingÂ for me.

Basically, what I want to achieve is to set PATH variable to add Java bin folder and set the JAVA_HOME environment variable and then launch the correct Eclipse IDE. And, I want to do this with a single command. Let's do it.

1.  Open a Windows Powershell.
2.  I prefer writing custom Windows scripts in my profile file so that it is available to run when ever I open the shell. To edit the Â profile, run this command: Â **notepad.exe $profileÂ **- the $profile is a special variable that points to your profile file.
3.  Write the below script in the profile file and save it. 
        function myIDE{
        $env:Path  = "C:vraajavajdk7bin;"
        $env:JAVA_HOME = "C:vraajavajdk7"
        C:vraaideeclipseeclipse
        set-location C:vraaworkspacemyproject
        play
        }
    
        function officeIDE{
        $env:Path  = "C:vraajavajdk6bin;"
        $env:JAVA_HOME = "C:vraajavajdk6"
        C:officeeclipseeclipse
        }

4.  Close and restart the Powershell.
5.  Now you can issue the commandÂ **myIDEÂ **which will set the proper PATH and environment variables and then launch the eclipse IDE.

As you can see, there are two functions with different configurations. Just call the function name that you want to launch from the Powershell command lineÂ **(myIDEÂ **orÂ **officeIDE**).