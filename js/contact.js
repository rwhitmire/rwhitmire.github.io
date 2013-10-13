$(function(){
	var $form = $('form');


	$form.validate();

	$form.on('submit', function(e){
		e.preventDefault();

		if(!$form.valid()) return false;

		var url = 'http://rwhitmire.azurewebsites.net/api/contact';
		var data = $form.serialize();
		var xhr = $.post(url, data);

		$('form button').button('loading')
		xhr.done(function(){
			$('#success-message').removeClass('hidden');
		});

		xhr.fail(function(){
			$('#fail-message').removeClass('hidden');
		});

		xhr.always(function(){
			$('#form-wrapper').addClass('hidden');
		})
	});
});