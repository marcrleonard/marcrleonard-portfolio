(function($, window, document, undefined) {
    'use strict';

    var gridContainer = $('#grid-portfolio'),
        filtersContainer = $('#filters-portfolio'),
        wrap, filtersCallback;        
            var singleDelegate = '.cbp-singlePage';                    
            

    /*********************************
     init cubeportfolio     
     *********************************/
    gridContainer.cubeportfolio({

        defaultFilter: '*',

        animationType: 'fadeOutTop',

        gapHorizontal: 1,

        gapVertical: 1,

        gridAdjustment: 'responsive',

        caption: 'zoom',

        displayType: 'lazyLoading',

        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: singleDelegate,
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '',
        singlePageCallback: function(url, element) {
            var t = this;
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                .done(function(result) {
                    t.updateSinglePage(result);                    
                            $('a.backtotop').click(function(){
                                $('.cbp-popup-singlePage-open').animate({scrollTop : 0},800);
                                return false;
                            });                                                                                     
                            if($('.ts-slide-port').length) {
                                $('.ts-slide-port').owlCarousel({
                                    pagination:false,
                                    navigation : true,
                                    navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                                    singleItem : true,
                                    autoPlay: true,
                                    slideSpeed:500,
                                });
                            };
                            $("a[rel^='galleryPhoto']").prettyPhoto({
                                animation_speed: 'normal',
                                slideshow: false,
                                autoplay_slideshow: false,
                                opacity: 0.80,
                                show_title: true,
                                allow_resize: true,
                                horizontal_padding: 0,
                                default_width: 650,
                                default_height: 400,
                                counter_separator_label: '/',
                                theme: 'pp_default',
                                hideflash: false,
                                wmode: 'opaque',
                                autoplay: true,
                                modal: false,
                                overlay_gallery: false,
                                keyboard_shortcuts: true,
                                deeplinking: false,
                                social_tools: false
                                
                            });
                })
                .fail(function() {
                    t.updateSinglePage("Error! Please refresh the page!");
                });

        },

        // single page inline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'above',
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function(url, element) {
            // to update singlePage Inline content use the following method: this.updateSinglePageInline(yourContent)
        }
    });


    /*********************************
     add listener for filters
     *********************************/
    if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {

        wrap = filtersContainer.find('.cbp-l-filters-dropdownWrap');

        wrap.on({
            'mouseover.cbp': function() {
                wrap.addClass('cbp-l-filters-dropdownWrap-open');
            },
            'mouseleave.cbp': function() {
                wrap.removeClass('cbp-l-filters-dropdownWrap-open');
            }
        });

        filtersCallback = function(me) {
            wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');

            wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());

            me.addClass('cbp-filter-item-active');

            wrap.trigger('mouseleave.cbp');
        };

    } else {
        filtersCallback = function(me) {
            me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
        };
    }

    filtersContainer.on('click.cbp', '.cbp-filter-item', function() {

        var me = $(this);

        if (me.hasClass('cbp-filter-item-active')) {
            return;
        }

        // get cubeportfolio data and check if is still animating (reposition) the items.
        if (!$.data(gridContainer[0], 'cubeportfolio').isAnimating) {
            filtersCallback.call(null, me);
        }

        // filter the items
        gridContainer.cubeportfolio('filter', me.data('filter'), function() {});

    });


    /*********************************
     activate counter for filters
     *********************************/
    gridContainer.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'), function() {
        // read from url and change filter active
        var match = /#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href),
            item;
        if (match !== null) {
            item = filtersContainer.find('.cbp-filter-item').filter('[data-filter="' + match[1] + '"]');
            if (item.length) {
                filtersCallback.call(null, item);
            }
        }
    });


    /*********************************
     add listener for load more
     *********************************/
    $('.cbp-l-loadMore-button-link').on('click.cbp', function(e) {

        e.preventDefault();

        var clicks, me = $(this),
            oMsg;

        if (me.hasClass('cbp-l-loadMore-button-stop')) {
            return;
        }

        // get the number of times the loadMore link has been clicked
        clicks = $.data(this, 'numberOfClicks');
        clicks = (clicks) ? ++clicks : 1;
        $.data(this, 'numberOfClicks', clicks);

        // set loading status
        oMsg = me.text();
        me.text('LOADING...');

        // perform ajax request
        $.ajax({
            url: me.attr('href'),
            type: 'GET',
            dataType: 'HTML'
        }).done(function(result) {
            var items, itemsNext;

            // find current container
            items = $(result).filter(function() {
                return $(this).is('div' + '.cbp-loadMore-block' + clicks);
            });

            gridContainer.cubeportfolio('appendItems', items.html(),
                function() {
                    // put the original message back
                    me.text(oMsg);

                    // check if we have more works
                    itemsNext = $(result).filter(function() {
                        return $(this).is('div' + '.cbp-loadMore-block' + (clicks + 1));
                    });

                    if (itemsNext.length === 0) {
                        me.text('NO MORE WORKS');
                        me.addClass('cbp-l-loadMore-button-stop');
                    }

                });

        }).fail(function() {
            // error
        });

    });

})(jQuery, window, document);
