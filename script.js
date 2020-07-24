
function showMobileMenu() {
	var popup = document.getElementById('mobile-menu');
	popup.style.display = "block";
 setTimeout(function(){
 	var popup = document.getElementById('mobile-menu');
	// popup.style.height = "0%";
	popup.style.opacity = "1";
	
 	}

 	, 0);
}


function hideMobileMenu() {
	var popup = document.getElementById('mobile-menu');
	popup.style.opacity = "0";
 setTimeout(function(){
 	var popup = document.getElementById('mobile-menu');
	// popup.style.height = "0%";
	
	popup.style.display = "none";
 	}

 	, 800);
}

function showPopup() {
	var popup = document.getElementById('popup');
	popup.style.display = "block";
 setTimeout(function(){
 	var popup = document.getElementById('popup');
	// popup.style.height = "0%";
	popup.style.opacity = "1";
	
 	}

 	, 0);
}


function hidePopup() {
	var popup = document.getElementById('popup');
	popup.style.opacity = "0";
 setTimeout(function(){
 	var popup = document.getElementById('popup');
	// popup.style.height = "0%";
	
	popup.style.display = "none";
 	}

 	, 800);
}

function hideChoice() {
	var choice = document.getElementById('choice')
	choice.style.opacity = "0";
	setTimeout(function(){
		var popup = document.getElementById('choice');
		popup.style.display = "none";
	}

	, 800);	
}




function showLexya() {
	var overlay = document.getElementById('overlaylexya');
	overlay.style.display = "block";
}

function hideLexya() {
	var video = document.getElementById('closelexya');
	var iframe = video.querySelector('iframe');
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
	var overlay = document.getElementById('overlaylexya');
	overlay.style.display = "none";
}

function showRedBull() {
	var overlay = document.getElementById('overlayredbull');
	overlay.style.display = "block";
}

function hideRedBull() {
	var video = document.getElementById('closeredbull');
	var iframe = video.querySelector('iframe');
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
	var overlay = document.getElementById('overlayredbull');
	overlay.style.display = "none";
}

// function pauseRedbull() {
// 	var video = document.getElementById('redbullvideo');
// }

function showJMCC() {
	var overlay = document.getElementById('overlayJMCC');
	overlay.style.display = "block";
}

function hideJMCC() {
	var overlay = document.getElementById('overlayJMCC');
	overlay.style.display = "none";
}

function showToiture() {
	var overlay = document.getElementById('overlayToiture');
	overlay.style.display = "block";
}

function hideToiture() {
	var overlay = document.getElementById('overlayToiture');
	overlay.style.display = "none";
}


function showgala() {
	var overlay = document.getElementById('overlaygala');
	overlay.style.display = "block";
}

function hidegala() {
	var overlay = document.getElementById('overlaygala');
	overlay.style.display = "none";
}

function showemerge() {
	var overlay = document.getElementById('overlayemerge');
	overlay.style.display = "block";
}

function hideemerge() {
	var video = document.getElementById('closeemerge');
	var iframe = video.querySelector('iframe');
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
	var overlay = document.getElementById('overlayemerge');
	overlay.style.display = "none";
}

function showpureprep() {
	var overlay = document.getElementById('overlaypureprep');
	overlay.style.display = "block";
}

function hidepureprep() {
	var overlay = document.getElementById('overlaypureprep');
	overlay.style.display = "none";
}

function showOnTop() {
	var overlay = document.getElementById('overlayontop');
	overlay.style.display = "block";
}

function hideOnTop() {
	var overlay = document.getElementById('overlayontop');
	overlay.style.display = "none";
}


function showlacasse() {
	var overlay = document.getElementById('overlaylacasse');
	overlay.style.display = "block";
}

function hidelacasse() {
	var video = document.getElementById('closelacasse');
	var iframe = video.querySelector('iframe');
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
	var overlay = document.getElementById('overlaylacasse');
	overlay.style.display = "none";
}




//Videos

function showVidMagique() {
	var overlay = document.getElementById('vidmagique');
	overlay.style.display = "block";
}

function hideVidMagique() {
	var video = document.getElementById('closemagique');
	var iframe = video.querySelector('iframe');
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
	var overlay = document.getElementById('vidmagique');
	overlay.style.display = "none";
}



function showVidBLM() {
	var overlay = document.getElementById('vidBLM');
	overlay.style.display = "block";
}

function hideVidBLM() {
	var video = document.getElementById('closeBLM');
	var iframe = video.querySelector('iframe');
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
	var overlay = document.getElementById('vidBLM');
	overlay.style.display = "none";
}

function showVidCovid() {
	var overlay = document.getElementById('vidCovid');
	overlay.style.display = "block";
}

function hideVidCovid() {
	var video = document.getElementById('closecovid');
	var iframe = video.querySelector('iframe');
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
	var overlay = document.getElementById('vidCovid');
	overlay.style.display = "none";
}


function showVidCYMI() {
	var overlay = document.getElementById('vidCYMI');
	overlay.style.display = "block";
}

function hideVidCYMI() {
	var video = document.getElementById('closeCYMI');
	var iframe = video.querySelector('iframe');
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
	var overlay = document.getElementById('vidCYMI');
	overlay.style.display = "none";
}

function showVidEmerge() {
	var overlay = document.getElementById('vidEmerge');
	overlay.style.display = "block";
}

function hideVidEmerge() {
	var video = document.getElementById('closeEmerge');
	var iframe = video.querySelector('iframe');
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
	var overlay = document.getElementById('vidEmerge');
	overlay.style.display = "none";
}

function showVidLexya() {
	var overlay = document.getElementById('vidLexya');
	overlay.style.display = "block";
}

function hideVidLexya() {
	var video = document.getElementById('closeLexya');
	var iframe = video.querySelector('iframe');
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
	var overlay = document.getElementById('vidLexya');
	overlay.style.display = "none";
}

function showVidJMMA() {
	var overlay = document.getElementById('vidJMMA');
	overlay.style.display = "block";
}

function hideVidJMMA() {
	var video = document.getElementById('closeJMMA');
	var iframe = video.querySelector('iframe');
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
	var overlay = document.getElementById('vidJMMA');
	overlay.style.display = "none";
}

function showVidRemorque() {
	var overlay = document.getElementById('vidRemorque');
	overlay.style.display = "block";
}

function hideVidRemorque() {
	var video = document.getElementById('closeRemorque');
	var iframe = video.querySelector('iframe');
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
	var overlay = document.getElementById('vidRemorque');
	overlay.style.display = "none";
}

function showVidMove() {
	var overlay = document.getElementById('vidMove');
	overlay.style.display = "block";
}

function hideVidMove() {
	var video = document.getElementById('closeMove');
	var iframe = video.querySelector('iframe');
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
	var overlay = document.getElementById('vidMove');
	overlay.style.display = "none";
}

function showVidPorto() {
	var overlay = document.getElementById('vidPorto');
	overlay.style.display = "block";
}

function hideVidPorto() {
	var video = document.getElementById('closePorto');
	var iframe = video.querySelector('iframe');
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
	var overlay = document.getElementById('vidPorto');
	overlay.style.display = "none";
}

function showVidJMCC() {
	var overlay = document.getElementById('vidJMCC');
	overlay.style.display = "block";
}

function hideVidJMCC() {
	var video = document.getElementById('closeJMCC');
	var iframe = video.querySelector('iframe');
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
	var overlay = document.getElementById('vidJMCC');
	overlay.style.display = "none";
}

function showVidProlevel() {
	var overlay = document.getElementById('vidProlevel');
	overlay.style.display = "block";
}

function hideVidProlevel() {
	var video = document.getElementById('closeProlevel');
	var iframe = video.querySelector('iframe');
	var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
	var overlay = document.getElementById('vidProlevel');
	overlay.style.display = "none";
}



