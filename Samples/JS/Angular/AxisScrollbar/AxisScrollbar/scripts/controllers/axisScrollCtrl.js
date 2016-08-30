'use strict';

var app = angular.module('app');

// application controller (single)
app.controller('axisScrollCtrl', function appCtrl($scope) {

    var axisXScrollbar, axisYScrollbar;

    //create chart
    $scope.ctx = {
        stChart: null,
        chartType: 3,
        itemsSource: []
    };

    var dataCount = 3000;
    for (var i = 0; i < dataCount; i++) {
        var mod = Math.floor(i / 10) % 10;
        $scope.ctx.itemsSource.push({
            date: new Date(2005, 0, i),
            yval: mod == 0 ? null : Math.random() * 100
        });
    }

    $scope.$watch('ctx.stChart', function () {
        if (!$scope.ctx.stChart) {
            return;
        }
        var chart = $scope.ctx.stChart;
        chart.plotMargin = 'NaN NaN NaN 80';
        // create Scrollbar
        if (!axisXScrollbar) {
            axisXScrollbar = new wijmo.chart.interaction.AxisScrollbar(chart.axes[0], {
                minScale: 0.02
              });
        }

        if (!axisYScrollbar) {
            axisYScrollbar = new wijmo.chart.interaction.AxisScrollbar(chart.axes[1], {
                buttonsVisible: false,
                minScale: 0.05
            });
        }
    });
});
