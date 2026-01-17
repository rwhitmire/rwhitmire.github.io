---
title: "Webpack for Beginners"
date: 2016-04-09
---

### What is Webpack?

Webpack is a module bundler with a pretty confusing website.

### What is a module bundler?

A module bundler takes multiple JavaScript files and bundles them into
a single JavaScript file.

### How do I use it?

Start by creating a new project.

```bash
$ mkdir try-webpack && cd try-webpack && mkdir src && npm init -y
$ touch index.html && touch src/main.js && touch webpack.config.js
```

If you're on Windows, you can run the above commands with [git bash](https://git-scm.com/downloads).
Now, install webpack globally.

```bash
$ npm install -g webpack
```

I start all front-end projects with a simple config file. Open `webpack.config.js`, and paste the
following code:

```javascript
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: "./src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  }
};
```

This file tells webpack where to find the entry point of our application and where to output the generated
bundle. Now you can run `webpack` from the command line and `dist/bundle.js` will appear.

So far, our application is pretty boring so let's build something. I'm a big fan of [Mithril.js](http://mithril.js.org/),
so we'll start by installing that library through npm.

```bash
$ npm install --save mithril
```

Now, open `src/main.js` and write some code.

```javascript
var m = require('mithril');

var app = {
  view: function() {
    return m('div', 'hello world!')
  }
}

m.mount(document.getElementById('app'), app)
```

Write some html in `index.html` (remember to include your bundle).

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Webpack Tutorial</title>
</head>
<body>
  <div id="app"></div>
  <script src="dist/bundle.js"></script>
</body>
</html>
```

And run `webpack` from the command line to create a new bundle. Open
up the html file in your browser, and you should see hello world!

If you made it this far, congrats! You now understand the basics of Webpack.

Let's refactor our app a bit. Maybe we want to set up our application for localization
which would require us to have all text in a central location. Create a new file
`src/resources.json`. Inside that file, include the following JSON.

```json
{
  "en-US": {
    "HELLO_WORLD": "hello world!"
  }
}
```

Back in `src/main.js`, we want to load our message from that JSON file.

```javascript
var m = require('mithril');
var resources = require('./resources.json')

var app = {
  view: function() {
    return m('div', resources['en-US'].HELLO_WORLD)
  }
}

m.mount(document.getElementById('app'), app)
```

Run `webpack` to re-build your application, and you'll see an error. It says "something
something appropriate loader blah blah file type." This is where loaders come into play.
Loaders are extremely handy tools that allow us to process different types of content.

Loaders can be used to transpile ES2015 into ES5, transpile React JSX, compile TypeScript,
load Handlebars templates, load and apply CSS, compile SASS into CSS prior to applying, etc.
There are hundreds of loaders out there for different purposes. We are currently interested
in the `json-loader`.

```bash
$ npm install --save-dev json-loader
```

Now, we need to modify `webpack.config.js` to include our loader.

```javascript
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: "./src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
};
```

Run `webpack` again, and your application should be up and running. If you get tired of typing
`webpack`. You can run `webpack -w` and activate the file watcher to automatically
re-bundle things when any of your files change.

Let's do one last thing. You have probably noticed the generated bundle is rather large
for such a simple application. The excessive file size is due to the `cheap-module-eval-source-map`
devtool in `webpack.config.js`. This line generates inline source maps for our bundle so it is nice and
easy to debug. When we go to production, we want to make sure that line is gone. How you handle
that process is your decision, but for now we'll just delete the line. Let's also install webpack
locally so we have access to the `UglifyJsPlugin`.

```bash
$ npm install --save-dev webpack
```

When you're ready to go to production, you will want to minify your bundle. Webpack
has you covered. Let's update `webpack.config.js` one last time.

```javascript
var webpack = require('webpack');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
```

Run `webpack` again, and you should have a nice little bundle ready for production.
If you got lost anywhere along the way, check out the [repository on GitHub](https://github.com/rwhitmire/webpack-demo),
or feel free to reach out to me on Twitter [@ry_js](https://twitter.com/ry_js).
Happy front-ending!
