 // Your web app's Firebase configuration
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




readUserData(); 
	


// --------------------------
// READ
// --------------------------
function readUserData() {

	const userListUI = document.getElementById("user-list");

	usersRef.on("value", snap => {

		userListUI.innerHTML = ""

		snap.forEach(childSnap => {

			let key = childSnap.key,
				value = childSnap.val()
  			
			let $li = document.createElement("li");

			$li.innerHTML = value.name;

			$li.setAttribute("user-key", key);
			$li.addEventListener("click", userClicked)
			userListUI.append($li);

 		});


	})

}



function userClicked(e) {

		var userID = e.target.getAttribute("user-key");

		const userRef = dbRef.child('users/' + userID);
		const userDetailUI = document.getElementById("user-detail");

		userRef.on("value", snap => {

			userDetailUI.innerHTML = ""

			snap.forEach(childSnap => {
				var $p = document.createElement("p");
				$p.innerHTML = childSnap.key  + " - " +  childSnap.val();
				userDetailUI.append($p);
			})

		});
	

}
