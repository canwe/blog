---
layout: post
title: 'How to use Charles Proxy Map Local'
description: 'Charles Proxy Map Local tool enables us to use local files as if they were part of remote server.'
categories:
  - web
tags:
  - web
  - charles
  - proxy
  - mitm
---
Sometimes I may want to test my local code against remote site without actually deploying it. For example, [this blog](http://veerasundar.com/blog) uses a style sheet from the address [http://veerasundar.com/blog/css/v8-main.css](http://veerasundar.com/blog/css/v8-main.css). I may want to map this stylesheet to a local file so that I can see the local changes immediately in my blog without actually deploying to remote server. This helps me to debug without impacting production environment.

In order to do this, I use **Charles Proxy**. Let's see how its done.

## Enabling Map Local in Charles Proxy

1. First you need to download and install the [Charles Proxy](https://www.charlesproxy.com/). It's a paid software, but there's a trial version also available.
2. Once installed, open the Charles Proxy.
3. To enable Windows Proxy: `Proxy -> Windows Proxy`
4. To limit recording to specific website: `Proxy -> Recording Settings -> Include -> Add` and add the website that you are testing.

    ![Charles Proxy Recording Settings](http://i.imgur.com/Cr0lvUA.png)

    By default, Charles proxy records all the network traffic, which may be unnecessary. For our task, we are only interested in one specific website. So we are telling Charles Proxy to record only the traffic to the included sites as seen in above picture.
5. Once you have enabled Proxy and Recording, now go to a browser (Chrome) and open the website [http://veerasundar.com/blog](http://veerasundar.com/blog). Now you will see the network requests are logged in Charles Proxy's sidebar.
6. Expand `http://veerasundar.com` until you see the specific resource that you want to map. In my case, I want to map my CSS file. Right click on that file and select `Map Local`

    ![Charles Proxy Map Local](http://i.imgur.com/CkII3Dg.png)

    In the *Edit Mapping* dialog, select a local file path in `Map to -> Local Path` setting and click `OK`.
7. Now when you refresh the site in browser, the CSS file alone will be served from your local file, while the rest of the site contents will be loaded from remote server.

## Removing Map Local in Charles Proxy

To remove a local mapping for a remote file in Charles Proxy, you need to

1. Go to `Tools -> Map Local`
2. Now you will see all the mapped files in the dialog.
    ![Charles Proxy Remove Map Local](http://i.imgur.com/TgbKr6T.png)
3. Just edit / remove any mapping.



