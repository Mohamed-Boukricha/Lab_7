/**
 * Module ParticipantViewModel
 * Objet permettant de stocker l'état de la vue participant.html
 * et de réagir au comportement de l'utilisateur.
 */
var ParticipantViewModel = (function () {
    var _onInit = function () {
        console.log('ParticipantViewModel::onInit()');
    };

    var _onDestroy = function () {
        console.log('ParticipantViewModel::onDestroy()');
    };

    return {
        onInit: _onInit,
        onDestroy: _onDestroy
    };
})();