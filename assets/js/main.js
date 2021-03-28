// Main Scripts

$(document).ready(function () {

    $(".pageloader").show().fadeOut(2600);

	var navTrigger = document.getElementsByClassName('burger')[0],
	overlay = document.getElementsByClassName('overlay')[0],
	body = document.getElementsByTagName('body')[0];
	//main = document.getElementsByTagName('main')[0];

	navTrigger.addEventListener('click', toggleNavigation);
	overlay.addEventListener('click', OffNavigation);

	function toggleNavigation(e) {
		body.classList.toggle('nav-open');
		//main.classList.toggle('boxShadow');

		$('.burger').toggleClass('open');	
		$('.x, .y, .z').toggleClass('collapse');
		setTimeout(function(){ 
			$('.y').toggle(); 
			$('.x').toggleClass('rotate30'); 
			$('.z').toggleClass('rotate150'); 
		}, 70);
		setTimeout(function(){
			$('.x').toggleClass('rotate45'); 
			$('.z').toggleClass('rotate135');  
		}, 120);
	}

	function OffNavigation () {
		body.classList.toggle('nav-open');
		//main.classList.toggle('boxShadow');
		$('.burger').toggleClass('open');	
		$('.x, .y, .z').toggleClass('collapse');
		setTimeout(function(){ 
			$('.y').toggle(); 
			$('.x').toggleClass('rotate30'); 
			$('.z').toggleClass('rotate150'); 
		}, 70);
		setTimeout(function(){
			$('.x').toggleClass('rotate45'); 
			$('.z').toggleClass('rotate135');  
		}, 120);
	}


});