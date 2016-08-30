(function () {
    'use strict';

    // get reference to app module
    var app = angular.module('app');

    // add controller to app module
    app.controller('appCtrl', function appCtrl($scope) {
        $scope.num = 2;
        $scope.num1 = 10;
        $scope.num2 = 20;

        $scope.data = [
            { name: 'Apple Inc', lastPrice: 98.38 },
            { name: 'Amazon.com, Inc.', lastPrice: 320.00 },
            { name: 'Google Inc.', lastPrice: 585.81 },
            { name: 'Yahoo Inc.', lastPrice: 35.68 },
        ];

        $scope.valueComboValue = 'Apple Inc';
        $scope.indexComboValue = 0;
    });
})();