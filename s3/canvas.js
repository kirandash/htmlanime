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
			canvas = $.createElement('canvas'),
			c = canvas.getContext("2d"),
			x = 0,
			y = 0,
			vx = 2;

		c.fillStyle = "#ff0";
		c.fillRect(0,0,canvas.width,canvas.height);

		body.appendChild(canvas);

		update();

		function update() {
			
			//Draw the rectangle again to avoid repeating nature - or use clearrect
			c.fillStyle = "#ff0";
			c.fillRect(0,0,canvas.width,canvas.height);

			//Reverse direction
			if((x + 20) > canvas.width || x < 0) {
				vx *= -1;
			}
			x += vx;
			c.fillStyle = '#F00';
			c.fillRect(x,y,20,20); //position and dimension

			requestAnimFrame(update);
		}

	}, false);

}(document));