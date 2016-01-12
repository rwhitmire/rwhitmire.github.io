---
layout: post
title: Better Async with Co
---

I sat down to build yet another user registration system last night for a side project
and found myself in a familiar place. I had some control flow logic that was dependent on
the result of an async method. Off we go to promise land (not to be mistaken with the _Promised Land_).

{% highlight js %}
User.isUnique(email)
  .then((unique) => {
    if(unique) {
      let user = new User(req.body);
      return user.register()
        then(() => {
          res.send('registered');
        });
    } else {
      res.send('not unique');
    }
  })
  .catch(err => {
    next(err);
  });
{% endhighlight %}

This code sucks. I can't read this and it barely does anything yet. Email address
verification, model validation, and some additional async database queries will be necessary
to completely set up this user account. This is where generators come in handy.

If you don't know about generators, Mozilla has some nice [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*).
Here is one of their examples:

{% highlight js %}
function* idMaker(){
  var index = 0;
  while(index < 3)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
{% endhighlight %}

[Co](https://www.npmjs.com/package/co) wraps generators into a method which allows you to yield to
functions that return objects, arrays, promises, thunks, or generators themselves.
Using [co](https://www.npmjs.com/package/co), I am able to rewrite my user registration like so:

{% highlight js %}
let promise = co(function* () {
  let unique = yield User.isUnique(req.body.email);
​
  if(!unique) {
    res.send('not unique.');
    return;
  }
​
  let user = new User(req.body);
  yield user.register();
​
  res.send('registered');
});
​
promise.catch((err) => {
  next(err);
});
{% endhighlight %}

This is much better. I can read this code and control flow doesn't throw my logic into a state of chaos.
If you have a codebase full of nested promises and callbacks, `npm install co`.
