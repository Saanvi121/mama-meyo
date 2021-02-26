
var firebaseConfig = {
    apiKey: "AIzaSyAzYH_oXIHSyADZqKwjLAMKHEfKMSnSf4Q",
    authDomain: "connectbook-e63d8.firebaseapp.com",
    projectId: "connectbook-e63d8",
    storageBucket: "connectbook-e63d8.appspot.com",
    messagingSenderId: "869959528124",
    appId: "1:869959528124:web:e076a2ee2ad57afd692ab9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();