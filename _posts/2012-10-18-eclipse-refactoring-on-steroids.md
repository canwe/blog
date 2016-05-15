---
title: Eclipse refactoring on steroids
author: Veera
layout: post
permalink: /2012/10/eclipse-refactoring-on-steroids/
thesis_javascript_libs:
  - 'a:1:{s:6:"jquery";s:0:"";}'
dsq_thread_id:
  - 891083499
dsq_needs_sync:
  - 1
categories:
  - Java
tags:
  - best-practice
  - code
  - eclipse
  - ide
  - Java
  - refactoring
---

In my last post about [common Java violations][1], I listed a set of mistakes that java developers tend to make. While refactoring a Java project with the objective to resolve those violations, I used the refactoring features of Eclipse extensively to quickly change the code. Below is the compilation of such refactoring techniques.

 [1]: http://veerasundar.com/blog/2012/09/common-code-violations-in-java/ "common code violations in Java"

## 1. Adding curly braces around block level statements

It is often a good practice to wrap the block level statements with {curly braces}. But still, if there is only one statement in the block, then some developers prefer not to wrap them with {}. But Checkstyle will complain if you do so.

If you want to change this,

    if(condition) 
        doSomething;

to this:

    if(condition){
        doSomething();
    }

Eclipse's **source cleanup **is there for your help.

1.   In *Project Explorer, *right click on the source folder and select *Source -> Clean up'¦*[![using source clean up to add curly braces around block statements][3]][3]
2.  Choose *Use custom profile *and then click *configure *next to the custom profile section.
3.  By default, clean up action is configured to do multiple cleanup task. Since we are focused only on adding curly braces, we will disable all other cleanup tasks. To do this, navigate to all the tabs in the *Custom Clean ups *window and deselect all the cleanups.
4.  Then in the *Code Style *tab, select the *Use blocks in if/while/for/do statements *option and click *OK.*
5.  Then in *Clean Up *dialog, click *Next *and the refactoring will occur. You'll be presented with a review page with the changes made.

 []: http://veerasundar.com/img/2012/10/use-block-statements.png

## 2. Joining to if statements into one

Lets say, you have a code like this:

    if(isLoggedIn){
      if(isAdmin){
        doSecretStuff();
      }
    }

It is safe to combine the two *if* statements into one, unless you have some other code in between the two *if *statements. Of course, you can manually edit the code to remove the second if and move the condition to up. But wait, when Eclipse can do this for us, why should we do it ourselves?![Join inner if statement with outer if statements][3]

 [3]: http://veerasundar.com/img/2012/10/join-if-statements.png "join-if-statements"

1.  Place your cursor on the *if *keyword of the inner *if *statement.
2.  Press *Ctrl 1 *which will open a context menu.
3.  Select the option *Join 'if' statement with outer 'if' statement*.
4.  Voila! the two if statements are now combined into one.

You'll get:

    if(isLoggedIn && isAdmin){
      doSecretStuff();
    }

## 3. Renaming a filed and its getter / setter methods

According to a [this][4], renaming an element is the mostly used refactoring in Eclipse. So, when you rename a field which has setter/getter methods, you'd manually rename those method names. But Eclipse can help here to simplify this.[![][6]][6]

 [4]: http://stackoverflow.com/a/1858592/42372 "Eclipse: Most useful refactorings"
 []: http://veerasundar.com/img/2012/10/rename-field-getter-setter.png

1.  Place your cursor on the field name that you want to rename.
2.  Press *Ctrl Shift *and then press *R key *two times continuously which will open the '*Rename Field' *dialog box.
3.  Check the options 'Rename getter' and '*Rename setter'* while providing a new name to your field.
4.  On clicking OK, this will rename the field as well as its getter/setter methods.

## 4. Inverting *if *statement

Suppose you have a code like this:

    if(!isLoggedIn){
      // ask to login
    }else{
      // allow access
    }

Above code is 100% valid. But code quality tools such as Checkstyle might complain, because we are using a negativity check in the first condition (i.e. *!isLoggedIn*). When you have only one case (just the if block), then we can't do much about it. But when you have both *if *and *else*, then you can just invert the conditions to avoid this scenario.

1.  Place your cursor on the first *if *keyword.
2.  Press *Ctrl 1 *and then select *Invert 'if' statement*.
3.  Eclipse will invert the conditions and the corresponding blocks.
4.  Finally you'll get: 
        if(isLoggedIn){
          // allow access
        }else{
          // ask to login
        }

Helps to improve the readability of the code.

## Conclusion:

Of course, the above are just the tip of the iceberg. Eclipse is capable of doing much-more advanced refactoring. So, what are **your** secret refactoring techniques?