---
title: Task tags in Eclipse
author: Veera
layout: post
permalink: /2009/01/task-tags-in-eclipse/
views:
  - 479
ratings_users:
  - 0
ratings_score:
  - 0
ratings_average:
  - 0
dsq_thread_id:
  - 891104724
categories:
  - Java
---

I hope that you must be aware of the **Tasks view** in Eclipse. If not, Tasks view is nothing but a small TODO list manager inside the eclipse IDE itself. In the Tasks view window, you can add a* new TODO task* and you can also set the *priority* (high, normal, low) for that task.

Eclipse also has a feature wherein you can directly add a new task to the Tasks view without even coming to the Tasks view window. You can do this by using the **Task tags**. I.e. in your Java code file, you can add these Task tags with some description and Eclipse will automatically detect these task tags and the it will add a new task to the Tasks view. For example:

`
....
/* TODO Change system.out.print to logger.debug */
System.out.println("This is a secret message!");
....
`

Above code will make the Eclipse to add a new task with the description 'Change system.out.print to logger.debug'Â and for TODO tasks, default priority will be *Normal*. Along with the description, the line number and the file name are also noted. So, when you double click this task on the Tasks view, it will directly take you to the above.

If you want, you can also add your own Task tags (like REMEMBER, BUG, etc) to Eclipse. To do this, open *Window->Preferences* and search for 'ËœTask tags'. There you can add new task tags and set their priorities too.