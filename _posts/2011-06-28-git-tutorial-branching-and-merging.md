---
title: 'Git tutorial &#8211; branching and merging'
author: Veera
layout: post
permalink: /2011/06/git-tutorial-branching-and-merging/
categories:
  - How To
  - Java
tags:
  - branch
  - branching
  - code
  - git
  - How To
  - howto
  - Java
  - merge
  - merging
  - scm
  - tutorial
  - vcs
  - version
---
# Git tutorial &#8211; branching and merging

Lets say that you have pushed your code live and now want to code for a new feature. And, suddenly a bug found in your live code (it happens! a LOT!) which needs an immediate fix from you. Now, you have two different coding tasks in your hand.

1.  Code for your feature - which you can not commit in your main code base, because of some partial work.
2.  At the same time, you can not fix the bug in the main code base and push it to live because of the partial code which could break the builds (and hearts of some tech support guys!).

So, what will you do? **Branch! **Lets create two different branches - one for feature and one for bug-fixes and you can happily code on your branches without fearing that it might break the main code base.**  
**

## Git Branch:

![git branching][1]

 [1]: http://veerasundar.com/img/2011/06/git-branch.jpg "git-branch"

Branching is something that every developer often do. When you branch, Git is taking a copy of your main code base and saving it in a different name (imagine the *File -> Save as*). So, the changes you do in your branched code will not affect your main code.

Having said that, lets see how to create new branches in Git. I'm opening my [*helloworld*][2] project again with the clean working directory.

 [2]: http://veerasundar.com/blog/2011/06/git-tutorial-my-git-work-flow/ "My Git Workflow"

    ~/work/projects/helloworld$ git status
    # On branch master
    nothing to commit (working directory clean)

So, now I'm on the *master *branch which is the **default **branch in Git. I want to create a new feature to add line of text 'Hello India'Â to my file. For that, lets create a branch *india*.

    ~/work/projects/helloworld$ git branch india
    ~/work/projects/helloworld$ git branch
      india
    * master

There we go! In the first line, I ask Git to *create* a new branch by giving a branch name *india*. In the second, I ask Git to *list *all the available branches which lists *india *and the default branch *master*. The * marks denotes the branch you are currently in.

Now you created a new branch. But you are still in the *master *branch. You have to switch to the newly created branch before making any changes. Lets do that.

    ~/work/projects/helloworld$ git checkout india
    Switched to branch 'india'

Now we switched to the* india *branch. you can make your changes and commit as many times as you wish. This will not affect the *master *branch in any way (until your merge your changes back).*  
*

    ~/work/projects/helloworld$ gedit helloworld.txt
    ~/work/projects/helloworld$ git add helloworld.txt
    ~/work/projects/helloworld$ git status
    # On branch india
    # Changes to be committed:
    #   (use "git reset HEAD ..." to unstage)
    #
    #	modified:   helloworld.txt
    #
    ~/work/projects/helloworld$ git commit -m "modified in india branch"
    [india 2b2fa49] modified in india branch
     1 files changed, 1 insertions( ), 0 deletions(-)

## Merging changes back to main branch:

![git merge][3]

 [3]: http://veerasundar.com/img/2011/06/git-merge.jpg "git-merge"

Now it is time to merge your feature code to the main branch. In a simpler words, we are going to do this: ***master = master india***!

    ~/work/projects/helloworld$ git checkout master
    Switched to branch 'master'
    ~/work/projects/helloworld$ git merge india
    Updating 8f8c6ba..2b2fa49
    Fast-forward
     helloworld.txt |    1  
     1 files changed, 1 insertions( ), 0 deletions(-)

As you can see, to merge, first switch back to *master *branch then give the *merge *command with the branch name you want to merge. That simple! If you open the *helloworld.txt *file, you can see the changes made in the *india *branch. Also, you can give the command *git log helloworld.txt *which will display all the commits you made on this files, including the *india *branch changes too.

Life is not always this simple. When you merge, there's a possibility that conflicts could occur. I'll explain how to resolve these conflicts in my next post.