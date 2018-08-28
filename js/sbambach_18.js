$(function() {
	var $root = $('html, body');
	$('#navi a, .section_head a').click(function() {
    	var href = $.attr(this, 'href');
    	$root.animate({
        	scrollTop: $('section[id="' + $.attr(this, 'href').substr(1) + '"]').offset().top - 45
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
	}, { offset: 45 });
	$('section').waypoint(function(direction) {
		var name = $.attr(this, 'id');
		if(direction == 'up') {
			$('#navi a').removeClass('active');
			$('#navi li.' + name + ' a').addClass('active');
		}
	}, {
		offset: function() {
			return -$(this).height() + 45;
	 	}
	});

    $('a.bibtex').click(function() {
        var href = $.attr(this, 'href');
        console.log(href);
        $('#'+href).slideToggle( "500", function(){});
        return false;
    });

});

$(window).scroll(function(){
    if($(document).scrollTop() > 175)
    {
        if(!$('#navi').hasClass('small'))
        {
            $('#navi').addClass('small');
            $('#navi').stop().animate({
                height:'45px',
                opacity: '0.85'
            }, 750);
  
            $('#header_sven').css('top', '35px');
            $('#header_sven').css('opacity', '0');
        }
        
    }
    else
    {
        if($('#navi').hasClass('small'))
        {
            $('#navi').removeClass('small');
            $('#navi').stop().animate({
                height:'45px',
                opacity: '0.85'
            }, 750);

            $('#header_sven').stop().animate({
                top:'50px',
                opacity: '1'
            }, 750);
        }
    }
});