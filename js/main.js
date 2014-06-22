var changePage(title) {
	document.title = "Jim Frode Hoff - "+title;
	jQuery()
}


jQuery(document).ready(function($) {
	jQuery("#main-content").each(function(index, el) {
		console.log(el);
	});
});