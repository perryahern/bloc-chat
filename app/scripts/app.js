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

//        $stateProvider
//            .state('addRoom', {
//                url: '/',
//                controller: 'AddRoomCtrl as addRoom',
//                templateUrl: '/templates/addRoom.html'
//            });
    }

    angular
        .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase'])
        .config(config);
})();
