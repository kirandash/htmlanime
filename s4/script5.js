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
			monkeyLoader = new THREE.SceneLoader();
			
		monkeyLoader.load("monkey.js", function(res) {
			camera = res.currentCamera;
			scene = res.scene;
		});
			
		scene.add(camera);
		
		camera.position.z = 300;
			
		renderer.setSize(width, height);
		
		body.appendChild(renderer.domElement);
		
		update();
		
		function render() {
			
			renderer.render(scene, camera);

		}
		
		function update() {
			
			render();
			
			requestAnimFrame(update);

		}
		
	}, false);

}(document));