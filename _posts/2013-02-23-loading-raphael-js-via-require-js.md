---
title: Loading Raphael JS via require JS
author: Veera
layout: post
permalink: /2013/02/loading-raphael-js-via-require-js/
categories:
  - How To
  - Web
tags:
  - commonjs
  - javascript
  - module
  - raphael
  - requirejs
  - svg
  - Web
---

Raphael, the SVG JavaScript library, does not support require JS (yet). When loaded via `require('raphael')`, the code breaks throwing `'eve is not defined'` error in the console. There is a year long [issue thread][1] going on regarding this issue, but still there is no official fix yet.

 [1]: https://github.com/DmitryBaranovskiy/raphael/issues/524 "raphael breaks if loaded via require-js."

Anyway, in the same thread, people started providing patches that fix this issue (for time being). And in one of the project, I saw the Raphael source code split into different files and converted to CommonJS module pattern.

I took the liberty to extract only the raphael-js modules and put them together in this Github repo:Â [https://github.com/vraa/raphael-require][2]

 [2]: https://github.com/vraa/raphael-require "raphael-js source split into modules so that it can be loaded via require-js"

So, if you have a need, please feel free to use the above repo and let me know if you face any issues.