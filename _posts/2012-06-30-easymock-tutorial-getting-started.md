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

In this post, I'm going to show you what EasyMock is and how you can use it for testing your java application. For this purpose, I'm going to create aÂ **simple PortfolioÂ **application and test it usingÂ **JUnit & EasyMock** libraries.

Before we begin, lets first understand the need behind using EasyMock. Lets say, you are building an Android mobile application for maintaining user's stock portfolios. Your application would use a stock market service to retrieve stock prices from a real server (such as NASDAQ).

When it comes to testing your code, you wouldn't want to hit the real stock market server for fetching the stock prices. Instead, you would like some dummy price values. So, you need to mock the stock market service that returns dummy values without hitting the real server.

**EasyMock** is exactly doing the same - helps you to mock interfaces. You can pre-define the behavior of your mock objects and then use this mock object in your code for testing. Because, you are only concerned about testingÂ **your logic**Â andÂ not the external services or objects. So, it makes sense mock the external services.

To make it clear, have a look at the below code excerpt (we'll see the complete code in a while):

{% highlight java %}
StockMarket marketMock = EasyMock.createMock(StockMarket.class);
EasyMock.expect(marketMock.getPrice("EBAY")).andReturn(42.00);
EasyMock.replay(marketMock);
{% endhighlight %}

In the first line, we ask the EasyMock to create a mock object for our StockMarket interface. And then in the second line, we define how this mock object should behave - i.e., when theÂ *getPrice()* method is called with the parameterÂ *'EBAY'Â*, the mock should returnÂ *42.00*. And then, we call theÂ *replay()* method, to make the mock object ready to use.

So, that pretty much set the context about the EasyMock and it's usage. Let's dive into ourÂ **PortfolioÂ **application.

You can download the complete source code [from Github][1].

## Portfolio application

 [1]: https://github.com/vraa/SimplePortfolio "Simple portfolio source code in GitHub"

Our Portfolio application is really simple. It has aÂ **StockÂ **class to represent a stock name and quantity and theÂ **PortfolioÂ **class to hold a list of stocks. ThisÂ PortfolioÂ class has a method to calculate the total value of the portfolio. Our class uses aÂ **StockMarketÂ **(an interface) object to retrieve the stock prices. While testing our code, we will mock thisÂ **StockMarketÂ **using EasyMock.

### Stock.java

A very simple Plain Old Java Object (POJO) to represent a single stock.

{% highlight java %}
package com.veerasundar.easymock;

public class Stock {

  private String name;
  private int quantity;

  public Stock(String name, int quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getQuantity() {
    return quantity;
  }

  public void setQuantity(int quantity) {
    this.quantity = quantity;
  }

}
{% endhighlight %}

### StockMarket.java

An interface to represent a stock market service. It has a method that returns the stock price of the given stock name.

{% highlight java %}
package com.veerasundar.easymock;

public interface StockMarket {
  public Double getPrice(String stockName);
}
{% endhighlight %}

### Portfolio.java

This object holds a list ofÂ **StockÂ **objects and a method to calculate the total value of the portfolio. It uses aÂ **StockMarketÂ **object to retrieve the stock prices. Since it is not a good practice to hard code the dependencies, we haven't initialized theÂ **stockMarketÂ **object. We'll inject it later using our test code.

{% highlight java %}
package com.veerasundar.easymock;

import java.util.ArrayList;
import java.util.List;

public class Portfolio {

  private String name;
  private StockMarket stockMarket;

  private List<Stock> stocks = new ArrayList<Stock>();

  /*
   * this method gets the market value for each stock, sums it up and returns
   * the total value of the portfolio.
   */
  public Double getTotalValue() {
    Double value = 0.0;
    for (Stock stock : this.stocks) {
      value += (stockMarket.getPrice(stock.getName()) * stock
          .getQuantity());
    }
    return value;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public List<Stock> getStocks() {
    return stocks;
  }

  public void setStocks(List<Stock> stocks) {
    this.stocks = stocks;
  }

  public void addStock(Stock stock) {
    stocks.add(stock);
  }

  public StockMarket getStockMarket() {
    return stockMarket;
  }

  public void setStockMarket(StockMarket stockMarket) {
    this.stockMarket = stockMarket;
  }
}
{% endhighlight %}

So, now we have coded the entire application. In this, we are going to test theÂ **Portfolio.getTotalValue()Â **method, because that's where our business logic is. 

## Testing Portfolio application using JUnit and EasyMock

If you haven't used JUnit before, then it is a good time to [Get started with JUnit][2].

### PortfolioTest.java

 [2]: http://veerasundar.com/blog/2009/06/getting-started-with-junit-4-java-testing-framework/ "Getting started with JUnit 4"

{% highlight java %}
package com.veerasundar.easymock.tests;

import junit.framework.TestCase;

import org.easymock.EasyMock;
import org.junit.Before;
import org.junit.Test;

import com.veerasundar.easymock.Portfolio;
import com.veerasundar.easymock.Stock;
import com.veerasundar.easymock.StockMarket;

public class PortfolioTest extends TestCase {

  private Portfolio portfolio;
  private StockMarket marketMock;

  @Before
  public void setUp() {
    portfolio = new Portfolio();
    portfolio.setName("Veera's portfolio.");
    marketMock = EasyMock.createMock(StockMarket.class);
    portfolio.setStockMarket(marketMock);
  }

  @Test
  public void testGetTotalValue() {

    /* = Setup our mock object with the expected values */
    EasyMock.expect(marketMock.getPrice("EBAY")).andReturn(42.00);
    EasyMock.replay(marketMock);

    /* = Now start testing our portfolio */
    Stock ebayStock = new Stock("EBAY", 2);
    portfolio.addStock(ebayStock);
    assertEquals(84.00, portfolio.getTotalValue());
  }

}
{% endhighlight %}

As you can see, duringÂ **setUp()** we are creating newÂ **Portfolio** object. Then we askÂ **EasyMockÂ **to create a mock object for theÂ **StockMarket** interface. Then we inject this mock object into our portfolio object usingÂ *portfolio.setStockMarket()* method.

In theÂ **@Test** method, we define how our mock object should behave when called, using the below code:

{% highlight java %}
EasyMock.expect(marketMock.getPrice("EBAY")).andReturn(42.00);
EasyMock.replay(marketMock);
{% endhighlight %}

So, here after our mock object'sÂ **getPrice** method**Â **would returnÂ *42.00* when called withÂ *EBAY*.

Then we are creating aÂ **ebayStock** with 2 quantities and add that to our portfolio. Since we setup the stock price of EBAY as 42.00, we know that the total value of our portfolio is 84.00 (i.e. 2 x 42.00). In the last line, we are asserting the same using the JUnitÂ **assertEquals()** method.

The above test should run successfully if we haven't made any mistakes in theÂ **getTotalValue()Â **code. Otherwise, the test would fail.

## Conclusion

So, that's how we use theÂ **EasyMock** library to mock the external services/objects and use them in our testing code. EasyMock can do much more than what I shown in this post. I'll probably try to cover some advanced usage scenarios in my next posts.