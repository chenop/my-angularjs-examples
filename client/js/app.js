var myApp = angular.module('myApp', [
    'ngRoute'
    , 'ngAnimate'
    , 'ui.bootstrap'
]);

myApp.config(
//    ['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', { templateUrl: 'angular-only/client/views/home.html'})
            .when('/table', { templateUrl: 'angular-only/client/views/table.html'})
            .when('/form', { templateUrl: 'angular-only/client/views/form.html'})
            .when('/form2', { templateUrl: 'angular-only/client/views/form2.html'})
            .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    }
//    ]
);
