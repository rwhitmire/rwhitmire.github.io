---
title: "Sending Messages Between Controllers in Angular.js"
date: 2013-10-19
---

<p>
	If you're building a web application in angular.js, chances are you will have to send a message between
	one or more controllers. This is fairly simple to do through the use of services and callbacks.
</p>

```js
var module = angular.module("MyApp", []);

module.service('bridgeService', function(){
    var event;
    
    this.send = function(message){
        event(message);
    };
    
    this.onReceive = function(action){
        event = action;
    };
});

module.controller('FooCtrl', function($scope, bridgeService){
    $scope.sendMessage = function(){
        bridgeService.send($scope.message);
    }
});

module.controller('BarCtrl', function($scope, bridgeService){
    bridgeService.onReceive(function(message) {
        $scope.message = message;
    });
});
```

<p>
	this is an overly simple example. You'll probably want to set up an events array so you can subscribe
	more than one action at a time, but this should be enough to get you started.
	Here is a <a href="http://jsfiddle.net/rwhitmire/Yfs7d/1/" target="_blank">jsfiddle example</a> if you need a little more context.
</p>
