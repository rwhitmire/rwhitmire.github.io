---
layout: post
title: Deleting Directories in Windows With Long Paths (NPM)
---

## Problem

**Source Path Too Long**

The source file name(s) are larger than is supported by the file
system. Try moving to a location which has a shorter path name, or try
renaming to shorter name(s) before attempting this operation

## Solution

{% highlight sh %}
$ npm i -g rimraf
$ rimraf folder_to_delete
{% endhighlight %}

Have a nice day.
