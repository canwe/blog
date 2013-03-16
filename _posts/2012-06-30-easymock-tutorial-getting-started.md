---
title: 'EasyMock tutorial &#8211; Getting Started'
author: Veera
layout: post
permalink: /2012/06/easymock-tutorial-getting-started/
thesis_javascript_libs:
  - 'a:1:{s:6:"jquery";s:0:"";}'
categories:
  - Java
tags:
  - code
  - easymock
  - gist
  - Java
  - junit
  - mock
  - tdd
  - test
  - testing
---
# EasyMock tutorial &#8211; Getting Started

In this post, I'm going to show you what EasyMock is and how you can use it for testing your java application. For this purpose, I'm going to create a **simple Portfolio **application and test it using **JUnit & EasyMock **libraries.

Before we begin, lets first understand the need behind using EasyMock. Lets say, you are building an Android mobile application for maintaining user's stock portfolios. Your application would use a stock market service to retrieve stock prices from a real server (such as NASDAQ).

When it comes to testing your code, you wouldn't want to hit the real stock market server for fetching the stock prices. Instead, you would like some dummy price values. So, you need to mock the stock market service that returns dummy values without hitting the real server.

**EasyMock **is exactly doing the same - helps you to mock interfaces. You can pre-define the behavior of your mock objects and then use this mock object in your code for testing. Because, you are only concerned about testing ********your logic***** ***and******* ***not the external services or objects. So, it makes sense mock the external services.

To make it clear, have a look at the below code excerpt (we'll see the complete code in a while):

    StockMarket marketMock = EasyMock.createMock(StockMarket.class);
    EasyMock.expect(marketMock.getPrice("EBAY")).andReturn(42.00);
    EasyMock.replay(marketMock);

In the first line, we ask the EasyMock to create a mock object for our StockMarket interface. And then in the second line, we define how this mock object should behave - i.e., when the *getPrice() *method is called with the parameter *'EBAY'*, the mock should return *42.00*. And then, we call the *replay() *method, to make the mock object ready to use.

So, that pretty much set the context about the EasyMock and it's usage. Let's dive into our **Portfolio **application.

You can download the complete source code [from Github][1].

## Portfolio application

 [1]: https://github.com/vraa/SimplePortfolio "Simple portfolio source code in GitHub"

Our Portfolio application is really simple. It has a **Stock **class to represent a stock name and quantity and the **Portfolio **class to hold a list of stocks. This Portfolio class has a method to calculate the total value of the portfolio. Our class uses a **StockMarket **(an interface) object to retrieve the stock prices. While testing our code, we will mock this **StockMarket **using EasyMock.

### Stock.java

A very simple Plain Old Java Object (POJO) to represent a single stock.

[gist id="3024613"]

### StockMarket.java

An interface to represent a stock market service. It has a method that returns the stock price of the given stock name.

[gist id="3024634"]

### Portfolio.java

This object holds a list of **Stock **objects and a method to calculate the total value of the portfolio. It uses a **StockMarket **object to retrieve the stock prices. Since it is not a good practice to hard code the dependencies, we haven't initialized the **stockMarket **object. We'll inject it later using our test code.

[gist id="3024645"]

So, now we have coded the entire application. In this, we are going to test the **Portfolio.getTotalValue() **method, because that's where our business logic is. 

## Testing Portfolio application using JUnit and EasyMock

If you haven't used JUnit before, then it is a good time to [Get started with JUnit][2].

### PortfolioTest.java

 [2]: http://veerasundar.com/blog/2009/06/getting-started-with-junit-4-java-testing-framework/ "Getting started with JUnit 4"

[gist id="3024667"]

As you can see, during **setUp() **we are creating new **Portfolio **object. Then we ask **EasyMock **to create a mock object for the **StockMarket **interface. Then we inject this mock object into our portfolio object using *portfolio.setStockMarket() *method.

In the **@Test **method, we define how our mock object should behave when called, using the below code:

    EasyMock.expect(marketMock.getPrice("EBAY")).andReturn(42.00);
    EasyMock.replay(marketMock);

So, here after our mock object's **getPrice** method** **would return *42.00 *when called with *EBAY*.

Then we are creating a **ebayStock **with 2 quantities and add that to our portfolio. Since we setup the stock price of EBAY as 42.00, we know that the total value of our portfolio is 84.00 (i.e. 2 x 42.00). In the last line, we are asserting the same using the JUnit **assertEquals() **method.

The above test should run successfully if we haven't made any mistakes in the **getTotalValue() **code. Otherwise, the test would fail.

## Conclusion

So, that's how we use the **EasyMock **library to mock the external services/objects and use them in our testing code. EasyMock can do much more than what I shown in this post. I'll probably try to cover some advanced usage scenarios in my next posts.