---
title: How to create a new log file for each time the application runs?
author: Veera
layout: post
permalink: /2009/08/how-to-create-a-new-log-file-for-each-time-the-application-runs/
dsq_needs_sync:
  - 1
categories:
  - How To
  - Java
tags:
  - code
  - How To
  - Java
  - log4j
---
# How to create a new log file for each time the application runs?

Recently I got a question from my blog reader *Kuruba*, regarding log4j logging. Kuruba is having a batch program with Log4j logging and he wants to send the log messages to a **new log file each time his batch runs**. This can be achieved by extending Log4j's FileAppender, which is used for [logging to a file][1], and adding our own customization to the file appender. Below I'm explaining how to do it.

 [1]: http://veerasundar.com/blog/2009/07/log4j-tutorial-how-to-send-the-log-messages-to-a-file/

## Extending FileAppender to create a new log file for each application run:

Here's the pseudo code for the logic we are going to implement.

1.  Create a new Class *NewLogForEachRunFileAppender* (or any name as you wish), and extend it from the class *[org.apache.log4j.FileAppender][2].*
2.  Override the *[activateOptions][3]() *function for setting the new log file name every time the logger is instantiated.
3.  For simplicity, we will append the *current timestamp* to each log file name. So, each time when you run the application, you will get a fresh log file.

 [2]: http://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/FileAppender.html
 [3]: http://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/FileAppender.html#activateOptions()

## Customized FileAppender: NewLogForEachRunFileAppender:

Here is the code for the customize FileAppender, which will create a new log file, appender with the current timestamp, for each run of the application. Please note that this code is tested in Windows environment. So, please be cautious and do a testing when running this code in Unix or other environment.

    package com.veerasundar.dynamiclogger;
    
    import java.io.File;
    import java.io.IOException;
    
    import org.apache.log4j.FileAppender;
    import org.apache.log4j.Layout;
    import org.apache.log4j.spi.ErrorCode;
    
    /**
    * This is a customized log4j appender, which will create a new file for every
    * run of the application.
    *
    * @author veera | http://veerasundar.com
    *
    */
    public class NewLogForEachRunFileAppender extends FileAppender {
    
    public NewLogForEachRunFileAppender() {
    }
    
    public NewLogForEachRunFileAppender(Layout layout, String filename,
    		boolean append, boolean bufferedIO, int bufferSize)
    		throws IOException {
    	super(layout, filename, append, bufferedIO, bufferSize);
    }
    
    public NewLogForEachRunFileAppender(Layout layout, String filename,
    		boolean append) throws IOException {
    	super(layout, filename, append);
    }
    
    public NewLogForEachRunFileAppender(Layout layout, String filename)
    		throws IOException {
    	super(layout, filename);
    }
    
    public void activateOptions() {
    if (fileName != null) {
    	try {
    		fileName = getNewLogFileName();
    		setFile(fileName, fileAppend, bufferedIO, bufferSize);
    	} catch (Exception e) {
    		errorHandler.error("Error while activating log options", e,
    				ErrorCode.FILE_OPEN_FAILURE);
    	}
    }
    }
    
    private String getNewLogFileName() {
    if (fileName != null) {
    	final String DOT = ".";
    	final String HIPHEN = "-";
    	final File logFile = new File(fileName);
    	final String fileName = logFile.getName();
    	String newFileName = "";
    
    	final int dotIndex = fileName.indexOf(DOT);
    	if (dotIndex != -1) {
    		// the file name has an extension. so, insert the time stamp
    		// between the file name and the extension
    		newFileName = fileName.substring(0, dotIndex)   HIPHEN
    				   System.currentTimeMillis()   DOT
    				  fileName.substring(dotIndex   1);
    	} else {
    		// the file name has no extension. So, just append the timestamp
    		// at the end.
    		newFileName = fileName   HIPHEN   System.currentTimeMillis();
    	}
    	return logFile.getParent()   File.separator   newFileName;
    }
    return null;
    }
    }

## log4j.properties file

Since we created a custom file appender, we need to tell the Log4j to use our custom file appender. For demo purpose, I configured this custom FileAppender as a rootLogger. So, all log messages will go to our file appender. Below is the sample log4j.properties file.

    log4j.rootLogger = DEBUG, fileout
    log4j.appender.fileout = com.veerasundar.dynamiclogger.NewLogForEachRunFileAppender
    log4j.appender.fileout.layout.ConversionPattern = %d{ABSOLUTE} %5p %c - %m%n
    log4j.appender.fileout.layout = org.apache.log4j.PatternLayout
    log4j.appender.fileout.File = D:/temp/dynamiclogger/logs.log

If you look at the property *log4j.appender.fileout*, our customized file appender is associated with this appender. We have also given a log file name 'log.log' in the above configuration file. So, with the above configuration, when you run your application, the log files will be generated in this fashion: logs-1250696128437.log, logs-1250696142828.log.