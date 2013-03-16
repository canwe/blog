---
title: XAMPP conflicts with the Skype port
author: Veera
layout: post
permalink: /2009/10/xampp-conflicts-with-the-skype-port/
categories:
  - Tech
tags:
  - port
  - server
  - skype
  - xampp
---
# XAMPP conflicts with the Skype port

If you've installed both [XAMPP][1] and Skype in you system and wondering why the things are not going well when you run these two applications simultaneously, then you are not alone. There are a good number of folks who are complaining about this conflict between XAMPP and Skype. The reason behind this is simple - both Skype and XAMPP by default uses the same port number 80. So, when you start one application first and the other application later, there will be port conflict and the second application will fail to work properly.

 [1]: http://veerasundar.com/blog/2009/07/xampp-apache-mysql-php-perl-environment-in-windows/ "XAMPP - Apache, MySQL, PHP, Perl environment in Windows"

So, how to fix it? Easy. Change the port number of XAMPP server or disable the usage of port 80 in Skype. To do the first one you can check out my earlier post [How to change XAMPP server port][2]. To disable the port 80 in Skype, follow below steps:

 [2]: http://veerasundar.com/blog/2009/07/how-to-change-xampp-server-port/ "How to change XAMPP server port?"

1.  Start Skype.
2.  Go to **Tools >> Options >> Connections**.
3.  Uncheck the use of Port 80 as an alternative port.

And, you are done!