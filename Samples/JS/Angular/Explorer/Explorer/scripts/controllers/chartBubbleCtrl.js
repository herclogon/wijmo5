'use strict';

var app = angular.module('app');

app.controller('chartBubbleCtrl', function appCtrl($scope) {

    // data context
    $scope.ctx = {
        chart: null,
        itemsSource: []
    };

    for (var i = 0; i < 30; i++) {
        $scope.ctx.itemsSource.push({
            x: i,
            y: Math.random() * 10,
            size: Math.random() * 100
        });
    }

    $scope.$watch('ctx.chart', function () {
        if ($scope.ctx.chart) {
            var chart = $scope.ctx.chart;
            chart.tooltip.content = function (ht) {
                return 'x=<b>' + ht.item.x.toFixed(1) + '</b> ' +
                    'y=<b>' + ht.item.y.toFixed(1) + '</b><br/>' +
                    'size=<b>' + ht.item.size.toFixed(1) + '</b>';
            };
        }
    });

});
