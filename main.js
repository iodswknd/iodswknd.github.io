$(document).ready(function(){
	$('body').removeClass("loading");
	
	var clss = ["color-green", "color-blue", "color-red", "color-yellow"];
	$('strong').each(function() {
		var i = Math.floor(Math.random() * 4); 
		this.classList.add(clss[i]);
	});

});