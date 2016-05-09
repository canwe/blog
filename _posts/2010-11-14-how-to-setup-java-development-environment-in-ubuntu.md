---
title: How to setup Java development environment in Ubuntu?
author: Veera
layout: post
permalink: /2010/11/how-to-setup-java-development-environment-in-ubuntu/
categories:
  - How To
  - Java
tags:
  - coding
  - development
  - eclipse
  - help
  - How To
  - howto
  - ide
  - Java
  - linux
  - programming
  - tutorial
  - Ubuntu
---

**In this post, I'm going to explain how you can setup a Java development environment (JDK Eclipse) in Ubuntu. I'm using Ubuntu 10.10, but these steps should be applicable to majority of Ubuntu versions.

Let's start with JDK first.

## Install Sun JDK:

1.  Download the Linux version of latest JDK binary from the [Oracle website][1]. For Java 6, the file name would be:Â ***jdk-6u22-linux-i586.bin***
2.  Copy the downloaded JDK file to a directory where you want to install the JDK. I use ***/home//java/*jdk-6u22-linux-i586.bin****
3.  Open terminal window and navigate to the directory where you copied the downloaded file. Then type the command: ***sudo sh jdk-6u22-linux-i586.bin** *and press enter.
4.  If it asks for root password, give it and JDK installation will begin. The JDK will be installed on the same directory where the binary is placed.

 [1]: http://www.oracle.com/technetwork/java/javase/downloads/index.html "JDK downloads"

That's it. JDK installation is done. But we still have one more step to complete. That is, setting up the *JAVA_HOME* environment variable.

## Setting up JAVA_HOME environment variable:

1.  Go to Nautilus file browser (*Places -> Home Folder*) and open this file: ***'.bashrc'Â***. By default this file is hidden. So, press *Ctrl H *which will show all hidden files and then you can see the *.bashrc *file.
2.  Add the below code snippet at the end of the *.bashrc *file: 
        export JAVA_HOME=/home//java/jdk1.6.0_22
        PATH=.:$JAVA_HOME/bin:$JAVA_HOME/jre/bin:$PATH
    
    **Don't forget to change the path in first line according to where you installed your JDK** 
    *   That's it. Log off and Log in again for the changes to take effect. To test whether the installation successful, open Terminal and type *java -version *which should show you the currently installed JDK version. 
    ## Install Eclipse:
    
    Installing Eclipse in Ubuntu is pretty simple. Just [download][2] the ZIP file from Eclipse.org and then unzip it. The installation is done. ![;-)][3]

 [2]: http://www.eclipse.org/downloads/ "Eclipse downloads"
 [3]: http://veerasundar.com/blog/wp-includes/images/smilies/icon_wink.gif