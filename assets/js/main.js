// Main Scripts

$(document).ready(function () {

	// Dark Mode
		let lamba = document.querySelector('.top');
		// press the button to toggle the .dark-mode class
		lamba.addEventListener('click', () => {
			document.documentElement.classList.toggle('dark-mode');
		});
	// Dark Mode

	// tabela düştü
	let tabela = document.querySelector('.yakinda'),
		civi = document.getElementById('civi');

		civi.addEventListener('click', () => {
			tabela.classList.toggle('dustu');
		});

	// tabela düşer

    $(".pageloader").show().fadeOut(2600);

	// Burger
	var navTrigger = document.getElementsByClassName('burger')[0],
	overlay = document.getElementsByClassName('overlay')[0],
	body = document.getElementsByTagName('body')[0];

	navTrigger.addEventListener('click', toggleNavigation);
	overlay.addEventListener('click', OffNavigation);

	function toggleNavigation(e) {
		body.classList.toggle('nav-open');

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


		// Mysidemenu
		$('.rightsidemenu').toggleClass('opened');
		// Mysidemenu
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

		// Mysidemenu
		$('.rightsidemenu').toggleClass('opened');
		// Mysidemenu
	}

	// BurgerSol
	var navTriggerSol = document.getElementsByClassName('burgersol')[0];
	navTriggerSol.addEventListener('click', toggleNavigationSol);

	function toggleNavigationSol(e) {
		body.classList.toggle('nav-open');
		//main.classList.toggle('boxShadow');

		$('.burgersol').toggleClass('open');	
		$('.a, .b, .c').toggleClass('collapse');
		setTimeout(function(){ 
			$('.b').toggle(); 
			$('.a').toggleClass('rotate30'); 
			$('.c').toggleClass('rotate150'); 
		}, 70);
		setTimeout(function(){
			$('.a').toggleClass('rotate45'); 
			$('.c').toggleClass('rotate135');  
		}, 120);


		// Mysidemenu
		$('.leftsidemenu').toggleClass('opened');
		// Mysidemenu
	}


	// Bu Yazı Kaç Dakikada Okunur?
	var readingTimeElement = document.getElementById('reading-time');
	if(readingTimeElement) {
		var txt = $(".post-full-content")[0].textContent,
		wordCount = txt.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;
		var readingTimeInMinutes = Math.floor(wordCount / 228) + 1;
		var readingTimeAsString = readingTimeInMinutes + " dakika";
		
		$(readingTimeElement).html(readingTimeAsString);
	}
	// Bu Yazı Kaç Dakikada Okunur?
    
});