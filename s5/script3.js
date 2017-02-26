;(function($) {
	
	window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})();
	
	/* Particle - x, y, z, vx, vx, vy, vz */
	var Particle = function(x, y, vx, vy) {
		//2D Particle object

		//Declare Initial methods
		this.x = x || 0;//If defined take x else 0
		this.y = y || 0;
		this.vx = vx || 0;
		this.vy = vy || 0;
	}
	
	//Call update method
	Particle.prototype.update = function(vx, vy) {
		this.vx = vx || 0;
		this.vy = vy || 0;
		
		this.x += this.vx + vx;
		this.y += this.vy + vy;
	}
	
	var ParticleGenerator = function(container, center, count) {
		//container, center where particles will show
		var i = 0,
			c = container.getContext('2d');
		
		count = count || 0;
		
		this.particles = [];
	}
	
	$.addEventListener('DOMContentLoaded', function() {
		
		var body = $.getElementsByTagName('body')[0],
			canvas = $.createElement('canvas'),
			c = canvas.getContext('2d');
			
		canvas.width = 300;
		canvas.height = 300;
		
		body.appendChild(canvas);
		
		function update() {
			
			c.clearRect(0, 0, canvas.width, canvas.height);
			
			requestAnimFrame(update);

		}
		
	}, false);

}(document));