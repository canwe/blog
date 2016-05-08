---
layout: post
title: 'How to set Expires header for static assets in Nginx'
categories:
  - web
tags:
  - web
  - code
  - server
  - nginx
  - asset
  - performance
  - optimization
---
This blog is [built on Jekyll](http://veerasundar.com/blog/2013/03/moving-from-wordpress-to-jekyll/) and served by Nginx. I chose Jekyll so that I could gain some performance boost from the static, pre-generated blog content rather than serving every blog request from a database. Nginx was the obvious choice because it's the efficient HTTP server out there.

However, every time I [check my pages in Pagespeed](https://developers.google.com/speed/pagespeed/insights/?url=veerasundar.com%2Fblog&tab=desktop), it complains that the static assets are not optimized and I should **Leverage browser caching**. This is because I missed to set Expires header in my Nginx configuration. Turns out it is very simple to do.

## Nginx configuration to set Expires header for images and static assets

Assuming you are using a Unix flavoured operating system (Ubuntu, in my case);

1. Go to `/etc/nginx/sites-available`.
2. Open your site configuration in an editor. For example, `vi veerasundar.com` (Use sudo if necessary).
3. In the server configuration, add the code to set Expires header if an request is made to a static file. Here's my complete configuration for this server.

{% highlight text %}
server {

        listen   80;
        server_name veerasundar.com;

        access_log /location/of/access.log;
        error_log /location/of/error.log;

        location / {

                        root   /location/of/www;
                        index  index.html index.htm;
                        
                        if ($request_uri ~* ".(ico|css|js|gif|jpe?g|png)$") {
                                        expires 30d;
                                        access_log off;
                                        add_header Pragma public;
                                        add_header Cache-Control "public";
                                        break;
                                }

                        }

            }

{% endhighlight %}

After making the changes, save the file and restart nginx - `sudo /etc/init.d/nginx restart`.

Now your static files are served with **Expires** header and will be cached by the browser.