---
title: 'Getting started with JUnit 4 &#8211; Java testing framework'
author: Veera
layout: post
permalink: /2009/06/getting-started-with-junit-4-java-testing-framework/
dsq_thread_id:
  - 891104470
categories:
  - How To
  - Java
tags:
  - How To
  - Java
  - junit
  - junit4
  - test
  - testcase
  - testing
  - unit-testing
---
# Getting started with JUnit 4 &#8211; Java testing framework'

One of the important skill that every Java developer must possess is the **application testing**. A developer may follow software standards, religiously use all the available design patterns or do hundreds of code reviews on his code, but testing is the one which confirms his code quality and reliability. This is proved by the growing popularity of **Test Driven Development (TDD)** methodology, where the developer write tests first and the build the application to pass those tests. The objective of this post is not to explain TDD or the bigger things. Instead I'll focus on the basic things first. This is a very basic introduction to JUnit, so if you already knew about JUnit, you can safely skip reading this blog post.



All of us, the java developers, would have used a well-proven testing method, when we started learning Java. It's called as the **'˜Syso testing'**, which is nothing but *System.out.println()* . We usually print the variable values in the console and check them manually to make sure that the function is doing what it has to do. For small projects, this approach is quick and useful. But, for the medium/big sized projects, using '˜Syso testing' isn't that effective. Even for small projects, using Syso testing will turn ineffective as the development continues.

In order to test the java applications effectivley, we can use **JUnit. framework** Junit is an open source, Java testing framework that helps us to write and run tests for our application. Using JUnit, we can setup your testing objects, write the test methods for our objects, run those test methods and assert the testing outcomes for expected results. Since running the test methods can be automated (either by using Ant/IDEs built-in JUnit support), considerable amount of time can be saved during the testing phase.

## Basic steps needed for writing a JUnit test case:

1.  First, we need to write the Java class (duh!). Let's say we have the below *PayrollCalculator* java class, which I'm going to use as an example.  
        package com.veerasundar.budgeter;
        
        public class PayrollCalculator {
        
        	public double calculate(double rate, int days) {
        		return rate * days;
        	}
        
        }
        

2.  Then, we need to create a new Test class with testing methods in it. We can create this test class in the same package as of *PayrollCalculator.* But for better organization, it is recommended to have the test classes in a different folders. So, create a new *source folder* and put the below test class in it.  
        package com.veerasundar.budgeter.junit;
        
        import static org.junit.Assert.assertEquals;
        
        import org.junit.Test;
        
        import com.veerasundar.budgeter.PayrollCalculator;
        
        public class PayrollTesCase {
        	
        	@Test
        	public void testCalculate() {
        		PayrollCalculator payCalc = new PayrollCalculator();
        		assertEquals(300 * 30, payCalc.calculate(300, 30));
        		
        		System.out.println("I'm the test method");
        	}
        	
        
        }
        
        

3.  In Junit 4.x, all the testing methods are identified with **@Test** annotation.so, the method *testCalculate* will be identified as test method and will be run by the Junit runner.
4.  If you are using an IDE such as Eclipse, the *PayrollTestCase* class can be executed by right clicking on the test class and selecting **Run as JUnit test case.** This will invoke the test environment methods, if any (explained later in this article) and then invoke all the methods that are annotated with @Test annotation. If the assert statement that we put inside those test methods are success, then JUnit will run successfully. Otherwise, the errors will be reported in the **JUnit view** in Eclipse window.



## Understanding how an JUnit test method is executed

When you run a JUnit test case, you can optionally specify some other methods also to be executed along with your test method. Bascially this *additional* methods are used to setup your testing environment, for example getting a database connection, and for releasing the resources used during the testing such as closing the database connection. These methods are called as *fixtures* and can be used to initialize the objects that are used by more than one test methods, thus reducing the amount of code.

In JUnit 4.x all the methods are annotated. So, the flow of control in JUnit methods can be described as below:

> @BeforeClass -> @Before -> @Test -> @After -> @AfterClass

You can annotate any method with the above mentioned annotation. See the below coding example to know how these annotated methods are executed.

    package com.veerasundar.budgeter.junit;
    
    import static org.junit.Assert.assertEquals;
    
    import org.junit.After;
    import org.junit.AfterClass;
    import org.junit.Before;
    import org.junit.BeforeClass;
    import org.junit.Test;
    
    import com.veerasundar.budgeter.PayrollCalculator;
    
    public class PayrollTesCase {
    	
    	@BeforeClass
    	public static void runsBeforeTheTestSuite(){
    		System.out.println("I run before any test method is executed");	
    	}
    
    	
    	@Before
    	public void runOnceBeforeEachTestMethod(){
    		System.out.println("I run once before each test method is executed");
    	}
    	
    
    	@Test
    	public void testCalculate() {
    		PayrollCalculator payCalc = new PayrollCalculator();
    		assertEquals(300 * 30, payCalc.calculate(300, 30));
    		
    		System.out.println("I'm the test method");
    	}
    	
    	@After
    	public void runOnceAfterEachTestMethod(){
    		System.out.println("I run once after each test method is executed");
    	}
    	
    	@AfterClass
    	public static void runsAfterTheTestSuite(){
    		System.out.println("I run after all the test methods are executed");	
    	}
    }
    
    

Also please not that the methods annotated with @BeforeClass and @AfterClass should be *static methods* since they will be called before any test method is executed.

I hope this post explains the basics of JUnit 4 clearly. In my next post, I'll be sharing some more tips on JUnit testing.