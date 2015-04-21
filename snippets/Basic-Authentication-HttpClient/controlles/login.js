
var username = Ti.App.Properties.getString('username'),
    password = Ti.App.Properties.getString('password');
 
var client = Ti.Network.createHTTPClient();
var authString = 'Basic ' + Ti.Utils.base64encode(username + ':' + password);
client.setRequestHeader('Authorization', authString);
  
client.onload = function (e) {
    console.log(JSON.stringify(e));
    console.log(JSON.stringify(this.responseText));  
    
    // when logged in, open next window (in this case menu)
    Alloy.createController('menu').getView().open();
};
client.open('GET', "YOUR URL", true);
client.onerror = function(e) {
    console.log('error: ', JSON.stringify(e));
     alert ('invalid username or password');
     
     // when invalid username or password, open index page to try again
     Alloy.createController('index').getView().open();
};
 
client.timeout = 5000;    
client.send();

$.login.open();
