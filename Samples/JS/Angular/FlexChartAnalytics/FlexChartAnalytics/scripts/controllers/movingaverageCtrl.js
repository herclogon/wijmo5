'use strict';

var app = angular.module('app');

app.controller('movingaverageCtrl', function ($scope) {
    // generate some random data
    function getData(count) {
        var data = new wijmo.collections.ObservableArray();

        for (var i = 1; i <= count; i++) {
            data.push({
                x: i,
                y: Math.floor(Math.random() * 100)
            });
        }
        return data;
    }

    $scope.itemsSource = new wijmo.collections.CollectionView(getData(30));
    $scope.period = 2;
    $scope.iptPeroid = 2;
    $scope.inputPeriod = null;
    $scope.type = 'Simple';

    $scope.$watch('type', function () {
        updateMovingAverage();
    });

    $scope.$watch('iptPeriod', function () {
        var p = $scope.inputPeriod;

        if (p == null || p.value < p.min || p.value > p.max) {
            return;
        }
        $scope.period = p.value;
    });

    function updateMovingAverage() {
        if (!$scope.type || $scope.period == null || !$scope.machart) {
            return;
        }
        var sender = $scope.machart,
            movingAverage = sender.series[1];

        movingAverage.type = wijmo.chart.analytics.MovingAverageType[$scope.type];
    }
});
