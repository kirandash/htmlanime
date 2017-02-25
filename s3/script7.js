;(function($) {
	
	window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})();
	
	function linear(start, change, time, duration) {
		return (change * time) / (duration + start);
	}
	
	function quadIn(start, change, time, duration) {
		time /= duration;
		return change * time * time + start;
	}
	
	function quadOut(start, change, time, duration) {
		time /= duration;
		return -change * time * (time - 2) + start;
	}
	
	function quadInOut(start, change, time, duration) {
		time /= duration / 2;
		
		if (time < 1) {
			return change / 2 * time * time + start;
		}
		
		time--;
		
		return -change * (time * (time - 2) - 1) + start;
	}
	
	$.addEventListener('DOMContentLoaded', function() {
		
		var body = $.getElementsByTagName('body')[0],
			canvas = $.createElement('canvas'),
			c = canvas.getContext('2d'),
			x = 0,
			start = 0,
			duration = 10,
			time = 0;
			
		canvas.width = 300;
		canvas.height = 300;
		
		body.appendChild(canvas);
		
		update();
		
		function update() {
			
			var change = canvas.width - 50;
			
			if (x < change) {
				x = quadInOut(start, change, time, duration);
			}
			
			c.fillStyle = '#000';
			c.fillRect(0, 0, canvas.width, canvas.height);
			
			c.fillStyle = '#F00';
			c.fillRect(x, 0, 50, 50);
			
			requestAnimFrame(update);
			
			time += 0.2;

		}
		
	}, false);

}(document));