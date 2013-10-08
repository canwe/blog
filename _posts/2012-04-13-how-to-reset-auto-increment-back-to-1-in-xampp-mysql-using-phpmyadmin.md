---
title: How to reset Auto Increment back to 1 in XAMPP MySQL using phpMyAdmin
author: Veera
layout: post
permalink: /2012/04/how-to-reset-auto-increment-back-to-1-in-xampp-mysql-using-phpmyadmin/
thesis_javascript_libs:
  - 'a:1:{s:6:"jquery";s:0:"";}'
categories:
  - How To
  - PHP
  - Web
tags:
  - id
  - increment
  - mysql
  - PHP
  - phpmyadmin
  - query
  - reset
  - sql
  - table
  - xampp
---
# How to reset Auto Increment back to 1 in XAMPP MySQL using phpMyAdmin

When you delete every records from a table, which has an AUTO Increment ID field, the *delete*Â option will not reset the*Â Auto Increment *number. For example, if the table had 5 rows, and you deleted all the rows (either one by one or through *delete from tablename where 1;*), and then if you insert a new row, it will get a ID value as **6 **not as **1**. Because the auto increment value is not reset.

The easiest way to reset the auto increment number is to use the query **truncate tablename; **which removes all the rows from that table and resets the auto increment back to 1.

But if you want to do it visually, phpMyAdmin provides options for that:

![][1]

 [1]: http://veerasundar.com/img/2012/04/auto-increment.png "auto-increment-mysql"

1.  In phpMyAdmin, open the table for which you want to reset the auto increment number.
2.  Then go to: **Operations -> Table Options.Â **
3.  Reset the **AUTO_INCREMENT **field to whichever value you want and save the changes.

That's it. The next time, when you insert new records, they will start from the auto increment number you set above.