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
			height = 300,//renderer with and height
			aspect = 300 / 300,//aspect ration width and height
			near = 0.1,//minimum zoom level
			far = 1000//maximum zoom level
			camera = new THREE.PerspectiveCamera(angle, aspect, near, far),//Create camera perspective - Add a camera
			cube = new THREE.CubeGeometry(100,100,100),//Create cube geometry - width, height and depth
			mat = new THREE.MeshBasicMaterial(new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })),//Create Mesh Material
			//Wireframe true makes wireframe rendering
			mesh = new THREE.Mesh(cube, mat),
			vx = 2//velocity;

		scene.add(mesh); //Add mesh to scene

		scene.add(camera); //Add camera to scene

		camera.position.z = 300;//position the z axis of camera
			
		renderer.setSize(width, height);
		
		body.appendChild(renderer.domElement);
		
		update();
		
		function render() {
			renderer.render(scene, camera);
		}

		function update() {
			render(); //render the camera view on scene

			//reverse the cube position
			if( (mesh.position.x > (width/2) - 100) || (mesh.position.x < ((width/2) * -1) + 100 )) {
				vx *= -1;
			}

			mesh.position.x += vx;
			mesh.rotation.x += 0.02; //Control speed
			requestAnimFrame(update);

		}
		
	}, false);

}(document));