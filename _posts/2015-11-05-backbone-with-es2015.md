---
layout: post
title: Backbone.js with ES2015
---

While everyone else is playing with React, I have spent the past year with my
old trusty friend - Backbone.js. I really like Backbone. It stays out of my
way and lets me get things done. Using a mature library shouldn't mean we
don't get to play with new toys, however. I'm going to share my experiences,
and hopefully encourage you to start writing Backbone.js code like this:

{% highlight js %}
import { View } from 'backbone';

export default View.extend({
  initialize() {
    console.log('hello world');
  }
});
{% endhighlight %}


### CommonJS and Transpiling
There are a number of ways to transpile ES5 code to ES2015. I have personally found
the most success with Webpack and Babel. Webpack is super powerful,
unopinionated, and fast. There are a ton of plugins to help you load any kind
of content as a javascript module. I know other developers have found success
with Browserify as well.

### ES2015 features
I do not recommend using ES2015 classes or inheritance with Backbone views,
models, or collections. Weird things
happen. I will not go into detail, but if you want to read more, the
issues are well documented [here](https://github.com/jashkenas/backbone/issues/3560).
Continue using `.extend` just as you always have.

Are you tired of typing out `function`? You don't have to anymore.

{% highlight js %}
export default View.extend({
  initialize() {
    console.log('hello world');
  }
});
{% endhighlight %}

Have you ever written `var self = this;`? Of course you have, you're a
JavaScript programmer. Isn't it awful? Never do that again, because arrow
functions are here to save you.

{% highlight js %}
export default View.extend({
  fetchData() {
    this.model.fetch().done(data => {
      // `this` retains context of the outer closure!
      this.render(data);
    });
  },

  render(data) {
    console.log(data);
  }
});
{% endhighlight %}

### Templates
I prefer to use Handlebars.js to render templates. When I first started writing
Backbone.js code, I was always faced with a difficult question:

> How the heck do I load HTML templates into my JavaScript files?

Webpack loaders make this extremely easy. Go install the `handlebars-loader`
from NPM and start doing things the easy way:

{% highlight js %}
import { View } from 'backbone';
import template from './index.hbs';

export default View.extend({
  template: template
});
{% endhighlight %}

Your Backbone.js code can benefit from ES2015 just as much as newer frameworks
and libraries. If you haven't taken the plunge yet, It's never too late.
