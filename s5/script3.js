;(function($) {
	
	window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})();
	
	var Particle = function(x, y, vx, vy) {
		this.x = x || 0;
		this.y = y || 0;
		this.vx = vx || 0;
		this.vy = vy || 0;
	}
	
	Particle.prototype.update = function(vx, vy) {
		vx = vx || 0;
		vy = vy || 0;
		
		this.x += this.vx + vx;
		this.y += this.vy + vy;
	}
	
	var ParticleGenerator = function(container, center, count) {
		var i = 0;
		
		this.container = container;
		this.c = container.getContext('2d');
		
		this.count = count || 0;
		
		this.particles = [];
		
		this.center = {
			x: center.x || 0,
			y: center.y || 0
		}
		
		for ( ; i < count ; ++i ) {
			var x = this.center.x,
				y = this.center.y,
				vx = Math.random() * 3 - 1.5,
				vy = Math.random() * 3 - 1.5;
				
			this.particles.push(new Particle(x, y, vx, vy));
		}
	}
	
	ParticleGenerator.prototype.update = function() {
		for (var i = 0; i < this.count; i++) {
			
			if (this.particles[i].x > 0 &&
				this.particles[i].x < this.container.width &&
				this.particles[i].y > 0 &&
				this.particles[i].y < this.container.height) {
				
				this.particles[i].update();
				
				this.c.fillRect(this.particles[i].x, this.particles[i].y, 5, 5);
			}
		}
	}
	
	$.addEventListener('DOMContentLoaded', function() {
		
		var body = $.getElementsByTagName('body')[0],
			canvas = $.createElement('canvas'),
			c = canvas.getContext('2d'),
			pg = new ParticleGenerator(canvas, { x: canvas.width / 2, y: canvas.height / 2}, 100);
			
		canvas.width = 300;
		canvas.height = 300;
		
		body.appendChild(canvas);
		
		update();
		
		function update() {
			
			c.fillStyle = '#000';
			c.fillRect(0, 0, canvas.width, canvas.height);
			
			c.fillStyle = '#FFF';
			
			pg.update();
			
			requestAnimFrame(update);

		}
		
	}, false);

}(document));