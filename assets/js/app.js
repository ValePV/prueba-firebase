/*fetch("http://api.geonames.org/postalCodeSearchJSON?postalcode=9011&maxRows=10&username=demo")
  .then(function(response) {
   //Turns the the JSON into a JS object
   return response.json();
   
 })
  .then(function(data) {
   console.log(data)
 });*/




// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDhWCc6S10Usx70Q8NhSZnlGjjO66IYZ80",
    authDomain: "login-prueba-f9344.firebaseapp.com",
    databaseURL: "https://login-prueba-f9344.firebaseio.com",
    projectId: "login-prueba-f9344",
    storageBucket: "login-prueba-f9344.appspot.com",
    messagingSenderId: "130120816145"
  };

firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();

 function signIn(){
 firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user.displayName);
  $('.user_name').append('<h4>Welcome ' + user.displayName + '!</h4>');

  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}














