// Main Scripts

const cookieBox = document.querySelector(".cookie-alert"),
	acceptBtn = cookieBox.querySelector("button");

if (cookieBox) {
	acceptBtn.onclick = () => {
		//setting cookie for 1 month, after one month it'll be expired automatically
		document.cookie = "CookieBy=hakki; max-age=" + 60 * 60 * 24 * 30;
		if (document.cookie) { //if cookie is set
			cookieBox.classList.add("hide"); //hide cookie box
		} else { //if cookie not set then alert an error
			alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
		}
	}
	let checkCookie = document.cookie.indexOf("CookieBy=hakki"); //checking our cookie
	//if cookie is set then hide the cookie box else show it
	checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
}

function closeCookiesBox () {
	cookieBox.style.display = 'none';
}

function expandedTrigger () {
	let item = document.getElementById('expandTrigger');
	item.classList.toggle('expanded');
}

let sideMiddle = document.getElementById('side-middle');
if (sideMiddle) {
	function scrollToBottom() {
		sideMiddle.scrollTop = 9999999;
	}
}




/**
 * getHeight - for elements with display:none
 */
var getHeight = function (el) {
		var el_style = window.getComputedStyle(el),
			el_display = el_style.display,
			el_position = el_style.position,
			el_visibility = el_style.visibility,
			el_max_height = el_style.maxHeight.replace('px', '').replace('%', ''),

			wanted_height = 0;


		// if its not hidden we just return normal height
		if (el_display !== 'none' && el_max_height !== '0') {
			return el.offsetHeight;
		}

		// the element is hidden so:
		// making the el block so we can meassure its height but still be hidden
		el.style.position = 'absolute';
		el.style.visibility = 'hidden';
		el.style.display = 'block';

		wanted_height = el.offsetHeight;

		// reverting to the original values
		el.style.display = el_display;
		el.style.position = el_position;
		el.style.visibility = el_visibility;

		return wanted_height;
	},


	/**
	 * toggleSlide mimics the jQuery version of slideDown and slideUp
	 * all in one function comparing the max-heigth to 0
	 */
	toggleSlide = function (el) {
		var el_max_height = 0;

		if (el.getAttribute('data-max-height')) {
			// we've already used this before, so everything is setup
			if (el.style.maxHeight.replace('px', '').replace('%', '') === '0') {
				el.style.maxHeight = el.getAttribute('data-max-height');
			} else {
				el.style.maxHeight = '0';
			}
		} else {
			el_max_height = getHeight(el) + 'px';
			el.style['transition'] = 'max-height 0.5s ease-in-out';
			el.style.overflowY = 'hidden';
			el.style.maxHeight = '0';
			el.setAttribute('data-max-height', el_max_height);
			el.style.display = 'block';

			// we use setTimeout to modify maxHeight later than display (to we have the transition effect)
			setTimeout(function () {
				el.style.maxHeight = el_max_height;
			}, 10);
		}
	};


// On Load Page
(function () {

	// Dark Mode
	let lamba = document.querySelector('.top');
	// press the button to toggle the .dark-mode class
	lamba.addEventListener('click', () => {
		document.documentElement.classList.toggle('dark-mode');
	});
	// Dark Mode


	// Burger
	let navTrigger = document.getElementsByClassName('burger')[0],
		body = document.getElementsByTagName('body')[0];

	function toggleNavigation(e) {
		body.classList.toggle('nav-open');

		let burger = document.querySelector('.burger');
		let xyz = document.querySelectorAll('div.x, div.y, div.z');
		let x = document.querySelector('.x');
		let y = document.querySelector('.y');
		let z = document.querySelector('.z');

		burger.classList.toggle('open');

		xyz.classList.toggle('collapse');
		setTimeout(function () {

			if (y.style.display == 'none') {
				y.style.display = 'block';
			} else {
				y.style.display = 'none';
			}

			x.classList.toggle('rotate30');
			z.classList.toggle('rotate150');
		}, 70);
		setTimeout(function () {
			x.classList.toggle('rotate45');
			z.classList.toggle('rotate135');
		}, 120);
	}

	navTrigger.addEventListener('click', toggleNavigation);

	// Bu Yazı Kaç Dakikada Okunur?
	let readingTimeElement = document.getElementById('reading-time');
	if (readingTimeElement) {
		let txt = document.querySelector(".post-full-content")[0].textContent,
			wordCount = txt.replace(/[^\w ]/g, "").split(/\s+/).length;
		let readingTimeInMinutes = Math.floor(wordCount / 228) + 1;
		let readingTimeAsString = readingTimeInMinutes + " dakika";

		readingTimeElement.innerHTML = readingTimeAsString;
	}
	// Bu Yazı Kaç Dakikada Okunur?


	// Single Post Customize Elements
	let commentsToggle = document.querySelector('.toggleCommentform');
	if (commentsToggle) {
		let singleCommentsForm = document.querySelector('.single-comments-form');
		let singleCommentsContent = document.querySelector('.single-comments-content');
		let toggleComments = document.querySelector('.toggleComments');

		commentsToggle.on('click', function () {
			if (singleCommentsForm.style.display == 'none') {
				singleCommentsForm.style.display = 'block';
			} else {
				singleCommentsForm.style.display = 'none';
			}
		});

		toggleComments.on('click', function () {
			if (singleCommentsContent.style.display == 'none') {
				singleCommentsContent.style.display = 'block';
			} else {
				singleCommentsContent.style.display = 'none';
			}
		});
	}

	let fontSizeToggle = document.getElementById('normal');
	if (fontSizeToggle) {

		let fontSizeToggleUP = document.getElementById('up');
		let fontSizeToggleDOWN = document.getElementById('down');
		let singleContent = document.querySelector('.single-content');

		fontSizeToggle.on("click", function () {
			singleContent.classList.remove("up, down");
			singleContent.classList.add("normal");
		});

		fontSizeToggleUP.on("click", function () {
			singleContent.classList.remove("up, down");
			singleContent.classList.add("up");
		});

		fontSizeToggleDOWN.on("click", function () {
			singleContent.classList.remove("normal, up");
			singleContent.classList.add("down");
		});
	}


})();