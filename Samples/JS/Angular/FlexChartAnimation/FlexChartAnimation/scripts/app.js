var app = angular.module('app', ['wj', 'ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.

    // Animation
    when('/flexchart', { templateUrl: 'partials/flexchart.htm', controller: 'flexchartCtrl' }).
    when('/flexpie', { templateUrl: 'partials/flexpie.htm', controller: 'flexpieCtrl' }).

    // default...
    when('/', { templateUrl: 'partials/flexchart.htm', controller: 'flexchartCtrl' }).
    otherwise({ redirectTo: '/' });
}]);

