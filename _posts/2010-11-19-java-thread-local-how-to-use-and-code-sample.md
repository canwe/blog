---
title: 'Java Thread Local &#8211; How to use and code sample'
author: Veera
layout: post
permalink: /2010/11/java-thread-local-how-to-use-and-code-sample/
categories:
  - How To
  - Java
tags:
  - code
  - context
  - howto
  - Java
  - thread
  - threading
  - threadlocal
---
# Java Thread Local &#8211; How to use and code sample

Thread Local is an interesting and useful concept, yet most of the Java developers are not aware of how to use that. In this post, I'll explain what is Thread Local and when to use it, with an example code.

Since it'll be little tough to understand this concept at first, I'll keep the explanation as simple as possible (corollary: you shouldn't use this code **as it is** in a production environment. Grasp the concept and improve upon it!)

Let's begin.

## What is Thread Local?

Thread Local can be considered as a scope of access, like a *request scope *or *session scope*. It's a *thread scope.* You can set any object in Thread Local and this object will be *global* and *local* to the specific thread which is accessing this object. Global **and **local!!? Let me explain:

*   Values stored in Thread Local are *global *to the thread, meaning that they can be accessed from anywhere inside that thread. If a thread calls methods from several classes, then all the methods can see the Thread Local variable set by other methods (because they are executing in same thread). The value need not be passed explicitly. It's like how you use global variables.
*   Values stored in Thread Local are *local* to the thread, meaning that each thread will have it's own Thread Local variable. One thread can not access/modify other thread's Thread Local variables.

Well, that's the concept of Thread Local. I hope you understood it (if not, please leave a comment).

## When to use Thread Local?

We saw what is thread local in the above section. Now let's talk about the use cases. i.e. when you'll be needing something like Thread Local.

I can point out one use case where I used thread local. Consider you have a Servlet which calls some business methods. You have a requirement to generate a unique transaction id for each and every request this servlet process and you need to pass this transaction id to the business methods, for logging purpose. One solution would be passing this transaction id as a parameter to all the business methods. But this is not a good solution as the code is redundant and unnecessary.

To solve that, you can use Thread Local. You can generate a transaction id (either in servlet or better in a filter) and set it in the Thread Local. After this, what ever the business method, that this servlet calls, can access the transaction id from the thread local.

This servlet might be servicing more that one request at a time. Since each request is processed in separate thread, the transaction id will be unique to each thread (local) and will be accessible from all over the thread's execution (global).

Got it!?

## How to use Thread Local?

Java provides an [ThreadLocal][1] object using which you can set/get *thread scoped *variables. Below is a code example demonstrating what I'd explained above.

 [1]: http://download.oracle.com/javase/6/docs/api/java/lang/ThreadLocal.html "Class ThreadLocal"

Lets first have the **Context.java** file which will hold the transactionId field.

    package com.veerasundar;
    
    public class Context {
    
    	private String transactionId = null;
    
            /* getters and setters here */
    
    }

Now create the **MyThreadLocal.java** file which will act as a container to hold our context object.

    package com.veerasundar;
    
    /**
     * this class acts as a container to our thread local variables.
     * @author vsundar
     *
     */
    public class MyThreadLocal {
    
    	public static final ThreadLocal userThreadLocal = new ThreadLocal();
    
    	public static void set(Context user) {
    		userThreadLocal.set(user);
    	}
    
    	public static void unset() {
    		userThreadLocal.remove();
    	}
    
    	public static Context get() {
    		return userThreadLocal.get();
    	}
    }

In the above code, you are creating a ThreadLocal object as a static field which can be used by rest of the code to set/get thread local variables.

Let's create our main class file which will generate and set the transaction ID in thread local and then call the business method.

    package com.veerasundar;
    
    public class ThreadLocalDemo extends Thread {
    
    	public static void main(String args[]) {
    
    		Thread threadOne = new ThreadLocalDemo();
    		threadOne.start();
    
    		Thread threadTwo = new ThreadLocalDemo();
    		threadTwo.start();
    	}
    
    	@Override
    	public void run() {
    		// sample code to simulate transaction id
    		Context context = new Context();
    		context.setTransactionId(getName());
    
    		// set the context object in thread local to access it somewhere else
    		MyThreadLocal.set(context);
    
    		/* note that we are not explicitly passing the transaction id */
    		new BusinessService().businessMethod();
    		MyThreadLocal.unset();
    
    	}
    }

Finally, here's the code for the **BusinessService.java** which will read from thread local and use the value.

    package com.veerasundar;
    
    public class BusinessService {
    
    	public void businessMethod() {
    		// get the context from thread local
    		Context context = MyThreadLocal.get();
    		System.out.println(context.getTransactionId());
    	}
    }

When you run the ThreadLocalDemo file, you'll get the below output:

    Thread-0
    Thread-1

As you might see, even though we are not explicitly passing the transaction id, the value can be accessed from the business method and printed on the console. Adding to it, the transaction ID differs for each thread (0 and 1).

Well, that's it. I hope I'd explained it in a simple possible way. Please let me know what do you think about this article in comments. Do leave a comment if you want to add anything to this topic.