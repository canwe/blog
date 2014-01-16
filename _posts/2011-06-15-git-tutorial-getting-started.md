---
title: 'Git Tutorial &#8211; Getting Started'
author: Veera
layout: post
permalink: /2011/06/git-tutorial-getting-started/
categories:
  - How To
  - Java
tags:
  - code
  - git
  - howto
  - Java
  - server
  - subversion
  - svn
  - tutorial
  - Ubuntu
  - version
---

![git logo][1]I was a long time Subversion user then. So, when I got introduced to Git few months back, I was *\*really\** confused. First of all, I couldn't visualize some of the concepts that Git talked about.

 [1]: http://veerasundar.com/img/2011/06/git-logo.png "git-logo"

But then, as I started using Git in my day-to-day work, it got much easy to use and understand. Now there isn't a single day (except some of the weekends!) in which I don' t use a single Git command. It became an inseparable tool at my work.

So, just thought of writing my learning as a Git tutorial series to help a bit my fellow developers who want to switch over to Git. Let' start.

## Say Hello to Git

First of all, if you are coming from a Subversion/CVS background - mark my words - **forget everything you learned about version controlling**. Because Git has a completely different approach to version controlling. Lets see how it differs from other systems.

Git is distributed. Which means, when you clone a Git repo, you'll get a your own copy of that repo to work with in your local machine. In Git, you get your own code base, you make changes, commit as many times as you want without the fear of polluting the central repo and once you are confident push the code to central repository.

Before diving too much further, let's look at this awesome diagram which explains the Git workflow (thanks to [osteele.com][2], I have a printout of this pasted at my desk).

 [2]: http://osteele.com

![git workflow][3]

 [3]: http://veerasundar.com/img/2011/06/git.png "git"

As you can see in the above diagram, in Git, code lives in 4 different places

*   ***remote repository ***- think of it as a Github repository or a remote server hosted in your company. As the name suggests, this code base does not live your local machine and You don't talk with remote repository often. Only when you pull a code initially and pushing the changes when you are done with it.
*   ***local repository** - *when you clone a remote Git repo / or create a new repo, the code base is created here in the local repository. All commits you do will come here first. This lives in your local machine.
*   ***index ***- one of the most confusing thing you'll ever hear in Git. This is something like a intermediate place between your working copy of code and your local repository. It's like a *staging area* for your code. You use it to stage which files you want to track & commit. In my next post about *[My Git workflow][4] *you'll see how index is used. This code base too, lives in your local machine.
*   ***workspace ***- it's your working directory where you create/edit/delete your files. This code resides in your local machine.

 [4]: http://veerasundar.com/blog/2011/06/git-tutorial-my-git-work-flow/ "Git tutorial - my git workflow"

Hope you get the basic concepts of Git. It is very important to understand it well before you start using Git. In my next post, I'll be writing about [my Git workflow][4]. Till then, feel free to [setup your Git environment][5].

 [5]: http://help.github.com/win-set-up-git/ "This guide will walk you through the basics and explain a little bit about how everything works along the way."