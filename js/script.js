$('document').ready(function(){
	$('#text-change').click(function(){
		$('.text-change').text('hi, this is sahadat.');
	});
	$('#html-change').click(function(){
		$('.html-change').html('<b>hi, this is sahadat.</b>');
	});
	$('#append-method').click(function(){
		$('.append-method').append(' hi, this is sahadat.');
	});
	$('#prepend-method').click(function(){
		$('.prepend-method').prepend('hi, this is sahadat. ');
	});
	$('#before-method').click(function(){
		var para1 = $('<p></p>').text('hi, this is sahadat.');
		$('.before-method').before(para1);
	});
	$('#after-method').click(function(){
		var para1 = $('<p></p>').text('hi, this is sahadat.');
		$('.after-method').after(para1);
	});
	$('#a').attr('href', 'https://www.youtube.com');
	$('#a1').remove('href');
	$('#single-css').click(function(){
		$('.single-css').css('color', 'red');
	});
	$('#multiple-css').click(function(){
		$('.multiple-css').css({'color':'red', 'font-size':'20px'});
	});
	$('#add-class').click(function(){
		$('.add-class').addClass('p-style');
	});
	$('#multiple-class').click(function(){
		$('.multiple-class').addClass('p-style anim');
	});
	$('#remove-class').click(function(){
		$('.remove-class').removeClass('p-style');
	});
	$('#toggle-class').click(function(){
		$('.toggle-class').toggleClass('p-style');
	});
	$('#val-method').click(function(){
		var value1 = $('#inputField').val();
		$('.val-method').text('inputField vlaue is ' + value1);
	});
	$('#hide-method').click(function(){
		$('.hide-method').hide(1000);
	});
	$('#show-method').click(function(){
		$('.show-method').show(1000);
	});
	$('#hideshow-method').click(function(){
		$('.hideshow-method').hide(1000).show(1000);
	});
	$('#togglehs-method').click(function(){
		$('.togglehs-method').toggle(1000);
	});
	$('#fadein-method').click(function(){
		$('.fadein-method').fadeIn(1000);
	});
	$('#fadeout-method').click(function(){
		$('.fadeout-method').fadeOut(1000);
	});
	$('#fadetoggle-method').click(function(){
		$('.fadetoggle-method').fadeToggle(1000);
	});
	$('#fadeto-method').click(function(){
		$('.fadeto-method').fadeTo(1000, 0.4);
	});
	$('#slideup-method').click(function(){
		$('.slideup-method').slideUp(1000);
	});
	$('#slidedown-method').click(function(){
		$('.slidedown-method').slideDown(1000);
	});
	$('#slidetoggle-method').click(function(){
		$('.slidetoggle-method').slideToggle(1000);
	});
	$('#animate-method').click(function(){
		$('.animate-method').animate({opacity:'0.6', fontSize: '20px'},1000);
	});
});