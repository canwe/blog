---
layout: post
title: 'HTML5 Canvas game - Visualizing player health'
categories:
  - web
tags:
  - web
  - twikural
  - application
  - appengine
  - java
  - play
  - code
---
I recently built a [JavaScript game](http://veerasundar.com/suzhi) for which I needed a way to visually show the player's health. The game already had a HUD where the health information was displayed. But I wanted a better way to inform about the amount of health left and I chose to implement this like a meter widget.

Below is the final result (also you can see it in live in the [game](http://veerasundar.com/suzhi)):

[![Visualizing Player health](http://veerasundar.com/assets/img/lifeline.png)](http://jsfiddle.net/3ubs9mz6/3/)

This post explains how to convert the player health, which is in percentage to a circle to draw in HTML5 canvas.

##Drawing circles in Canvas:

Canvas offers a method `arc()` to draw circles. This method's signature is:

{% highlight javascript %}
void ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
{% endhighlight %}

In that, `startAngle` and `endAngle` is what we are interested in. By converting the health percentage to start and end angles, we can draw a arc that correlates with the percentage. 

### Function to convert degrees to radians:

`startAngle` and `endAngle` accepts their values in *radians*. But I persoanlly feel one can easily understand *degrees* instead of *radians*. So, we need a function that converts *degrees* to *radians*.

{% highlight javascript %}
function rad(deg){
    return (Math.PI/180)*deg;
}
{% endhighlight %}

### Function to convert percentage to radians:

Now that we have our degree-to-radian converter in place, we can move to next step of converting percentage to radians. 

{% highlight javascript %}
function percentToRad(percent){
    return rad(270) + rad ((360 * percent) / 100);
}
{% endhighlight %}

In the context of Canvas arc API, 0 degrees starts at circle's east end, 90 degrees is south, 180 degrees is west and 270 degrees is north. Since I wanted my arc/circle to begin at top/north, I am adding that to percentage calculation. If you want your arc to start at different end points, you can add respective degrees to the above formula.


### Combining all - drawing percenate as circle in canvas

{% highlight javascript %}
function rad(deg){
    return (Math.PI/180)*deg;
}

function percentToRad(percent){
    return rad(270) + rad ((360 * percent) / 100);
}


var ctx = document.getElementById('lifeline').getContext('2d');
function draw(x,y, percent){
    
    ctx.lineWidth = 5;
    
    ctx.beginPath();    
    ctx.strokeStyle ='rgb(221,221,221)';
    ctx.arc(x,y, 45, rad(270), percentToRad(100), false);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255,65,54,.8)';
    ctx.arc(x, y, 45, rad(270), percentToRad(percent), false);
    ctx.stroke();
    
    
    ctx.beginPath();
    ctx.fillStyle = 'rgb(57,204,204)';
    ctx.arc(x,y, 40, 0, 2*Math.PI, false);
    ctx.fill();
}

draw(50,50, 0);
draw(200,50, 60);
draw(50,200, 44);
draw(200,200, 100);
{% endhighlight%}


Here's the [Fiddle](http://jsfiddle.net/3ubs9mz6/3/) where you can play around with the code and see the results for yourself and here's the [JavaScript game](http://veerasundar.com/suzhi) where this has been implemented.
