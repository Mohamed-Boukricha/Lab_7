/**
 * Module ComponentLoader
 * Est appellé par ApplicationRouter (voir /scripts/application-router.js)
 * Ne fait que créer une requête AJAX pour obtenir le code
 * source HTML d'une  vue à charger, puis l'injecte dans le DOM.
 */
var ComponentLoader = (function () {
    var _xhr = new XMLHttpRequest();

    /**
     * Charge le source de la vue et l'injecte dans le DOM.
     * Le fichier doit se trouver dans le répertoire views.
     *
     * @param viewName  Le nom du fichier HTML de la vue sans l'extension
     */
    var _load = function (viewName) {
        console.log('ComponentLoader::load()');
        _fetchViewSource(viewName, function (viewSource) {
            document.getElementById('app-root').innerHTML = viewSource;
            readUserData();
        });
    };

    /**
     * Fait la requête pour charger le fichier HTML.
     *
     * @param viewName Nom du fichier HTML à charger sans l'extension
     * @param callback  Fonction qui sera appellée au retour de la requête AJAX
     * @private
     */
    var _fetchViewSource = function (viewName, callback) {
        _xhr.open('GET', '/views/' + viewName + '.html', true);

        _xhr.onload = function () {
            callback(_xhr.response.toString());
        };

        _xhr.send();
    };

    /**
     * Exposition des membres publiques
     */
    return {
        load: _load
    };
})();


// --------------------------
// Function to READ Data
// --------------------------


function readUserData() {

	usersRef.on("value", snap => {

        let userListUI = document.getElementById("user-list");
       

        let $th_1=document.createElement("th");
        $th_1.innerHTML = "Nom";
        
        userListUI.append($th_1);

        let $th_2=document.createElement("th");
        $th_2.innerHTML = "Prénom";
        userListUI.append($th_2);

        let $th_3=document.createElement("th");
        $th_3.innerHTML = "Date de naissance";
        userListUI.append($th_3);

        let $th_4=document.createElement("th");
        $th_4.innerHTML = "Email";
        userListUI.append($th_4);

        let $th_5=document.createElement("th");
        $th_5.innerHTML = "Tél";
        userListUI.append($th_5);



		snap.forEach(childSnap => {
            let $tr = document.createElement("tr");
            userListUI.append($tr);
			let key = childSnap.key,
			value = childSnap.val()
  			
			let $td_1 = document.createElement("td");
            let $td_2 = document.createElement("td");
            let $td_3 = document.createElement("td");
            let $td_4= document.createElement("td");
            let $td_5= document.createElement("td");

            $td_1.innerHTML = value.lastname;
            $td_2.innerHTML= value.firstname;
            $td_3.innerHTML= value.datenaissance;
            $td_4.innerHTML= value.email;
            $td_5.innerHTML= value.tele;

            userListUI.append($td_1);
            userListUI.append($td_2);
            userListUI.append($td_3);
            userListUI.append($td_4);
            userListUI.append($td_5);
 		});


	})

}

// --------------------------
// Function to Add User
// --------------------------

function addUser() {
    const addUserInputsUI = document.getElementsByClassName("user-input");
 	// this object will hold the new user information
    let newUser = {};
    
    // loop through View to get the data for the model 
    for (let i = 0, len = addUserInputsUI.length; i < len; i++) {

        let key = addUserInputsUI[i].getAttribute('data-key');
        let value = addUserInputsUI[i].value;
        newUser[key] = value;
    }

    usersRef.push(newUser);
    console.log("data has been inserted");
}

