//IIFE
(function($){

	$.addEventListener("DOMContentLoaded", function(){
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

	}, false);

}(document));