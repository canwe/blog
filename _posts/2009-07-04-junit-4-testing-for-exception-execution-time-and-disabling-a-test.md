---
title: 'JUnit 4 &#8211; testing for exception, execution time and disabling a test'
author: Veera
layout: post
permalink: /2009/07/junit-4-testing-for-exception-execution-time-and-disabling-a-test/
dsq_thread_id:
  - 891103894
categories:
  - How To
  - Java
tags:
  - Java
  - junit
  - junit4
  - test
  - test-case
  - testing
---
# JUnit 4 &#8211; testing for exception, execution time and disabling a test

In my last post about [Getting Started with JUnit 4][1], I talked about the basic concepts of JUnit testing framework and how to write a test case using JUnit 4. In this post, I'll write about some tips and strategies for using JUnit effectively. We will start with JUnit annotation @Ignore.

 [1]: http://veerasundar.com/blog/2009/06/getting-started-with-junit-4-java-testing-framework/ "Getting started with JUnit 4 - In order to test the java applications effectivley, we can use JUnit. framework Junit is an open source, Java testing framework that helps us to write and run tests for our application. Using JUnit, we can setup your testing objects, write the test methods for our objects, run those test methods and assert the testing outcomes for expected results."

## Temporarily disabling a JUnit test:

In JUnit 4, it is possible to temperorily disable a test using the annotation ***@Ignore***. This technique is very useful in scenarios where you are not done with that particular test case, but still want to run the other tests that are present in that test suite/class. The test methods which are annotated with both *@Test* and *@Ignore* will be ignored by the test runner. See the example below for a clear understanding.

    @Test
    public void testSomeMethod(){
            System.out.println("T'll be called");
    }
    
    @Ignore
    @Test
    public void testSomeOtherMethod(){
            System.out.println("T'll be ignored");
    }
    

## Testing for a specific Exception in JUnit testing method:

Suppose you want to check for a specific exception thrown by your testing method, you can use the ***expected*** option of *@Test* annotation. You can mention the Exception type that you expect the testing method to throw in the 'Ëœexpected' option. If the method throws the exception then test is considered as passed, otherwise the test will be considered as failed.

    @Test(expected=IllegalArgumentException.class)
    public void testSomeMethod(){
       myObj.someMethod();
    }
    

## Testing for execution time of your method:

If you want to check if your testing method takes too long to execute, you can do that by mentioning your expected execution time using ***timeout*** option of @Test annotation. If your testing method takes longer than the time you mentioned, then the test will be considred as *failed.* The time is measured in *milliseconds.* Below is a code snippet for this.

    @Test(timeout=2000)
    public void testSomeMethod(){
       myObj.someMethod();
    }
    

That's for now. I hope that the above tips will help you t write effective JUnit tests. Feel free to share any other tips on JUnit. I'll happy to hear from you.