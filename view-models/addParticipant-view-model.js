/**
 * Module ParticipantViewModel
 * Objet permettant de stocker l'état de la vue participant.html
 * et de réagir au comportement de l'utilisateur.
 */
var AddParticipantViewModel = (function () {
    var _onInit = function () {
        console.log('AddParticipantViewModel:onInit()');
    };

    var _onDestroy = function () {
        console.log('AddParticipantViewModel:onDestroy()');
    };

    return {
        onInit: _onInit,
        onDestroy: _onDestroy
    };
})();