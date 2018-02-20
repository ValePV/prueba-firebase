/*fetch("http://api.geonames.org/postalCodeSearchJSON?postalcode=9011&maxRows=10&username=demo")
  .then(function(response) {
   //Turns the the JSON into a JS object
   return response.json();
   
 })
  .then(function(data) {
   console.log(data)
 });*/




// Initialize Firebase
  /*var config = {
    apiKey: "AIzaSyDhWCc6S10Usx70Q8NhSZnlGjjO66IYZ80",
    authDomain: "login-prueba-f9344.firebaseapp.com",
    databaseURL: "https://login-prueba-f9344.firebaseio.com",
    projectId: "login-prueba-f9344",
    storageBucket: "login-prueba-f9344.appspot.com",
    messagingSenderId: "130120816145"
  };

firebase.initializeApp(config);

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
  
  });


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDhWCc6S10Usx70Q8NhSZnlGjjO66IYZ80",
    authDomain: "login-prueba-f9344.firebaseapp.com",
    databaseURL: "https://login-prueba-f9344.firebaseio.com",
    projectId: "login-prueba-f9344",
    storageBucket: "",
    messagingSenderId: "130120816145"
  };

firebase.initializeApp(config);
  */

  /*
  window.onload = inicializar;
  var formConvalidaciones
  var refConvalidaciones

  function inicializar(){
    formConvalidaciones = document.getElementById('form-convalidaciones');
    formConvalidaciones.addEventListener('click', enviarConvalidacionAFirebase, false);
    //ref nodo raiz
    refConvalidaciones = firebase.database().ref().child('app');

    mostrarConvalidacionesDelFirebase();
  }

  function mostrarConvalidacionesDeFirebase(){
    refConvalidaciones.on('value', function(snap){
      var datos = snap.val();
      var filasAMostrar = '';
      for(var key in datos){
        filasAMostrar += '<tr>' + 
                            '<td>' + datos[key].moduloA + '</td>' + 
                            '<td>' + datos[key].moduloB + '</td>' +
                            '<td>' + datos[key].moduloC + '</td>' +
                            '<td></td>' +
                            '<td></td>' +
                          '</tr>';
      }
    });
  }

  function enviarConvalidacionAFirebase(event){
    event.preventDefault();
    refConvalidaciones.push({
      moduloA: event.target.moduloA.value,
      moduloB: event.target.moduloB.value,
      moduloC: event.target.moduloC.value
    });
    formConvalidaciones.reset();
  }
 */

/*
var mainText = document.getElementById('mainText');
var submitBtn = document.getElementById('submitBtn');

function submitClick() {
  var firebaseRef = firebase.database().ref();
  var messageText = mainText.value;

  firebaseRef.push().set(messageText);


}
*/

function IngresoGoogle() {
  if(!firebase.auth().currentUser){
    var provider = new firebase.auth.GoogleAuthProvider();
    //indico a google que se van a autentificar
    provider.addScope('https:wwww.googleapis.com/auth/plus.login');

    firebase.auth()signInWithPopup(provider).then(function(result){
      var token = result.credential.accesstoken;
      var user= result.user;
      console.log(user);
    }).catch (function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      var erroremail = error.email;
      var credential = error.credential;

      if (errorCode==='auth/acconunt-exists-with-different-credential'){
        alert ('Es el mismo usuario');
      }
    });

  }else{
    firebase.auth().signOut();
  }
}

document.getElementById('btn-google').addEventListener('click', IngresoGoogle, false);












