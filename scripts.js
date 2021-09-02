
var topbar = document.getElementById("topbar");
var bottombar = document.getElementById("bottombar");
var subnavContent = document.getElementById("subnav-content");
var aboutButton = document.getElementById("aboutButton");
var sharedcommitments = document.getElementById("sharedcommitments");
var goalsVision = document.getElementById("goals-vision");
var leadership = document.getElementById("leadership");
var advisors = document.getElementById("advisors");

var partnersButton = document.getElementById("partnersButton");
var navbar = document.getElementsByClassName("navbar");
var pageContent = document.getElementById("pageContent");
var burger = document.getElementById('burger');
var nav = document.getElementById('main-nav');

var homeMobile = document.getElementById('home-mobile');
var aboutMobile = document.getElementById('about-mobile');

var sharedcommitmentsMobile = document.getElementById('sharedcommitments-mobile');
var goalsvisionMobile = document.getElementById('goals-vision-mobile');
var partnersMobile = document.getElementById('partners-mobile');
var leadershipMobile = document.getElementById('leadership-mobile');
var advisorsMobile = document.getElementById('advisors-mobile');

var currentURL = document.URL;
console.log(currentURL);


// SUB MENU

if (currentURL=="https://collegeciviclearning.org") {
    function showSubMenu() {
		bottombar.style.visibility = "inherit";
	}

	function hideSubMenu() {
		bottombar.style.visibility = "hidden";
	}
	
	homeMobile.style.color = "#c63c3c";
	homeMobile.style.borderBottom = "solid 4px #c63c3c";

	aboutButton.onmouseenter = showSubMenu;
	bottombar.onmouseleave = hideSubMenu;
};

if ( document.URL.includes("about") ) {
    bottombar.style.visibility = "inherit";	
	
	aboutButton.style.color = "#5b8cbd";
	aboutMobile.style.color = "#c63c3c";
	aboutMobile.style.borderBottom = "solid 4px #c63c3c";

	aboutButton.onmouseenter = showSubMenu;
	bottombar.onmouseleave = hideSubMenu;	
};

if ( document.URL.includes("sharedcommitments") ) {
	bottombar.style.visibility = "inherit";	
	
	aboutButton.style.color = "#5b8cbd";
	sharedcommitments.style.color = "#5b8cbd";

	aboutMobile.style.color = "#c63c3c";
	aboutMobile.style.borderBottom = "solid 4px #c63c3c";
	sharedcommitmentsMobile.style.color = "#5b8cbd";
};

if ( document.URL.includes("goals&vision") ) {
	bottombar.style.visibility = "inherit";	
	
	aboutButton.style.color = "#5b8cbd";
	goalsVision.style.color = "#5b8cbd";

	aboutMobile.style.color = "#c63c3c";
	aboutMobile.style.borderBottom = "solid 4px #c63c3c";
	goalsvisionMobile.style.color = "#5b8cbd";
};

if ( document.URL.includes("leadership") ) {
	bottombar.style.visibility = "inherit";	
	
	aboutButton.style.color = "#5b8cbd";
	leadership.style.color = "#5b8cbd";

	aboutMobile.style.color = "#c63c3c";
	aboutMobile.style.borderBottom = "solid 4px #c63c3c";
	leadershipMobile.style.color = "#5b8cbd";
};

if ( document.URL.includes("advisors") ) {
	bottombar.style.visibility = "inherit";	
	
	aboutButton.style.color = "#5b8cbd";
	advisors.style.color = "#5b8cbd";

	aboutMobile.style.color = "#c63c3c";
	aboutMobile.style.borderBottom = "solid 4px #c63c3c";
	advisorsMobile.style.color = "#5b8cbd";
};

if ( document.URL.includes("ourpartners") ) {
    function showSubMenu() {
		bottombar.style.visibility = "inherit";
	}

	function hideSubMenu() {
		bottombar.style.visibility = "hidden";
	}
	
	partnersButton.style.color = "#c63c3c";

	partnersMobile.style.color = "#c63c3c";
	partnersMobile.style.borderBottom = "solid 4px #c63c3c";

	aboutButton.onmouseenter = showSubMenu;
	bottombar.onmouseleave = hideSubMenu;	
};

// BUGER MENU

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
	burger.dispatchEvent(clickEvent);
	
	setTimeout(function(){
		burger.dispatchEvent(clickEvent);
	}, 5500);
});

