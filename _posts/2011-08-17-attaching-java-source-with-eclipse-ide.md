---
title: Attaching Java source with Eclipse IDE
author: Veera
layout: post
permalink: /2011/08/attaching-java-source-with-eclipse-ide/
categories:
  - How To
  - Java
tags:
  - eclipse
  - howto
  - ide
  - Java
  - source
---

In Eclipse, when you press *Ctrl *button and click on any Class names, the IDE will take you to the source file for that class. This is the normal behavior for the classes you have in your project.

But, in case you want the same behavior for Java's core classes too, you can have it by attaching the Java source with the Eclipse IDE. Once you attach the source, thereafter when you *Ctrl Click* any Java class names (*String* for example), Eclipse will open the source code of that class.

To attach the Java source code with Eclipse,

1.  When you install the JDK, you must have selected the option to install the Java source files too. This will copy the **src.zip **file in the installation directory.
2.  In Eclipse, go to **Window -> Preferences -> Java -> Installed JREs -> Add **and choose the JDK you have in your system.
3.  Eclipse will now list the JARs found in the dialog box. There, select the **rt.jar** and choose **Source Attachment**. By default, this will be pointing to the correct **src.zip**. If not, choose the **src.zip **file which you have in your java installation directory.  
    ![java source attach in eclipse][1]
4.  Similarly, if you have the **javadoc **downloaded in your machine, you can configure that too in this dialog box.

 [1]: http://veerasundar.com/img/2011/08/source-attach.png "source-attach"

Done! Here after, for all the projects for which you are using the above JDK, you'll be able to browse the Java's source code just like how you browse your own code.