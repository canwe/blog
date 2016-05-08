---
title: 'Log4j Tutorial : Adding Log4j logger to your project'
author: Veera
layout: post
permalink: /2009/07/log4j-tutorial-adding-log4j-logging-to-your-project/
thesis_description:
  - >
    This tutorial explains step by step about how to add Log4j logger support to
    your java project. It includes an example code for explaining the process.
thesis_keywords:
  - log4j, logging, java, code, howto, tutorial, log
categories:
  - How To
  - Java
tags:
  - code
  - How To
  - Java
  - log4j
  - log4j-tutorial
  - logging
---

If you are new to Log4j, here is a short description on what is it and why should we care about it:

> [Log4j][1] is a flexible logging library, an open source project from Apache. Using Log4j, we can replace the debugging print line statements, like *System.out.println('Value is 'Â someVariable),* with a configurable logging statement like logger.debug('Value is 'Â someVariable). The advantage in using Log4j is, if you do not want to print the debugging print lines in production application, you can easily switch them off using Log4j configuration file (which we will see it how, shortly).

 [1]: http://logging.apache.org/log4j/index.html "With log4j it is possible to enable logging at runtime without modifying the application binary. The log4j package is designed so that these statements can remain in shipped code without incurring a heavy performance cost. Logging behavior can be controlled by editing a configuration file, without touching the application binary."

### How to add Log4j logger support to your project?

1.  [Download the latest Log4j distribution][2] from Apache website (at the time of this article is written, the latest version of Log4j is 1.2) and put the *log4j-xxx.jar* in your project class path. For Java web application, you can place the jar file in *WEB-INF/lib* folder. For Java applications, you can place the jar in any folder, but remember to add the folder to your classpath.
2.  Next we need to configure the Log4j library to our requirements. Log4j reads its configurations from log4j.properties file (or log4j.xml) placed in the CLASSPATH. Every log4j.properties file defines the following three things, mainly:
    *   an **Log4jÂ Appender** - this is the class file which does the actual logging. It could be a simple Console appender which writes Â the log messages to stdout (screen) or a file appender, which sends the log messages to a log file.
    *   a **Layout** - is nothing but how the log message is formatted. This format is very simlar to C languages's *printf* function formatting.
    *   and a **Logger** - a logger ties the appender with the log messages that are coming from the Java application. Basically, a **logger** tells that the log messages from these packages should go to some **appender** which will log the message in the defined **layout.**
4.  Below is a sample log4j.properties for configuring the console appender for your project. 

        #define the console appender
        log4j.appender.consoleAppender = org.apache.log4j.ConsoleAppender
        
        # now define the layout for the appender
        log4j.appender.consoleAppender.layout = org.apache.log4j.PatternLayout
        log4j.appender.consoleAppender.layout.ConversionPattern=%-4r [%t] %-5p %c %x - %m%n
        
        # now map our console appender as a root logger, means all log messages will go to this appender
        log4j.rootLogger = DEBUG, consoleAppender
    
    In the above properties file, we are first defining a Console appender and a layout pattern (refer this [complete documentation][3] to know what's the weired symbols in the conversion patterns means). Then we are mapping all the *DEBUG* level log messages from the entire application to go into the consoleAppender, since we added the consoleAppender to the rootLogger. 
5.  In any of your Java file, add the below lines, in order to start logging.

        private static Logger logger = Logger.getLogger(MyclassName.class);
        logger.debug("this is a sample log message.");
    
6.  Now you are done. Run your application and you should be seeing the log messages coming in your console window. 

Next: [How to send log messages to a file?][4]

 [2]: http://logging.apache.org/log4j/1.2/download.html "Download Apache log4j 1.2.15"
 [3]: http://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/PatternLayout.html "Class PatternLayout - A flexible layout configurable with pattern string."
 [4]: http://veerasundar.com/blog/2009/07/log4j-tutorial-how-to-send-the-log-messages-to-a-file/ "How to send log messages to a file"