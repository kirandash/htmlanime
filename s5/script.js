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
			img = new Image(),
			maxFrames = 12,
			width = 153,
			height = 139,
			currentPosition = 0;
			
		img.src = 'fox.png';
		img.addEventListener('load', update, false);
		
		canvas.width = 300;
		canvas.height = 300;
		
		body.appendChild(canvas);
		
		function update() {
			
			if(currentPosition === maxFrames-1){
				//reset current position
				currentPosition = 0;
			}

			currentPosition++;

			c.clearRect(0, 0, canvas.width, canvas.height); //Clear the drawn image to avoid pixelated layers
			
			c.drawImage(img, width * currentPosition, 0, width, height, 0, 0, width, height);//position and dimension and offset
			
			requestAnimFrame(update); //Default 60 frames per second

			//setTimeout(update, 100); //Temporary replacement for animframe

		}
		
	}, false);

}(document));