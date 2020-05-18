
// ----------------------------------------------------------------------------------------------
// We use this script to make the configuration of our database using real time database firebase
// ----------------------------------------------------------------------------------------------

// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCqSlBau5HdlGxGaegi5fkEXnuPdqmCFUA",
    authDomain: "virtual-classroom-12465.firebaseapp.com",
    databaseURL: "https://virtual-classroom-12465.firebaseio.com",
    projectId: "virtual-classroom-12465",
    storageBucket: "virtual-classroom-12465.appspot.com",
    messagingSenderId: "886905157107",
    appId: "1:886905157107:web:c5f6dd74fc6b3dec2a0e86",
    measurementId: "G-WHR1W6V2LM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Firebase Database Reference and the child
    const dbRef = firebase.database().ref();
    const usersRef = dbRef.child('users');
