//IIFE
(function($){

	// shim layer with setTimeout fallback - requestAnimationFrame by paul irish
	window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})();

	$.addEventListener("DOMContentLoaded", function(){
		//Set up a conventional Rendering Screen
		var body = $.getElementByTagName('body')[0];

		update();

		function update() {
			requestAnimFrame(update); //For equivalent of setTimeout or setInterval - like c, c++ -- continuously call update
		}

	}, false);

}(document));