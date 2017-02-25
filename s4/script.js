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
			aspect = 300 / 300,//aspect ration width and height
			near = 0.1,//minimum zoom level
			far = 1000//maximum zoom level
			camera = new THREE.PerspectiveCamera(angle, aspect, near, far),//Create camera perspective - Add a camera
			cube = new THREE.CubeGeometry(100,100,100),//Create cube geometry
			mat = new THREE.MeshBasicMaterial(new THREE.MeshBasicMaterial({ color: 0x0000ff })),//Create Mesh Material
			mesh = new THREE.Mesh(cube, mat); 

		scene.add(camera); //Add camera to scene

		camera.position.z = 300;//position the z axis of camera
			
		renderer.setSize(300, 300);
		
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