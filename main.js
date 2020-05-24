jQuery(document).ready(function(){
    
    $('.counter').counterUp({
        delay: 4,
        time: 2000
    });
    
    
    new WOW().init({
        speed : 1,
    });
    
    
    
/***** For new Class add / Menu Icon Rotate *****/
    
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('change')

    })
    
/******** End ********/    
    
    
    $(".navbar").sticky({topSpacing: 0,
	zIndex: 500,

    });
    
    
    
    $('li.smooth-menu a').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = '80';
        $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + 'px'
        }, 4000, 'easeOutQuad');
        event.preventDefault();

    });
    
    
    
    $('body').scrollspy({
        target: '.nav-spy',
        offset: 90,
    });
        
    
    
    
    
});











