/**
 * Module ApplicationRouter
 * Permet de configurer des routes et d'écouter le changement
 * du hash de l'URL (navigation locale) pour charger une vue
 * spéficique au hash.
 */
var ApplicationRouter = (function (componentLoader) {
    var _routesConfig = null;
    var _lastRouteConfig = null;

    /**
     * Permet de configurer les routes et d'attacher le routeur
     * à l'événement de changement au hash de l'URL.
     *
     * @param routesConfig Un tableau de configuration des routes
     */
    var _initializeRoutes = function (routesConfig) {
        _routesConfig = routesConfig;
        window.onhashchange = _handleLocationChange;
        _handleLocationChange();
    };

    /**
     * Fonction appellée lorsque le hash de l'URL change.
     * Elle appelle les méthodes du cycle de vie d'une vue, puis
     * appelle le component loader pour charger la vue dans le DOM.
     * @private
     */
    var _handleLocationChange = function () {
        console.log('ApplicationRouter::_handleLocationChange()');
        var requestedRouteConfig = _getRequestedRouteConfig();

        _callViewModelLifecycleMethods(requestedRouteConfig);
        _lastRouteConfig = requestedRouteConfig;
        componentLoader.load(requestedRouteConfig.view);
    };

    /**
     * Analyse l'URL pour déterminer la route demandée, puis
     * retrouve la configuration de route qui correspond au
     * chemin de l'URL. Retourne la route par défaut si
     * aucune configuration ne peut être trouvée.
     *
     * @returns la configuration de la route demandée dans l'URL
     * @private
     */
    var _getRequestedRouteConfig = function () {
        var pathRequested = location.hash.substring(1);
        var routeConfigFound = null;
        var defaultRouteConfig = null;
        var i = 0;

        while (i < _routesConfig.length && !routeConfigFound) {
            var currentRouteConfig = _routesConfig[i];

            if (currentRouteConfig.path === pathRequested) {
                routeConfigFound = currentRouteConfig;
            } else if (currentRouteConfig.isDefault === true) {
                defaultRouteConfig = currentRouteConfig;
            }

            i++;
        }

        return routeConfigFound || defaultRouteConfig;
    };

    /**
     * Appelle les méthodes du cycle de vie d'une vue si elles sont définies.
     * onInit sera appellée sur le modèle de vue en cours
     * onDestroy sera appellée sur le modèle de vue qui est déchargé.
     * @param routeConfig
     * @private
     */
    var _callViewModelLifecycleMethods = function (routeConfig) {
        if (_lastRouteConfig && typeof _lastRouteConfig.viewModel.onDestroy === 'function') {
            _lastRouteConfig.viewModel.onDestroy();
        }

        if (typeof routeConfig.viewModel.onInit === 'function') {
            routeConfig.viewModel.onInit();
        }
    };

    /**
     * Exposition des membres publiques
     */
    return {
        initializeRoutes: _initializeRoutes
    }
})(ComponentLoader);