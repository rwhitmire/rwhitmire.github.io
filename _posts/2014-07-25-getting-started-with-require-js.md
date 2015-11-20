---
layout: post
title: Getting Started With Require.js
---

Require.js has been growing in popularity over the past few years, but can be rather intimidating
for beginners. I don't know if this blog post will actually help anyone, but at the very least I'll have
something to reference when I inevitably forget all of this useful information.

I created a barebones demo application. If you just want to look at the
code, go ahead and [download](/downloads/requirejs-demo.zip) it. In fact, it might be easier if you
download the project first and follow along.

## Preface

With require.js, you'll never have to include ".js" file extensions to file paths. It knows you are loading javascript.

## Config

You'll want to start with a config file. This is where you define commonly used modules. Here, I am
loading jquery, bootstrap, and knockout. In addition, I am including a shim for bootstrap. I do this
because the bootstrap.js library does not natively support AMD (asynchronous module definition). Therefore,
I have to set jquery as a dependency for bootstrap.

{% highlight js %}
var require = {
    baseUrl: ".",
    paths: {
        "jquery": "bower_components/jquery/dist/jquery",
        "bootstrap": "bower_components/bootstrap/dist/js/bootstrap",
        "knockout": "bower_components/knockout/dist/knockout"
    },
    shim: {
        "bootstrap": { deps: ["jquery"] }
    }
};
{% endhighlight %}

## Startup

You will have to pick a file to be the entry point of your application. I'm not very creative, so I call mine
startup.js. Startup.js looks like this:

{% highlight js %}
define(['knockout', 'app/viewmodels/home', 'bootstrap'], function(ko, viewModel) {

    ko.applyBindings(viewModel);

});
{% endhighlight %}

This file is saying "I want knockout.js, home.js, and bootstrap.js - once all of those files are done loading,
execute some function." If you don't know knockout.js, ko.applyBindings is simply telling my viewModel to bind
itself to the DOM.

Remember how we added a jquery dependency to bootstrap in our config file? Our startup.js will automatically
load jQuery in addition to the other scripts because require is smart enough to know bootstrap requires jquery.


## Define
Now, if we take a look at viewmodels/home.js, we can see another call to define that is loading the knockout module.
The knockout module may have already been loaded by our startup.js, but we don't care. The beauty of require.js is that
it allows each individual module to be dependent of any other. if knockout has already been loaded, we'll use it. If not,
download the file from the server and load it.

{% highlight js %}
define(['knockout'], function(ko){

	function HomeViewModel(){
		this.message = "hello world!";
	}

	return HomeViewModel;

});
{% endhighlight %}


## HTML
Our last step uses HTML to bring everything together.

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
</head>
<body>
	<h3 data-bind="text: message"></h3>

	<script src="app/require.config.js"></script>
	<script data-main="app/startup" src="bower_components/requirejs/require.js"></script>
</body>
</html>
{% endhighlight %}

We're going to load our config file, and load require.js. An application using AMD should only ever have to include
those two script files via HTML. Make sure you note `data-main="app/startup"`. It's important to point that attribute
at the location of your startup file.

## In Closing
This might qualify as the most complicated "Hello World" app I've ever written - but it scales!