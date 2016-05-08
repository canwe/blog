---
layout: post
title: 'Basic Setup to get started with grunt as a server and less compiler'
categories:
  - javascript
tags:
  - javascript
  - web
  - brainvita
  - grunt
  - less
  - sass
  - connect
  - grunt-connect
  - grunt-less
  - grunt-sass
  - server
---
As a web developer, often I am in a need of quickly putting together a static website to try out ideas. My requirements are simple: create some html/css files in my project folder, hit the browser, and see my files rendered there.

Using an Apache / Nginx server for this menial task was an overkill. So, I have been using the simple one line server: `python -m SimpleHTTPServer` in Ubuntu/Mac. And, when I'm in Windows, [mongoose](http://cesanta.com/mongoose.shtml) was my go to tool to serve files from any folder.

But, lately, I have started using [Grunt](http://gruntjs.com/) for the same purpose. Apart from providing the tools for serving static files, grunt can also compile my less files to CSS and can do it as and when I make changes to the less files. Automation FTW!

So, here's the basic configuration that I'm following for my grunt setup so that you can also get started with grunt.

## Basic setup to server static files and auto compile less to CSS with Grunt

Before you start, you need to have **Node** installed in your system. Then follow the steps blow.

1. If you do not have a project folder already, you can get started by simply cloning this one: `git clone https://github.com/vraa/grunt-template.git`. 
2. If you already have a project folder, just copy the `package.json` and `Gruntfile.js` files to your project's root folder. 
3. Once you have project folder setup, in a command line, run `npm install` from your project root. This will install all the dependencies in a folder named *node_modules*. 
4. Next, to start serving this folder content, run `grunt connect`. Then you can access this site using http://localhost:9090/
5. If you want to also compile less files automatically, just open a new terminal and run the command `grunt watch` from your project root. Keep the server running in another terminal.  After this, as soon as you make changes your less files, it will be automatically combined into corresponding css files. viola!

## How does this work?

In order to put together this simple setup, we are using three grunt plugins.

1. grunt-contrib-connect : the server
2. grunt-contrib-less : the less compiler
3. grunt-contrib-watch : to auto compile less to css as soon as you make changes to it.

if you look at the `package.json` file, you can see that these dependencies are added along with the core `grunt` dependency.

### package.json
{% highlight javascript %}
{
  "name": "grunt-template",
  "version": "0.0.1",
  "devDependencies": {
    "grunt": "^0.4.5",
    "grunt-contrib-connect": "^0.7.1",
    "grunt-contrib-less": "^0.11.1",
    "grunt-contrib-watch": "~0.4.0"
  }
}
{% endhighlight %}

When you do `npm install`, node will download and install all the modules to your local *node_modules* folder.

Once you have all the dependencies ready, then you need to tell Grunt how to run these. This you can do via `Gruntfile.js`.

### Gruntfile.js
{% highlight javascript %}
module.exports = function(grunt){

	grunt.initConfig({
		less : {
			dist : {
				files : {
					'css/main.css' : 'css/main.less'
				}
			}
		},
		watch : {
			css : {
				files : '**/*.less',
				tasks : ['less']
			}
		},
		connect: {
			server : {
				options : {
					port : 9090,
					keepalive : true
				}
			},
			keepalive : true
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
};
{% endhighlight %}

As you can see in the above file, we are telling

1. *less* plugin to compile *css/main.less* file to *css/main.css* file.
2. *watch* plugin to monitor changes for any file that ends with *.less extension and when there are changes, run the task 'less' (which will compile less to css).
3. Finally, *connect* to start a server at port 9090 and server to any request. We also tell the server not to die and until we kill it.

With this simple setup, next time when I need a static website, all I have to do is:

1. git clone https://github.com/vraa/grunt-template.git
2. npm install
3. grunt watch (*in one terminal*)
4. grunt connect (*in a second terminal*)







