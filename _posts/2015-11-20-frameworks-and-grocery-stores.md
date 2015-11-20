---
layout: post
title: Frameworks and Grocery Stores
---

### Things I learned during the first 5 years of my career:
* Knockout
* Angular
* jQuery
* Handlebars
* ASP.NET
* Nancy
* Entity Framework
* Telerik
* Telerik Reporting
* Kendo UI
* Crystal Reports
* AppFabric
* Orchard CMS
* Joomla
* Drupal
* Wordpress
* NHibernate
* Jasmine
* Mocha
* Mongoose
* NUnit
* XUnit
* QUnit
* SpecFlow
* IIS
* WCF

This list makes me sad. Really sad. If I could unlearn this list and re-acquire the
time I spent learning it, I would gladly do so. In fact, I've already unlearned
a large portion of this rubbish.

The elimination of time-wasting activities is one of my passions. My Fiance
refuses to take me to the grocery store. Her goal is to relax and find good
deals on tasty food. My goal is to make the trip as efficient as possible. This
results in a lot of yelling, brisk walking, and occasionally leaving food items
behind if the `want/(walking distance)` ratio isn't a resonably positive number.
I have no time for banter with the cashier, but competent cashiers will be
acknowledged with pursed lips and a head nod.

When I look at the above list, I realize I was mindlessly
wandering around Wegman's for such a long period of time that cashiers knew
me on a first name basis. I hit rock-bottom when I fell asleep in the frozen
food section and security had to carry me out of the building. I loved that
grocery store, but I was wasting valuable time. I needed to change, so I
did.

### Things I have learned in the past year:
* JavaScript
* SQL
* Elixir
* C#

Try to convince me that any one of those things will go away in the next ten
years. Now, I know what you're thinking:

> How did you do Knockout, Angular, and jQuery without knowing JavaScript?

It's not that I didn't know JavaScript, I just didn't know it well. The same
can be said for C#. I used that language, but only within the context
of what my chosen libraries and frameworks would allow.

Please don't take this post the wrong way. I am not building an argument against
learning all libraries and frameworks. These things are essential for us to be
productive programmers. Instead, I encourage you to find libraries and frameworks
that make you more productive with small amounts of investment.

I have spent the past six years living in ASP.NET world. That's a
lot of time to learn things. I'm pretty productive with it, but I'm still learning
new things every day. I might know ~60% of the core API. In contrast, I have
also built things in Express. I'm productive there as well. Express
has a tiny API which I was able to learn in a few hours.

I can learn 100% of Express in a few hours and be productive, or
learn 60% of ASP.NET in six years and be productive. ASP.NET 5 is right
around the corner, and I'm going to have to invest large amounts of time
re-learning.

Actually, I started that process a few months ago. I created a new application in
ASP.NET 5. Immediately, I was smacked in the face by a strange dependency
issue I had never seen before. A google search sent me to this article:
[Diagnosing dependency issues with ASP.NET 5](http://davidfowl.com/diagnosing-dependency-issues-with-asp-net-5/)

I need to learn all the information in this 6,000 word essay in order to include
a 3rd party dependency that I also had to learn, and I have yet to deliver a
single piece of functionality. Once I finally understand this essay,
something will change and I get to recursively repeat the process until I die.
This is the point at which I fell asleep in the frozen food section. I was
so exhausted from walking up and down the aisles and seeing the same food over
and over again that I tapped out.

{% highlight js %}
// This source code falls under the restrictions of the MIT license.

var ryanIsDead = false;
var frameworksLearned = [];

// You can expect a stack overflow to occur if you use this function.
var learnFramework = function(framework) {
  var knowledgeGained;

  while(!ryanIsDead) {
    if(framework.isObsolete || knowledgeGained >= framework.knowledgeRequired) {
      frameworksLearned.push(framework);
      learnFramework(getCoolNewFrameworkFromInternet())
    } else {
      knowledgeGained++;
    }
  }
};

// Please don't call this method. My family and friends will miss me.
var killRyan = function() {
  ryanIsDead = true;
  console.log(`Ryan is dead, but he learned ${frameworksLearned.length} frameworks!`)
};

// With innovations in modern medicine, age 128 seems about right.
setTimeout(killRyan, oneHundredYearsFromNow);

// I don't want to pick on you .NET, but you
// metaphorically made me fall asleep in the grocery store.
learnFramework(aspdotnet5);
{% endhighlight %}

### My list of not bad tools
* Programming languages
* Express
* Hapi
* Moment
* Backbone
* Underscore
* Marionette
* Handlebars
* Git
* Bash

I list programming languages as my first item because they
are wonderful. Even if you never write a single line of production code in a particular
language, understanding the different paradigms and ideas behind different
languages _will_ make you better at what you do. They have a relatively long shelf-life and
will almost always be worth the investment. Books are great, and can
teach you things about programming you would never figure out on your own. If
you want to learn a new language, start with a book.

The rest of the items in the list have provided tremendous value to me without
asking for countless weekends and evenings. I'm sure I could list a few others
here as well, but these are the ones that came to mind immediately.

## Consider the future
Imagine a huge framework that makes you incredibly efficient, but takes two
years worth of hard work and dedication to learn. We'll call it Hodgepodge.js.
You are able to deliver high quality software rapidly after learning Hodgepodge, and
customers are happy. Everyone is so happy, you get a promotion. You will now be
leading a team of developers on this wonderful thing you have created. You
even get to do the hiring.

There's one major problem. Hodgepodge.js takes a long time to learn. You are
now limited to only hiring developers who know Hodgepodge.js. You don't have two
years to train vanilla JavaScript developers.

Also, while you were busy learning Hodgepodge.js, Mulkarey.js came out, and
it is the FUTURE! No one is interested in Hodgepodge.js anymore and applicants
roll their eyes when they see your job posting. You are immediately filled with
regret and sorrow.

Wouldn't it be better to pick a common denominator - some subset of technology
that takes a bit longer to be productive with, but won't be a total maintenance
nightmare two years from now?

So, should you go learn Mularkey.js? It's entirely up to
you. Do you have an immediate need for this knowledge? Do you think it will
make you better at your craft? Do you just want to do it because people are
talking about it? Whatever you choose, try not to fall asleep in the grocery
store.
