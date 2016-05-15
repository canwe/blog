---
title: Mars Rover in Java
author: Veera
layout: post
permalink: /2010/06/mars-rover-in-java/
categories:
  - Java
tags:
  - code
  - Java
  - mars
  - problem
  - rover
  - thoughtworks
---

Sometime back, when Arun [posted][1] a Python version of **Mars Rover problem**, I tried the same in Java. Btw, if you haven't heard about Mars Rover problem before, here's the text for you (Ctrl C & Ctrl V'ed from Arun's [post][1]).

 [1]: http://www.arunrocks.com/blog/archives/2010/02/01/mars-rover-in-python-and-haskell/ "Mars Rover in Python and Haskell"

{% include post-ad.html %}

## Mars Rover problem:

A squad of robotic rovers are to be landed by NASA on a plateau on Mars.

This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover's position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover , NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot. 'M' means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y 1).

### INPUT:

The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.

The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau.

The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover's orientation.

Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.

### OUTPUT:

The output for each rover should be its final co-ordinates and heading.

INPUT AND OUTPUT

Test Input:

5 5  
1 2 N  
LMLMLMLMM  
3 3 E  
MMRMMRMRRM

Expected Output:

1 3 N  
5 1 E

## Solution in Java:

{% highlight java %}

    package marsrover;
    public class Rover {
    	public static final Integer N = 1;
    	public static final Integer E = 2;
    	public static final Integer S = 3;
    	public static final Integer W = 4;
    	Integer x = 0;
    	Integer y = 0;
    	Integer facing = N;
    	public Rover() {
    	}
    	public void setPosition(Integer x, Integer y, Integer facing) {
    		this.x = x;
    		this.y = y;
    		this.facing = facing;
    	}
    	public void printPosition() {
    		char dir = 'N';
    		if (facing == 1) {
    			dir = 'N';
    		} else if (facing == 2) {
    			dir = 'E';
    		} else if (facing == 3) {
    			dir = 'S';
    		} else if (facing == 4) {
    			dir = 'W';
    		}
    		System.out.println(x   " "   y   " "   dir);
    	}
    	public void process(String commands) {
    		for (int idx = 0; idx < commands.length(); idx  ) {
    			process(commands.charAt(idx));
    		}
    	}
    	private void process(Character command) {
    		if (command.equals('L')) {
    			turnLeft();
    		} else if (command.equals('R')) {
    			turnRight();
    		} else if (command.equals('M')) {
    			move();
    		} else {
    			throw new IllegalArgumentException(
    					"Speak in Mars language, please!");
    		}
    	}
    	private void move() {
    		if (facing == N) {
    			this.y  ;
    		} else if (facing == E) {
    			this.x  ;
    		} else if (facing == S) {
    			this.y--;
    		} else if (facing == W) {
    			this.x--;
    		}
    	}
    	private void turnLeft() {
    		facing = (facing - 1) < N ? W : facing - 1;
    	}
    	private void turnRight() {
    		facing = (facing   1) > W ? N : facing   1;
    	}
    	public static void main(String args[]) {
    		Rover rover = new Rover();
    		rover.setPosition(1, 2, N);
    		rover.process("LMLMLMLMM");
    		rover.printPosition(); // prints 1 3 N
    		rover.setPosition(3, 3, E);
    		rover.process("MMRMMRMRRM");
    		rover.printPosition(); // prints 5 1 E
    	}
    }

{% endhighlight %}

After comparing my version with Arun's [version][2], all it came to my mind was, *Joe Armstrong's* this quote:

 [2]: http://www.arunrocks.com/blog/archives/2010/02/01/mars-rover-in-python-and-haskell/

> 'The problem with object-oriented languages is they've got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.'

Become java expert with [testking N10-004][3] web development course. Download the [testking 640-822][4] videos and [testking 642-813][5] study guides to learn java applications for the web.

 [3]: http://www.testking.com/N10-004.htm
 [4]: http://www.testking.com/640-822.htm
 [5]: http://www.testking.com/642-813.htm