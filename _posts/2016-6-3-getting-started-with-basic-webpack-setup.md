---
layout: post
title: 'Getting started with basic webpack setup'
categories: 
  - web
tags: 
  - javascript
  -  web
  -  webpack
  -  bundler
  -  code
  -  howto
  -  setup
---
I hope I don't need to introduce you to [Webpack](https://webpack.github.io/). By this time, you would have read through the [webpack documentation](http://webpack.github.io/docs/) and figured out that the page is for the NASA people. However, I would like to start with this Gem:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">1. have an exciting app idea<br>2. create project folder<br>3. include WebPack<br><br>…<br><br>47. lose all passion for project and give up<br><br>GOTO 1</p>&mdash; I Am Devloper (@iamdevloper) <a href="https://twitter.com/iamdevloper/status/702464176954875904">February 24, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

So, here's a very, very basic setup of Webpack to help you get started. I will keep this article as simple as I can. Also I assume that you know the basics of NPM and have installed Node in your machine.

## 0. Our Goal

We are going to create a simple setup that will have the following structure:

{% highlight text %}
app
|--src
|   |--js
|   |   `--main.js
|   `--scss
|       `--main.scss
|--resources
|   `--js
|       `--bundle.js
|--package.json
`--index.html
{% endhighlight %}

Go ahead and create those files in your favorite editor (except the *bundle.js*). We will have the webpack to:

1. bundle our JavaScript files from *src* folder and generate the output to *resources/js/bundle.js* file.
2. Compile *.scss* file to *.css* file and bundle it with our JS file.
3. Have a auto reloading mechanism that auto refresh the browser as you make changes to your JavaScript / Sass files.

## 1. Installing Webpack and bundling JavaScript

First, lets add some test code to the *src\js\main.js* file.

{% highlight javascript %}
console.log('Hello Webpack');
{% endhighlight %}

You need to run `npm install webpack -g` (to have the webpack command available globally). Also, it is better to install it as a dev dependency too. So run `npm install webpack --save-dev`.

Now that you have webpack installed, it's time to tell it what to do. We do this via a configuration file. Create a file called *webpack.config.js* in the root folder and add the following content in it.

{% highlight javascript %}
/* webpack.config.js */
module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './resources/js',
        filename: 'bundle.js',
        publicPath: '/resources/js'
    }
}
{% endhighlight %}

The configuration tells webpack:

1. What is our starting point: **entry**
2. Where to generate the bundled file: **output.path / output.filename**
3. What's the path that browsers will ues to load the bundled file: **output.publicPath**. This is important to have the auto reload work properly when we use _webpack-dev-server_.

Now if you run `webpack` in your command line, you will see that the JavaScript file is getting bundled and the output is generated in *resources/js/bundle.js* file.

## 2. Compiling SASS files

Let's setup SASS compilation. In your *src\sass\main.scss* add some test SASS code.

{% highlight sass %}
body {
    background-color: #f00;
}
{% endhighlight %}

To enable SASS compilation, we need to install loaders which will be used by webpack. Run `npm install style-loader css-loader sass-loader --save-dev`.

Next, you need to update *webpack.config.js* file, instructing webpack to use the loaders. The final content of webpack configuration will be:

{% highlight javascript %}
module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './resources/js',
        filename: 'bundle.js',
        publicPath: '/resources/js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    }
}
{% endhighlight %}

Take a look at the `module.loaders` configuration. We are adding a new loader that *tests* for the *.scss* extension and for the matching files, uses a **series of transformation** (from right to left) sass -> css -> style.

Now update *src\js\main.js* to include the SASS file.

{% highlight javascript %}
require('../scss/main.scss');
console.log('Hello Webpack');
{% endhighlight %}

Now if you run `webpack`, you will see that the SASS file is converted and bundled together with our JS files into *resources/js/bundle.js*.

## 3. Serving and Auto reloading changes.

We need a web server that serves our file. Webpack provides one. Install it with `npm install webpack-dev-server -g` (to have the command available globally) and `npm install webpack-dev-server --save-dev` to define a dev dependency in your *package.json*.

Add below content to the *index.html* file to load our bundled file (omitting boilerplate code for brevity)

{% highlight html %}
<html>
    <body>
        <h1>Hello World</h1>
        <script type="text/javascript" src="resources/js/bundle.js"></script>
    </body>
</html>
{% endhighlight %}

Now run `webpackdev-server --inline`. The parameter `--inline` instruct the webpack server to auto reload changes. Without it, it will just serve the files.

Now open this url in a browser: [http://localhost:8080/](http://localhost:8080/) and you will see the text **Hello World** in a red color background. Now update any of the *main.scss* or *main.js* and you will see the changes are reflected immediately.

Happy Webpacking!