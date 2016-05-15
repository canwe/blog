---
title: 'Git tutorial &#8211; comparing files with diff'
author: Veera
layout: post
permalink: /2011/06/git-tutorial-comparing-files-with-diff/
categories:
  - How To
  - Java
tags:
  - compare
  - diff
  - git
  - howto
  - Java
  - scm
  - version
---

![compare][1]Continuing from my last post, which explained [my Git workflow][2], in this post I'm sharing how to compare different versions of files. Before that, you might want to read the [Getting started with Git][3] post too if you haven't done already.

 [1]: http://veerasundar.com/img/2011/06/compare-apple-orange-300x255.gif "compare-apple-orange"
 [2]: http://veerasundar.com/blog/2011/06/git-tutorial-my-git-work-flow/ "Git tutorial - my Git work flow"
 [3]: http://veerasundar.com/blog/2011/06/git-tutorial-getting-started/ "Git tutorial - Getting Started"

The main objective of version controlling is to enable you to work with different versions of files. Git provides a command **diff **to let you to compare different versions of your files.

The most common scenario to use *diff *is to see what changes you made after your last commit. Let's see how to do it.

I opened the *helloworld *project from [my last example][4] with a clean working directory. i.e. I have already committed all my code changes. So, a git status will give an output like this:

 [4]: http://veerasundar.com/blog/2011/06/git-tutorial-my-git-work-flow/ "My Git work flow"

{% highlight text %}

    C:/vraa/projects/helloworld> git status
    # On branch master
    nothing to commit (working directory clean)

{% endhighlight %}

Let's make a change in the *helloworld.txt *file now and compare this file with previously committed version.

{% highlight text %}

    C:/vraa/projects/helloworld> edit helloworld.txt
    C:/vraa/projects/helloworld> git diff HEAD helloworld.txt
    diff --git a/helloworld.txt b/helloworld.txt
    index e4f37c4..557db03 100644
    --- a/helloworld.txt
        b/helloworld.txt
    @@ -1  1 @@
    -Hello India
     Hello World

 {% endhighlight %}

There it is. Git shows the exact change I made in the file. But, if you look at the diff command, you might wonder what HEAD is doing there! Well, it is there for a purpose.

If you can recall, Git has an* index *between local repository and your working directory. So most of Git commands can either refer to *index *or *the local repo*. When you say HEAD in your Git command, it refers the *local repo*.

{% highlight text %}

    //  compare the working directory with local repository.
    git diff HEAD [filename]

    // compare the working directory with index.
    git diff [filename]

    // compare the index with local repository.
    git diff --cached [filename]

{% endhighlight %}

You can also compare files between two different commits. Every commit in Git has a commit id which you can get when you give** git log**. Then you can use the commit id if diff command like this.

{% highlight text %}

    git diff 7eb2..e03 812...a3f35

{% endhighlight %}

You can compare not just a single file, but all your changes at once. If you made changes in many files, just don't mention any file name in the diff command which will diff all the changed files.

{% highlight text %}

    // compares working directory with index,
    // i.e. shows the changes that are not staged yet.
    git diff

    // compares working directory with local repository.
    // shows the list of changes after your last commit.
    git diff HEAD

    // compares index with local repository.
    // shows the diff between your last commit and changes to be committed next.
    git diff --cached

{% endhighlight %}

That's it about the basic introduction to compare files in Git. If you have any comments about this series, do let me know. I'll continue with other topics in my next post.