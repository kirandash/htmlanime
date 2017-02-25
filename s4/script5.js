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
			renderer = new THREE.WebGLRenderer(),
			scene = new THREE.Scene(),
			angle = 45,
			width = 500,
			height = 300,
			aspect = width / height,
			near = 0.1,
			far = 10000,
			camera = new THREE.PerspectiveCamera(angle, aspect, near, far),
			loader = new THREE.JSONLoader(true),
			mesh = null,
			duration = 700,
			keyframes = 15,
			interpolation = duration / keyframes,
			lastKeyframe = 0,
			currentKeyframe = 0,
			light = new THREE.DirectionalLight(0xffffff, 2);
			
		light.position.set(1, 1, 1).normalize();
		scene.add(light);
			
		loader.load('horse.js', function(g) {
			mesh = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ color: 0x606060, morphTargets: true }));
			mesh.scale.set(1, 1, 1);
			mesh.rotation.y = 90;
			scene.add(mesh);
		});
		
		scene.add(camera);

		camera.position.x = -50;
		camera.position.y = 100;
		camera.position.z = 300;
			
		renderer.setSize(width, height);
		
		body.appendChild(renderer.domElement);
		
		update();
		
		function render() {
			
			if (mesh) { //If mesh loaded - execute anime routine
				var time = Date.now() % duration,
					keyframe = Math.floor(time / interpolation);
					
				if (keyframe !== currentKeyframe) {
					
					mesh.morphTargetInfluences[lastKeyframe]= 0;
					mesh.morphTargetInfluences[currentKeyframe] = 1;
					mesh.morphTargetInfluences[keyframe] = 0;
					
					lastKeyframe = currentKeyframe;
					currentKeyframe = keyframe;
				}
				
				mesh.morphTargetInfluences[keyframe] = (time % interpolation) / interpolation;
				mesh.morphTargetInfluences[lastKeyframe] = 1- mesh.morphTargetInfluences[keyframe];
			}
			
			renderer.render(scene, camera);

		}
		
		function update() {
			
			render();
			
			requestAnimFrame(update);

		}
		
	}, false);

}(document));