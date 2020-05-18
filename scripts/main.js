/**
 * main.js
 * Ce fichier sert à démarrer l'application.
 */
var routes = [
    {
        path: 'Participant', // http://localhost:8080/#Participant
        view: 'participant', // Vue = /views/participant.html
        viewModel: ParticipantViewModel, // Voir /view-models/participant-view-model.js
        isDefault: false// Si aucune route ne correspond, charger cette vue
    }, {
        path: 'AddParticipant',
        view: 'add_Participant',
        viewModel: AddParticipantViewModel
    }
];

/**
 * Module Application
 * Démarre l'application en initialisant le routeur
 */
var Application = (function (router, routes) {
    router.initializeRoutes(routes);

    /**
     * Exposition des membres publiques
     */
    return {

    };
})(ApplicationRouter, routes);
