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

		//Rendering Elements using HTML5 Canvas Image object
		var canvasImg = $.createElement('canvas'),
			cI = canvasImg.getContext("2d"),
			cimg = new Image();

			cimg.src = "image.jpg";

			cimg.addEventListener("load", function(){
				canvasImg.width = 200;
				canvasImg.height = 200;

				cI.fillStyle = "#000";
				cI.fillRect(0,0,200,200);
				cI.drawImage(cimg,0,0,canvasImg.width,canvasImg.height);

				body.appendChild(canvasImg);
			}, false);

		//Rendering Elements using SVG with RAPHAEL
		var raphaelRect = Raphael(500,0,300,300),
			rect = raphaelRect.rect(0,0,300,300); //Raphael's rect function

		rect.attr('fill', '#ff0000');

		var raphaelImg = Raphael(800,400,300,300),
			img = new Image();
			img.src = "image.jpg";

			raphaelImg.image(img.src, 0,0,300,300),
			circle = raphaelImg.circle(100,100,100);

	}, false);



}(document));