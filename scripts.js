var topbar = document.getElementById("topbar");
var bottombar = document.getElementById("bottombar");
var subnavContent = document.getElementById("subnav-content");
var navbar = document.getElementById("navbar");
var aboutButton = document.getElementById("aboutButton");
var takeActionbutton = document.getElementById("takeActionButton");
var contactusButton = document.getElementById("contactButton");
var sharedButton = document.getElementById("sharedButton");
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
var takeActionMobile = document.getElementById('takeaction-mobile');
var contactusMobile = document.getElementById('contactus-mobile');

var sharedcommitmentsMobile = document.getElementById('sharedcommitments-mobile');
var goalsvisionMobile = document.getElementById('goals-vision-mobile');
var partnersMobile = document.getElementById('partners-mobile');
var leadershipMobile = document.getElementById('leadership-mobile');
var advisorsMobile = document.getElementById('advisors-mobile');
var cldebyDesignMobile = document.getElementById('cldebydesign-mobile');
var perspectivesIssuesMobile = document.getElementById('perspectives&issues-mobile');
var planningMobile = document.getElementById('planning-mobile');
var campusProfilesMobile = document.getElementById('campusprofiles-mobile');
var macroInitiativesMobile = document.getElementById('macroInitiatives-mobile');

// SUB MENU

if ( document.location = 'https://collegeciviclearning.org' ) {
    function showSubMenu() {
		bottombar.style.visibility = "inherit";
	}

	function hideSubMenu() {
		bottombar.style.visibility = "hidden";
	}
	
	homeMobile.style.color = "#c63c3c";
	homeMobile.style.borderBottom = "solid 4px #c63c3c";

	aboutButton.onmouseenter = changeBottomTextBacktoAbout;
	bottombar.onmouseleave = hideSubMenu;

	takeActionbutton.onmouseenter = changeBottomTextTakeActionShow;

	bottombar.onmouseleave = hideSubMenu;	

	function changeBottomTextTakeActionShow() {
		bottombar.style.visibility = "inherit";
		bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"
	}
	function changeBottomTextBacktoAbout() {
		bottombar.style.visibility = "inherit";
		bottombar.innerHTML = "<div class='subnav-content'><a href='sharedcommitment.html'>SHARED COMMITMENT STATEMENT</a><a href='leadership.html'>LEADERSHIP</a><a href='goals&priorities.html'>GOALS & PRIORITIES</a><a href='advisors.html'>ADVISORS</a></div>"
	}
};

if ( document.URL.includes("about") ) {
    bottombar.style.visibility = "inherit";	
	aboutButton.style.color = "#c63c3c";
	aboutButton.style.fontWeight = "400";
	aboutMobile.style.color = "#c63c3c";
	aboutMobile.style.borderBottom = "solid 4px #c63c3c";

	aboutButton.onmouseenter = showSubMenu;
	bottombar.onmouseleave = hideSubMenu;	

	takeActionbutton.onmouseenter = changeBottomTextTakeActionShow;
	takeActionbutton.onmouseleave = changeBottomTextBacktoAbout;

	bottombar.onmouseleave = hideSubMenu;	

	function changeBottomTextTakeActionShow() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"
	}
	function changeBottomTextBacktoAbout() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='sharedcommitment.html'>SHARED COMMITMENT STATEMENT</a><a href='leadership.html'>LEADERSHIP</a><a href='goals&priorities.html'>GOALS & PRIORITIES</a><a href='advisors.html'>ADVISORS</a></div>"
	}
};

if ( document.URL.includes("takeaction") ) {
    bottombar.style.visibility = "inherit";	
	takeActionbutton.style.color = "#c63c3c";
	takeActionbutton.style.fontWeight = "400";
	takeActionMobile.style.color = "#c63c3c";
	takeActionMobile.style.borderBottom = "solid 4px #c63c3c";


	aboutButton.onmouseenter = changeBottomTextBacktoAbout;
	aboutButton.onmouseleave = changeBottomTextTakeActionShow;

	bottombar.style.visibility = "inherit";	
	bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"

    function changeBottomTextTakeActionShow() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"
	}
	function changeBottomTextBacktoAbout() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='leadership.html'>LEADERSHIP</a><a href='goals&priorities.html'>GOALS & PRIORITIES</a><a href='advisors.html'>ADVISORS</a></div>"
	}
};

if ( document.URL.includes("contactus") ) {
	document.body.style.backgroundColor="#5b8cbd"
	contactusMobile.style.color = "#c63c3c";

	contactusButton.style.color = "#c63c3c";
	contactusButton.style.fontWeight = "400";
	contactusMobile.style.borderBottom = "solid 4px #c63c3c";


	function showSubMenu() {
		bottombar.style.visibility = "inherit";
	}

	function hideSubMenu() {
		bottombar.style.visibility = "hidden";
	}

	// aboutButton.onmouseenter = changeBottomTextBacktoAbout;
	// bottombar.onmouseleave = hideSubMenu;

	// takeActionbutton.onmouseenter = changeBottomTextTakeActionShow;

	// bottombar.onmouseleave = hideSubMenu;	

	function changeBottomTextTakeActionShow() {
		bottombar.style.visibility = "inherit";
		bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"
	}
	function changeBottomTextBacktoAbout() {
		bottombar.style.visibility = "inherit";
		bottombar.innerHTML = "<div class='subnav-content'><a href='leadership.html'>LEADERSHIP</a><a href='goals&priorities.html'>GOALS & PRIORITIES</a><a href='advisors.html'>ADVISORS</a></div>"
	}

};

if ( document.URL.includes("sharedcommitment") ) {
	bottombar.style.visibility = "inherit";	
	sharedButton.style.color = "#c63c3c";
	sharedButton.style.fontWeight = "400";

	sharedcommitmentsMobile.style.color = "#c63c3c";
	sharedcommitmentsMobile.style.borderBottom = "solid 4px #faf9f6";
	sharedcommitmentsMobile.style.borderBottom = "solid 4px #c63c3c";

	function showSubMenu() {
		bottombar.style.visibility = "inherit";
	}

	function hideSubMenu() {
		bottombar.style.visibility = "hidden";
	}

	aboutButton.onmouseenter = changeBottomTextBacktoAbout;
	bottombar.onmouseleave = hideSubMenu;

	takeActionbutton.onmouseenter = changeBottomTextTakeActionShow;

	bottombar.onmouseleave = hideSubMenu;	

	function changeBottomTextTakeActionShow() {
		bottombar.style.visibility = "inherit";
		bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"
	}
	function changeBottomTextBacktoAbout() {
		bottombar.style.visibility = "inherit";
		bottombar.innerHTML = "<div class='subnav-content'><a href='leadership.html'>LEADERSHIP</a><a href='goals&priorities.html'>GOALS & PRIORITIES</a><a href='advisors.html'>ADVISORS</a></div>"
	}
};

if ( document.URL.includes("goals&priorities") ) {
	bottombar.style.visibility = "inherit";	

	aboutButton.style.color = "#c63c3c";
	aboutButton.style.fontWeight = "400";

	aboutMobile.style.color = "#c63c3c";
	goalsvisionMobile.style.color = "#5b8cbd";
	goalsvisionMobile.style.fontWeight = "400";
	aboutMobile.style.borderBottom = "solid 4px #c63c3c";


	takeActionbutton.onmouseenter = changeBottomTextTakeActionShow;
	takeActionbutton.onmouseleave = changeBottomTextBacktoAbout;

	bottombar.innerHTML = "<div class='subnav-content'><a href='leadership.html'>LEADERSHIP</a><a href='goals&priorities.html' style='color: #c63c3c; font-weight: 500;'>GOALS & PRIORITIES</a><a href='advisors.html'>ADVISORS</a></div>"

	
	function changeBottomTextTakeActionShow() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"
	}
	function changeBottomTextBacktoAbout() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='leadership.html'>LEADERSHIP</a><a href='goals&priorities.html' style='color: #c63c3c; font-weight: 500;'>GOALS & PRIORITIES</a><a href='advisors.html'>ADVISORS</a></div>"
		aboutButton.style.color = "#c63c3c";
	
	}
};

if ( document.URL.includes("leadership") ) {
	bottombar.style.visibility = "inherit";	
	
	aboutButton.style.color = "#c63c3c"
	aboutButton.style.fontWeight = "400";

	aboutMobile.style.color = "#c63c3c";
	leadershipMobile.style.color = "#5b8cbd";
	leadershipMobile.style.fontWeight = "400";
	aboutMobile.style.borderBottom = "solid 4px #c63c3c";

	takeActionbutton.onmouseenter = changeBottomTextTakeActionShow;
	takeActionbutton.onmouseleave = changeBottomTextBacktoAbout;

	bottombar.innerHTML = "<div class='subnav-content'><a href='leadership.html' style='color: #c63c3c; font-weight: 500;'>LEADERSHIP</a><a href='goals&priorities.html'>GOALS & PRIORITIES</a><a href='advisors.html'>ADVISORS</a></div>"


	function changeBottomTextTakeActionShow() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"
	}
	function changeBottomTextBacktoAbout() {
		aboutButton.style.color = "#c63c3c";
		bottombar.innerHTML = "<div class='subnav-content'><a href='leadership.html' style='color: #c63c3c; font-weight: 500;'>LEADERSHIP</a><a href='goals&priorities.html'>GOALS & PRIORITIES</a><a href='advisors.html'>ADVISORS</a></div>"
	}
	
	
};

if ( document.URL.includes("advisors") ) {
	bottombar.style.visibility = "inherit";	
	
	aboutButton.style.color = "#c63c3c"
	aboutButton.style.fontWeight = "400";

	aboutMobile.style.color = "#c63c3c";
	aboutMobile.style.borderBottom = "solid 4px #c63c3c";
	advisorsMobile.style.color = "#5b8cbd";
	advisorsMobile.style.fontWeight = "400";
	aboutMobile.style.borderBottom = "solid 4px #c63c3c";

	takeActionbutton.onmouseenter = changeBottomTextTakeActionShow;
	takeActionbutton.onmouseleave = changeBottomTextBacktoAbout;

	bottombar.innerHTML = "<div class='subnav-content'><a href='leadership.html'>LEADERSHIP</a><a href='goals&priorities.html'>GOALS & PRIORITIES</a><a href='advisors.html' style='color: #c63c3c; font-weight: 500;'>ADVISORS</a></div>"

	function changeBottomTextTakeActionShow() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"
	}
	function changeBottomTextBacktoAbout() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='leadership.html'>LEADERSHIP</a><a href='goals&priorities.html'>GOALS & PRIORITIES</a><a href='advisors.html' style='color: #c63c3c; font-weight: 500;'>ADVISORS</a></div>"
	
	}
};

if ( document.URL.includes("ourpartners") ) {
	bottombar.style.visibility = "inherit";	
	partnersButton.style.color = "#c63c3c";
	partnersButton.style.fontWeight = "300";

	partnersMobile.style.color = "#c63c3c";
	partnersMobile.style.borderBottom = "solid 4px #c63c3c";

	function showSubMenu() {
		bottombar.style.visibility = "inherit";
	}

	function hideSubMenu() {
		bottombar.style.visibility = "hidden";
	}

	aboutButton.onmouseenter = changeBottomTextBacktoAbout;
	bottombar.onmouseleave = hideSubMenu;

	takeActionbutton.onmouseenter = changeBottomTextTakeActionShow;

	bottombar.onmouseleave = hideSubMenu;	

	function changeBottomTextTakeActionShow() {
		bottombar.style.visibility = "inherit";
		bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"
	}
	function changeBottomTextBacktoAbout() {
		bottombar.style.visibility = "inherit";
		bottombar.innerHTML = "<div class='subnav-content'><a href='leadership.html'>LEADERSHIP</a><a href='goals&priorities.html'>GOALS & PRIORITIES</a><a href='advisors.html'>ADVISORS</a></div>"
	}
};

if ( document.URL.includes("cldebydesign") ) {
	bottombar.style.visibility = "inherit";	

	takeActionbutton.style.color = "#c63c3c";
	takeActionbutton.style.fontWeight = "400";

	takeActionMobile.style.color = "#c63c3c";
	takeActionMobile.style.borderBottom = "solid 4px #c63c3c";
	cldebyDesignMobile.style.color = "#5b8cbd";
	cldebyDesignMobile.style.fontWeight = "400";


	aboutButton.onmouseenter = changeBottomTextBacktoAbout;
	aboutButton.onmouseleave = changeBottomTextTakeActionShow;

	bottombar.style.visibility = "inherit";	
	bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html' style='color: #c63c3c; font-weight: 500;'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"

    function changeBottomTextTakeActionShow() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html' style='color: #c63c3c; font-weight: 500;'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"
	}
	function changeBottomTextBacktoAbout() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='leadership.html'>LEADERSHIP</a><a href='goals&priorities.html'>GOALS & PRIORITIES</a><a href='advisors.html'>ADVISORS</a></div>"
	}
};

if ( document.URL.includes("perspectives&issues") ) {
	bottombar.style.visibility = "inherit";	

	takeActionbutton.style.color = "#c63c3c";
	takeActionbutton.style.fontWeight = "400";

	takeActionMobile.style.color = "#c63c3c";
	takeActionMobile.style.borderBottom = "solid 4px #c63c3c";
	perspectivesIssuesMobile.style.color = "#5b8cbd";
	perspectivesIssuesMobile.style.fontWeight = "400";

	aboutButton.onmouseenter = changeBottomTextBacktoAbout;
	aboutButton.onmouseleave = changeBottomTextTakeActionShow;

	bottombar.style.visibility = "inherit";	
	bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html' style='color: #c63c3c; font-weight: 500;'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"

    function changeBottomTextTakeActionShow() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html' style='color: #c63c3c; font-weight: 500;'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"
	}
	function changeBottomTextBacktoAbout() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='leadership.html'>LEADERSHIP</a><a href='goals&priorities.html'>GOALS & PRIORITIES</a><a href='advisors.html'>ADVISORS</a></div>"
	}
};

if ( document.URL.includes("planning") ) {
	bottombar.style.visibility = "inherit";	

	takeActionbutton.style.color = "#c63c3c";
	takeActionbutton.style.fontWeight = "400";

	takeActionMobile.style.color = "#c63c3c";
	takeActionMobile.style.borderBottom = "solid 4px #c63c3c";
	planningMobile.style.color = "#5b8cbd";
	planningMobile.style.fontWeight = "400";


	aboutButton.onmouseenter = changeBottomTextBacktoAbout;
	aboutButton.onmouseleave = changeBottomTextTakeActionShow;

	bottombar.style.visibility = "inherit";	
	bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html'style='color: #c63c3c; font-weight: 500;'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"

    function changeBottomTextTakeActionShow() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html' style='color: #c63c3c; font-weight: 500;'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"
	}
	function changeBottomTextBacktoAbout() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='leadership.html'>LEADERSHIP</a><a href='goals&priorities.html'>GOALS & PRIORITIES</a><a href='advisors.html'>ADVISORS</a></div>"
	}
};

if ( document.URL.includes("campusprofiles") ) {
	bottombar.style.visibility = "inherit";	

	takeActionbutton.style.color = "#c63c3c";
	takeActionbutton.style.fontWeight = "400";

	takeActionMobile.style.color = "#c63c3c";
	takeActionMobile.style.borderBottom = "solid 4px #c63c3c";
	campusProfilesMobile.style.color = "#5b8cbd";
	campusProfilesMobile.style.fontWeight = "400";


	aboutButton.onmouseenter = changeBottomTextBacktoAbout;
	aboutButton.onmouseleave = changeBottomTextTakeActionShow;

	bottombar.style.visibility = "inherit";	
	bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html' style='color: #c63c3c; font-weight: 500;'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"

    function changeBottomTextTakeActionShow() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html' style='color: #c63c3c; font-weight: 500;'>CAMPUS PROFILES</a><a href='macroinitiatives.html'>MACRO INITIATIVES</a></div>"
	}
	function changeBottomTextBacktoAbout() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='leadership.html'>LEADERSHIP</a><a href='goals&priorities.html'>GOALS & PRIORITIES</a><a href='advisors.html'>ADVISORS</a></div>"
	}
};

if ( document.URL.includes("macroinitiatives") ) {
	bottombar.style.visibility = "inherit";	

	takeActionbutton.style.color = "#c63c3c";
	takeActionbutton.style.fontWeight = "400";

	takeActionMobile.style.color = "#c63c3c";
	takeActionMobile.style.borderBottom = "solid 4px #c63c3c";
	macroInitiativesMobile.style.color = "#5b8cbd";
	macroInitiativesMobile.style.fontWeight = "400";


	aboutButton.onmouseenter = changeBottomTextBacktoAbout;
	aboutButton.onmouseleave = changeBottomTextTakeActionShow;

	bottombar.style.visibility = "inherit";	
	bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html' style='color: #c63c3c; font-weight: 500;'>MACRO INITIATIVES</a></div>"

    function changeBottomTextTakeActionShow() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='cldebydesign.html'>CLDE BY DESIGN</a><a href='perspectives&issues.html'>PERSPECTIVES & ISSUES</a><a href='planning.html'>PLANNING</a><a href='campusprofiles.html'>CAMPUS PROFILES</a><a href='macroinitiatives.html' style='color: #c63c3c; font-weight: 500;'>MACRO INITIATIVES</a></div>"
	}
	function changeBottomTextBacktoAbout() {
		bottombar.innerHTML = "<div class='subnav-content'><a href='leadership.html'>LEADERSHIP</a><a href='goals&priorities.html'>GOALS & PRIORITIES</a><a href='advisors.html'>ADVISORS</a></div>"
	}
};

// BUGER MENU

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
	slowmo.dispatchEvent(clickEvent);
	burger.dispatchEvent(clickEvent);
	
	setTimeout(function(){
		burger.dispatchEvent(clickEvent);
		
		setTimeout(function(){
			slowmo.dispatchEvent(clickEvent);
		}, 3500);
	}, 5500);
});



window.addEventListener("DOMContentLoaded", function () {
	// get the form elements defined in your form HTML above
  
	var form = document.getElementById("my-form");
	// var button = document.getElementById("my-form-button");
	var status = document.getElementById("status");
  
	// Success and Error functions for after the form is submitted
  
	function success() {
	  form.reset();
	  status.classList.add("success");
	  status.innerHTML = "Thanks!";
	}
  
	function error() {
	  status.classList.add("error");
	  status.innerHTML = "Oops! There was a problem.";
	}
  
	// handle the form submission event
  
	form.addEventListener("submit", function (ev) {
	  ev.preventDefault();
	  var data = new FormData(form);
	  ajax(form.method, form.action, data, success, error);
	});
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function () {
	  if (xhr.readyState !== XMLHttpRequest.DONE) return;
	  if (xhr.status === 200) {
		success(xhr.response, xhr.responseType);
	  } else {
		error(xhr.status, xhr.response, xhr.responseType);
	  }
	};
	xhr.send(data);
  }
  