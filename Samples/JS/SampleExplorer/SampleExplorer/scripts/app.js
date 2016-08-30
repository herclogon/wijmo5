var app = angular.module('app', ['wj', 'ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/Search', {
            templateUrl: 'partials/main.htm',
            controller: 'appCtrl',
            resolve: {

            },
            reloadOnSearch: false
        })
        .when('/default.htm', {
            redirectTo: '/Search'
        })
        .when('/', {
            redirectTo: '/Search'
        })
        .when('/Sample/:sampleName', {
            templateUrl: 'partials/sample.htm',
            controller: 'sampleCtrl',
            resolve: {

            }
        })
        .when('/Sample/:sampleName/:sampleFw/Code', {
            templateUrl: 'partials/code.htm',
            controller: 'codeCtrl',
            resolve: {

            }
        });

    $locationProvider.html5Mode(true);
});

