(function () {
    'use strict';

    // get reference to app module
    var app = angular.module('app');

    app.controller('companyCtrl', function appCtrl($scope) {
        $scope.company = undefined;

        $scope.$on('companyChanged', function (event, data) {
            $scope.company = data;
            if (!$scope.$root.$$phase) {
                $scope.$apply();
            }
        });
    });


    app.controller('companyListCtrl', function appCtrl($scope) {
        $scope.companies = [
            { name: 'Apple Inc', symbol: 'AAPL', prices: getPrices('AAPL') },
            { name: 'Amazon.com, Inc.', symbol: 'AMZN', prices: getPrices('AMZN') },
            { name: 'Google Inc.', symbol: 'GOOG', prices: getPrices('GOOG') },
            { name: 'Yahoo Inc.', symbol: 'YHOO', prices: getPrices('YHOO') },
        ];
    });

    app.controller('companyPricesCtrl', function appCtrl($scope) {
        $scope.prices = [];

        $scope.$on('companyChanged', function (event, data) {
            $scope.prices = data.prices;
            if (!$scope.$root.$$phase) {
                $scope.$apply();
            }
        });
    });

    function getPrices(symbol) {
        switch (symbol) {
            case 'AAPL':
                return [
                    { date: new Date('2014-11-03'), price: 108.93 },
                    { date: new Date('2014-10-01'), price: 98.75 },
                    { date: new Date('2014-09-02'), price: 102.85 },
                    { date: new Date('2014-08-01'), price: 95.24 },
                    { date: new Date('2014-07-01'), price: 92.66 },
                ];
            case 'AMZN':
                return [
                    { date: new Date('2014-11-03'), price: 305.72 },
                    { date: new Date('2014-10-01'), price: 317.46 },
                    { date: new Date('2014-09-02'), price: 342.38 },
                    { date: new Date('2014-08-01'), price: 307.06 },
                    { date: new Date('2014-07-01'), price: 332.39 },
                ];
            case 'GOOG':
                return [
                    { date: new Date('2014-11-03'), price: 555.22 },
                    { date: new Date('2014-10-01'), price: 568.27 },
                    { date: new Date('2014-09-02'), price: 577.33 },
                    { date: new Date('2014-08-01'), price: 566.07 },
                    { date: new Date('2014-07-01'), price: 582.67 },
                ];
            case 'YHOO':
                return [
                    { date: new Date('2014-11-03'), price: 46.34 },
                    { date: new Date('2014-10-01'), price: 40.32 },
                    { date: new Date('2014-09-02'), price: 39.27 },
                    { date: new Date('2014-08-01'), price: 35.62 },
                    { date: new Date('2014-07-01'), price: 35.35 },
                ];
            default:
                return [];
        }
    }



})();