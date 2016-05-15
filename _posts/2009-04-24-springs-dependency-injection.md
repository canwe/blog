---
title: Spring's Dependency Injection
author: Veera
layout: post
permalink: /2009/04/springs-dependency-injection/
dsq_thread_id:
  - 891104908
categories:
  - Java
tags:
  - article
  - di
  - framework
  - How To
  - ioc
  - Java
  - jee
  - spring
  - tutorial
---

If you are into Java enterprise application development, then get yourself ready to hear the terms 'Ëœ*Spring*'Ëœ, 'Ëœ*Dependency Injection*'Ëœ or 'Ëœ*IoC*'Ëœ a lot. Because, without these terms (and technologies) enterprise development wouldn't be this much simpler. Spring, the framework which became very popular because of it's capability to inject the dependencies to our Java objects in a very efficient manner. Spring's lightweight dependency injection container manages all the defined beans and their dependencies.



## So, what is this 'Ëœdependency injection' thing ?

**Dependency Injection** (or DI, in short) is nothing but the dependencies of your Java objects are managed by a **container** so that your object can concentrate on it's functionality rather than searching for it's dependencies. Here, it's the container's (for example Spring's container) responsibility to inject all the dependent objects that your class need. You just need to tell the container what you want and the container takes care of the rest.

Confusing, huh !? 

## A Ground-breaking(!) HelloWorld2 App:

Let's take a simple example - a Web2.0 hello world - 'ËœHelloWorld2'². You are writing a 'ËœHelloWorld2'² class which has the capability to tweet the message you are giving. From this, it is clear that your 'ËœHelloWorld2'² will need a TwitterService object to complete it's task. So, usually you will declare a TwitterService variable in your 'ËœHelloWorld2'² class and you will instantiate a new 'ËœTwitterService' object. The 'ËœHelloWorld2'² may look like this:

    class HelloWorld2
    {
    	TwitterService ts = new TwitterService();
    
    	public void sayHello(String name)
    	{
    		ts.tweet("Hello "   name);
    	}
    }
    

In the above, you are declaring and instantiating the TwitterService object in your HelloWorld2 code itself. In other words, *your code* is responsible for getting it's dependent objects, in this case the TwitterService object.

Let's see a different version of HelloWorld2.

## The 'ËœDependency Injected' version of 'ËœHelloWorld2'²:

Now, have a look at this code.

    class HelloWorld2
    {
    	TwitterService ts = null;
    
    	public void setTs(TwitterService ts){
    		this.ts = ts;
    	}
    
    	public void sayHello(String name)
    	{
    		ts.tweet("Hello "   name);
    	}
    }
    

What's new in this version?! We've removed the TwitterService object creation, instead created a new setter method setTs() (I know, it's a bad name!). But, where is our mission-critical TwitterService object is getting created? 

That's where the dependency Injection comes into play. The creation of objects will be *outsourced* to the container. Let's outsource this task to the Spring container using a Spring configuration file.

    
    ...
    	
    	...
    	
    		
    	
    ...
    
    

In the above configuration file, we are defining the TwitterService as a *Spring managed* bean and then, in the 'ËœhelloWorld' bean definition, we are telling the Spring container to *inject* 'ËœtwitterService' bean for the property 'Ëœts'. When the Spring container reads this XML file, it will create the 'ËœhelloWorld' bean and using the setter method for the variable 'Ëœts', it will inject the 'ËœtwitterService' into 'ËœhelloWorld' . This technique is called as ***setter method injection***(duh!).

Apart from this XML based configuration, Spring supports annotations based DI configuration also. I'll be explaining that in my next article.