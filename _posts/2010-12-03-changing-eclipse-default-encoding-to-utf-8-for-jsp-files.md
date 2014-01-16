---
title: Changing Eclipse default encoding to UTF-8 for JSP files
author: Veera
layout: post
permalink: /2010/12/changing-eclipse-default-encoding-to-utf-8-for-jsp-files/
categories:
  - How To
  - Java
tags:
  - eclipse
  - encoding
  - howto
  - ide
  - Java
  - utf8
---

Try creating a new JSP file in your Eclipse and you'll notice that the JSP page directive will have encoding something like:

But for a better I18N and L10N support, it is recommended to follow UTF-8 encoding where ever possible. So, how do we change the default JSP file encoding to UTF-8 in eclipse? Simple. Just do these things:

1.  In Eclipse, go to **Windows -> Preferences -> Web -> JSP Files**
2.  Select **UTF-8 encoding** from the *Encoding *dropdown box there.
      
    ![][1] 

 [1]: http://veerasundar.com/img/2010/12/eclipse.png "eclipse-encoding-utf8"

That's it! And if you wonder how this change works, you can very well see that. In the same *Preferences window*, go to this location: **Preferences -> Web -> JSP Files -> Editor -> Templates**. Then in the right hand side, you'll see a list of templates defined for JSP files. Â And in a new JSP file template, you can see this code:

    

Here as you might have guessed, the *${encoding}* will be replaced by whatever we set in the above step.

The same method can be used to change the default encoding type for other file types too (css, html).