'use strict';

var app = angular.module('app');

app.controller('chartRangeSelectorCtrl', function appCtrl($scope,dataSvc) {

    $scope.chartProps = {
        header: 'Facebook, Inc. (FB)',
        rangeSelector: null
    };

    $scope.data = dataSvc.getFbChartData();

    // range selector
    $scope.$watch('stChart', function () {
        var stChart = $scope.stChart;
        if (!stChart) {
            return;
        }
        stChart.axisX.labels = false;
        stChart.axisX.axisLine = false;
        stChart.legend.position = 0;
        stChart.plotMargin = '60 30 0 50';

        stChart.tooltip.content = function (ht) {
            return 'Date: ' + ht.x + '<br/>' +
                  'Open: ' + wijmo.Globalize.format(ht.item.open, 'n2') + '<br/>' +
                  'High: ' + wijmo.Globalize.format(ht.item.high, 'n2') + '<br/>' +
                  'Low: ' + wijmo.Globalize.format(ht.item.low, 'n2') + '<br/>' +
                  'Close: ' + wijmo.Globalize.format(ht.item.close, 'n2');
        };
    });

    $scope.$watch('rsChart', function () {
        var rsChart = $scope.rsChart;
        if (!rsChart) {
            return;
        }
        rsChart.axisY.labels = false;
        rsChart.axisY.majorGrid = false;
        rsChart.tooltip.content = '';
        rsChart.plotMargin = '0 30 NaN 50';
    });

    $scope.rangeChanged = function (sender, e) {
        var stChart = $scope.stChart, rs = $scope.chartProps.rangeSelector;
        if (stChart && rs) {
            stChart.axisX.min = rs.min;
            stChart.axisX.max = rs.max;
            stChart.invalidate();
            stChart.invalidate();
        }
    };
});
