---
title: How to make Reliance Netconnect broadband to work on Ubuntu 10.04
author: Veera
layout: post
permalink: /2010/06/how-to-make-reliance-netconnect-broadband-to-work-on-ubuntu-10-04/
dsq_thread_id:
  - 891298378
categories:
  - How To
  - Tech
  - Web
tags:
  - broadband
  - gnome-ppp
  - internet
  - lucid
  - netconnect
  - reliance
  - Ubuntu
  - ubuntu-10-04
  - Web
  - wvdial
---

If you are [following me][1] in this blog, you might be aware of that I [switched to Ubuntu][2] 10.04 last week. On changing, I had to give some effort to make sure my Reliance Netconnect broadband connection working in Ubuntu. Here's how I did it, based on referring several sources and forums in the internet.

 [1]: http://feeds2.feedburner.com/veerasundar/dreamz "Subscribe to this blog"
 [2]: http://veerasundar.com/blog/2010/06/changed-to-ubuntu-10-04/ "Changed to Ubuntu 10.04"

## Method 1: The Out-Of-The-Box method

Getting internet connection working in this method is really a child's play. Just follow these steps:

1.  The MUST thing first - Buy a Reliance Netconnect broadband USB device! ![:)][3] Most probably it would be a huawei device and I assume it is.
2.  Plug-it in any available USB port.
3.  Ubuntu 10.04 should detect your device now. Now go to **System -> Preferences -> Network connections **and select the **Mobile Broadband **tab. You'll see something like this:![Screenshot-New Reliance Mobile Broadband Connection on Ubuntu 10.04][4]
4.  From the above step, just follow whatever the wizard says (don't worry! the wizard won't ask you to jump from the building). Select **India** in *Providers Country *page and select **Reliance **in *Provider *page respectively.
5.  In the last window, give a name to the connection (*Reliance *for example) and then enter your USB device number which is nothing but the mobile number in the *user name* and *password* fields (yes, both are same). In the *Number *field, type **#777 **if it is not already there.![Screenshot-Editing Reliance connection on Ubuntu 10.04][5]
6.  If you want, you can check the *Connect automatically* check box.
7.  Now, click apply and you're done. The connection should work now. If you didn't select *connect automatically* then you can click on the network icon on the Ubuntu top bar and select your connection which you created just now.

 [3]: http://veerasundar.com/blog/wp-includes/images/smilies/icon_smile.gif
 [4]: http://veerasundar.com/img/2010/06/Screenshot-New-Mobile-Broadband-Connection.png "Screenshot-New Reliance Mobile Broadband Connection on Ubuntu 10.04"
 [5]: http://veerasundar.com/img/2010/06/Screenshot-Editing-Reliance.png "Screenshot-Editing Reliance connection on Ubuntu 10.04"

**  
Unfortunately, the above method **did not work **for me. So, I researched (googled, to be accurate) a bit more and found another way.

## Method 2: The Do-It-Yourself way:

Since Ubuntu couldn't come to my rescue, I have to make my hands dirty to get the connection working. Followed these steps:

1.  In order to manually connect with Reliance netconnect broadband we need two packages: **wvdial **(tool to make connections from a modem)** **and **gnome-ppp **(front end to the wvdial).
2.  These two packages have few dependencies too. Means you need to install all of them. Since you do not have an active internet connection yet on your machine, you cant apt-get anything. So, Â get a help from your friend who \*might\* be having an internet connection system and download the below packages. 
    *   [libwvstreams4.6-base\_4.6.1-1\_i386.deb][6]
    *   [libwvstreams4.6-extras\_4.6.1-1\_i386.deb][7]
    *   [libuniconf4.6\_4.6.1-1\_i386.deb][8]
    *   [wvdial\_1.60.3\_i386.deb][9]
    *   [gnome-ppp\_0.3.23-1ubuntu2\_i386.deb][10]
3.  Now bring the above downloaded files to your machine and install them (right click and select *Open with GDebi package installer*) in the **above given order**.
4.  Now open *terminal *window and give the command* lsusb *which will list all USB devices attached to the laptop,. You must see the Hauwei device listed there. And then give the command *dmesg *to see which port our model actually using. It would be something like TTYUSB0, TTYUSB1, etc.
5.  Now give the command *sudo gnome-ppp * to start the wvdial front end utility.![Screenshot-GNOME PPP][11]
6.  Now go to setup and in that window select the modem port (/dev/ttyUSB0 for example, which you must have seen in the 4th step using dmesg command) in the *Device *field and click *detect*. Your modem must be detected now. Then select *Type *as *USB Modem* and select the maximum available speed for the *speed *field.![Screenshot-gnome-ppp-Setup][12]
7.  Click *close *and come back to the *gnome-ppp *front window. Enter the username and password (which is your device number), **#777 **for the number and click connect. Now you should be connected.
8.  Here after, whenever you want to connect to internet, just open gnone-ppp and click connect. The settings must have been saved already.

 [6]: http://packages.ubuntu.com/uk/lucid/i386/libwvstreams4.6-base/download "Download Page for libwvstreams4.6-base_4.6.1-1_i386.deb on Intel x86 machines"
 [7]: http://packages.ubuntu.com/us/lucid/i386/libwvstreams4.6-extras/download "Download Page for libwvstreams4.6-extras_4.6.1-1_i386.deb on Intel x86 machines"
 [8]: http://packages.ubuntu.com/lucid/i386/libuniconf4.6/download "Download Page for libuniconf4.6_4.6.1-1_i386.deb on Intel x86 machines"
 [9]: http://packages.ubuntu.com/lucid/i386/wvdial/download "Download Page for wvdial_1.60.3_i386.deb on Intel x86 machines"
 [10]: http://packages.ubuntu.com/hardy/i386/gnome-ppp/download "Download Page for gnome-ppp_0.3.23-1_i386.deb on Intel x86 machines"
 [11]: http://veerasundar.com/img/2010/06/Screenshot-GNOME-PPP.png "Screenshot-GNOME PPP"
 [12]: http://veerasundar.com/img/2010/06/Screenshot-Setup.png "Screenshot-gnome-ppp-Setup"

Fortunately, the above methid **did work **for me, because of which you are now seeing this post! ![:)][3]