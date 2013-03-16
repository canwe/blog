---
title: root user in Ubuntu
author: Veera
layout: post
permalink: /2012/02/root-user-in-ubuntu/
categories:
  - How To
  - Tech
tags:
  - access
  - How To
  - howto
  - password
  - permission
  - root
  - sudo
  - tech
  - Ubuntu
---
# root user in Ubuntu

Today I got stuck on what could be a simple problem to long time Ubuntu users - making changes that require *root *access.

I never faced this problem until today because my Ubuntu user account/password was enough to make system level changes as it was treated like admin user by Ubuntu.

Today I tried to modify the directory */var/www *which is owned by the *root*. Since the folder is not owned by me, Ubuntu asked me to enter the *root* password and I typed my Ubuntu user password. It didn't work, obviously.

Then I tried to escalate the permission level to *root, *so I tried the command: *su root *and gave my Ubuntu user password. This also failed.

After googling sometime, I found out that,

1.  Ubuntu does not allow you to directly login as *root*.
2.  The first Ubuntu account you create is treated like *admin* account.

So, in order to escalate yourself as a *root *user in Ubuntu terminal, I had to give the command: '***sudo su -' **(without quotes) *and then enter my current Ubuntu user password. After that, I was escalated to *root *user and then able to modify the */var/www *folder as I wanted. Piece of cake!!