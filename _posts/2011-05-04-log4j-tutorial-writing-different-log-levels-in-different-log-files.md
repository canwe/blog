---
title: 'Log4j Tutorial &#8211; Writing different log levels in different log files'
author: Veera
layout: post
permalink: /2011/05/log4j-tutorial-writing-different-log-levels-in-different-log-files/
categories:
  - How To
  - Java
tags:
  - appender
  - code
  - How To
  - howto
  - Java
  - log
  - log4j
  - logger
  - logging
  - tutorial
---
# Log4j Tutorial &#8211; Writing different log levels in different log files

Recently one of my blog reader *Surisetty *send me a question, asking me if it is possible **to write log messages of different levels (info, debug, etc) into different log files**? To answer his question, **yes, it is possible. **We can do this** **by extending the FileAppender class and writing our own logic.

Below is the proof of concept code written to demonstrate this. Before that, you can download the Eclipse project file to run this code in your environment.

[Download the Source code][1]

 [1]: http://www.box.net/shared/g3esrz13q4

## To write different log levels in different log files

1.  Create a custom Log4j appender extending *FileAppender.*
2.  In that, override the *append() *method and check for the log level before writing a log message. Based on the level, call the *setFile() *method to switch between corresponding log file.
3.  Also, use MDC to store the original log file name mentioned in the *log4j.properties*. This is needed because *setFile() *changes the log file name every time you call it. So, we need to keep a track of the original file name somehow. And, we can use [Log4j MDC][2] for this.

 [2]: http://veerasundar.com/blog/2009/10/log4j-mdc-mapped-diagnostic-context-what-and-why/

## Custom Appender: LogLevelFilterFileAppender

    package com.veerasundar.log4j;
    
    import java.io.File;
    import java.io.IOException;
    
    import org.apache.log4j.FileAppender;
    import org.apache.log4j.Layout;
    import org.apache.log4j.MDC;
    import org.apache.log4j.spi.ErrorCode;
    import org.apache.log4j.spi.LoggingEvent;
    
    /**
     * This customized Log4j appender will seperate the log messages based on their
     * LEVELS and will write them' into separate files. For example, all DEBUG
     * messages will go to a file and all INFO messages will go to a different file.
     *
     * @author Veera Sundar | http://veerasundar.com
     *
     */
    public class LogLevelFilterFileAppender extends FileAppender {
    
    	private final static String DOT = ".";
    	private final static String HIPHEN = "-";
    	private static final String ORIG_LOG_FILE_NAME = "OrginalLogFileName";
    
    	public LogLevelFilterFileAppender() {
    
    	}
    
    	public LogLevelFilterFileAppender(Layout layout, String fileName,
    			boolean append, boolean bufferedIO, int bufferSize)
    			throws IOException {
    		super(layout, fileName, append, bufferedIO, bufferSize);
    	}
    
    	public LogLevelFilterFileAppender(Layout layout, String fileName,
    			boolean append) throws IOException {
    		super(layout, fileName, append);
    	}
    
    	public LogLevelFilterFileAppender(Layout layout, String fileName)
    			throws IOException {
    		super(layout, fileName);
    	}
    
    	@Override
    	public void activateOptions() {
    		MDC.put(ORIG_LOG_FILE_NAME, fileName);
    		super.activateOptions();
    	}
    
    	@Override
    	public void append(LoggingEvent event) {
    		try {
    			setFile(appendLevelToFileName((String) MDC.get(ORIG_LOG_FILE_NAME),
    					event.getLevel().toString()), fileAppend, bufferedIO,
    					bufferSize);
    		} catch (IOException ie) {
    			errorHandler
    					.error(
    							"Error occured while setting file for the log level "
    									  event.getLevel(), ie,
    							ErrorCode.FILE_OPEN_FAILURE);
    		}
    		super.append(event);
    	}
    
    	private String appendLevelToFileName(String oldLogFileName, String level) {
    		if (oldLogFileName != null) {
    			final File logFile = new File(oldLogFileName);
    			String newFileName = "";
    			final String fn = logFile.getName();
    			final int dotIndex = fn.indexOf(DOT);
    			if (dotIndex != -1) {
    				// the file name has an extension. so, insert the level
    				// between the file name and the extension
    				newFileName = fn.substring(0, dotIndex)   HIPHEN   level   DOT
    						  fn.substring(dotIndex   1);
    			} else {
    				// the file name has no extension. So, just append the level
    				// at the end.
    				newFileName = fn   HIPHEN   level;
    			}
    			return logFile.getParent()   File.separator   newFileName;
    		}
    		return null;
    	}
    }

## log4j.properties file

    log4j.rootLogger = DEBUG, fileout
    log4j.appender.fileout = com.veerasundar.log4j.LogLevelFilterFileAppender
    log4j.appender.fileout.layout.ConversionPattern = %d{ABSOLUTE} %5p %c - %m%n
    log4j.appender.fileout.layout = org.apache.log4j.PatternLayout
    log4j.appender.fileout.File = C:/vraa/temp/logs.log

## Lets test our code

    package com.veerasundar.log4j;
    
    import org.apache.log4j.Logger;
    
    public class Log4jDemo {
    
    	private static final Logger logger = Logger.getLogger(Log4jDemo.class);
    
    	public static void main(String args[]) {
    		logger.debug("This is a debug message");
    		logger.info("This is a information message");
    		logger.warn("This is a warning message");
    		logger.error("This is an error message");
    		logger.fatal("This is a fatal message");
    		logger.debug("This is another debug message");
    		logger.info("This is another information message");
    		logger.warn("This is another warning message");
    		logger.error("This is another error message");
    		logger.fatal("This is another fatal message");
    	}
    }

[Download the Source code][1]