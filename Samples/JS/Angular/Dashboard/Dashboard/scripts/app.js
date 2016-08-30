'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('app', ['wj', 'ngRoute']);

// app configuration
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/bullets', { templateUrl: 'partials/bullets.htm' });
    $routeProvider.when('/chart', { templateUrl: 'partials/chart.htm' });
    $routeProvider.when('/product/:id', { templateUrl: 'partials/product.htm' });
    $routeProvider.otherwise({ redirectTo: '/bullets' });
}]);
