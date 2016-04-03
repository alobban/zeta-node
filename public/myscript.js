$(function() {

	"use strict";

	var topoffset = 50; // variable for menu height
	var slideqty = $('#featured .item').length;
	var wheight = $(window).height(); // get height of the window
	var greekLetters = '<span class="greeks"><i class="fa fa-alpha"></i>';
	greekLetters += '<i class="fa fa-psi"></i>';
	greekLetters += '<i class="fa fa-lambda"></i></span>';

	$('.fullheight').css('height', wheight); // set to window target

	// Replace IMG inside carousels with a background image
	$('#featured .item img').each(function() {
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background-image': 'url('+imgSrc+')'});
		$(this).remove();
	});


	// Adjust height of .fullheight elements on window resize
	$(window).resize(function() {
		wheight = $(window).height(); // get height of the window
		$('.fullheight').css('height', wheight); // set to window target
	})

	// Activate Scrollspy
	$('body').scrollspy({
		target: 'header .navbar',
		offset: topoffset
	});


	var hash = $(this).find('li.active a').attr('href');
	if (hash !== '#featured') {
		console.log(hash);
		$('header nav').addClass('inbody');
	} else {
		$('header nav').removeClass('inbody');
	}


	// Add an inbody class to nav when scrollspy fires
	$('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
		var hash = $(this).find('li.active a').attr('href');
		if (hash !== '#featured') {
			console.log(hash);
			$('header nav').addClass('inbody');
			$('.navbar-brand h1').html(greekLetters);
		} else {
			$('.navbar-brand h1').html('Alpha Psi Lambda <span class="subhead">Zeta Chapter</span>');
			$('header nav').removeClass('inbody');
		}
	});


	// Replacing Brand Title with Greek Letter
	// if ( $('header nav').hasClass('inbody')) {
	// 	$('.navbar-brand h1').html(greekLetters);
	// } else {
	// 	$('.navbar-brand h1').html('Alpha Psi Lambda <span class="subhead">Zeta Chapter</span>');
	// }

	
	//Use smooth scrolling when clicking on navigation
	$('.navbar a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') === 
	  this.pathname.replace(/^\//,'') && 
	  location.hostname === this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html,body').animate({
	      scrollTop: target.offset().top-topoffset+2
	    }, 500);
	    return false;
	  } //target.length
	} //click function
	}); //smooth scrolling


	// Automatically generate carousel indicators
	for (var i = 0; i < slideqty; i++) {
		var insertText = '<li data-target="#featured" data-slide-to="' + i + '"></li>';
		$('#featured ol').append(insertText);
	}


	//


	$('.carousel').carousel({
	  pause: false
	});

});