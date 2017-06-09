(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });

        $stateProvider
            .state('message', {
                url: '/',
                controller: 'MessageCtrl as message'
            });
    }

    angular
        .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase'])
        .config(config);
})();
