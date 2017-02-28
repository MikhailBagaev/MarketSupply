// arguments: class of div contained carousel, number of sliding items by a time,
// number of shown items, right-left margins sum of carousel item
function launchJcarousel(number, target, col, margins) {

    $(function() {
        var jcarousel = $('.' + number);
        jcarousel
        .on('jcarousel:create jcarousel:reload', function() {

            carousel = $(this),
            width = carousel.innerWidth();

           
            if (width > 500) {
                width = (width / col) - margins;
            } else {
                width = (width / col) - margins;
            };
            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })          
        .jcarousel({
            wrap: 'circular',
            animation: {
            duration: 300,
            easing:   'swing',
            complete: function() {
            }
            }
        });  
        $('.control-' + number + '-prev').jcarouselControl({
            target: '-=' + target                       
        });                 
        
        $('.control-' + number + '-next').jcarouselControl({
            target: '+=' + target
        });                       
    });    
};

launchJcarousel('jcarousel', 1, 1, 20);
launchJcarousel('jcarousel2', 1, 4, 20);
launchJcarousel('jcarousel3', 1, 1, 20);
launchJcarousel('jcarousel4', 1, 4, 20);
launchJcarousel('jcarousel5', 1, 3, 20);


