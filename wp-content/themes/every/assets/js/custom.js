(function($){
    
    
    $(document).ready(function(){
     "use strict";

     	/* ==============================================
	    Background Parallax Calling
	    =============================================== */

        $(window).bind('load', function () {
            parallaxInit();
        });
        function parallaxInit() {
            testMobile = isMobile.any();
            if (testMobile == null)
            {

                $('.bg-parallax').each(function(){
                    $(this).parallax('50%', 0.3);
                });
            }
            testMobile = isMobile.iOS()
        }
	    //Mobile Detect
	    var testMobile;
	    var isMobile = {
	        Android: function() {
	            return navigator.userAgent.match(/Android/i);
	        },
	        BlackBerry: function() {
	            return navigator.userAgent.match(/BlackBerry/i);
	        },
	        iOS: function() {
	            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	        },
	        Opera: function() {
	            return navigator.userAgent.match(/Opera Mini/i);
	        },
	        Windows: function() {
	            return navigator.userAgent.match(/IEMobile/i);
	        },
	        any: function() {
	            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	        }
	    };
		/* ==============================================
		Video Script
		=============================================== */
		$(window).load(function() {
		    'use strict';
			    setTimeout( function() {
			       
			        $('#header_video').find('.mbYTP_wrapper').animate({opacity:1}, 500);
			        //mbYTP_wrapper$('find')
			    }, 800 );
		});
		jQuery(function(){
		    'use strict';

		    if( isMobile.any() ){
		        $('.player.video-container').each(function(){
		            $(this).addClass('mobile-bg');
		            if( $(this).attr('data-background') ){
		                $(this).append('<div></div>');
		                $(this).find('div').css('background-image', 'url(' + $(this).attr('data-background') + ')' );
		            }
		        });
		    }else{
		        $('.player').each(function(){
		            $(this).mb_YTPlayer();
		        });
		    }
		});

	    //FUNFACE
	    $('.ts-funfact').appear(function() {
	        var count_element = $('.funfact-number', this).html();
	        $(".funfact-number", this).countTo({
	            from: 0,
	            to: count_element,
	            speed: 2500,
	            refreshInterval: 50,
	        });
	    });


	    $(window).load(function(){
	    	//FEATURE SLIDE
		    if ($('.list-feature').length > 0) {
			    $('.list-feature').owlCarousel({
			    	pagination:false,
				    navigation : true,
				    navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				    singleItem : true,
				    autoPlay: true,
				    slideSpeed:500,
				 });
			};
	    });

	    //FIX HEIGHT SECTION SERVICE - FEATUR - RECENT
 		if($(window).width() > 991){
			$('.list-feature .bg-feature').each(function(){
				var heightL = $(this).find('.info-feature').outerHeight();
				$(this).find('.img-feature').css("height",heightL)
			});
			$('.ts-service-img').each(function(){
				var heighR = $(this).find('.info-service').outerHeight();
				$(this).find('.img-service').css("height",heighR)
			});

			$('.list-recent-post').each(function(){
				var heighLC = $(this).find('.ts-blogrecent-posts').outerHeight();
				$(this).find('.img-blog').css("height",heighLC)
			});
		}
	    //TESTIMONIAL-TWITTER SLIDE
	    if ($('.ts-testimonial-twitter').length > 0) {
		    $('.ts-testimonial-twitter').owlCarousel({
		    	pagination:true,
			    navigation : false,
			    singleItem : true,
			    autoPlay: true,
			    slideSpeed:500,
			    transitionStyle : "goDown"
			 });
		 };

	    //BACK TO TOP
	    $('a.backtotop').click(function(){
	    	$('html, body').animate({scrollTop : 0},800);
            return false;
	    })

	    //Audio
	    $('.post-audio-html5').each(function(){
	    	var $linkAudio = $(this).find('.audio-wraper').attr('data-audio');
	    	$("#jquery_jplayer_1").jPlayer({
    			ready: function (event) {
    				$(this).jPlayer("setMedia", {
    					free:true,
    					mp3: $linkAudio
    				});
    			},
    			swfPath: "js",
    			supplied: "mp3, wav, ogg, all",
    			useStateClassSkin: true,
    			smoothPlayBar: true,
    			globalVolume: true,
    			keyEnabled: true
    		});
	    })

    	//BLOG SLIDE
    	if ($('.post-slide').length > 0) {
    		$('.post-slide').owlCarousel({
		    	pagination:false,
			    navigation : true,
			    navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			    singleItem : true,
			    autoPlay: true,
			    slideSpeed:500,
			 });
    	};

    	//PORTFOLIO SLIDE
    	if ($('.ts-slide-port').length > 0) {
    		$('.ts-slide-port').owlCarousel({
		    	pagination:false,
			    navigation : true,
			    navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			    singleItem : true,
			    autoPlay: true,
			    slideSpeed:500,
			 });
    	};

    	// Padding feauture
    	$(window).load(function(){
	    	var widthW = $(window).width();
	    	var widthContent = $('.container').outerWidth();
	    	var paddingLeft = (widthW - widthContent)/2;
	    	$('.info-feature').css("padding-left", paddingLeft);
	    	$('.list-feature .owl-controls').css("left", paddingLeft);
	    	$('.ts-service-img .info-service').css("padding-right", paddingLeft);
	    	$('.list-recent-post .ts-blogrecent-posts').css("padding-left", paddingLeft);
    	});

    	//Select
    	$('select').select2();

    	//MENU INNER 
    	var headerInner = $('.inner-header').outerHeight() + 10;
    	$('.banner-page').css("margin-top",-headerInner);
    	
    	
	    //WINDOW RESIZE
	    $(window).on("debouncedresize", function() {
	    	
	        // Padding feauture
	    	var widthW = $(window).width();
	    	var widthContent = $('.container').outerWidth();
	    	var paddingLeft = (widthW - widthContent)/2;
	    	$('.info-feature').css("padding-left", paddingLeft);
	    	$('.list-feature .owl-controls').css("left", paddingLeft);
	    	$('.ts-service-img .info-service').css("padding-right", paddingLeft);
	    	$('.list-recent-post .ts-blogrecent-posts').css("padding-left", paddingLeft);

	    	//MENU INNER 
	    	var headerInner = $('.inner-header').outerHeight();
	    	$('.banner-page').css("margin-top",-headerInner);
	     
	    	//FIX HEIGHT SECTION SERVICE - FEATUR - RECENT
	 		if($(window).width() > 991){
    			$('.list-feature .bg-feature').each(function(){
    				var heightL = $(this).find('.info-feature').outerHeight();
    				$(this).find('.img-feature').css("height",heightL)
    			});
    			$('.ts-service-img').each(function(){
    				var heighR = $(this).find('.info-service').outerHeight();
    				$(this).find('.img-service').css("height",heighR)
    			});
    
    			$('.list-recent-post').each(function(){
    				var heighLC = $(this).find('.ts-blogrecent-posts').outerHeight();
    				$(this).find('.img-blog').css("height",heighLC)
    			});
    		}
	    });

	    //MENU MOBILE
	    $('.mobile-menu-open').click(function(){
	    	$('.ts-main-menu').slideToggle(500);
	    });
	    //MENU ONEPAGE
	    var offs = '15%';
	    $("section.main-container > .container > div").waypoint({
	        handler: function(event,direction) {
	          var active_section = $(this);

	          if (direction === "up") active_section = active_section.prev();
	          if (direction === "up") offs = '30%'; 

	          if(typeof active_section.attr("id") != 'undefined') {
	            $('#onepage-main-menu > li > a').removeClass("active");
	            $('#onepage-main-menu > li > a[href="#' + active_section.attr("id") + '"]').addClass("active");
	          }
	        },
	        offset: offs
	    });


	    $("#onepage-main-menu > li > a").click(function(e){
        	$("#onepage-main-menu > li > a").removeClass("active");
        	$(this).addClass("active");

        	var url = $(this).attr("href");
        	var target = $(url).offset().top;
        	var heightoff;

        	if($('#wpadminbar').length){
            	heightoff = $('#wpadminbar').outerHeight();
        	} else{
            	heightoff = 0;
        	}
        	var heightHeader = $('.ts-main-menu').outerHeight();
        	var scrollTop = target - heightHeader - heightoff; 
        	$('html,body').animate({scrollTop:scrollTop}, 'slow');

        	return false;

      	});

	    // FITVIDS
	    $('.ts-single-portfolio, .main-container').fitVids();
        
        
        
        $(window).scroll(function()
        {
            //BACK TO TOP SHOW
            var heightFooter = $('footer').outerHeight();
            var footerOffset = $('footer').offset().top;
            
            if($(window).scrollTop() > footerOffset - heightFooter - 100){
                $('.main-footer .backtotop').fadeIn(2000);
            } else {
                $('.main-footer .backtotop').fadeOut(2000);
            }
        
        });

        $(window).load(function(){
    		var heightHeader = $('header.home-header').outerHeight();
			var menuHeight = $('.ts-main-menu').outerHeight();
			var heightScroll =  heightHeader - menuHeight;
			var heightBanner = $('.banner-page').outerHeight();
		    $(window).scroll(function() {
		        var scroll = getCurrentScroll();
		        if(scroll > 10){
		        	$('.home-header .ts-main-menu').addClass('bgfade');
		        	$('.home-header .ts-main-menu.ts-topmenu').addClass('menu-fixed');
		        }else{
		        	$('.home-header .ts-main-menu').removeClass('bgfade');
		            $('.home-header .ts-main-menu.ts-topmenu').removeClass('menu-fixed');
		        }
		        if ( scroll >= heightScroll ) {
		            $('.home-header .ts-main-menu.ts-botmenu').addClass('menu-fixed');
		            // $('.home-header.ts-botmenu-header').removeClass('hidden-logo-social');
		        } else {
		            $('.home-header .ts-main-menu.ts-botmenu').removeClass('menu-fixed');
		            // $('.home-header.ts-botmenu-header').addClass('hidden-logo-social');
		        }
		        if (scroll > 10 && scroll < heightScroll) {
		            $('.home-header.ts-botmenu-header').addClass('hidden-logo-social');
		        }else{
		            $('.home-header.ts-botmenu-header').removeClass('hidden-logo-social');
		        }


		    });
		    function getCurrentScroll() {
		        return window.pageYOffset || document.documentElement.scrollTop;
		    }

        });

		//MENU RESPONSIVE
		if(every_is_mobile === 'true'){
			$(document).on('click', '.main-menu .menu-item-has-children > a', function(e){
				var licurrent = $(this).closest('li');
				var liItem = $('.main-menu .menu-item-has-children')
				if ( !licurrent.hasClass('show-submenu') ) {
					liItem.removeClass('show-submenu');
					licurrent.addClass('show-submenu');

	                // Close all child submenu if parent submenu is closed
	                if ( !licurrent.hasClass('show-submenu') ) {
	                    licurrent.find('li').removeClass('show-submenu');
	                }
	                return false;
	                e.preventDefault();
				}else{
					var href = $this.attr('href');
	                if ( $.trim( href ) == '' || $.trim( href ) == '#' ) {
	                    licurrent.toggleClass('show-submenu');
	                }
	                else{
	                    window.location = href;
	                } 
				}
				// Close all child submenu if parent submenu is closed
	            if ( !licurrent.hasClass('show-submenu') ) {
	                licurrent.find('li').removeClass('show-submenu');

	            }
	            e.stopPropagation();
			});
			$(document).on('click', function(e){
            var target = $( e.target );
            if ( !target.closest('.show-submenu').length || !target.closest('.menu-nav').length ) {
                $('.show-submenu').removeClass('show-submenu');

            }
        }); 
	
		}else{
			$('.main-menu .menu-item-has-children').on('hover',function(e){
        		 if (e.type == "mouseenter") {
			        $(this).addClass('show-submenu'); 
			    }
			    else {
			        $(this).removeClass('show-submenu');
			    }
        	});
		}

		//SCROLL ARROW
		if($('button.trigger').length){
			$('button.trigger').click(function(){
				var taget_wl = $('.main-container').offset().top;
		        $('html,body').animate({scrollTop:taget_wl-100},'slow');
		        return false;
			});
		}
        
        //ADD CLASS BODY WHEN LOGIN
        if($('#wpadminbar').length){
        	$('body').addClass('ts-adminbar');
        }else{
        	$('body').removeClass('ts-adminbar');
        }

        //SHOPING CART HEADER
        if(every_is_mobile === 'true'){
        	$(document).on('click', 'div.mini-shoping-cart-wraper', function(e){
        		$(this).toggleClass('show-cart');
        	});
        }else{
        	$('div.mini-shoping-cart-wraper').on('hover',function(e){
        		 if (e.type == "mouseenter") {
			        $(this).addClass('show-cart'); 
			    }
			    else {
			        $(this).removeClass('show-cart');
			    }
        	});
        }

    });


})(jQuery);
