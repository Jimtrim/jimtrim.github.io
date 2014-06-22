jQuery.fn.pages = function(control) {
	var element = jQuery(this);
	control = jQuery(control);
	/*	
	element.delegate('li', 'click', function(event) { // get name, and pass it along with event trigger
		var pageName = jQuery(this).attr("data-content"); 
		element.trigger('change.page', pageName);
	});
*/

	element.bind("change.page", function(e, pageName) { // change active link and hash
		element.find("li").removeClass("active");
		element.find(">[data-page='" + pageName + "']").addClass('active');
		console.log("recievedEvent: change.page");
	});

	element.bind("change.page", function(e, pageName) { // change content
		control.fadeOut('400', function() {
			control.find(">[data-page]").removeClass("active");
			control.find(">[data-page='" + pageName + "']").addClass('active');
			control.fadeIn('400');
		});
	});

	if (window.location.hash == "") {
		window.location.hash = element.find('li:first').attr("data-page");
		element.trigger("change.page", window.location.hash);
	}

	return this;
}

jQuery(document).ready(function($) {
	console.log(window.location.hash);
	console.log(window.location.hash == "");

	
	jQuery("#main-navigation").pages('#main-content'); // connect navigation and content divs
	
	jQuery(window).bind('hashchange', function(event) {
		var pageName = window.location.hash.slice(1);
		jQuery("#main-navigation").trigger('change.page', pageName);
		console.log("hashchange:"+pageName);
		
	});
	
});