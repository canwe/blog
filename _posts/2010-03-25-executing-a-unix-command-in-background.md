---
title: Executing a UNIX command in background
author: Veera
layout: post
permalink: /2010/03/executing-a-unix-command-in-background/
dsq_thread_id:
  - 891264533
categories:
  - How To
tags:
  - background
  - command
  - howto
  - job
  - tip
  - unix
---
# Executing a UNIX command in background

Here's a small UNIX tip (or how-to) for executing a command in the background. For UNIX gurus, this tip might seem like a basic one. But for guys like me who are coming from a Windows background, even smaller ones makes a big difference.

This is the scenario - I use Putty to login to UNIX. I execute few (internal) UNIX commands which are time thirtsy and take at least 2 hours to complete. While the command is running, I can't do anything in the Putty terminal. All I can do is stare the Putty for 2 hours or do the below, to reuse the Putty session for other tasks while running the time-thirsty command in the background.

*   In UNIX shell, type your command and hit Enter. 
        $ my-long-running-command
        ...... the long-running command running .....
        

*   Your command will start running. Now press `Ctrl   z`. This will interrupt the current process and pauses it. You'll see something like this; 
        [1]  Stopped      my-long-running-command
        

*   Now , type `bg` and hit Enter. Your current process (i.e. the command) will start running in the background. To check, type `jobs` in the command line and hit Enter. You'll see the job status something like this. 
        $ bg
        [1]  my-long-running-command
        $jobs
        [1]- Running my-long-running-command
        

So, now you can use Putty for other tasks, while your command executes in the background.