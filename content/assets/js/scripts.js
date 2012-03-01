/*******************************************************************************/
/*	Subscriptions */
/*******************************************************************************/

//
// Executes on DOM ready
//
App.subscribe("init", function(){

	//
	// Set Auto Height
	//
	$(window).bind("load resize", function(){
		$(".autoHeight").each(function(){
			var el = $(this), parent = el.parent();
			if(parent.height() >= el.height("auto").height()){
				el.css({"margin-bottom":0,"padding-bottom":"25px","height":parent.height()});
			} else {
				el.css({"margin-bottom":0,"padding-bottom":"25px","height":el.height("auto").height()});
			}
		});
		$("#container #body").css({"overflow":"visible"});
	});
	
	//
	// Add Search Interactions
	//
	$("#search").bind('focus', function(){
		$(this).parent().find("label").animate({opacity:'0.5'}, 200);
	}).bind('blur', function(){
		$(this).parent().find("label").animate({opacity:'1'}, 200);
	}).bind('keypress', function(){
		$(this).parent().find('label').hide();
	}).bind('keyup', function(){
		if($(this).val() == ''){
			$(this).parent().find('label').show();
		}
	});

	//
	// Project Select Show/Hide
	//
	$(".toggle-projects").bind( "click", function( e ) {
		e.preventDefault();
	
		var el = $( this ).toggleClass("active");
	
		$("body").animate({ "marginTop": ( el.hasClass("active") ? "150px" : "0" ) }, 300, function() {
	  		el.toggleClass("down");
		});
	});
	
	// Project Select Clickoutside
	$(".project-select").bind( "clickoutside", function( e ) {
		var el = $(".toggle-projects");
		
		if ( e.target.parentNode === el[0] || e.target === el[0] ) {
			return;
		}
		
		if ( el.hasClass("down") ) {
			el.click();
		}
	});

	//
	// Footer Books + Presentations
	//
	$(".presentations img, .books img").each(function (i, el) {
		var $img = $(this),
		$span = $img.parent();
		$span.css("background-image", "url(" + $img.attr('src') + ")");
		$img.css("visibility", "hidden");
	});
	
	//
	// Footer Social Icons
	//
	$(".footer-icon-links")
		.find("li a")
		.append("<span></span>")
		.end()
		.delegate("li a", "mouseenter", function () {
			$(this).find("span").stop(true, false).fadeTo(250, 1.0);
		})
		.delegate("li a", "mouseleave", function () {
			$(this).find("span").stop(true, false).fadeOut(250);
		});
		
	//
	// Run Van Gogh - Syntax Highlighting
	//
	$("pre").children("code").text(function(i, t) {
		return $.trim( t );
	}).parent().vanGogh();

        // hide sidebar	 sub-menus
	$("#sidebar ul.sub").hide();
	$("#sidebar li.active ul.sub").show();
	
	
});
