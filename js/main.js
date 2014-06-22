jQuery.fn.pages = function(control) {

	// plugin to add fading page navigation
	// usage: jQuery("<LIST_OF_LI_ELEMENTS>").pages('<ELEMENT_CONTAINING_CONTENT>');

	var FADE_SPEED = 400; 

	var element = jQuery(this);
	control = jQuery(control);

	element.bind("change.page", function(e, pageName) { // change active link and hash
		element.find("li").removeClass("active");
		element.find(">[data-page='" + pageName + "']").addClass('active');
	});

	element.bind("change.page", function(e, pageName) { // change content
		control.fadeOut(FADE_SPEED, function() {
			control.find(">[data-page]").removeClass("active");
			control.find(">[data-page='" + pageName + "']").addClass('active');
			control.fadeIn(FADE_SPEED);
		});
	});


	if (window.location.hash == "") {
		window.location.hash = element.find('li:first').attr("data-page");
	}
	jQuery(window).bind('hashchange', function(event) {
		var pageName = window.location.hash.slice(1);
		jQuery("#main-navigation").trigger('change.page', pageName);
	});

	element.trigger("change.page", window.location.hash.substring(1));

	return this;
}

jQuery(document).ready(function($) {
	
	jQuery("#main-navigation").pages('#main-content'); // connect navigation and content divs
	
	
	
});