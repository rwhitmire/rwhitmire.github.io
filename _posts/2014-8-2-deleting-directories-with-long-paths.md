---
layout: post
title: Deleting Directories in Windows With Long Paths (NPM)
---

I'm a huge fan of [Node.js](http://nodejs.org/) and the [Node Package Manager](https://www.npmjs.org/). However, Windows noders have likely come across a rather annoying problem when trying to delete directories with heavily nested dependencies. You get a really ridiculous error message that looks something like this:

![remove directory error](/images/deleting-directories-with-long-paths/long-path-error.png)

Microsoft's [best suggestion](http://answers.microsoft.com/en-us/windows/forum/windows_vista-files/the-source-file-names-are-larger-than-is-supported/438a20a7-a964-4325-b755-8b5d75ddd15b) seems to be to download some crappy software to help you out. I'm just not into that idea - and like any software developer, I set out to solve this problem with my own software. I created my first NPM package and named it wdr. That's short for Windows Directory Remover. It's not a brilliant name, but I was trying to aim for something I would remember. If you're also having this problem, do a `npm install -g wdr`, and then `wdr "C:\folder to delete"`.

I selfishly created this for my own convenience, but at least I'm sharing. Also, please don't give me any credit. I just wrapped my own package around another module named [rimraf](https://www.npmjs.org/package/rimraf) - mostly because I would never remember that name.