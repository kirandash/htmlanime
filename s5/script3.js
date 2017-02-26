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
		var i = 0;

		this.container = container; //particles must be inside container

		this.c = container.getContext('2d');
		
		this.count = count || 0;
		
		this.particles = []; //Particle array

		this.center = {
			x: center.x || 0,
			y: center.y || 0
		};//Define particle center

		for(; i < count; ++i) {
			var x = this.center.x,
				y = this.center.y,
				vx = 1,
				vy = 1;

			this.particles.push(new Particle(x,y,vx,vy)); //Push each particle into array				
		}
	};

	//Update method for particle generator
	ParticleGenerator.prototype.update = function(){
		for(var i =0; i < this.count; ++i){
			if(this.particles[i].x > 0 &&
			   this.particles[i].x < this.container.width &&
			   this.particles[i].y > 0 &&
			   this.particles[i].y < this.container.height) {//check if particle is inside screen

				this.particles[i].udpate();//update the particle

				c.fillRect(this.particles[i].x, this.particles[i].y, 5, 5);//5px particle
			}
		}
	};
	
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