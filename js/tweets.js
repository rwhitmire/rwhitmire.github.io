$(function(){
    var url = 'http://rwhitmire.azurewebsites.net/api/twitter';

    var xhr = $.ajax({
    	url: url,
        crossDomain: true
    });

    xhr.done(function(tweets){
    	var $wrapper = $('#tweets');
    	var $table = $('<table>').addClass('table');
    	var $tr;
    	var text;
    	var date;
    	var month;
    	var day;
    	var year;
    	var dateStr;
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
    	}

    	$.each(tweets, function(index, tweet){
    		$tr = $('<tr>');
    		$col1 = $('<td>');
    		$col2 = $('<td>').addClass('text-right');

    		console.log(tweet);

    		text = tweet.text;
    		date = new Date(tweet.created_at);


    		day = date.getDate();
			month = monthLookup[date.getMonth().toString() + 1];
			year = date.getFullYear();

			dateStr = day + ' ' + month + ' ' + year;

    		$col1.html(text);
    		$col2.html(dateStr);

    		$tr .append($col1)
    			.append($col2);

			$table.append($tr);
    	});

    	$wrapper.append($table);
    });

    xhr.fail(function(){
        console.log('twitter load failed.');
    });
});
