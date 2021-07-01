    
$('#g-navi li a').click(function () {
    	var elmHash = $(this).attr('href');
	    var pos = $(elmHash).offset().top-0;
	$('body,html').animate({scrollTop: pos}, 1000);
	return false;
});