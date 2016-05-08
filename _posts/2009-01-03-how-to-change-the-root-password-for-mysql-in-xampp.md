---
title: 'How to change the root password for MySQL in XAMPP?'
layout: post
permalink: /2009/01/how-to-change-the-root-password-for-mysql-in-xampp/
description: This article explains how to change the MySQL root password in XAMPP for windows. When you install XAMPP, the default root password for MySQL would be empty, which is not recommended.
categories:
  - web
tags:
  - mysql
  - password
  - query
  - sql
  - tip
  - tutorial
  - xampp
---

By default, when you install XAMPP in your windows machine, the `root` password for the MySQL is set to empty. But this is not recommended, as the MySQL database without a password will be accessible to everyone. To avoid this, a proper/secure password must be set to the user `root`. To do it in XAMPP, there are two ways.

## Method 1: reset XAMPP MySQL root password through web interface:

After you started your XAMPP server, go to the browser and type the URL **http://localhost/security/** (incase you've [modified XAMPP server port][1], you need to include that port number also in previous URL). The security page will be shown where you can change the `root` password for MySQL. This will update the phpMyAdmin config also.  

 [1]: http://veerasundar.com/blog/2009/07/how-to-change-xampp-server-port/ "How to change XAMPP server port?"

## Method 2: reset XAMPP MySQL root password through SQL update:

1.  Start the Apache Server and MySQL instances from the XAMPP control panel.
2.  After the server started, open any web browser and give **http://localhost:8090/phpmyadmin/** (if you are running XAMPP on 8090 port). This will open the phpMyAdmin interface. Using this interface we can manager the MySQL server from the web browser.
3.  In the phpMyAdmin window, select *SQL* tab from the right panel. This will open the SQL tab where we can run the SQL queries.
4.  Now type the following query in the textarea and click **Go**  
    `UPDATE mysql.user SET Password=PASSWORD('password') WHERE User='root'; FLUSH PRIVILEGES;`
5.  Now you will see a message saying that the query has been executed successfully.
6.  If you refresh the page, you will be getting a error message. This is because the phpMyAdmin configuration file is not aware of our newly set root passoword. To do this we have to modify the phpMyAdmin config file.
7.  Open the file **[XAMPP Installation Path] / phpmyadmin / config.inc.php** in your favorite text editor.
8.  Search for the string `$cfg\['Servers'\]\[$i\]['password'] = '';` and change it to like this, `$cfg\['Servers'\]\[$i\]['password'] = 'password';` Here the 'password' is what we set to the `root` user using the SQL query.
9.  Now all set to go. Save the config.inc.php file and restart the XAMPP server.