var windowResize = function() {
	var width = $(window).width();
	var headw = width / 3;
	$('header').find('a').css('width', headw+'px');
};

var showContent = function() {
	if ( $('body').scrollTop() >= 1 ) {
		$('aside').addClass('tab-closed').removeClass('tab');
		setTimeout(function() {
			$('aside').hide();
		}, 500);
	}
};


$(document).ready(function() {
	$(window).bind('resize', windowResize);
	windowResize();
	$(window).bind('scroll', showContent);

	$('aside').click(function() {
		$('aside').addClass('tab-closed').removeClass('tab');
		setTimeout(function() {
			$('aside').hide();
		}, 500);
	});

	$('article:nth-of-type(1)').addClass('active');

	toggle();

	$('aside').addClass('tab').removeClass('tab-closed');
	$('article.active').find('img').addClass('active');
	textFade( $('article.active') );
});

var textFade = function(object) {
	object.find('h1').addClass('active');
	setTimeout(function() {
		object.find('h2').addClass('active');
	}, 50);
	setTimeout(function() {
		object.find('p').addClass('active');
	}, 100);
};

$(window).scroll(function() {
	$('article').each(function(i){

    var bottom_of_object = $(this).position().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if( bottom_of_window > bottom_of_object && !$(this).find('img').hasClass('active') ){

    	textFade( $(this) );

      $(this).find('img').each( function(i) {
      	$(this).attr( 'src', $(this).attr('image') );
        $(this).load(function () {
          $(this).addClass('active');
          });
      });
  	}
  });
});

var toggle = function() {
	$('aside').click(function() {
		$('body').removeClass('phoenix').addClass('spartan');
		toggle();
	});
};
