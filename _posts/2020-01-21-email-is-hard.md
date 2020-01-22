---
layout: post
title: Email is Hard
---

Some things in the tech world should be simple but aren't. Email is one of those things.
Formatting HTML in an email is far more complicated than it should be. Every email client
behaves differently. Outlook uses an ancient version of Internet Explorer to render
HTML and CSS. Inline styles and table layouts are a necessity, but writing code this way
is a complete nightmare.

We decided to move forward with Foundation for emails as it solves the majority of these challenges.
It provides a nice set of components and inlines CSS automatically. This allows us to design
emails as if they were modern HTML.

The compiled HTML is then written to our core library and built into our binary as an embedded
resource. Dynamic pieces of the HTML are preserved as escaped handlebars syntax. The Handlebars.net
NuGet package then merges our templates with a model and we have an email that should display nicely
in most email clients.
