---
title: 'Spring AOP Example: Profiling method execution time tutorial'
author: Veera
layout: post
permalink: /2010/01/spring-aop-example-profiling-method-execution-time-tutorial/
thesis_description:
  - >
    This article explains about the Spring Aspect Oriented programming by using an
    example of profiling method execution time.
thesis_keywords:
  - java, spring, aop, aspect, performance, debug, profile, analysis, code, example
dsq_thread_id:
  - 891426224
categories:
  - How To
  - Java
tags:
  - advice
  - aop
  - aspect
  - aspectj
  - code
  - How To
  - Java
  - profiling
  - spring
  - tutorial
---
# Spring AOP Example: Profiling method execution time tutorial

I have already written about the *Spring Aspect Oriented Programming (AOP)* with the use of simple logging example. But, somehow I felt that the example code was little confusing for the newcomers. So, I decided to write a new Spring AOP example code that explains how to use Spring AOP for profiling method execution time.

## Using Spring AOP to profile method execution time:

The example I chose is very simple: our application has a business class and a business method. We are going to profile how much time does it take to execute the business method. We will use Spring AOP for profiling the execution time. Since, profiling is a best example for *cross cutting concern*, it's a good decision to use Spring AOP for implementing it. I'll explain these in step by step. Meanwhile, you can [download the source code][1](excluding dependent JAR file, for which you can see the download links below).

 [1]: http://www.box.net/shared/9nygu7t80t "Download source code for Spring AOP example"

And, here's the library versions I'm using: [Spring 2.5.4][2], JDK 1.6, [Commons-logging-1.0.4][3], [aspectjrt-1.2][4], [aspectjweaver-1.5.3][5].

 [2]: http://s3.amazonaws.com/dist.springframework.org/release/SPR/spring-framework-2.5.4.zip "Download Spring 2.5.4 JAR"
 [3]: http://mirrors.ibiblio.org/pub/mirrors/maven/commons-logging/jars/commons-logging-1.0.4.jar "Download commons logging"
 [4]: http://mirrors.ibiblio.org/pub/mirrors/maven/aspectj/jars/aspectjrt-1.2.jar
 [5]: http://mirrors.ibiblio.org/pub/mirrors/maven/aspectj/jars/aspectjweaver-1.5.3.jar

## 1. Setting up the project structure:

Launch your preferred IDE (I use Eclipse) and *Create New Java Project*. And then create the file structure as shown below (off course, no need to follow the package naming convention.

![Spring AOP - Project Structure][7]

 [7]: http://veerasundar.com/img/2010/01/spring-aop-project-structure.png "spring-aop-project-structure"

You need to download all the JARs that are in *Referenced Libraries* and add them to the project's class path. You can find these JARs here: [Spring][8], [Commons-logging][9], [aspectjrt][10], [aspectjweaver][11]. Also, please note that the file **Business.java** is an Interface. Other than this, all other java files are plain Classes.

 [8]: http://s3.amazonaws.com/dist.springframework.org/release/SPR/spring-framework-2.5.4.zip "Download Spring"
 [9]: http://mirrors.ibiblio.org/pub/mirrors/maven/commons-logging/jars/commons-logging-1.0.4.jar "Download Commons-logging"
 [10]: http://mirrors.ibiblio.org/pub/mirrors/maven/aspectj/jars/aspectjrt-1.2.jar "Download AspectJrt"
 [11]: http://mirrors.ibiblio.org/pub/mirrors/maven/aspectj/jars/aspectjweaver-1.5.3.jar "download Aspectjweaver"

## 2. Writing our Business Logic:

We will first write our business logic and then we will add Spring AOP to profile our business methods. Open *Business.java* interface and copy the below code into it.

    package com.veerasundar.spring.aop;
    
    public interface Business {
            void doSomeOperation();
    }

Now, open the *BusinessImpl.java* and copy the below code into it.

    package com.veerasundar.spring.aop;
    
    public class BusinessImpl implements Business {
    
            public void doSomeOperation() {
                    System.out.println("I do what I do best, i.e sleep.");
                    try {
                            Thread.sleep(2000);
                    } catch (InterruptedException e) {
                            System.out.println("How dare you to wake me up?");
                    }
                    System.out.println("Done with sleeping.");
            }
    
    }

I guess this code is self explanatory. Our business method just sleeps for 2 seconds (good business, isn't it!?) and then write some text on the console.

## 3. Writing a Spring Aspect to profile business method:

Lets write a Aspect which will profile our business method. I'm gonna use **@Around** advice (Lost in the jargons? [Spring AOP basics][12]). Open the *BusinessProfiler.java* file and copy the below code into it.

 [12]: http://static.springsource.org/spring/docs/2.5.4/reference/aop.html#aop-introduction-defn "Spring AOP basics"

    package com.veerasundar.spring.aop;
    
    import org.aspectj.lang.ProceedingJoinPoint;
    import org.aspectj.lang.annotation.Around;
    import org.aspectj.lang.annotation.Aspect;
    import org.aspectj.lang.annotation.Pointcut;
    
    @Aspect
    public class BusinessProfiler {
    
            @Pointcut("execution(* com.veerasundar.spring.aop.*.*(..))")
            public void businessMethods() { }
    
            @Around("businessMethods()")
            public Object profile(ProceedingJoinPoint pjp) throws Throwable {
                    long start = System.currentTimeMillis();
                    System.out.println("Going to call the method.");
                    Object output = pjp.proceed();
                    System.out.println("Method execution completed.");
                    long elapsedTime = System.currentTimeMillis() - start;
                    System.out.println("Method execution time: " + elapsedTime + " milliseconds.");
                    return output;
            }
    
    }

Here's what this code does:

1.  Using *@AspectJ* annotation, we have declared that this class is an Aspect.
2.  Using *@Pointcut* annotation, we have defined a pointcut that will match the execution of all public method inside com.veerasundar.spring.aop package**.** [[read more about pointcut][13]]
3.  Using *@Around* annotation, we have defined a Around advice which will be invoked *before* and *after* our business method. i.e. @Around advice will wrap our business method. As you can see in the above code, *pjp.proceed()***.** This is when our business method gets called from @Around advice.

 [13]: http://static.springsource.org/spring/docs/2.5.4/reference/aop.html#aop-pointcuts "Spring Aspect Oriented Programming - Pointcut examples"

## 4. Configuring Spring AOP and @AspectJ support:

Open the *applicationContext.xml* file and copy the below code into it.

    
    
    
            
            
    
            
            
    

Here's what we are doing in the above XML file:

1.  We have added the [required AOP schemas][14] on the top of the XML file.
2.  Using , we've enabled the @AspectJ support to our application.
3.  And then we defined two normal Spring beans - one for our Business class and the other for Business Profiler (i.e. our aspect).

 [14]: http://static.springsource.org/spring/docs/2.5.4/reference/xsd-config.html#xsd-config-body-schemas-aop "XML Schemas required for Spring AOP support"

That's it. With all the above code is done, we have successfully added Spring AOP support to our project and configured it. In the next step, lets test our code.

## 5. Testing the Spring AOP profiler:

Open the file *SpringAOPDemo.java* and copy the below lines into it.

    package com.veerasundar.spring.aop;
    
    import org.springframework.context.ApplicationContext;
    import org.springframework.context.support.ClassPathXmlApplicationContext;
    
    public class SpringAOPDemo {
    
            /**
             * @param args
             */
            public static void main(String[] args) {
                    ApplicationContext context = new ClassPathXmlApplicationContext(
                                    "applicationContext.xml");
                    Business bc = (Business) context.getBean("myBusinessClass");
                    bc.doSomeOperation();
            }
    
    }

In the above code we are loading our Business bean from Spring Context and then calling our business method. If you run this class, it will produce the following output on the console.

    Going to call the method.
    I do what I do best, i.e sleep.
    Done with sleeping.
    Method execution completed.
    Method execution time: 2000 milliseconds.

 

I hope this tutorial helps you to understand the basics of Spring Aspect Oriented programming. If you have any questions regarding the above example, feel free to leave a comment**.**