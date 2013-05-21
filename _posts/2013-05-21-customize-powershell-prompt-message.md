---
title: Customize Powershell Prompt Message
layout: post
categories:
  - productivity
tags:
  - productivity
  - git
  - powershell
  - windows
  - code
  - howto
description : This post explain how you can customize Powershell prompt to show the current Git branch name.
---
At work, I use [PowerShell] (http://en.wikipedia.org/wiki/Windows_PowerShell) a lot, mostly for Git commands. By default, the powershell prompt message shows you the full path of the current working directory. i.e. something like this;
    
    PS C:\vraa\workspace

Which is fine, but I'd like this prompt to be short and informative. In short, I'd want the prompt to:

  *  Show only the folder name, instead of full path.
  *  Show the current branch name if inside a Git repo.

Powershell provides an option to customize its behavior. You can write your customization, in terms of functions, and keep them in your $PROFILE file. So, in order to achive my requirement, I used following function.

  1.  In Powershell, type `notepad.exe $PROFILE`.
  2.  Add following function there.

<pre>
function prompt{
  $p = Split-Path (
     Get-Location
     ) -Leaf
  
  if(Test-Path .git){
    git branch | foreach{
      if($_ -match "^\*(.*)"){
       $p += " [" + $matches[1] + " ] "
      }
    }
  }
  $p = $p + ">"
  Write-Host $p -NoNewline -ForegroundColor Green
  return " "
}
</pre>

Be sure to keep the function name as `prompt`. Save and restart Powershell.

After the above customization, when you are in a normal folder, Powershell prompt will look like this:

    foldername>

And, when inside a Git repo, the prompt message will look like:

    gitrepo [ master ] >

Thanks to [this] (http://techblogging.wordpress.com/2008/10/12/displaying-git-branch-on-your-powershell-prompt/) for the script to detect current Git branch name.

So, what is your [Powershell customization] (http://veerasundar.com/blog/2012/07/using-multiple-versions-of-jdk-and-eclipse-in-single-machine/)?
