---
title: 'Java Constants &#8211; using Class, Interface, Static Imports'
author: Veera
layout: post
permalink: /2012/04/java-constants-using-class-interface-static-imports/
thesis_javascript_libs:
  - 'a:1:{s:6:"jquery";s:0:"";}'
categories:
  - Java
tags:
  - best-practice
  - code
  - constants
  - imports
  - interface
  - Java
  - pattern
  - static
  - static-imports
---
# Java Constants &#8211; using Class, Interface, Static Imports

Constants are the constant things in a project. I mean, it is safe to assume that any project would have some kind of constant values used across the code.

The common practice in Java is to declare them as public, static and final variables so that they can be easily referenced wherever they needed.

Here's a list of patterns that I have seen on using such constants.

## 1. Define a Constants class

In this approach, you define a class '˜Constants' and put all your constants inside this class. Then reference the constants as '˜Constants.CONST_NAME' wherever needed. Easy as it looks.

    public class Constants {
    	public static final String SITE_NAME="veerasundar.com";
    }

    class Hello{
    	public void someFun(){
    		System.out.print(Constants.SITE_NAME);
    	}
    }

But the con of this approach is that you need to prepend the class name '˜Constants' all the time. If you are using constants very frequently, then this will become little ineffective. We can do better.

## 2. Define a Constants interface and implement it

The second approach is that you define a Interface that contains all your constants and then implement this interface in the class where you want to use the constants. This way, you don't need to prefix '˜Constants', instead you can directly access the constant like CONSTANT_NAME.

    public interface Constants {
    	public static final String SITE_NAME="veerasundar.com";
    }

    class Hello implements Constants{
    	public void someFun(){
    		System.out.print(SITE_NAME);
    	}
    }

But this approach is generally considered as a bad practice because it pollutes the class's implementation hierarchy. You are forced to implement an interface without much semantic meaning. We can still do better than this.

## 3. Use Java static imports

Static imports are introduced in Java 5. Using static imports you can import static members/properties of a class so that you can directly access them without prefixing it's parent class's name. So, we can define a *Constants *class as shown in first approach above and the use static imports to use the constant properties directly.

    package com.test;
    public class Constants {
    	public static final String SITE_NAME = "veerasundar.com";
    }

    import static com.test.Constants.*;
    public class Hello {
    	public void someFun() {
    		System.out.print(SITE_NAME);
    	}
    }

So, we get the best of both worlds - we don't unnecessarily prefix *Constants *everywhere and we don't pollute class's API too. Win!

But this approach too has some bad press against it. If you use static imports very often, then your code become hard to read and understand. Especially when you statically import lot of methods. So, use it sparingly and wisely.

What do you think as the best of the above three approaches? Do you use any other approaches other than these? Feel free to comment!