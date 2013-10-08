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
# Eclipse refactoring on steroids

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

Eclipse'sÂ **source cleanupÂ **is there for your help.

1.  Â InÂ *Project Explorer,Â *right click on the source folder and selectÂ *Source -> Clean up'Â¦*[![using source clean up to add curly braces around block statements][3]][3]
2.  ChooseÂ *Use custom profileÂ *and then clickÂ *configureÂ *next to the custom profile section.
3.  By default,Â clean upÂ action is configured to do multiple cleanup task. Since we are focused only on adding curly braces, we will disable all other cleanup tasks. To do this, navigate to all the tabs in theÂ *Custom Clean upsÂ *window and deselect all the cleanups.
4.  Then in theÂ *Code StyleÂ *tab, select theÂ *Use blocks in if/while/for/do statementsÂ *option and clickÂ *OK.*
5.  Then inÂ *Clean UpÂ *dialog, clickÂ *NextÂ *and the refactoring will occur. You'll be presented with a review page with the changes made.

 []: http://veerasundar.com/img/2012/10/use-block-statements.png

## 2. Joining to if statements into one

Lets say, you have a code like this:

    if(isLoggedIn){
      if(isAdmin){
        doSecretStuff();
      }
    }

It is safe to combine the two *if* statements into one, unless you have some other code in between the twoÂ *ifÂ *statements. Of course, you can manually edit the code to remove the secondÂ ifÂ and move the condition to up. But wait, when Eclipse can do this for us, why should we do it ourselves?![Join inner if statement with outer if statements][3]

 [3]: http://veerasundar.com/img/2012/10/join-if-statements.png "join-if-statements"

1.  Place your cursor on theÂ *ifÂ *keyword of the innerÂ *ifÂ *statement.
2.  PressÂ *Ctrl 1Â *which will open a context menu.
3.  Select the optionÂ *Join 'if' statement with outer 'if'Â statement*.
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
2.  PressÂ *Ctrl ShiftÂ *and then pressÂ *R keyÂ *two times continuously which will open the '*Rename Field'Â *dialog box.
3.  Check the options 'Rename getter'Â and '*Rename setter'* while providing a new name to your field.
4.  On clicking OK, this will rename the field as well as its getter/setter methods.

## 4. InvertingÂ *ifÂ *statement

Suppose you have a code like this:

    if(!isLoggedIn){
      // ask to login
    }else{
      // allow access
    }

Above code is 100% valid. But code quality tools such as Checkstyle might complain, because we are using a negativity check in the first condition (i.e.Â *!isLoggedIn*). When you have only one case (just the ifÂ block), then we can't do much about it. But when you have bothÂ *ifÂ *andÂ *else*, then you can just invert the conditions to avoid this scenario.

1.  Place your cursor on the firstÂ *ifÂ *keyword.
2.  PressÂ *Ctrl 1Â *and then selectÂ *Invert 'if'Â statement*.
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