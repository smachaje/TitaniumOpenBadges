//
// create controls tab and root window
//
var WebviewLearnUrl = "https://p2pu.org/en/badges/";

var winLearn = Titanium.UI.createWindow({  
    title:'Get Badges',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'images/KS_nav_mashup.png',
    title:'Get Badges',
    window:winLearn
});

	
	
	var WebviewLearn = Titanium.UI.createWebView({url:WebviewLearnUrl});					
	winLearn.add(WebviewLearn);

