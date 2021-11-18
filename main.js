$(document).ready(function(){
	$('body').removeClass("loading");
	
	var clss = ["color-green", "color-red", "color-blue", "color-yellow"];
	$('strong').each(function() {
		var i = Math.floor(Math.random() * 4); 
		this.classList.add(clss[i]);
	});

	$('.reg-ref').each(function() {
		var i = Math.floor(Math.random() * 3); 
		this.classList.add(clss[i]);
	});

});