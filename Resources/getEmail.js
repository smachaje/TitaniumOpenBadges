
var winEmail = Titanium.UI.createWindow({  
    title:'Email',
    backgroundColor:'#fff',
    backgroundImage: 'images/shield.png',
    backgroundRepeat: 'none'
   
});


 
var screenWidth =  Ti.Platform.displayCaps.platformWidth;
var screenHeight = Ti.Platform.displayCaps.platformHeight;
 
 
 
 
var txtEmail = Titanium.UI.createTextField({  
    color:'#336699',  
    top:screenHeight/2 -100 ,  
    left: -400,  
    width:200,  
    height:40,  
    hintText:'my@example.com',  
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  

});  
winEmail.add(txtEmail);  
 
//txtEmail.value = "smachaje@grcc.edu";
var hasPropertyEmail = Titanium.App.Properties.hasProperty("Email");

if (hasPropertyEmail != false){
    var propertyEmail = Titanium.App.Properties.getString("Email");
    txtEmail.value = propertyEmail;
    //strBbUrlFull = getUrl('index');;
};

var loginBtn = Titanium.UI.createButton({  
    title:'Get Badges',  
    top:screenHeight/2 - 50, 
    left: screenWidth + 150,  
    width:150,  
    height:35,  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
winEmail.add(loginBtn);  

//txtEmail.animate({top:screenHeight/2 -100,left:screenWidth/2-150,duration:2000});





if (Titanium.Platform.osname == 'iphone' || Titanium.Platform.osname == 'ipad')
{
	txtEmail.animate({top:screenHeight/2 -50,left:screenWidth/2-100,duration:2000});
	loginBtn.animate({top:screenHeight/2 ,left:screenWidth/2 - 75,duration:2000});

	winEmail.open({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
} else {
	
	txtEmail.font.fontSize = '18';
	txtEmail.height = 'auto';
	txtEmail.left = screenWidth/2-100;
	loginBtn.left = screenWidth/2 - 75;

	winEmail.open();
}

loginBtn.addEventListener('click',  function(e){
	
if (txtEmail.value != "")
{
	if (txtEmail.value.search('@') > 0) {	
	//alert(txtEmail.value.search('@'));
	
		Titanium.App.Properties.setString("Email",txtEmail.value);
  		Ti.include("Badges.js");
  		winEmail.close();
	} else {
		alert("Your email is missing @ sign.");
	}
	
} else { alert("Please enter your email.")}
});
