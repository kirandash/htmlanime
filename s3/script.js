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
		var body = $.getElementsByTagName('body')[0],
			obj = $.createElement('div'),
			x = 0,
			y = 0,
			vx = 4;

		obj.style.width = 100 + 'px';
		obj.style.height = 100 + 'px';
		obj.style.backgroundColor = '#F00';

		obj.style.position = 'absolute';

		body.appendChild(obj);

		update();

		function update() {
			if((x + 100) > $.body.clientWidth || x < 0) {
				vx *= -1;
			}
			x += vx;
			obj.style.left = x + 'px';
			obj.style.top = y + 'px';
			requestAnimFrame(update); //For equivalent of setTimeout or setInterval - like c, c++ -- continuously call update
		}

	}, false);

}(document));