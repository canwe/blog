---
layout: post
title: Responsive timeline with CSS and HTML
categories:
  - web
tags:
  - css3
  - html
  - code
  - how-to
  - util
  - tool
  - component
  - github
---
**TLDR;** [https://github.com/vraa/css-timeline](https://github.com/vraa/css-timeline)


Just finished updating/redesigning (or messing up) [my online resume](http://veerasundar.com/resume/). For the new design, I needed a timeline like UI component to show my work history. The componenent need not to be a perfect timeline, with actual scaling and all. But it should look like one and should respond to the screen width.

Here's a screenshot of the timeline component from my resume's work history section.

<a href="http://www.flickr.com/photos/94921037@N05/12284453065/" title="timeline by v33ra, on Flickr"><img src="http://farm4.staticflickr.com/3786/12284453065_87e377c0e9_c.jpg" width="800" height="557" alt="timeline"></a>

And, here's the responsive layout of the timeline in smaller screens.

<a href="http://www.flickr.com/photos/94921037@N05/12284483625/" title="timeline-responsive by v33ra, on Flickr"><img src="http://farm8.staticflickr.com/7391/12284483625_0f187a5924_c.jpg" width="501" height="800" alt="timeline-responsive"></a>

After implementing the design, I thought of separating the timeline code alone as a re-usable component. Hence the new github repo: [https://github.com/vraa/css-timeline](https://github.com/vraa/css-timeline).

If you have a need to use something similar in your code, feel free to fork and use. Customize the variables in timeline.less file to your taste and compile it with less.js.

Fair warning: There are few limitations with the current implementation, which I'll fix in near future. If you happened to patch any bugs, please send me a pull request. TIA.

