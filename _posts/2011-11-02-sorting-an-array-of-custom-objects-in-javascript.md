---
title: Sorting an array of custom objects in JavaScript
author: Veera
layout: post
permalink: /2011/11/sorting-an-array-of-custom-objects-in-javascript/
categories:
  - How To
  - Web
tags:
  - array
  - code
  - howto
  - javascript
  - object
  - sort
  - Web
---
# Sorting an array of custom objects in JavaScript

Currently I'm rewriting my [Timelinr][1] application entirely using JavaScript, thus replacing PHP which is now generating the timeline. In my code, Â I have an *Event *object which looks like this:

 [1]: http://veerasundar.com/timelinr/ "Timeline - create timeline online"

    function Event(d1, d2, name) {
    	this.start = d1;
    	this.end = d2;
    	this.name = name;
    }

When the user adds an event to the timeline, I create a new event object and push it to an array. But it is not guaranteed that the user will add events in any chronological order. So, when the array is modified, I should make sure that the list is sorted, ordered by event start date.

JavaScript array provides an inbuilt *sort()*Â method. But the default functionality is limited that it sorts by converting all the elements to strings. Obviously, this sorting isn't enough for my custom object as I needed to sort the date.

The *sort()*Â method can accept a callback function which then determines the custom sorting order. This callback takes two parameters (a,b), compares them and finally returns a result based on the comparison.

*   If it returns zero, then a and b won't be swapped (sorted as they are equal).
*   It it returns less than zero, then *a *will be placed before*Â b *in the list.
*   Otherwise, *a *will be placed after *b *in the list.

Considering that, my custom sorting function looks like this:

    function eventSorter(a, b) {
    	if (a.start == b.start) {
    		return 0;
    	} else {
    		return a.start < b.start ? -1 : 1;
    	}
    }
    
    itemsArray.sort(eventSorter);

which will then sorts an array based on the start date.