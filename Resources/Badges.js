
Ti.UI.backgroundColor = '#dddddd';



// beta urls may need to be changed later
var urlEmailUserId = "http://beta.openbadges.org/displayer/convert/email";
var urlMozillaBase = "http://beta.openbadges.org/";

Ti.include("getUserId.js");

var BadgesUserId;
var BadgesEmail;
var urlBadges;

Ti.App.addEventListener("app.updateUserId",function(data) {
	
    BadgesEmail = data.response.email;
    BadgesUserId = data.response.userId;

	urlGroups = "displayer/" + BadgesUserId + "/groups.json";

    urlBadges = "displayer/" + BadgesUserId + "/group/";


	Ti.include("MyBadges.js");
	Ti.include("About.js");
	Ti.include("Learn.js");


//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);  

    Ti.App.fireEvent("app.openTabGroup");


});