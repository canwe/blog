---
title: 'Log4j Tutorial : How to send log messages to different log files?'
author: Veera
layout: post
permalink: /2009/08/log4j-tutorial-how-to-send-log-messages-to-different-log-files/
categories:
  - How To
  - Java
tags:
  - code
  - Java
  - log4j
  - log4j-tutorial
  - logging
  - tutorial
---

One of the common requirement in Java projects, that are [using Log4j logging][1], is to have different log files for each module (or layer) in the project. For example, if you have a web application, you may want to log the debug/info messages from the service layer to a *service.log* file and the log messages from the presentation layer to the *web-app.log* file and so on. This is very simple to achieve in Log4j.

 [1]: http://veerasundar.com/blog/2009/07/log4j-tutorial-adding-log4j-logging-to-your-project/ "How to add Log4j support to your project?  Follow these steps if you want to add Log4j logging support to your Java project."

{% include post-ad.html %}

Log4j has a concept called **Category** using which you can classify a package as a category and assign a appender to that category alone. To make this point clear, consider that we have the below Java classes in our project:

{% highlight java %}
    com.someapp.service.myservice.SomeServiceClass.java
    
    com.someapp.dao.SomeDaoClass.java
{% endhighlight %}
    

Now, if we want to send the log messages from SomeServiceClass.java to service.log and SomeDaoClass.java to dao.log files respectively, then the log4j configuration would be something like this:

{% highlight java %}
    log4j.category.com.someapp.service = INFO, serviceFileAppender
    log4j.category.com.someapp.dao = INFO, daoFileAppender
    log4j.rootLogger = INFO, defaultAppender
{% endhighlight %}

As you can see in above snippet, we are defining two categories for the *service* and *dao* packages and associating them with the appenders serviceFileAppender and daoFileAppender respectively. These two appender are just any file appenders configured somewhere in the same log4j.properties file. (Have a look at this article: [How to configure the File Appenders in Log4j][2]). So, all the log messages that coming from the classes which resides under the *com.someapp.service* package will go to the serviceFileAppender, which in turn will go to service.log. The same logic applies to dao.log also.

 [2]: http://veerasundar.com/blog/2009/07/log4j-tutorial-how-to-send-the-log-messages-to-a-file/ "how to create a FileAppender to log messages into a file, instead of console."

Apart from these two logs, we also defined the defaultAppender as the root logger. Means, the log messages from all the packages will go to defaultAppender, **including the service and dao log messages**. Yes! with the above configuration, the service and dao log messages will be there in two places. In their respective log appenders the defaultAppender.

But, there's a way to prevent this duplicate logging. Read my next post on **Additivity** to learn how.

Next: [Additivity: What and Why?][3]

 [3]: http://veerasundar.com/blog/2009/08/log4j-tutorial-additivity-what-and-why/ "Article explains what is log4j additivity and how to use it."

Previous: [How to send the log messages to a File?][4]

 [4]: http://veerasundar.com/blog/2009/07/log4j-tutorial-how-to-send-the-log-messages-to-a-file/ "how to create a FileAppender to log messages into a file, instead of console.  Log4j FileAppender - exampe for Logging messages to a file"