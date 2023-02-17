$(function() {
	//preview slider
	$('#sliderslick').slick({
  		slidesToShow: 1,
 		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 1500,
		arrows : false,
	});

	//portfolio tab
	$('#menu-tabs li').click(function(){
		var thisClass = this.className.slice(0,2);
		$('div.t1').hide();
		$('div.t2').hide();
		$('div.t3').hide();
		$('div.' + thisClass).fadeIn(500);
		$('#menu-tabs li').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('#menu-tabs li.t1').click();

	//customer slider
	$('#slider').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		autoplay: false,
		arrows : false,
		dots : true,
	});

});
