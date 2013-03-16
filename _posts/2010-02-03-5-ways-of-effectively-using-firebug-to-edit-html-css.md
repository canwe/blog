---
title: 5 Ways of effectively using Firebug to edit HTML, CSS
author: Veera
layout: post
permalink: /2010/02/5-ways-of-effectively-using-firebug-to-edit-html-css/
categories:
  - How To
  - Web
tags:
  - css
  - extension
  - firebug
  - firefox
  - html
  - javascript
  - Web
---
# 5 Ways of effectively using Firebug to edit HTML, CSS

Firebug is an inseperable tool in any Web developer's toolbox. It's one of the best things that happened to JavaScript and Web Development. I have been using Firebug for a long time and have been wondering how my web development would be if there is no Firebug. So, in this article, I'm sharing few of my tips and tricks to use Firebug effectively to speed up your web development.

## 1. Visually modifying page layout in Firebug

Firebug's *Layout *panel let's you to examine the selected element's height, width and other position related attributes in a visual manner. Apart from showing the positional attribute values, the *Layout *panel allows you to edit the values directly from the panel. To edit a value, just click on it and the modified value will be reflected immediately on the page.

![Visually modifying page layout using Firebug][1]

 [1]: http://veerasundar.com/img/2010/02/firebug_layout.png "Visually modifying page layout using Firebug"

## 2. See the computed styles for an element

As you might have known, CSS apply styles in a cascading manner (after all, it is *cascading* style sheet, isn't it?). I.e. The styles that are defined for the parent element will be applied to all of it's child elements too. But, the child element is allowed to override any of the parent styles and define its own styles. Thus, the final set of style attributes which are applied to an element is always changed at the run time. To view the final style attributes, which are calculated after applying all the inherited style definitions, are displayed in the *Computed* panel. Please note that it is not possible to edit any attribute from this panel.

![See the computed styles for an element][2]

 [2]: http://veerasundar.com/img/2010/02/firebug_computed.png "See the computed styles for an element"

## 3. Find out which CSS file is the black sheep

Some times it becomes very difficult to figure out which CSS definition is affecting a element style. When more than one CSS files are being used in a single page, then it becomes even more difficult. In such scenarios, Firebug could be used to identify the CSS file name from which an CSS style definition is being taken. For example, in the below screenshot you can see that the particular page uses two CSS files (*screen.css* and *reset.css*) and the *Style* panel clearly displays which style is taken from which CSS file. The overridden styles are striked out. The *Style* panel also links to the URL of the style file being used, so it is easy for us to get the entire CSS file if needed.

![Find out which CSS file is the black sheep][3]

 [3]: http://veerasundar.com/img/2010/02/firebug_multi_styles.png "Find out which CSS file is the black sheep"

## 4. Not just edit CSS, edit HTML too

Firebug *Style* panel lets you to edit any CSS attribute and view the results immediately. Firebug can be used to edit the HTML content also. To do it, right click on the tag which you want to edit in the *HTML* panel and then select `Edit HTML` (or, just double click on the element). Firebug opens the inner HTML of the element you selected in edit mode. The changes you make will be visible on the page immediately.

![Not just edit CSS, edit HTML too][4]

 [4]: http://veerasundar.com/img/2010/02/firebug_edit-e1265179743540.png "Not just edit CSS, edit HTML too"

## 5. Jump to the element you are editing

This is a nifty option for quickly navigating to the element that you are currently working. While editing a HTML element, right from the *HTML* panel, you can easily bring that element into view by right clicking and selecting *Scroll into view*.

![Jump to the element you are editing][5]

 [5]: http://veerasundar.com/img/2010/02/firebug_scroll_view-e1265179923269.png "Jump to the element you are editing"

Become IT expert with [testking 350-001][6] training course. Get the latest [testking SY0-201][7] css tutorials and [testking 642-901][8] study guide to learn about different web applications.

 [6]: http://www.testking.com/350-001.htm
 [7]: http://www.testking.com/SY0-201.htm
 [8]: http://www.testking.com/642-901.htm