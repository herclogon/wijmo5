'use strict';

var app = angular.module('app');

app.controller('chartTrendlineCtrl', function appCtrl($scope, dataSvc) {

    // data context
    $scope.inputPeriod = null;
    $scope.period = 2;
    // add chart properties to scope
    $scope.chartProps = {
        legendPosition: wijmo.chart.Position.Right,
        bindingY: 'close',
        bindingY1: 'close',
        header: 'Facebook, Inc. (FB)',
        movingAveragePeriod: 2,
        movingAverageType: 0,
        movingAverageName: wijmo.chart.analytics.MovingAverageType.Simple,
    };

    $scope.data = dataSvc.getFbChartData();

    $scope.$watch('period', function () {
        var input = $scope.inputPeriod;
        if (input == null || input.value < input.min || input.value > input.max) {
            return;
        }
        $scope.chartProps.movingAveragePeriod = input.value;
    });

    $scope.$watch('chartProps.movingAverageType', function () {
        $scope.chartProps.movingAverageName = wijmo.chart.analytics.MovingAverageType[$scope.chartProps.movingAverageType] + ' Moving Average';
    });
});
