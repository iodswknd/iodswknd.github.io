$(document).ready(function(){
	var icons = ["/images/tintedcolor_sugawara.png", "/images/tintedcolor_oikawa.png", "/images/tintedcolor_daichi.png", "/images/tintedcolor_iwaizumi.png"]
	var i = Math.floor(Math.random() * 4);

	$('#icon')[0].href = icons[i];



	$('body').removeClass("loading");
	
	var clss = ["color-green", "color-red", "color-blue", "color-yellow"];
	$('strong').each(function() {
		i = Math.floor(Math.random() * 4); 
		this.classList.add(clss[i]);
	});

	$('.reg-ref').each(function() {
		i = Math.floor(Math.random() * 2); 
		this.classList.add(clss[i]);
	});

});