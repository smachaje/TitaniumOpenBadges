

var winMyBadges = Titanium.UI.createWindow({  
    title:'My Badges',
    backgroundColor:'#fff'
    
});

var tab1 = Titanium.UI.createTab({  
    icon:'images/KS_nav_ui.png',
    title:'My Badges',
    window:winMyBadges
});

// qcr: Determine os type and assign url as required
	var osname = Ti.Platform.osname,
	version = Ti.Platform.version,
	height = Ti.Platform.displayCaps.platformHeight,
	width = Ti.Platform.displayCaps.platformWidth;

function getGroups()
{	http://beta.openbadges.org/displayer/9489/groups.json

	 var loader = Titanium.Network.createHTTPClient();
   // Sets the HTTP request method, and the URL to get data from
   loader.open("GET", urlMozillaBase + urlGroups);
   // Runs the function when the data is ready for us to process
   loader.onload = function()
   {
        var json;

        json = JSON.parse(this.responseText);
	
	//	Ti.API.info(json.userId);
		
		    Ti.App.fireEvent("app.updateGroups",
                      {"groups":json.groups});
	
		
   };
   // Send the HTTP request
   loader.send();

}



// Function loadBadges()
function loadBadges(data)
{

	
  

   Ti.API.info(urlMozillaBase + urlBadges + data.groupId +".json");
   // Empty array "rowData" for our tableview
   
   // Create our HTTP Client and name it "loader"
   var loader = Titanium.Network.createHTTPClient();
   // Sets the HTTP request method, and the URL to get data from
   loader.open("GET", urlMozillaBase + urlBadges + data.groupId +".json");
   
   //Ti.API.info(data.length);
   // Runs the function when the data is ready for us to process
   loader.onload = function()
   {
        var json;

        json = JSON.parse(this.responseText);
	
	//	Ti.API.info(json.userId);
	//	Ti.API.info(json.badges[0].hostedUrl);
 					
 					var GroupRow = Titanium.UI.createTableViewRow({height:'auto', title: data.name, link: 'http://beta.openbadges.org/'});
					tableView.appendRow(GroupRow);
					
 				//	Ti.App.fireEvent("app.updateTableView",
                  //     {GroupRow: "row"});		

		
          	for (i = 0; i < json.badges.length; i++) {
	 		
	 			   //var rowData = [];
	 		
	 			   var Badge = json.badges[i];
	 			   
                   var BadgeName = Badge.assertion.badge.name; 
                   var BadgeDesc = Badge.assertion.badge.description; 
                   var BadgeImage = Badge.assertion.badge.image;
                   
                   //Ti.API.info(Badge.assertion.badge.issuer.origin);


                   if (BadgeImage.substr(0,4) != "http") {
                   	BadgeImage = Badge.assertion.badge.issuer.origin + BadgeImage;
                   }
                   
                   var BadgeCriteria = Badge.assertion.badge.criteria;
                  
                   // Create a row and set its height to auto
                   var row = Titanium.UI.createTableViewRow({height:'auto', link: BadgeCriteria});
                   
                   //row.link = BadgeCriteria;
                   // Create the view that will contain the text and avatar
                   var post_view = Titanium.UI.createView({
                           height:'auto',
//                            layout:'vertical', // forces labels lower than logo
                           top:5,
                           right:5,
                           bottom:5,
                           left:5
                   });
                   	if (osname === 'iphone' || osname === 'ipad') {
                   		post_view.width = 'auto';
                   		post_view.height = Math.ceil(BadgeDesc.length / 30) * 23 + 20 ;
                   		//Ti.API.info(post_view.height);
                   	}
                    if (post_view.height < 90)
                    	{
                    		post_view.height = 90;
                    	}
                   // Create image view to hold profile pic
                   var av_image = Titanium.UI.createImageView({
                           url:BadgeImage, // the image for the image view
                           top:0,
                           left:0,
                           height:48,
                           width:48
                   });
                   post_view.add(av_image);
              	   var inner_view = Titanium.UI.createView({
                           height:'auto',
                           layout:'vertical', // want the two labels to be vertical
                  		   top:0,                 // no extra padding is needed from inner_view
                           right:0,
                           bottom:0,
                           left:0
                   });
                   // Create the label to hold the screen name
                   var user_lbl = Titanium.UI.createLabel({
                           text:BadgeName,
                           left:54,
                           width:width,
                           top:0,
                           bottom:0,
                           height:18,
                           textAlign:'left',
                           color:'#444444',
                           font:{fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'}
                   });
            	   inner_view.add(user_lbl);
//                    post_view.add(user_lbl);

                   // Create the label to hold the Badge desc
                   var badge_lbl = Titanium.UI.createLabel({
                           text:BadgeDesc,
                           left:54,
                           top:0,
                           bottom:2,
                 		   height:Math.ceil(BadgeDesc.length / 30) * 23, // rough conservative approximation
//                            height:'auto',  // 'auto' doesn't work
                           width:236,
                          
                           textAlign:'left',
                           font:{fontSize:14}
                   });
                   
                   
                   	if (osname === 'ipad') {
                   		badge_lbl.width = 'auto';
                   		
                   	}
                   	
               inner_view.add(badge_lbl);
               post_view.add(inner_view);
                   // Add the post view to the row
                   row.add(post_view);
                   // Give each row a class name
                   row.className = "item"+i;
                   // Add row to the rowData array
                   
                   
                         tableView.appendRow(row);

                //       Ti.App.fireEvent("app.updateTableView",
                //       {row: "row"});
                 


          } // end of for i
         
             
   };  // end of loader
   // Send the HTTP request
   loader.send();
}

getGroups();

var MyBadgeGroup = [];
Ti.App.addEventListener("app.updateGroups",function(data) {

			

      		MyBadgeGroup = data.groups;
      		
      		if (MyBadgeGroup.length == 0)
      		{
      			
      			   var row = Titanium.UI.createTableViewRow({height:'auto', link: "local/instructions.html"});
                   
               
                   // Create the view that will contain the text and avatar
                   var post_view = Titanium.UI.createView({
                           height:'auto',
//                            layout:'vertical', // forces labels lower than logo
                           top:5,
                           right:5,
                           bottom:5,
                           left:5
                   });
                   	if (osname === 'iphone' || osname === 'ipad') {
                   		post_view.width = 'auto';
                   		
                   	}
                   
                    		post_view.height = 150;
                    	
                   // Create image view to hold profile pic
                   var av_image = Titanium.UI.createImageView({
                           url:"images/shield128_empty.png", // the image for the image view
                           top:0,
                           left:0,
                           height:48,
                           width:48
                   });
                   post_view.add(av_image);
              	   var inner_view = Titanium.UI.createView({
                           height:'auto',
                           layout:'vertical', // want the two labels to be vertical
                  		   top:0,                 // no extra padding is needed from inner_view
                           right:0,
                           bottom:0,
                           left:0
                   });
                   // Create the label to hold the screen name
                   var user_lbl = Titanium.UI.createLabel({
                           text:"Your account works, but ...",
                           left:54,
                           width:width,
                           top:0,
                           bottom:0,
                           height:18,
                           textAlign:'left',
                           color:'#444444',
                           font:{fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'}
                   });
            	   inner_view.add(user_lbl);
//                    post_view.add(user_lbl);

                   // Create the label to hold the Badge desc
                   var badge_lbl = Titanium.UI.createLabel({
                           text:"Your badges are all private.  Please drag your badges into a public group in the Mozilla Backpack, making them public may take 15 minutes, then restart the app.",
                           left:54,
                           top:0,
                           bottom:2,
                 		   height:150, // rough conservative approximation
//                            height:'auto',  // 'auto' doesn't work
                           width:236,
                          
                           textAlign:'left',
                           font:{fontSize:14}
                   });
                   
                   
                   	if (osname === 'ipad') {
                   		badge_lbl.width = 'auto';
                   		
                   	}
                   	
             	  	inner_view.add(badge_lbl);
               		post_view.add(inner_view);
                   	// Add the post view to the row
                   	row.add(post_view);
                   	// Give each row a class name
                   	
                   
                    tableView.appendRow(row);

      			
      		}
      		
      		//for (x=MyBadgeGroup.length; x > 0; x--) {
      		for (x=0; x < MyBadgeGroup.length; x++) {

      		
      		loadBadges(MyBadgeGroup[x]);
      		} 
   });
   


var tableView = Titanium.UI.createTableView();

           tableView.addEventListener('click',function(e) {
		
			//	Ti.API.info(e.index);
			//	Ti.API.info(e.rowData.link);
	

			var webwin = Titanium.UI.createWindow({
				url: 'showweb.js',
				backgroundColor: '#ffffff',
				myurl: e.rowData.link,
				navBarHidden: false
			});
		
			if (Titanium.Platform.osname == 'iphone' || Titanium.Platform.osname == 'ipad')
        	{ 
        		tab1.open(webwin,{animated:true}); }
        	else
			{ 
				//alert(webwin.myurl);
				//tab1.open(webwin);
				tab1.open(webwin,{animated:true}); 

			}
		
			//}
			});



winMyBadges.add(tableView);


