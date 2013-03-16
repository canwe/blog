---
title: 'Struts 2 &#8211; Hello World Tutorial'
author: Veera
layout: post
permalink: /2008/11/create-struts-2-hello-world-application/
show_ad:
  - yes
views:
  - 4641
ratings_users:
  - 0
ratings_score:
  - 0
ratings_average:
  - 0
dsq_thread_id:
  - 891104116
categories:
  - How To
  - Java
tags:
  - code
  - Java
  - struts
  - struts2
  - tutorial
---
# Struts 2 &#8211; Hello World Tutorial

Recently I've started learning the Struts 2 framework. Though I've been using Struts 1.3 for quite some time, understanding Struts 2 was little tricky as the '˜Hello World sample application' provided by Struts 2 site is little confusing. So, I was searching for a simple '˜Hello world example for Struts 2'² and after going through many different sites, finally I was able to run my first Struts 2 application. Here are the steps that I did to start with Struts 2. I am using Eclipse IDE and all the steps explained below are in referring to Eclispe 3 IDE.

## Struts 2 Hello World Application - Getting started with Struts 2

1.  Create **New : Project : Dynamic Web Project** and give a name to your project and the location to save your project. For this example, I gave **HelloWorld** as my project name.
2.  Second step will be including JAR files required by Struts 2 framework to our project's **WEB-INF/lib** folder. You can either download below JARs separately or simple copy them from the **lib** folder of struts2-blank-application provided by Struts 2 website. Note that the version numbers in the JAR files are the latest ones when this article written. You may use the latest JARs if they are available. 
    *   commons-logging-1.0.4.jar
    *   freemarker-2.3.8.jar
    *   ognl-2.6.11.jar
    *   struts2-core-2.0.11.jar
    *   xwork-2.0.4.jar
3.  Next step will be configuring struts 2 filter in **web.xml** file. Have a look at the below sample configuration. 
        
        
        	Struts 2 : Hello World
        	
        		struts2
        		org.apache.struts2.dispatcher.FilterDispatcher
        	 <
        	filter-mapping> struts2
        		/*
        	
        

4.  Now we will create a struts action class HelloWorld.java. To do this, create a new package **tutorial** under the project's source folder and inside the tutorial package, create a new class file and name it **HelloWorld.java**. Below is the source code for this class file. 
        package tutorial;
        
        import com.opensymphony.xwork2.ActionSupport;
        
        public class HelloWorld extends ActionSupport {
        
        	private static final long serialVersionUID = 1L;
        
        	private String message;
        
        	public String execute()
        	{
        		setMessage("Hi there! This is a warm hello from Struts 2");
        		return SUCCESS;
        	}
        
        	public String getMessage() {
        		return message;
        	}
        
        	public void setMessage(String message) {
        		this.message = message;
        	}
        
        }

5.  Notice that above class extends `ActionSupport` and it implements the `execute()` method. As per Struts 2, any class which does these two things are considered as Struts action classes.
6.  We have our action class is ready. Now it's the time to create the presentation page, i.e JSP. Create a new JSP file **HelloWorld.jsp** inside the **WebContent** folder and type in below code in this JSP file. 
        
        
        
        	
        		Struts 2 - Hello World tutorial
        	 
        
        	
        	
        	If you can see above message, Congrats! You have successfully created your first Struts 2 application.
        	
        

7.  Now we will create the very important **struts.xml** file which glues our action class with the presentation JSP file. Since Struts 2 requires struts.xml to be present in classes folder, we will create stuts.xml file inside the **source** folder, so that when building the WAR file, struts.xml will be put in classes folder. Below is the code for struts.xml file. 
        
        
        
        	
        	
        	
        		
        			/HelloWorld.jsp
        		
        	
        