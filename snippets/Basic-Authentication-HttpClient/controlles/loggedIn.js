var _username = Ti.App.Properties.getString('username'),
    _password = Ti.App.Properties.getString('password');
 
var client = Ti.Network.createHTTPClient();
var authString = 'Basic ' + Ti.Utils.base64encode(_username + ':' + _password);
client.setRequestHeader('Authorization', authString);
  
client.onload = function (e) {
  console.log(JSON.stringify(e));
  console.log(JSON.stringify(this.responseText));  
  
};
client.open('GET', "http://url.com/folder/loggedin", true);
client.onerror = function(e) {
    console.log('error: ', JSON.stringify(e));
};
 
client.timeout = 5000;    
client.send();

$.menu.open();
