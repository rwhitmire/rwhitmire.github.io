---
title: "Deleting Directories in Windows With Long Paths (NPM)"
date: 2014-08-02
---

## Problem

**Source Path Too Long**

The source file name(s) are larger than is supported by the file
system. Try moving to a location which has a shorter path name, or try
renaming to shorter name(s) before attempting this operation

## Solution

```sh
$ npm i -g rimraf
$ rimraf folder_to_delete
```

Have a nice day.
