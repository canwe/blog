---
title: 'Log4j MDC (Mapped Diagnostic Context) : What and Why'
author: Veera
layout: post
permalink: /2009/10/log4j-mdc-mapped-diagnostic-context-what-and-why/
categories:
  - Java
tags:
  - Java
  - log4j
  - logging
  - mdc
---
# Log4j MDC (Mapped Diagnostic Context) : What and Why

I hope that Log4j does not need any introduction and I assume that you already have basic understanding of Log4j. If not, I'll recommend you to first read this [Log4j Tutorial][1], to get started.

 [1]: http://veerasundar.com/blog/2009/07/log4j-tutorial-adding-log4j-logging-to-your-project/ "Log4j Tutorial"

That said, now I'll start with MDC or **Mapped Diagnostic Context**. Don't get scared with this name! MDC is not that tough. It's a simple yet useful concept. Before I explain what is MDC, lets assume that we are going to develop a simple web application with one servlet `MyServlet` that serves requests from multiple clients. And, this servlet uses log4j framework for logging. A file appender has been defined for this servlet, so all the log messages will be logged into a text file.

With the above said configuration, all the log messages from `MyServlet` will go into a single log file. And when this servlet is serving more than one clients at the same time, the log statements will be mixed and there's  no way to differentiate which log statement is belongs to which client's processing. This'll make it difficult to trace and debug if any processing error occured in `MyServlet` life cycle.

## How to differentiate log statements with respective to each clients?

To avoid the log statements mix-in, we could add a *user name* (or some other data which will be unique to each client) to our log statements. To do this, we have to make sure that we pass this *user name* data explicitley to each and every log statements, which is a tedious and repetitive work. But, no need to worry! Log4j has an excellent way to overcome this. It's called as **MDC or Mapped Diagnostic Context.**

## So, What is Log4j MDC (Mapped Diagnostic Context)

To put it simple, the MDC is a map which stores the context data of the particular thread where the context is running. To explain it, come back to our simple application - every client request will be served by different thread of the `MyServlet`. So, if you use log4j for logging, then each thread can have it's own MDC which is  global to the entire thread. Any code which is part of that thread can easily access the values that are present in thread's MDC.

So, how do we make MDC to differentiate logging statements from multiple clients? Simple : Before starting any business process in your code, get the user name (for our Servlet, we can get it from `request` object) and put that into MDC. Now the *user name* will be available to the further processing. In your **log4j.properties** while defining the `conversionPattern`, add a pattern `%X{key}` to retrievce the values that are present in the MDC. The key will be *userName* in our example. It's like getting a value from a Session object.

In [my next post][2], I'll give the source code for the same example that I used in this post. So, [keep Watching!][3]

 [2]: http://veerasundar.com/blog/2009/11/log4j-mdc-mapped-diagnostic-context-example-code/ "Log4j MDC example code"
 [3]: http://veerasundar.com/blog/feed "Subscriibe to this blog feed"