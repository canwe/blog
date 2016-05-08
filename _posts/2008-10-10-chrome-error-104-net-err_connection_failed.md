---
title: 'Chrome : Error 104 (net::ERR_CONNECTION_FAILED)'
author: Veera
layout: post
permalink: /2008/10/chrome-error-104-net-err_connection_failed/
show_ad:
  - yes
views:
  - 1401
ratings_users:
  - 0
ratings_score:
  - 0
ratings_average:
  - 0
dsq_thread_id:
  - 891103912
categories:
  - Web
tags:
  - browser
  - chrome
  - google
---

Initially there were no problems with Google Chrome browser. It just worked out of the box. But suddenly one fine day, it stopped loading web pages, showing 'Error 104 (net::ERR\_CONNECTION\_FAILED)'Â message. At first I thought it's a fresh bug coming out of chrome, Since Firefox and IE were just fine, I had to put the blame on Chrome.

But later, I found that **Zone Alarm firewall is blocking Chrome**. Somehow, the application settings for Chrome in Zone alarm are all set to 'Deny'Â and Chrome was failing to make a connection to internet. At first, I didn't have a clue why chrome was failing but when I googled for the error message '[`Error 104 (net::ERR_CONNECTION_FAILED)`][1]', it came to my mind that firewall might be the problem.

 [1]: http://www.google.com/search?rlz=1C1GGLS_enIN291&sourceid=chrome&ie=UTF-8&q=Error 104 (net::ERR_CONNECTION_FAILED)

Now changed the setting and Chrome is back in action.