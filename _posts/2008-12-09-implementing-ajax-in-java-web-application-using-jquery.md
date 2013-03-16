---
title: Implementing Ajax in Java web application using JQuery
author: Veera
layout: post
permalink: /2008/12/implementing-ajax-in-java-web-application-using-jquery/
ratings_users:
  - 0
ratings_score:
  - 0
ratings_average:
  - 0
views:
  - 1019
show_ad:
  - yes
dsq_thread_id:
  - 891103949
categories:
  - Java
  - Web
tags:
  - ajax
  - code
  - development
  - howto
  - Java
  - jquery
  - tips
  - tutorial
---
# Implementing Ajax in Java web application using JQuery

Implementing Ajax features in a Java web application is considerably easy if we are using JQuery JavaScript library. JQuery provides built-in methods that we can use to enable Ajax in our Java web application.

In this post, I am going to demonstrate the Jquery's Ajax capability using a small weather reporting web application. Before that, you can have a look at the source code by clicking on below link.

[Download Source Code][1]

 [1]: http://www.box.net/shared/f2oeb771qr "download"

## A Simple weather reporting application:

#### Lets build a simple Java web application. User will be entering the city name and application will return the weather report for the given city.

#### For the above requirements, a simple application design would contain a Java servlet to serve the weather report for the city passed as a parameter and a web page for the user to enter a city name and to see the weather report. All the communication between the web browser and Java servlet should happen through Ajax calls. Using JQuery's `post` Ajax function, we can asynchronously send data to server.

#### WeatherServlet.java

    package com.veerasundar.weather;
    
    import java.io.IOException;
    import java.io.PrintWriter;
    
    import javax.servlet.ServletException;
    import javax.servlet.http.HttpServlet;
    import javax.servlet.http.HttpServletRequest;
    import javax.servlet.http.HttpServletResponse;
    
    /**
     *
     * @author veerasundar.com/blog
     *
     */
    public class WeatherServlet extends HttpServlet {
    	private static final long serialVersionUID = 1L;
    
    	public WeatherServlet() {
    		super();
    	}
    
    	protected void doGet(HttpServletRequest request,
    			HttpServletResponse response) throws ServletException, IOException {
    	}
    
    	protected void doPost(HttpServletRequest request,
    			HttpServletResponse response) throws ServletException, IOException {
    
    		String city = request.getParameter("cityName");
    		String report = getWeather(city);
    		response.setContentType("text/plain");
    		PrintWriter out = response.getWriter();
    		out.println(""   report   "");
    		out.flush();
    		out.close();
    	}
    
    	private String getWeather(String city) {
    		String report;
    
    		if (city.toLowerCase().equals("trivandrum"))
    			report = "Currently it is not raining in Trivandrum. Average temperature is 20";
    		else if (city.toLowerCase().equals("chennai"))
    			report = "It's a rainy season in Chennai now. Better get a umbrella before going out.";
    		else if (city.toLowerCase().equals("bangalore"))
    			report = "It's mostly cloudy in Bangalore. Good weather for a cricket match.";
    		else
    			report = "The City you have entered is not present in our system. May be it has been destroyed "
    					  "in last World War or not yet built by the mankind";
    		return report;
    	}
    
    }

**  
As you see from the above code, the servlet WeatherServlet tries to read the city name from the request and it matches the city name against some pre-defined names and returns the weather report. In an production application the weather will be retrieved from a real time database. As this demo concentrate more on JQuey Ajax feature, I kept the example as simple as possible.  


#### Web.xml configuration for WeatherServlet

    
    
    	weather
    	
    		WeatherServlet
    		com.veerasundar.weather.WeatherServlet
    	
    	
    		WeatherServlet
    		/WeatherServlet
    	
    	
    		index.jsp
    	
    

Above code snippet defines our WeatherServlet and it's URL pattern so that when the URL pattern is requested by the client, our servlet will be called.

#### index.jsp:

    
    
    
    
    
    AJAX and Java - veerasundar.com
    
    
    	
    	Enter City :
    		
    		
    	
    	
    
    	
    	
    	$(document).ready(function() {
    		$("#getWeatherReport").click(function(){
    			$cityName = document.getElementById("cityName").value;
    			$.post("WeatherServlet", {cityName:$cityName}, function(data) {
    				alert(data);
    				$("#weatherReport").html(data);
    			});
    		});
    	});
    	
    
    

Above snippet construct the parameter cityName from the entered value and calls our servlet WeatherServlet by passing this cityName. Also a callback function defined which is called when the Ajax request is complete. In our case what it does is gets the value of the 'report' string in the server-returned xml data and populates this value to the 'weatherReport' HTML DIV section.

[Download Source Code][1]

So, what do you think? Have you used JQuery in any of your applications? Feel free to share your thoughts in the comments section.