//IIFE
(function($){

	$.addEventListener("DOMContentLoaded", function(){
		//Rendering with DOM Elements
		var body = $.getElementsByTagName('body')[0],
			obj = $.createElement('div');

		obj.style.width = 200 + 'px';
		obj.style.height = 200 + 'px';
		obj.style.backgroundColor = "#ff0000";

		obj.style.webkitTransform = 'translateX('+200+'px)';
		obj.style.mozTransform = 'translateX('+200+'px)';
		obj.style.msTransform = 'translateX('+200+'px)';
		obj.style.transform = 'translateX('+200+'px)';

		body.appendChild(obj);

		//Rendering Elements using HTML5 Canvas
		var canvas = $.createElement('canvas'),
			c = canvas.getContext('2d');

		canvas.width = 400; //default - 300
		canvas.height = 200; //default - 150			

		c.fillStyle = "#c3c3c3";
		c.fillRect(0,0,300,300);

		body.appendChild(canvas);

	}, false);

}(document));