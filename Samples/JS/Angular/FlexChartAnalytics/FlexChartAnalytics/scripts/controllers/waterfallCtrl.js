'use strict';

var app = angular.module('app');

app.controller('waterfallCtrl', function appCtrl($scope) {

    // data context
    $scope.ctx = {
        chart: null,
        waterfall: null,
        itemsSource: [],
        relativeData: true,
        connectorLines: true,
        showTotal: true,
        showIntermediateTotal: true,
        intermediateTotalPositions: [3, 6, 9, 12],
        intermediateTotalLabels: ['Q1', 'Q2', 'Q3', 'Q4'],
        styles: {
            connectorLines: {
                stroke: '#333',
                'stroke-dasharray': '5 5'
            },
            start: {
                fill: '#7dc7ed'
            },
            falling: {
                fill: '#dd2714',
                stroke: '#a52714'
            },
            rising: {
                fill: '#0f9d58',
                stroke: '#0f9d58'
            },
            intermediateTotal: {
                fill: '#7dc7ed'
            },
            total: {
                fill: '#7dc7ed'
            }
        }
    };

    $scope.$watch('ctx.chart', function () {
        if ($scope.ctx.chart) {
            $scope.ctx.chart.tooltip.content = function (ht) {
                if (ht) {
                    return '<b>' + ht.x + '</b><br/>value: ' + ht.y;
                }
            }
        }
    });
    $scope.$watch('ctx.relativeData', function () {
        if ($scope.ctx.waterfall) {
            $scope.ctx.waterfall.relativeData = $scope.ctx.relativeData;
        }
    });

    $scope.$watch('ctx.connectorLines', function () {
        if ($scope.ctx.waterfall) {
            $scope.ctx.waterfall.connectorLines = $scope.ctx.connectorLines;
        }
    });

    $scope.$watch('ctx.showTotal', function () {
        if ($scope.ctx.waterfall) {
            $scope.ctx.waterfall.showTotal = $scope.ctx.showTotal;
        }
    });

    $scope.$watch('ctx.showIntermediateTotal', function () {
        if ($scope.ctx.waterfall) {
            $scope.ctx.waterfall.showIntermediateTotal = $scope.ctx.showIntermediateTotal;
        }
    });

    var names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data = [];
    for (var i = 0, len = names.length; i < len; i++) {
        data.push({
            name: names[i],
            value: Math.round((0.5 - Math.random()) * 1000)
        });
    }
    $scope.ctx.itemsSource = data;
});
