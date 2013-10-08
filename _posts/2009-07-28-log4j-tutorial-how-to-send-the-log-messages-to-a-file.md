---
title: 'Log4j Tutorial : How to send the log messages to a File using Appender'
author: Veera
layout: post
permalink: /2009/07/log4j-tutorial-how-to-send-the-log-messages-to-a-file/
thesis_keywords:
  - log4j, logging, java, code, howto, tutorial, log, appender
thesis_description:
  - >
    This article explains about how you can create a log4j appender that writes the
    log messages to a file instead of console.
dsq_thread_id:
  - 891617647
dsq_needs_sync:
  - 1
categories:
  - How To
  - Java
tags:
  - appender
  - code
  - How To
  - Java
  - log4j
  - log4j-tutorial
---
# Log4j Tutorial : How to send the log messages to a File using Appender

In the previous post of the Log4j tutorial series, I wrote about the very basics of [adding Log4j logging to your project][1]. In this post, I'll explain how to create a File Appender to log messages into a file, instead of console.

 [1]: http://veerasundar.com/blog/2009/07/log4j-tutorial-adding-log4j-logging-to-your-project/ "how to incorporate the Log4j logging support to your project, in a step by step manner."

### Log4j File Appenders - example for Logging messages to a file:

In most cases, either *Rolling File Appender* or *Daily Rolling File Appender* classes are used in production scenarios for logging messages into a file. A *[Rolling File Appender][2]* will send all the log messages to the configured file, until the file reaches a certain size. Once the log file reaches a maximum size, the current file will be backed up and a new log file will be created (thus the name Rolling File Appender). The *[Daily Rolling File Appender][3]* is also similar to *Rolling File Appender* except that the rolling happens at given frequency. Below is an example for using RollingFileAppender

 [2]: http://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/RollingFileAppender.html "RollingFileAppender extends FileAppender to backup the log files when they reach a certain size."
 [3]: http://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/DailyRollingFileAppender.html "DailyRollingFileAppender extends FileAppender so that the underlying file is rolled over at a user chosen frequency."

1.  Add Log4j logging support to your project. Read [this article ][1] for how to do it.
2.  In your log4j.properties file, add below lines.

        log4j.appender.rollingFile=org.apache.log4j.RollingFileAppender
        log4j.appender.rollingFile.File=D:/myapp/mylog.log
        log4j.appender.rollingFile.MaxFileSize=2MB
        log4j.appender.rollingFile.MaxBackupIndex=2
        log4j.appender.rollingFile.layout = org.apache.log4j.PatternLayout
        log4j.appender.rollingFile.layout.ConversionPattern=%p %t %c - %m%n

3.  As you can see from the above log4j Â configuration, we are creating a new log4j appender in the name of *rollingFile* and setting it's options. I guess most of the options are self explanatory. The *MaxBackupIndex* tells the log4j to keep a maximum of 2 backup files for the log mylog.log. If the log file is exceeding the *MaximumFileSize*, then the contents will be copied to a backup file and the logging will be added to a new empty mylog.log file. From the above configuration, there can be a maximum of 2 backup files can be created.
4.  Next we need to direct our logs to go into this log4j appender. 

        log4j.rootLogger = INFO, rollingFile

5.  That's it. From now on, when you log something from your Java class, the log message will go into the mylog.log file.

Next: [How to send log messages to different log files?][4]

 [4]: http://veerasundar.com/blog/2009/08/log4j-tutorial-how-to-send-log-messages-to-different-log-files/ "How to send log messages to different log files?"

Previous: [Adding Log4j logging to your project.][5]

 [5]: http://veerasundar.com/blog/2009/07/log4j-tutorial-adding-log4j-logging-to-your-project/ "Log4j Tutorial : Adding Log4j logging to your project"