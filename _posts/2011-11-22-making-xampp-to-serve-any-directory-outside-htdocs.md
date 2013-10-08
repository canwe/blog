---
title: Making XAMPP to serve any directory outside htdocs
author: Veera
layout: post
permalink: /2011/11/making-xampp-to-serve-any-directory-outside-htdocs/
thesis_description:
  - >
    This article explain how to make the XAMPP server to server files outside the
    default htdocs folder.
categories:
  - How To
  - Web
tags:
  - apache
  - howto
  - htdocs
  - PHP
  - server
  - Web
  - windows
  - xampp
---
# Making XAMPP to serve any directory outside htdocs

So, you have installed XAMPP on windows, [changed its server port][1] to a different number other than 80 and [changed the MySQL *root*Â password][2] to a more secure one. Now its the time to create some HTML files that will be served by XAMPP server.

 [1]: http://veerasundar.com/blog/2009/07/how-to-change-xampp-server-port/ "How to change XAMPP server port?"
 [2]: http://veerasundar.com/blog/2009/01/how-to-change-the-root-password-for-mysql-in-xampp/ "How to change the 'Ëœroot' password for MySQL in XAMPP?"

By default, XAMPP serves any file that is located under the directory *[xampp\_installation\_folder]/htdocs, *Â which means that you have to copy all your HTML/PHP files inside this directory. But what if you maintain a different folder for all your projects files and you want XAMPP to serve them too along with *htdocs*?

Lets make XAMPP to do this.

1.  Open the file *[xamp\_installation\_folder]/apache/conf/httpd.conf*Â in any text editor.
2.  Copy below lines after the *htdocs * element after changing the directory to your own folder. 
        
            Options Indexes FollowSymLinks Includes ExecCGI
            AllowOverride All
            Order allow,deny
            Allow from all
        

3.  Then search for this string:Â . Inside that element, add a new alias as followed: 
        Alias /yoursite/ "C:/path/to/your/folder/yoursite/"

4.  Save the file and restart the XAMPP server.

After this, if you have a website named 'Ëœyoursite' inside the folder *'Ëœc:/path/to/your/folder'*Â you can access it directly by using the URL: *http://localhost:8080/yoursite/ *(assuming you have [changed XAMPP port][3] to 8080).

 [3]: http://veerasundar.com/blog/2009/07/how-to-change-xampp-server-port/ "Change XAMPP server port"