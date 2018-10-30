// Jquery with no conflict
jQuery(document).ready(function($) {
	
	//##########################################
	// COLUMNIZR
	//##########################################
	
//	$('.multicolumn').columnize({ 
//		columns: 3});
		
	
	//##########################################
	// CAROUSEL
	//##########################################
	
//	$('#mycarousel').jcarousel({
//        // Configuration goes here (http://sorgalla.com/projects/jcarousel/)
//        vertical: false
//    });
//    
//    $('#mycarousel-vertical').jcarousel({
//        // Configuration goes here (http://sorgalla.com/projects/jcarousel/)
//        vertical: true
//    });
    
	//##########################################
	// LOF SLIDER
	//##########################################
	 
	 
//	var buttons = { previous:$('#home-slider .button-previous') ,
//						next:$('#home-slider .button-next') };	
//	
//
//	
//	$('#home-slider').lofJSidernews( {
//		interval 		: 4000,
//		direction		: 'opacitys',	
//		easing			: 'easeInOutExpo',
//		duration		: 1000,
//		auto		 	: false,
//		maxItemDisplay  : 4,
//		navPosition     : 'horizontal', // horizontal
//		navigatorHeight : 73,
//		navigatorWidth  : 300,
//		mainWidth		: 1200,
//		buttons: buttons
//	});
										
											
	
											
	//##########################################
	// Superfish
	//##########################################
	
//	$("ul.sf-menu").superfish({ 
//        animation: {height:'show'},   // slide-down effect without fade-in 
//        delay:     800 ,              // 1.2 second delay on mouseout 
//        autoArrows:  false,
//        speed: 100
//    });
    
    
    //##########################################
	// PROJECT SLIDER
	//##########################################
	
 //   $('.project-slider').flexslider({
//    	animation: "fade",
//    	controlNav: true,
//    	directionNav: false,
//    	keyboardNav: true
//    });
    
    
    //##########################################
	// Filter - Isotope 
	//##########################################

	
	var $container = $('#filter-container');
	
	$container.imagesLoaded( function(){
		$container.isotope({
			itemSelector : 'figure',
			filter: '.uis10',
			resizable: false,
			animationEngine: 'jquery'
		});
	});
	
	// filter buttons
		
	$('#filter-buttons a').click(function(){
	
		// select current
		var $optionSet = $(this).parents('#filter-buttons');
	    $optionSet.find('.selected').removeClass('selected');
	    $(this).addClass('selected');
    
		var selector = $(this).attr('data-filter');
		$container.isotope({ filter: selector });
		return false;
	});
	


    
    //##########################################
	// PrettyPhoto
	//##########################################
	
//	$('a[data-rel]').each(function() {
//	    $(this).attr('rel', $(this).data('rel'));
//	});
//	
//	$("a[rel^='prettyPhoto']").prettyPhoto();


	//##########################################
	// Accordion box
	//##########################################

	$('.accordion-container').hide(); 
	$('.accordion-trigger:first').addClass('active').next().show();
	$('.accordion-trigger').click(function(){
		if( $(this).next().is(':hidden') ) { 
			$('.accordion-trigger').removeClass('active').next().slideUp();
			$(this).toggleClass('active').next().slideDown();
		}
		return false;
	});
	
	//##########################################
	// Toggle box
	//##########################################
	
	$('.toggle-trigger').click(function() {
		$(this).next().toggle('slow');
		$(this).toggleClass("active");
		return false;
	}).next().hide();
	
	    
    
	
	//##########################################
	// Tabs
	//##########################################

//    $(".tabs").tabs("div.panes > div", {effect: 'fade'});


	
	//##########################################
	// Create Combo Navi
	//##########################################	
		
	// Create the dropdown base
	$("<select id='comboNav' />").appendTo("#combo-holder");
	
	// Create default option "Go to..."
	$("<option />", {
		"selected": "selected",
		"value"   : "",
		"text"    : "Navigation"
	}).appendTo("#combo-holder select");
	
	// Populate dropdown with menu items
	$("#nav a").each(function() {
		var el = $(this);		
		var label = $(this).parent().parent().attr('id');
		var sub = (label == 'nav') ? '' : '- ';
		
		$("<option />", {
		 "value"   : el.attr("href"),
		 "text"    :  sub + el.text()
		}).appendTo("#combo-holder select");
	});

	
	//##########################################
	// Combo Navigation action
	//##########################################
	
	$("#comboNav").change(function() {
	  location = this.options[this.selectedIndex].value;
	});
	
	
	//##########################################
	// Resize event
	//##########################################
	
	$(window).resize(function() {
		
		var w = $(window).width();
		//console.log(w);

		$container.isotope('reLayout');

	}).trigger("resize");
	
		
});//close	

	//##########################################
	// one page nav
	//##########################################


$(document).ready(function() {

	$('#nav').onePageNav({
		scrollThreshold:0.2,
		scrollSpeed:200}
	);

});

	//##########################################
	// fixed nav
	//##########################################
   /*    $('.topbar').fixTo('body', {zIndex:10})
       $('#child').fixTo('#father', {mind:'#pinky'});
        $('#list .child').fixTo('#list>li', {mind:'#pinky'});
        $('#list2 .child').fixTo('#list2>li', {mind:'#pinky'});
        $('#blue').fixTo('body', {mind:'#pinky'});*/

	//##########################################
	// 相册
	//##########################################

   $(document).ready(function(){
            $('.lightgallery').lightGallery();
        });
