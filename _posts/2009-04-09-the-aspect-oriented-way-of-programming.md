---
title: The Aspect Oriented way of Programming
author: Veera
layout: post
permalink: /2009/04/the-aspect-oriented-way-of-programming/
show_ad:
  - yes
dsq_thread_id:
  - 891104291
categories:
  - Java
tags:
  - aop
  - aspect
  - aspectj
  - cross-cutting
  - j2ee
  - spring-aop
---

As Java developers, we all knew what is *Object Oriented Programming*. In OOP, a particular functionality (say, payroll calculation) is contained in a single class, thus providing the data encapsulation. So, a OOP system will have more than one objects, each representing a particular functionality, collaborating within themselves. What if, you need a functionality to spread across multiple objects?

Lets take the *logging*. It is sure that each object will be using the logging framework to log the event happenings (or whatever the developer prefer!), by calling the log methods. So, each object will have it's own code for logging. The point here is, the logging functionality requirement is spread across multiple objects (lets call this as ***Cross cutting Concern***, since it cut across multiple objects). Won't it be nice to have some mechanism to automatically execute the logging code, before executing the methods of several objects? 

## The Aspect Oriented Programming:

Welcome to **Aspect Oriented Programming (AOP)**. AOP is *the nice mechanism* that helps you to insert a piece of code before/after/around any methods of your choice. Using AOP, you can specify what code you want to insert (***the advise***) and where you want to insert the code (the **Join Point** (if single place) / **Pointcut **(if multiple place). You can think of the *advise* as the **interceptor** and the *Pointcut* as the **methods that are intercepted.**

Thus using AOP, you will be ***weaving*** certain methods around the existing methods. And the existing methods may not even know that a new functionality is getting added. The AOP framework takes care of this weaving.

And it is possible the weave your code either ***before, after or around (the advises)*** executing method. In case of Around advise, you can execute your custom functionality before calling the method, then continuing with the method execution and then executing a custom functionality. Thus, the normal method execution is surrounded by the custom functionality, which is weaved by the AOP framework. Apart from this, executing a custom functionality when ever the called method throws some Exception, is also possible. This is called as ***After throwing advise.***

There are multiple vendors who provide necessary libraries for aspect oriented programming. [AspectJ][1] is one of the most popular and well known framework in the AOP circle. Apart from AspectJ, [Spring also provides supports Java AOP][2]. And, Spring integrates very well with the AspectJ style. I'll be discussing more about the **Spring AOP** in my next article.

 [1]: http://www.eclipse.org/aspectj/ "AspectJ - Aspect Oriented Framework"
 [2]: http://static.springframework.org/spring/docs/2.5.x/reference/aop.html "AOP Framework from Spring"