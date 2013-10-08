---
title: Easy way for setting up the LAMP stack in Ubuntu Linux command line
author: Veera
layout: post
permalink: /2011/10/easy-way-for-setting-up-the-lamp-stack-in-ubuntu-linux-command-line/
categories:
  - How To
  - PHP
  - Tech
  - Web
tags:
  - apache
  - lamp
  - linux
  - mysql
  - PHP
  - phpmyadmin
  - server
  - Ubuntu
  - Web
---
# Easy way for setting up the LAMP stack in Ubuntu Linux command line

Recently I got hold of an empty Rackspace server in which we have installed Ubuntu 11.04 NattyÂ Narwhal version. My next step was to setup the LAMP stack in that server to run our PHP site.

First I tried to install XAMPP for Linux. But unfortunately, it failed because XAMPP only supports 32 bit operating system and ours was 64. I didn't want to spend much time on fixing that issue, so I moved to setup the LAMP stack by other means.

Here's what I did (after googling/referring a lot):

## 1.Install lamp-server

1.  **sudo apt-get install tasksel **[installs the tasksel that helps you to install multiple packages as a single task]
2.  **sudo tasksel install lamp-server **[it will install the lamp stack in location */etc/*]
3.  *http://yourdomain.comÂ *should work now.

## 2. Configure PHP Curl module

1.  **sudo apt-get install php5-curl **[downloads and installs curl module]
2.  **sudo /etc/init.d/apache2 restart**Â [restarts server for the changes to take effect]

## 3. Install phpmyadmin

1.  **sudo apt-get update **[updates the packages repository. When I first tried to install phpmyadmin without updating, it complained that phpmyadmin isn't found.]
2.  **sudo apt-get install phpmyadmin **[will trigger a installation wizard]
3.  Choose **apache2 **for the **server configuration** and choose **no **for **database configuration **(since we have already installed database).
4.  **sudo cp /etc/phpmyadmin/apache.conf /etc/apache2/conf.d **[copies the server configuration so that it is accessible via web]
5.  **sudo /etc/init.d/apache2 restart**
6.  *http://yourdomain.com/phpmyadmin* should work now.

That's it. Now our server is ready for serving the traffic. Place your website files under **/var/www/ **which will be served to the world.