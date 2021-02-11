function listenClicks(){
	document.addEventListener("click", (e) => {
		console.log(e.target.textContent);
		
		function getCurrentTabUrl(){
			var pp = browser.tabs.query({currentWindow: true, active: true}).then(function(tabs) {
				var tab = tabs[0];
				return tab}
			, console.error);
			return pp
		}
	

		var t = getCurrentTabUrl()
		t.then(function(x) {
			console.log(x.title, x.url);}, console.error);









	
	}
	)
}

listenClicks();
