/*
 * The application is divided into tabs.  Tabs are contained in: About.js, MyBadges.js, Learn.js
 * showweb.js is a temporary window displaying browser content given a url
 * 
 */




// create tab group
var tabGroup = Titanium.UI.createTabGroup();




Ti.include("getEmail.js");



Ti.App.addEventListener("app.openTabGroup",function(data) {


if (Titanium.Platform.osname == 'iphone' || Titanium.Platform.osname == 'ipad')
{
	tabGroup.open({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
} else {
	tabGroup.open();
}

});







	/*
	var tabTemp = tab1;
	
	
	tabGroup.addEventListener('focus',function(e) {


	if (tabTemp != tabGroup.activeTab) {

		if (tabGroup.activeTab == tab2)
		{
			
			WebviewLearn.url = WebviewLearnUrl;
		
	 	}
	 	
	 	if (tabGroup.activeTab == tab3)
		{
			
			WebviewAbout.url = WebviewAboutUrl;
		
	 	}
	 	tabTemp = tabGroup.activeTab;
	 
	 	
	}
	
	
})
*/