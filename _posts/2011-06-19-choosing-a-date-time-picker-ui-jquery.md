---
title: 'Choosing a date time picker UI &#8211; jQuery'
author: Veera
layout: post
permalink: /2011/06/choosing-a-date-time-picker-ui-jquery/
dsq_thread_id:
  - 891618478
categories:
  - Web
tags:
  - control
  - date
  - datetime
  - datetimepicker
  - Design
  - jquery
  - jquery-ui
  - picker
  - time
  - ui
  - Web
---

I had a requirement to add an input control for users to select date time range. User will be selecting two values - start time and end time. For both the values, the date is same. Only the time differs. For example, the values could be 6/19/2011 10:30 to 6/19/2011 11:30.

I am using jQuery UI library for my web-app. So, I started searching for a date time picker widget with an option to choose a time range. The built-in [datepicker][1] does not have the ability to choose a time. But thanks to *Trent*, there's a plug-in I found to [add timepicker to jQuery datepicker][2]. With that, I came up with the design which initially looked like this:

 [1]: http://jqueryui.com/demos/datepicker/ "Datepicker - jQuery"
 [2]: http://trentrichardson.com/examples/timepicker/ "Adding a Timepicker to jQuery UI Datepicker"

![datetime picker ui - jquery][3]

 [3]: http://veerasundar.com/img/2011/06/old-datetime-ui.png "old-datetime-ui"

The control functioned as I expected. I deployed the app with this UI and tried it for a week to find out if there's an usability issue. And, yes! There was some difficulties I found while using this date time picker.  
**

1.  It was too many clicks - one to choose a date, one to choose a hour and one to choose the minutes. Additionally, there's a second input date too for which I had to repeat these clicks again - so a total of **six clicks **just to enter two input values. Not good!
2.  On the time picker slider, the hour and minute slides are disconnected. Means, you need to separately choose these two. I found this a lot more confusing. Also, while in a hurry, this confusion will lead to dissatisfaction with my application. Again, not good.

So, I decided to come up with some other way to enter the start time and end time. After googling a while and self brainstorming, I decided to go with a single date control and single time control. Hence, my current UI looks like this:

![date time picker - improved ui - jQuery][4]

 [4]: http://veerasundar.com/img/2011/06/new-datetime-ui.png "new-datetime-ui"

Now it is a lot more simplified - just a textbox and a slider. And, the number of clicks user has to make is just **three **(compare it with the six of previous approach). It looks more elegant and fit too on my form.

So, now a question to you - **which datetime picker UI would you prefer?** First one or the second one?

**Edit: Source code for the second time picker**

    $("#time-slider").slider({
    	range:true,
    	min:0,
    	max:1439,
    	step:15,
    	animate:true,
    	disabled:true,
    	slide:function(event, ui){
    		var m1 = parseInt(ui.values[0] % 60);
    		var h1 = parseInt(ui.values[0] / 60 % 24);
    		var m2 = parseInt(ui.values[1] % 60);
    		var h2 = parseInt(ui.values[1] / 60 % 24);
    		var diff = parseInt(ui.values[1] - ui.values[0]);
    		var diffTxt="";
    		var dh = parseInt(diff / 60 % 24);
    		var dm = parseInt(diff % 60);
    		if(dh > 0){
    			diffTxt  = dh   "h";
    		}
    		if(dm > 0){
    			diffTxt  = " "   dm   "m";
    		}
    		$("#task-form .act-time label span").html( h1   ":"   m1   "-"   h2   ":"   m2    "("   diffTxt  ")");
    		$("#task-form .act-time label span").data("startTime", h1   ":"   m1);
    		$("#task-form .act-time label span").data("endTime", h2   ":"   m2);
    		$("#task-form .act-time label span").data("timeDiff", diffTxt);
    	}
    });