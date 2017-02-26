;(function($) {
	
	window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})();
	
	$.addEventListener('DOMContentLoaded', function() {
		
		var body = $.getElementsByTagName('body')[0],
			canvas = $.createElement('canvas'),
			c = canvas.getContext('2d'),
			img = new Image();
			
		img.src = 'fox.png';
		img.addEventListener('load', update, false);
		
		canvas.width = 300;
		canvas.height = 300;
		
		body.appendChild(canvas);
		
		function update() {
			
			c.clearRect(0, 0, canvas.width, canvas.height); //Clear the drawn image to avoid pixelated layers
			
			c.drawImage(img, 0, 0);
			
			requestAnimFrame(update);

		}
		
	}, false);

}(document));