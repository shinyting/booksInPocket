$(function () {
	$('#slider').slick({
		dots: true,
		speed: 500,
		adaptiveHeight: true,
		autoplay: true,
		// centerMode: true,
		// fade: true,
		// prevArrow: '<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-carat-l ui-btn-icon-notext"></a>',
		// nextArrow: ''
	});
	$( ".gotocheck" ).click(function( event ) {
		// Append #bar
		$.mobile.navigate( "#check", {
			info: "info about the #check hash"
		});

		// Replace #bar with #baz
		// $.mobile.navigate( "#baz" );

		// Log the results of the navigate event
		$( window ).on( "navigate", function( event, data ) {
			console.log( data.state.info );
			console.log( data.state.direction );
			console.log( data.state.url );
			console.log( data.state.hash );
		});

		// Go back to pop the state for #bar and log it
		// window.history.back();
	});
})