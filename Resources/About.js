//
// create controls tab and root window
//
var WebviewAboutUrl = "local/about.html";

var winAbout = Titanium.UI.createWindow({  
    title:'About',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    icon:'images/KS_nav_platform.png',
    title:'About',
    window:winAbout
});

	
	
	var WebviewAbout = Titanium.UI.createWebView({url:WebviewAboutUrl});					
	winAbout.add(WebviewAbout);

