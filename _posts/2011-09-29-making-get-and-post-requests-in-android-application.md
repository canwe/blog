---
title: Making GET and POST requests in android application
author: Veera
layout: post
permalink: /2011/09/making-get-and-post-requests-in-android-application/
dsq_thread_id:
  - 891266650
categories:
  - How To
  - Java
tags:
  - android
  - code
  - get
  - howto
  - http
  - Java
  - post
  - tutorial
  - Web
---
# Making GET and POST requests in android application

It is often a requirement that you need to connect to a server through [HTTP][1] from your android application. When you use servlets/html, making such requests are a [no-brainer][2]. But, in Android it needs some searching before implementing such functions.

 [1]: http://veerasundar.com/blog/2009/12/hosting-java-applications-in-the-web/ "Hosting Java applications in the web"
 [2]: http://veerasundar.com/blog/2008/12/implementing-ajax-in-java-web-application-using-jquery/ "Implementing Ajax in Java web application using JQuery"

Here's some sample code snippets that explains how you can make GET and POST requests from your android application.

## Enable Internet permission for your android application:

Before making any use of internet in your android application, you should enable the internet permission for your application. To do this, open the *AndroidManifest.xml *file and then add the below line:

    

## HTTP GET request in Android application:

    public static String getHttpResponse(URI uri) {
    	Log.d(APP_TAG, "Going to make a get request");
    	StringBuilder response = new StringBuilder();
    	try {
    		HttpGet get = new HttpGet();
    		get.setURI(uri);
    		DefaultHttpClient httpClient = new DefaultHttpClient();
    		HttpResponse httpResponse = httpClient.execute(get);
    		if (httpResponse.getStatusLine().getStatusCode() == 200) {
    			Log.d("demo", "HTTP Get succeeded");
    
    			HttpEntity messageEntity = httpResponse.getEntity();
    			InputStream is = messageEntity.getContent();
    			BufferedReader br = new BufferedReader(new InputStreamReader(is));
    			String line;
    			while ((line = br.readLine()) != null) {
    				response.append(line);
    			}
    		}
    	} catch (Exception e) {
    		Log.e("demo", e.getMessage());
    	}
    	Log.d("demo", "Done with HTTP getting");
    	return response.toString();
    }

## HTTP POST request in Android application:

A POST request is slightly (well, vastly) different from a GET request (I have seen most developers use there requests interchangeably!). In a POST, we often send some parameters to change state of the objects in server.

In Android too, we have some mechanisms to send HTTP parameters while sending a POST request, which is shown in below code snippet.

    public static String postHttpResponse(URI uri) {
    	Log.d(APP_TAG, "Going to make a post request");
    	StringBuilder response = new StringBuilder();
    	try {
    		HttpPost post = new HttpPost();
    		post.setURI(uri);
    		List params = new ArrayList();
    		params.add(new BasicNameValuePair("paramName", "paramValue"));
    		post.setEntity(new UrlEncodedFormEntity(params));
    		DefaultHttpClient httpClient = new DefaultHttpClient();
    		HttpResponse httpResponse = httpClient.execute(post);
    		if (httpResponse.getStatusLine().getStatusCode() == 200) {
    			Log.d(APP_TAG, "HTTP POST succeeded");
    			HttpEntity messageEntity = httpResponse.getEntity();
    			InputStream is = messageEntity.getContent();
    			BufferedReader br = new BufferedReader(new InputStreamReader(is));
    			String line;
    			while ((line = br.readLine()) != null) {
    				response.append(line);
    			}
    		} else {
    			Log.e(APP_TAG, "HTTP POST status code is not 200");
    		}
    	} catch (Exception e) {
    		Log.e(APP_TAG, e.getMessage());
    	}
    	Log.d(APP_TAG, "Done with HTTP posting");
    	return response.toString();
    }