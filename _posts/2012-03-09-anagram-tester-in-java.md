---
title: Anagram tester in Java
author: Veera
layout: post
permalink: /2012/03/anagram-tester-in-java/
thesis_javascript_libs:
  - 'a:1:{s:6:"jquery";s:0:"";}'
categories:
  - Java
tags:
  - algorithm
  - anagram
  - code
  - Java
---
# Anagram tester in Java

While browsing the net, I found this problem somewhere - to write a code that tests the given two strings are anagrams or not. From Wiki,

> 'An **anagram** is a type of word play, the result of rearranging the letter of a word or phrase to produce a new word or phrase, using all the original letters exactly once; for example *orchestra* can be rearranged into *carthorse*.'

I tried to solve this problem using Java and below is the result of it. The algorithm I tried is very simple:

1.  Clean the input - remove all the spaces and punctuation marks (because it doesn't affect the compassion).
2.  Go through character by character from string *one* and check if that character exists in string *two*.
3.  If exists, then remove it from string *two *and move on to next character. If not exists, then we found a mismatch and the string is not an anagram.
4.  If all character from string *one *exists in string *two*, then we found it's an anagram.

##  Java code to test two strings are anagrams:

[gist id="2007044"]

I tested the above code with most of the anagrams found in the [Anagram Site][1] and it worked well.

 [1]: http://www.anagramsite.com/ "Anagram site"

If you think the above code can be improved in someway, feel free to comment.