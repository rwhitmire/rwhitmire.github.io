$(function(){
    
    var monthLookup = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    };

    var IndexViewModel = function(){
        var self = this;

        self.tweets = ko.observableArray([]);

        self.getDate = function(created_at) {
            date = new Date(created_at);

            day = date.getDate();
            month = monthLookup[date.getMonth() + 1];
            year = date.getFullYear();

            return day + ' ' + month + ' ' + year;
        };

        var xhr = $.getJSON('http://rwhitmire-api.herokuapp.com/twitter?callback=?');

        xhr.done(function(tweets){
            self.tweets(tweets);
        });

        xhr.fail(function(){
            $.error('twitter load failed.');
        });
    };

    ko.applyBindings(new IndexViewModel());

});
