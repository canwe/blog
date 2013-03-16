---
title: How to check which application is using which port
author: Veera
layout: post
permalink: /2009/10/how-to-check-which-application-is-using-which-port/
categories:
  - How To
tags:
  - How To
  - port
  - tip
  - windows
---
# How to check which application is using which port

Today I found an easy way to check which application is using which port in my system. Here I'm sharing the steps. These steps are applicable for the Windows Operating System.

## Checking which application is using a port:

1.  Open the command prompt - **start >> run >> cmd **or **start >> All Programs >> Accessories >> Command Prompt.**
2.  Type **netstat -aon | findstr '[port_number]'**. Replace the [port_number] with the actual port number that you want to check and hit enter.
3.  If the port is being used by any application, then that application's detail will be shown. The number, which is shown at the last column of the list, is the PID  (process ID) of that application. Make note of this.
4.  Type **tasklist | findstr '[PID]'. **Replace the PID with the number from the above step and hit enter.
5.  You'll be shown the application name that is using your port number.

## Checking which port is being used by a application:

This is exactly the reverse of the above steps.

1.  Open the command prompt - **start >> run >> cmd **or **start >> All Programs >> Accessories >> Command Prompt.**
2.  Type **tasklist | findstr '[application_name]'**. Replace the [application_name]** **with the application that you want to check (for example, apache) and hit enter.
3.  Make note of the PID (second column) from the details shown.
4.  Type **netstat -aon | findstr '[PID]'**. Replace the [PID] from the above step and hit enter.
5.  You'll be shown the application detail and the corresponding port to which it is listening.