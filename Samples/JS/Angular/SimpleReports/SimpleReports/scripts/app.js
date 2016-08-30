// define application
var app = angular.module('app', ['wj', 'ngRoute']);

// route provider
app.config(function ($routeProvider) {
    $routeProvider.

    // Infrastructure
    when('/alphabeticalListOfProducts', { templateUrl: 'partials/alphabeticalListOfProducts.htm' }).
    when('/customerLabels', { templateUrl: 'partials/customerLabels.htm' }).
    when('/employees', { templateUrl: 'partials/employees.htm' }).
    when('/productCatalog', { templateUrl: 'partials/productCatalog.htm' }).
    when('/productsByCategory', { templateUrl: 'partials/productsByCategory.htm' }).
    when('/salesByCategory', { templateUrl: 'partials/salesByCategory.htm' }).
    when('/salesChart', { templateUrl: 'partials/salesChart.htm' }).
    when('/employeeSalesByCountry', { templateUrl: 'partials/employeeSalesByCountry.htm' }).

    // default...
    when('/', { templateUrl: 'partials/alphabeticalListOfProducts.htm' }).
    otherwise({ redirectTo: '/' });
});
