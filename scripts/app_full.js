;
(function(){

	function showHomeDiv(){
		document.getElementById("banner").style.display = 'inherit';
	}

	function hideHomeDiv(){
		document.getElementById("banner").style.display = 'none';
	}

	function showServicesDiv(){
		document.getElementById("servicesDiv").style.display = 'inherit';
	}

	function hideServicesDiv(){
		document.getElementById("servicesDiv").style.display = 'none';
	}

	function showDemosDiv(){
		document.getElementById("demosDiv").style.display = 'inherit';
	}

	function hideDemosDiv(){
		document.getElementById("demosDiv").style.display = 'none';
	}

	function showContactDiv(){
		document.getElementById("contactDiv").style.display = 'inherit';
	}

	function hideContactDiv(){
		document.getElementById("contactDiv").style.display = 'none';
	}

	document.getElementById("contact").addEventListener("click", function(){
		hideHomeDiv();
		hideServicesDiv();
		hideDemosDiv();
		showContactDiv();
	});

	document.getElementById("demos").addEventListener("click", function(){
		hideHomeDiv();
		hideServicesDiv();
		hideContactDiv();
		showDemosDiv();
	});

	document.getElementById("services").addEventListener("click", function(){
		hideHomeDiv();
		hideDemosDiv();
		hideContactDiv();
		showServicesDiv();
	});

	document.getElementById("home").addEventListener("click", function(){
		hideServicesDiv();
		hideDemosDiv();
		hideContactDiv();
		showHomeDiv();
	});


	window.onhashchange = function() {
		if ((window.location.href).indexOf("contactDiv") >-1) {
			hideHomeDiv();
			hideServicesDiv();
			hideDemosDiv();
			showContactDiv();		
		} else if((window.location.href).indexOf("demosDiv") >-1){
			hideHomeDiv();
			hideServicesDiv();
			hideContactDiv();
			showDemosDiv();
		} else if((window.location.href).indexOf("servicesDiv") >-1){
			hideHomeDiv();
			hideDemosDiv();
			hideContactDiv();
			showServicesDiv();
		} else if((window.location.href).indexOf("container") >-1){
			hideServicesDiv();
			hideDemosDiv();
			hideContactDiv();
			showHomeDiv();
		}
	}

}());