
var xhr=Titanium.Network.createHTTPClient();    
xhr.onerror = function(e){ 
 Ti.API.error('Bad Sever =>'+e.error);
 
 /*
 alert("Please create an account for Mozilla Open Badges for email " + txtEmail.value);
 			var webwin = Titanium.UI.createWindow({
				url: 'showweb.js',
				backgroundColor: '#ffffff',
				myurl: 'https://login.persona.org/signin',
				navBarHidden: false
			});
		
			webwin.open();
 */

	Ti.include("Instructions.js");
	Ti.include("About.js");
	tabGroup.addTab(tabWelcome);
	tabGroup.addTab(tab3);
    Ti.App.fireEvent("app.openTabGroup");
                      
                       
};
 
xhr.open("POST",urlEmailUserId);

 xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    var params = {
        email : txtEmail.value
       
    };
 
    xhr.send(params);

 
xhr.onload = function(){
    // Ti.API.info('RAW ='+this.responseText);
 if(this.status == '200'){
    // Ti.API.info('got my response, http status code ' + this.status);
    if(this.readyState == 4){
      var response=JSON.parse(this.responseText);
     
   
      Ti.App.fireEvent("app.updateUserId",
                      {"response":response});
      
    
    //  Ti.API.info('Response = '+response);
    }else{
    alert('HTTP Ready State != 4');
    }           
 }else{
    alert('HTTp Error Response Status Code = '+this.status);
    //  Ti.API.error("Error =>"+this.response);
 }              
};

