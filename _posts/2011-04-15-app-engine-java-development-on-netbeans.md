---
title: App Engine Java development on Netbeans
author: Veera
layout: post
permalink: /2011/04/app-engine-java-development-on-netbeans/
categories:
  - How To
  - Java
tags:
  - app
  - app-engine
  - google
  - How To
  - howto
  - ide
  - Java
  - nbappengine
  - netbeans
  - tutorial
  - Ubuntu
---

![Google App Engine on Netbeans][1]If you just started with App engine development, you might be having a feeling that Eclipse is the preferred IDE. And, Google also has offered its [official plug-in][2] to Eclipse IDE alone.

 [1]: http://veerasundar.com/img/2011/04/nb.png "Google App Engine on Netbeans"
 [2]: http://code.google.com/appengine/docs/java/tools/eclipse.html "It's easy to use the Eclipse development environment to develop your Java App Engine application, just as you can to develop any other servlet-based web application. With the Google Plugin for Eclipse, it's even easier. The plugin lets you create, test and upload App Engine applications from within Eclipse."

But what about the people who are not using Eclipse? Of course, you can always do a command line development but who does that these days!?

For **[Netbeans][3]** users, the plug-in **[nbappengine][4] **brings the Java app engine development to the Netbeans platform. Here's how you can start developing your app engine apps on Netbeans.

 [3]: http://netbeans.org/
 [4]: http://kenai.com/projects/nbappengine/pages/Home "Plugin enables J2EE development web modules on Google App Engine."

## Installing nbappengine plugin on Netbeans

1.  First thing first: Install the latest Netbeans (6.9 at the time of typing these characters) and open the IDE.
2.  Go to **Tools -> Plugins -> Settings **and click 'Add' button to add the nbappengine update center URL.
3.  Now give a name and the URL of the update center according to your version of Netbeans. 
    *   **Netbeans 6.9**: http://kenai.com/downloads/nbappengine/NetBeans69/updates.xml
    *   **Netbeans 6.8**: http://kenai.com/projects/nbappengine/downloads/download/Latest_NetBeans68/updates.xml
    *   **Netbeans 6.7**: http://kenai.com/projects/nbappengine/downloads/download/1.0_NetBeans671/updates.xml
4.  After adding it, now come back to the **'Available Plugins' **tab and do a search for 'Google'. Select all the plug-ins that are related to the App Engine and click install button.

## Configuring App Engine SDK with Netbeans

Now you've installed the nbappengine plugin on your Netbeans IDE.  The coming steps will tell you how you can configure the plugin with the App Engine SDK.

1.  Download the [App Engine SDK][5] for Java and extract the zip contents to your favorite location.
2.  In the Netbeans IDE, go to **Services window **(Ctrl 5 is the shortcut key) and right click on the **Servers **menu and select '**Add Server**'.
3.  Now select the '**Google App Engine' **from the list of servers and in the next screen choose the folder where you extracted your SDK files.
4.  Configure the server properties if you wish to change it and then click '**Finish'**

 [5]: http://code.google.com/appengine/downloads.html#Google_App_Engine_SDK_for_Java

## Creating and deploying your first App Engine app on Netbeans

Now its the time to create a brand-new app engine application.

1.  In Netbeans, select '**File -> New Project -> Java Web -> Web application' **and follow the wizard to create the project.
2.  In the '**Server and Settings' **page choose '**Google App Engine' **as your server so that you'll get the app-engine related files (such as appengine-web.xml) pre-created for you.
3.  When you run/debug this application, Netbeans will start the app engine server (Jetty) and will deploy your application there.
4.  To deploy the application to the App Engine server, just right click on the project and choose '**Deploy to Google App Engine'. **it'll prompt you for the Google account credentials. After you provided that info, your app will be uploaded to the cloud.