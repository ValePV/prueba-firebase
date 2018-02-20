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
/*
var provider = new firebase.auth.GoogleAuthProvider();

function signIn() {
    function newLoginHappened(user) {
      if (user) {
        app(user);
      } else {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
      }
    }
    firebase.auth().onAuthStateChanged(newLoginHappened);
  }
  function app(user) {
    document.getElementById('clientName').innerHTML = user.displayName;
    $('#user').append('<h3>Hello' + user.displayName + '</h3>');
  }

  firebase.auth().signOut().then(function() {
 
  }).catch(function(error) {
  
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
  window.onload = inicializar;
  var formConvalidaciones
  var refConvalidaciones

  function inicializar(){
    formConvalidaciones = document.getElementById('form-convalidaciones');
    formConvalidaciones.addEventListener('click', enviarConvalidacionAFirebase, false);
    //ref nodo raiz
    refConvalidaciones = firebase.database().ref().child('app');

  }

  function enviarConvalidacionAFirebase(event){
    event.preventDefault();
    refConvalidaciones.push({
      modulo1: event.target.modulo1.value ,
      modulo2: event.target.modulo2.value ,
      modulo3: event.target.modulo3.value
    });
  };
 













