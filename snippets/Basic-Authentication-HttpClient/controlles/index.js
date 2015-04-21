
$.index.open();
  //save login information to local storage from the form in login.js
function saveValues(e){
Ti.App.Properties.setString('username', $.username.value);
Ti.App.Properties.setString('password', $.password.value);

  // open login.xml window
	Alloy.createController('login').getView().open();
};
