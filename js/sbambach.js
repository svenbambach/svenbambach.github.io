$(function() {
	var $root = $('html, body');
	$('#navi a, .section_head a').click(function() {
    	var href = $.attr(this, 'href');
    	$root.animate({
        	scrollTop: $('section[id="' + $.attr(this, 'href').substr(1) + '"]').offset().top - 40
    		}, 500, function () { window.location.hash = href;
    	});
    	return false;
	});
	$('section').waypoint(function(direction) {
		var name = $.attr(this, 'id');
		if(direction == 'down') {
			$('#navi a').removeClass('active');
			$('#navi li.' + name + ' a').addClass('active');
		}
	}, { offset: 40 });
	$('section').waypoint(function(direction) {
		var name = $.attr(this, 'id');
		if(direction == 'up') {
			$('#navi a').removeClass('active');
			$('#navi li.' + name + ' a').addClass('active');
		}
	}, {
		offset: function() {
			return -$(this).height() + 40;
	 	}
	});
	$('#disclaimer').hover(function() {
    	$('div.section_content p.disclaimer').slideToggle( "500", function(){
    	});
	});
});