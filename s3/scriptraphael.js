(function($){
	$.addEventListener("DOMContentLoaded", function(){
		var canvas = Raphael(0,0,300,300),
			rect = canvas.rect(0,0,20,20).attr('fill', '#ff0000');

			//Raphael animations are similar to css3 keyframe
			rect.animate({
				"0%": { x : 0, y : 0 },
				"25%": { x : 280, y : 0, easing: "<" }, //easein
				"50%": { x : 280, y : 280, easing: ">" }, //easeout
				"75%": { x : 0, y : 280, easing: "<>" }, //easeinout
				"100%": { x : 0, y : 0, easing: "bounce" } //bounce
			}, 4000); // parameters and duration

	}, false);
}(document));