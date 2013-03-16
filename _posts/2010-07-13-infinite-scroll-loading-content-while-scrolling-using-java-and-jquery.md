---
title: 'Infinite scroll : Loading content while scrolling, using Java and JQuery'
author: Veera
layout: post
permalink: /2010/07/infinite-scroll-loading-content-while-scrolling-using-java-and-jquery/
categories:
  - How To
  - Java
  - Web
tags:
  - code
  - css
  - howto
  - html
  - infinite
  - Java
  - jquery
  - scrolling
  - Web
---
# Infinite scroll : Loading content while scrolling, using Java and JQuery

Have you seen the infinite scrolling of content in some web pages? For example, in [DZone.com][1] when you scroll the page to the bottom, new links will be loaded automatically and it'll give you the illusion that the page scrolls infinitely. Another good example is that Bing's [Image Search][2].

 [1]: http://www.dzone.com/links/index.html "Dzone Links page"
 [2]: http://www.bing.com/images/search?q=iphone&go=&form=QBIR

The technique is not hard to implement. With the use of a single servlet and JSP, we can implement a basic functionality with infinite scroll. Before dive into code details, have a look at this demo to get a feel of it: [Infinite Scroll Demo][3]

 [3]: http://vraasandbox.appspot.com/infinitcontent.jsp "Demo for Infinite Scroll content in Java and JQuery"

To implement this, we need a servlet which will serve the dynamic content and a JSP file which will have the UI and act as a client to receive the content. Below are the code for these two files. I'm leaving other common stuffs (like web.xml entry etc) to you.

## Code for Servlet:

    package com.vraa.demo;
    
    import java.io.IOException;
    import java.io.PrintWriter;
    
    import javax.servlet.ServletException;
    import javax.servlet.http.HttpServlet;
    import javax.servlet.http.HttpServletRequest;
    import javax.servlet.http.HttpServletResponse;
    
    public class InfinitContentServlet extends HttpServlet {
    private static Integer counter = 1;
    
    protected void processRequest(HttpServletRequest request,
    HttpServletResponse response) throws ServletException, IOException {
    PrintWriter out = response.getWriter();
    try {
    String resp = "";
    for (int i = 1; i &lt;= 10; i  ) {
    resp  = "&lt;p&gt;&lt;span&gt;"
      counter  
      "&lt;/span&gt; This is the dynamic content served freshly from server&lt;/p&gt;";
    }
    out.write(resp);
    } finally {
    out.close();
    }
    }
    
    @Override
    protected void doGet(HttpServletRequest request,
    HttpServletResponse response) throws ServletException, IOException {
    processRequest(request, response);
    }
    
    @Override
    protected void doPost(HttpServletRequest request,
    HttpServletResponse response) throws ServletException, IOException {
    processRequest(request, response);
    }
    }

## Code for JSP file:

    
    
    
    
        
            
            Load content while scrolling - Infinite Scroll with Java and JQuery
            
            
                body{
                    font-family:Arial;
                    font-size:.93em;
                }
                #content-box{
                    background-color:#FAFAFA;
                    border:2px solid #888;
                    height:300px;
                    overflow:scroll;
                    padding:4px;
                    width:500px;
                }
                #content-box p{
                    border:1px solid #EEE;
                    background-color:#F0F0F0;
                    padding:3px;
                }
                #content-box p span{
                    color:#00F;
                    display:block;
                    font:bold 21px Arial;
                    float:left;
                    margin-right:10px;
                }
            
            
                $(document).ready(function(){
                    $contentLoadTriggered = false;
                    $("#content-box").scroll(function(){
                        if($("#content-box").scrollTop() >= ($("#content-wrapper").height() - $("#content-box").height()) && $contentLoadTriggered == false)
                        {
                            $contentLoadTriggered = true;
                            $.get("infinitContentServlet", function(data){
                                $("#content-wrapper").append(data);
                                $contentLoadTriggered = false;
                            });
                        }
    
                    });
                });
            
        
        
            Demo page: Infinite Scroll with Java and JQuery
            This page is a demo for loading new content while scrolling.
            
            	Credits: Veera Sundar | veerasundar.com | @vraa
            
            
                
                    1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare facilisis mollis. Etiam non sem massa, a gravida nunc. Mauris lectus augue, posuere at viverra sed, dignissim sed libero. 
                    2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare facilisis mollis. Etiam non sem massa, a gravida nunc. Mauris lectus augue, posuere at viverra sed, dignissim sed libero. 
                    3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare facilisis mollis. Etiam non sem massa, a gravida nunc. Mauris lectus augue, posuere at viverra sed, dignissim sed libero. 
                    4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare facilisis mollis. Etiam non sem massa, a gravida nunc. Mauris lectus augue, posuere at viverra sed, dignissim sed libero. 
                    5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare facilisis mollis. Etiam non sem massa, a gravida nunc. Mauris lectus augue, posuere at viverra sed, dignissim sed libero. 
                
            
        
    

## How it works?

The secret behind this is the *scrolltop* property. By checking this value we can determine whether the scrollbar has reached near to the bottom or not. If it reached, send an AJAX request to server to get more content and append it to the page. Look at the following two lines which does this:

    $contentLoadTriggered = false;
     $("#content-box").scroll(function(){
         if($("#content-box").scrollTop() >= ($("#content-wrapper").height() - $("#content-box").height()) && $contentLoadTriggered == false)
         {
             $contentLoadTriggered = true;
             $.get("infinitContentServlet", function(data){
                 $("#content-wrapper").append(data);
                 $contentLoadTriggered = false;
             });
         }
    
     });