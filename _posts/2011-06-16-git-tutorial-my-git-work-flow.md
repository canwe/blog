---
title: 'Git Tutorial &#8211; My Git work flow'
author: Veera
layout: post
permalink: /2011/06/git-tutorial-my-git-work-flow/
categories:
  - How To
  - Java
tags:
  - code
  - git
  - howto
  - Java
  - scm
  - tutorial
  - version
  - versioning
---

As I promised on my previous article on [Getting started with Git][1], here is how I use Git in my day to day activities. Rather than explaining with a real project that I'm working (which I can't share!), I'm taking the 'ËœHello World' approach. What I'm going to do is to create a text file that contains the 'hello world'Â and then going to track it in Git.

 [1]: http://veerasundar.com/blog/2011/06/git-tutorial-getting-started/ "Git Tutorial - Getting Started"

I assume that you have [installed Git][2] on your machine and you have the PATH environment variable updated with Git's location. Also, I'm going to explain it with a local repository which means that I'll be creating the repository locally instead of cloning it from some remote repository. Let's start.

 [2]: http://help.github.com/win-set-up-git/

## 1. Git repository creation

Open a terminal or command prompt and CD to your project directory. Then give the below command.

    c:> cd vraa/projects/helloworld
    C:/vraa/projects/helloworld>git init
    Initialized empty Git repository in C:/vraa/projects/helloworld/.git/

Now what I did was to create a** new local Git repository** to track my hello world project.

## 2. Git configuration - user name and email (one time)

Next thing is to setup a user name and email to be used in all my git commits. This is a one time activity per Git installation.

    C:/vraa/projects/helloworld> git config --global user.name "yourname"
    C:/vraa/projects/helloworld> git config --global user.email "your@mail.com"

## 3. Add a file to Git index and check status

Let's create a simple text file and see what Git feels about this file using **git status** command. Status will tell you the current status of the repository and branch details. And, in Git you don't need to check out anything before you start working on it. Just modify the file directly and then commit the changes later.

    C:/vraa/projects/helloworld> edit helloworld.txt
    C:/vraa/projects/helloworld> git status
    # On branch master
    #
    # Initial commit
    #
    # Untracked files:
    #   (use "git add ..." to include in what will be committed)
    #
    #       helloworld.txt
    nothing added to commit but untracked files present (use "git add" to track)

Ha! Git knows that there's a file but it is not tracking it yet. Well, we'll tell Git to track it (after all that is what Git is for!)

    C:/vraa/projects/helloworld> git add helloworld.txt
    C:/vraa/projects/helloworld> git status
    # On branch master
    #
    # Initial commit
    #
    # Changes to be committed:
    #   (use "git rm --cached ..." to unstage)
    #
    #       new file:   helloworld.txt

Now you can see that the status command tells you the list of files that will be committed. So, when you say **git add [filename]** you are asking the git to keep the file in *git index* and track the changes. Simple, you are staging this file for commit. Next time when you do a commit all the files that are in index will be committed.

## 4. Let's commit the changes

By committing, you are moving your changes from *index* to the *local repository*. Unlike Subversion, where a commit means saving code to a central repository, in git even after a commit the code will reside in your local repo. The outside world won't know about your changes, yet. So, you can fearlessly do as many commits as you wish.

    C:/vraa/projects/helloworld> git commit -m "initial commit"
    [master (root-commit) 812befb] initial commit
    warning: CRLF will be replaced by LF in helloworld.txt.
    The file will have its original line endings in your working directory.
     1 files changed, 1 insertions( ), 0 deletions(-)
     create mode 100644 helloworld.txt
    C:/vraa/projects/helloworld> git status
    # On branch master
    nothing to commit (working directory clean)

So, that's how my basic git workflow looks like. Creating a simple and committing and tracking changes using Git. In my [next post][3], I'll explain how I do more changes and differentiate between several file versions.

 [3]: http://veerasundar.com/blog/2011/06/git-tutorial-comparing-files-with-diff/