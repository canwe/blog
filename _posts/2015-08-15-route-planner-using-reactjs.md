---
layout: post
title: 'Google Maps Route Planner using ReactJS'
categories:
  - javascript
tags:
  - web
  - route-planner
  - application
  - javascript
  - reactjs
  - webapp
  - project
---
Before you start reading this article, I'd suggest to take a look at the [Route Planner application](http://veerasundar.com/route-planner) to understand what I am talking about. This post explains the process/code behind the route planner JavaScript application. You can fork/star [the project in Github](https://github.com/vraa/route-planner) if you wish.

[![Route Planner](http://i.imgur.com/BwVt4y2.png?1)](http://veerasundar.com/route-planner)

Having [photography as a hobby](https://500px.com/vraa) makes me travel to places whenever I get a chance. When planning such trips, I needed a tool that assist me in analysing different routes. **Google Maps** is good, but it did not have the feature that I wanted. I.e. showing distance and time between individual destinations. Having a hammer called [React](http://facebook.github.io/react/), this problem really started looking like a nail to me.

I have been using React for a while at work. In short, **I love it**. For a couple of my other side projects, I was using [Backbone](http://backbonejs.org/), which was good. However, with the added knowledge of React, I was really looking for an opportunity to unleash its power :). So I decided to make a simple React application that uses the **Google Maps API and helps me to plan routes for my trip**. 

## Laying the foundation - browserify and npm

It is very important to have a good build system and module framework to organize your code. As your project grows, you'll thank yourself for laying a good foundation in the beginning of your project. I decided to use [Grunt](http://gruntjs.com/) and [Browserify](http://browserify.org/) as by build system and bundler. Moreover, there's a JSX transform called [Reactify](https://www.npmjs.com/package/reactify) which makes it easy to use React and Browsrify together. With this, here's my `package.json` with all my project dependencies.

{% highlight javascript %}
{
    "name": "routeplanner",
    "version": "0.0.1",
    "description": "Google Maps Route Planner",
    "main": "index.js",
    "dependencies": {
        "backbone": "*",
        "underscore": "*",
        "react": "*",
        "react-backbone": "*",
        "react-mixin-manager": "*",
        "google-maps": "*",
        "domready": "*",
        "promise": "*",
        "classnames": "*",
        "vent": "*"
    },
    "devDependencies": {
        "grunt": "*",
        "browserify": "*",
        "grunt-browserify": "*",
        "grunt-cli": "*",
        "grunt-contrib-sass": "*",
        "grunt-contrib-cssmin": "*",
        "grunt-contrib-watch": "*",
        "grunt-contrib-connect": "*",
        "reactify": "*"
    },
    "scripts": {
        "dev": "watchify --ignore-watch=node_modules/** -v -d -t reactify src/js/index.js -o resources/js/routeplanner.js"
    },
    "author": "Veera"
}
{% endhighlight %}

I have also added `grunt-contrib-sass` and `grunt-contrib-connect` as my dev dependencies. These two helps in compiling my `.scss` files to `.css` and serving static files during development. 

As you can see I have also added a **npm script** for auto compiling my project - 
{% highlight javascript %}
watchify --ignore-watch=node_modules/** -v -d -t reactify src/js/index.js -o resources/js/routeplanner.js
{% endhighlight %}

This script, when running, makes sure to take all the JavaScript files referenced from `src/js/index.js`, transform them from JSX to pure JavaScript and then bundle all of them together into `resources/js/routeplanner.js`.

## Grunt build system

After you have your dependencies defined in a `package.json`, next step is to create your build pipeline. For my project, all I needed is three simple tasks.

1. Watch all my `.scss` files for changes.
2. When they change, compile them into `.css` files.
3. A static web server for my development.

Here's my `Gruntfile.js` that include the above said tasks.

{% highlight javascript %}
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                atBegin: true
            },
            sass: {
                files: ['src/scss/**/*.scss'],
                tasks: ['sass']
            }
        },
        sass: {
            dist: {
                files: {
                    'resources/css/main.css': 'src/scss/main.scss'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8888,
                    keepalive: true
                }
            },
            keepalive: true
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

}
{% endhighlight %}

With the bundler and build system is in place, now its time to write the real code.

## The React application

**React** provides the **View** part of the **MVC** model. All it needs a DOM element to render the React component. You can design your application to be a React component that contains other sub components. That's exactly how I designed the route planner. A single `<Application/>` component that contains all my sub components such as `<Header/>`, `<Map/>` etc. 

Here's a code snippet of my application.

### HTML Markup

{% highlight html %}
<div class="app" id="app"></div>
<script src="resources/js/routeplanner.js"></script>
{% endhighlight %}

### Render the React component into the DOM

{%highlight javascript%}
React.render(<Application />, document.getElementById('app'));
{%endhighlight%}

### The Application component

{% highlight javascript %}
var Application = React.createClass({
	render: function () {
        return (
            <div className='route-planner'>
                <Header/>
                <Map />
                <div className='panel'>
                    <RouteTabs />
                    <RoutePlan />
                </div>
            </div>
            );
});
{% endhighlight %}

With this structure, all you have to do is, create each components and define the `render()` method for each of them. For example, here's the `<Header/>` component.

{% highlight javascript %}
var Header = React.createClass({
    render: function () {
        return (
            <header>
                <h1><Route Planner</h1>
            </header>
            );
    }
});
{% endhighlight %}

## Handling the state

When designing a React application, it is very important to consider where you hold your application state. React suggests to have your components **stateless**. But if you want to have states, then hold the state as high as possible in the component hierarchy and pass it along to the child components as **props**. This way, there will be only one source of truth and data flow will be unidirection.

For my application, I decided to hold my state in the `<Application/>` component which is the top level component.

{% highlight javascript %}
var Application = React.createClass({
    getInitialState: function () {
        return {
            routes: this.load() || SeedData.routes,
            previousRoute: -1,
            activeRoute: 0,
            selectedPlace: null
        };
    },
    render: function () {
        var mapService = this.props.mapService,
            route = this.state.routes.at(this.state.activeRoute);
        return (

            <div className='route-planner'>
                <Header/>
                <Map mapService={mapService} route={route}/>
                <div className='panel'>
                    <RouteTabs
                    routes={this.state.routes}
                    active={this.state.activeRoute}
                    />
                    <RoutePlan
                    routeIndex={this.state.activeRoute}
                    fadeOut={this.state.hideActiveRoute}
                    />
                </div>
            </div>
            );
    }
});
{% endhighlight %}

The `getInitialState()` function returns the initial state of my application. Whenever there's some data changes, I have methods that update the `<Application/>` component's `state` object. When the state changes, React calls the `render()` method of the `<Application/>` component, inside which I pass the current state object to the child components.

## Conclusion

I believe I showed you the basic structure of the Route Planner application. If you'd like to see more code, feel free to fork [the route-planner project in Github](https://github.com/vraa/route-planner). If you have any questions or wants to know more about any piece of code in this project, please leave a comment.