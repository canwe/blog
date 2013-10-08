---
title: Finding the difference between two dates in Java
author: Veera
layout: post
permalink: /2011/04/finding-the-difference-between-two-dates-in-java/
categories:
  - Java
tags:
  - code
  - date
  - difference
  - How To
  - Java
---
# Finding the difference between two dates in Java

Let's say you have two Date objects *DateOne* and *DateTwo*. Now you want to find the difference between these two dates and show that in a human readable format; for example '*the difference is 2 hours and 30 minutes*'. How do you do it in Java?

The obvious answer is, get the milliseconds from these two dates and find the difference. And, then manually convert these milliseconds into hours, minutes, seconds etc.

But, wait a second. There's an easy way to do this using the[ TimeUnit][1] class. TimeUnit represents time durations at a given unit of granularity and provides utility methods to convert across units, and to perform timing and delay operations in these units.

 [1]: http://download.oracle.com/javase/6/docs/api/java/util/concurrent/TimeUnit.html

Have a look the below code which finds out the difference between two dates and returns them in the form of 'h* hours and m minutes'Â*.

    public String getTimeDiff(Date dateOne, Date dateTwo) {
            String diff = "";
            long timeDiff = Math.abs(dateOne.getTime() - dateTwo.getTime());
            diff = String.format("%d hour(s) %d min(s)", TimeUnit.MILLISECONDS.toHours(timeDiff),
                    TimeUnit.MILLISECONDS.toMinutes(timeDiff) - TimeUnit.HOURS.toMinutes(TimeUnit.MILLISECONDS.toHours(timeDiff)));
            return diff;
    }

That simple, isn't it?