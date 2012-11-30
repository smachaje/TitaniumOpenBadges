//
// create controls tab and root window
//
var WebviewWelcomeUrl = "local/instructions.html";

var winWelcome = Titanium.UI.createWindow({  
    title:'Welcome',
    backgroundColor:'#fff'
});
var tabWelcome = Titanium.UI.createTab({  
    icon:'images/KS_nav_mashup.png',
    title:'Welcome',
    window:winWelcome
});

	
	
	var WebviewWelcome = Titanium.UI.createWebView({url:WebviewWelcomeUrl});					
	winWelcome.add(WebviewWelcome);

