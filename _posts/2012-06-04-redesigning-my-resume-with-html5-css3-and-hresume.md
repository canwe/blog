---
title: Redesigning my resume with HTML5, CSS3 and hResume
author: Veera
layout: post
permalink: /2012/06/redesigning-my-resume-with-html5-css3-and-hresume/
thesis_javascript_libs:
  - 'a:1:{s:6:"jquery";s:0:"";}'
categories:
  - Personal
  - Web
tags:
  - css
  - css3
  - cv
  - Design
  - hresume
  - html
  - html5
  - microformats
  - resume
  - Web
---
# Redesigning my resume with HTML5, CSS3 and hResume

Recently I decided to redesign my online resume. Though the [old design][1] was quite satisfactory to me, I thought I could give it a makeover. So, here's the [new resume][2].

 [1]: https://www.dropbox.com/s/giavg7k0vmqkdt5/old-resume.png "Old resume design"
 [2]: http://veerasundar.com/resume/ "Veera Sundar - Resume"

If the redesign was just a bunch of HTML CSS changes, I wouldn't be blogging about it here. But, it isn't. There's much more than just the code change. I thought the tricks I used could help you in someway when you sit out to design your online resume. So decided to blog it.

## 1. Using hResume and Microformats

[Microformats][3] specifies a set of semantic markup to be used in the web pages so that the page can be easily understood by the machine (such as Google, Bing or other engines that eats the web pages). It also specifies a structure for marking up a resume page - the specification is [hResume][4]. I have used it in my [resume markup][5].

 [3]: http://microformats.org/ "microformats are a set of simple, open data formats built upon existing and widely adopted standards."
 [4]: http://microformats.org/wiki/hresume "hResume is a microformat for publishing resumes and CVs"
 [5]: https://github.com/vraa/resume/blob/master/index.htm "Resume markup"

Advantage!? If my page is displayed in a device which can parse these microformats, then it can present my information is more meaningful way - for example it can pull up my contact information from the page and ask the user to add me to his/her contact list.

## 2. Pulling up favicons from web pages

![][6]

 [6]: http://veerasundar.com/img/2012/06/skills.png "skills"

If you see the Skills section, you can notice that some skill pills(!) has an icon with it. This image is not served from my server, instead it is being dynamically pulled from the web pages itself, using **Google Favicon service**.

The sample code to illustrate this:

    .skill.appengine{
     background:url(http://www.google.com/s2/u/0/favicons?domain=appengine.google.com);
    }
    .skill.java{
     background:url(http://www.google.com/s2/u/0/favicons?domain=java.com);
    }

There, pass the appropriate domain value and you'll get back the favicon of that domain. One point to note is that this will not work if the domain has the favicon in *ico *format.

## 3. HTML CSS Ruler

![][9]

 [9]: http://veerasundar.com/img/2012/06/html5-css3-ruler.png

The highlighted part in the above image is done using pure HTML and CSS (including the arrows at both end). No images used. Here's the code.

#### HTML Markup:

      <div class='scale'>
        <span class='left-end'/>
        <span class='line'>
          <label class='lbl-left'>Recent</label>
          <label class='lbl-right'>Older</label>
        </span>
        <span class='right-end'/>
      </div>

#### CSS:

    .scale{
    	position: relative;
    	margin:20px 0 5px 0;
    }
    	.scale > span{
    		display: inline-block;
    	}
    	.scale .left-end{
    		width: 0;
    		height: 0;
    		border-top: 10px solid transparent;
    		border-right: 20px solid #ddd;
    		border-bottom: 10px solid transparent;
    		border-radius:5px;
    		position: absolute;
    		top:-10px;
    		left:0;
    	}
    	.scale .right-end{
    		width: 0;
    		height: 0;
    		border-top: 10px solid transparent;
    		border-left: 20px solid #ddd;
    		border-bottom: 10px solid transparent;
    		border-radius:5px;
    		position: absolute;
    		top:-10px;
    		right:0;
    	}
    	.scale .line{
    		width:100%;
    		border-top:1px dashed #ddd;
    	}
    		.scale .line label{
    			font-size:.8em;
    			color:#ddd;
    		}
    		.scale .line .lbl-left{
    			float:left;
    			margin-left:30px;
    		}
    		.scale .line .lbl-right{
    			float:right;
    			margin-right:30px;
    		}

So, what do you think about the redesign? If you are interested you can [fork this code @ github][8] and make it your own version. If you do so, don't forget to leave me a note so that I can also check it out.

 [8]: https://github.com/vraa/resume "Resume source at GitHub"