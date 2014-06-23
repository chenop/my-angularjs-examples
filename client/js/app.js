var myApp = angular.module('myApp', [
    'ngRoute'
    , 'ngAnimate'
    , 'ui.bootstrap'
]);

myApp.config(
//    ['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', { templateUrl: 'my-angularjs-examples/client/views/home.html'})
            .when('/table', { templateUrl: 'my-angularjs-examples/client/views/table.html'})
            .when('/form', { templateUrl: 'my-angularjs-examples/client/views/form.html'})
            .when('/form2', { templateUrl: 'my-angularjs-examples/client/views/form2.html'})
            .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    }
//    ]
);
