var app = angular.module('app', ['wj', 'ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.

    // Analytics
    when('/trendline', { templateUrl: 'partials/trendline.htm', controller: 'trendlineCtrl' }).
    when('/movingaverage', { templateUrl: 'partials/movingaverage.htm', controller: 'movingaverageCtrl' }).
    when('/yfunctionseries', { templateUrl: 'partials/yfunctionseries.htm', controller: 'functionseriesCtrl' }).
    when('/pfunctionseries', { templateUrl: 'partials/pfunctionseries.htm', controller: 'functionseriesCtrl' }).
    when('/waterfall', { templateUrl: 'partials/waterfall.htm', controller: 'waterfallCtrl' }).

    // default...
    when('/', { templateUrl: 'partials/trendline.htm', controller: 'trendlineCtrl' }).
    otherwise({ redirectTo: '/' });
}]);

