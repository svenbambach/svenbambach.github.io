$(function() {
	var $root = $('html, body');
	$('#navi a, .section_head a').click(function() {
    	var href = $.attr(this, 'href');
    	$root.animate({
        	scrollTop: $('section[id="' + $.attr(this, 'href').substr(1) + '"]').offset().top - 70
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
	}, { offset: 70 });
	$('section').waypoint(function(direction) {
		var name = $.attr(this, 'id');
		if(direction == 'up') {
			$('#navi a').removeClass('active');
			$('#navi li.' + name + ' a').addClass('active');
		}
	}, {
		offset: function() {
			return -$(this).height() + 70;
	 	}
	});
	$('#disclaimer').hover(function() {
    	$('div.section_content p.disclaimer').slideToggle( "500", function(){
    	});
	});

    $('a.bibtex').click(function() {
        var href = $.attr(this, 'href');
        $('#'+href).slideToggle( "500", function(){});
        return false;
    });

    // $('#navi').data('size','big');
    // $('#navi').addClass('big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 220)
    {
        // if($('#navi').data('size') == 'big')
        if(!$('#navi').hasClass('small'))
        {
            // $('#navi').data('size','small');
            $('#navi').addClass('small');
            $('#navi').stop().animate({
                height:'60px',
                opacity: '0.85'
            }, 750);
  
            // $('#header_sven').css('top', '60px');
            $('#header_sven').css('opacity', '0');
            $('#header_red').css('width', '0px');
            $('#header_yellow').css('width', '0px');
        }
        
    }
    else
    {
        //if($('#navi').data('size') == 'small')
        if($('#navi').hasClass('small'))
        {
            // $('#navi').data('size','big');
            $('#navi').removeClass('small');
            $('#navi').stop().animate({
                height:'60px',
                opacity: '0.85'
            }, 750);

            $('#header_sven').stop().animate({
                top:'0px',
                opacity: '1'
            }, 750);
            $('#header_red').stop().animate({
                width:'550px'
            }, 750);
            $('#header_yellow').stop().animate({
                width:'430px'
            }, 750);
        }
    }
});