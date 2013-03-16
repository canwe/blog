---
title: 'Log4j MDC (Mapped Diagnostic Context) : Example code'
author: Veera
layout: post
permalink: /2009/11/log4j-mdc-mapped-diagnostic-context-example-code/
categories:
  - Java
tags:
  - code
  - Java
  - linkedin
  - log4j
  - mdc
---
# Log4j MDC (Mapped Diagnostic Context) : Example code

As a continuation of my previous post about [Log4j MDC (Mapped Diagnostic Context)][1], here's a fully working code sample explaining the concept. This is a simple example where we have a one servlet and one filter. The filter intercepts each and every request and put the user name in the MDC.

 [1]: http://veerasundar.com/blog/2009/10/log4j-mdc-mapped-diagnostic-context-what-and-why/ "Log4j MDC (Mapped Diagnostic Context) : What and Why"

## The Servlet Class:

    package com.veerasundar.code.log4jmdc;
    
    import java.io.IOException;
    import javax.servlet.ServletException;
    import javax.servlet.http.HttpServlet;
    import javax.servlet.http.HttpServletRequest;
    import javax.servlet.http.HttpServletResponse;
    
    import org.apache.log4j.Logger;
    
    /**
     * A good-for-nothing servlet which is just writing few messages to the logger
     * object. Since we've configured in the log4j.properties file to include the
     * userName, taken from MDC, every message will be appended with the user name
     * that is set from the AuthenticationFilter
     *
     */
    public class Log4jMdcDemo extends HttpServlet {
    
    	private static Logger logger = Logger.getLogger(Log4jMdcDemo.class);
    
    	public Log4jMdcDemo() {
    	}
    
    	protected void doGet(HttpServletRequest request,
    			HttpServletResponse response) throws ServletException, IOException {
    		doService(request, response);
    	}
    
    	protected void doPost(HttpServletRequest request,
    			HttpServletResponse response) throws ServletException, IOException {
    		doService(request, response);
    	}
    
    	protected void doService(HttpServletRequest request,
    			HttpServletResponse response) throws ServletException, IOException {
    
    		logger.info("This is  demo for the Log4j MDC concept");
    		logger.info("From Veerasundar.com/blog");
    		logger.debug("Just some sample messages");
    	}
    }

## A Filter to put the user name in MDC for every request call

    package com.veerasundar.code.log4jmdc;
    
    import java.io.IOException;
    
    import javax.servlet.Filter;
    import javax.servlet.FilterChain;
    import javax.servlet.FilterConfig;
    import javax.servlet.ServletException;
    import javax.servlet.ServletRequest;
    import javax.servlet.ServletResponse;
    
    import org.apache.log4j.MDC;
    
    /**
     * An example authentication filter which is used to intercept all the requests
     * for fetching the user name from it and put the user name to the Log4j Mapped
     * Diagnostic Context (MDC), so that the user name could be used for
     * differentiating log messages.
     *
     * @author veerasundar.com/blog
     *
     */
    public class AuthenticationFilter implements Filter {
    
    	@Override
    	public void doFilter(ServletRequest request, ServletResponse response,
    			FilterChain chain) throws IOException, ServletException {
    
    		try {
    			/*
    			 * This code puts the value "userName" to the Mapped Diagnostic
    			 * context. Since MDc is a static class, we can directly access it
    			 * with out creating a new object from it. Here, instead of hard
    			 * coding the user name, the value can be retrieved from a HTTP
    			 * Request object.
    			 */
    			MDC.put("userName", "veera");
    
    			chain.doFilter(request, response);
    
    		} finally {
    			MDC.remove("userName");
    		}
    
    	}
    
    }

## Web.xml file to glue together Servlet and Filter

    <?xml version="1.0" encoding="UTF-8"?>
    <web-app id="WebApp_ID" version="2.4"   xmlns="http://java.sun.com/xml/ns/j2ee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"   xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd">
        <servlet>
            <description/>
            <display-name>Log4jMdcDemo</display-name>
            <servlet-name>Log4jMdcDemo</servlet-name>
            <servlet-class>com.veerasundar.code.log4jmdc.Log4jMdcDemo</servlet-class>
        </servlet>
        <servlet-mapping>
            <servlet-name>Log4jMdcDemo</servlet-name>
            <url-pattern>/Log4jMdcDemo</url-pattern>
        </servlet-mapping>
        <filter>
            <filter-name>AuthFilter</filter-name>
            <filter-class>com.veerasundar.code.log4jmdc.AuthenticationFilter</filter-class>
        </filter>
        <filter-mapping>
            <filter-name>AuthFilter</filter-name>
            <url-pattern>/*</url-pattern>
        </filter-mapping>
    </web-app>

## Log4j.properties file which uses the data present in MDC

    # sample log4j.properties file, explaining log4j MDC concept
    # author: veerasundar.com/blog
    
    log4j.appender.consoleAppender = org.apache.log4j.ConsoleAppender
    log4j.appender.consoleAppender.layout = org.apache.log4j.PatternLayout
    
    #note the %X{userName} - this is how you fetch data from Mapped Diagnostic Context (MDC)
    log4j.appender.consoleAppender.layout.ConversionPattern = %-4r [%t] %5p %c %x - %m - %X{userName}%n
    
    log4j.rootLogger = DEBUG, consoleAppender

I hope that code explains the concept of MDC. Do let me know if you have any questions/suggestions in the comments.

## Output from the log file:

    0    [http-8084-2]  INFO Log4jMDCDemo  - This is  demo for the Log4j MDC concept - veera
    0    [http-8084-2]  INFO Log4jMDCDemo  - From Veerasundar.com/blog - veera
    0    [http-8084-2] DEBUG Log4jMDCDemo  - Just some sample messages - veera
