'use strict';

// get reference to app module
var app = angular.module('app');

// add controller to app module
app.controller('appCtrl', function appCtrl($scope) {

    // generate some random data
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [], funnelData = [], sales = 10000;
    for (var i = 0; i < countries.length; i++) {
        data.push({
            country: countries[i],
            downloads: Math.round(Math.random() * 20000),
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000
        });
        funnelData.push({
            country: countries[i],
            sales: sales
        });
        sales = sales - Math.round(Math.random() * 2000);
    }


    // add data array to scope
    $scope.data = data;
    $scope.funnelData = funnelData;

    // add chart properties to scope
    $scope.chartProps = {
        chartType: wijmo.chart.ChartType.Column,
        stacking: wijmo.chart.Stacking.None,
        legendPosition: wijmo.chart.Position.Right,
        rotated: false,
        header: 'Sample Chart',
        footer: 'copyright (c) ComponentOne',
        titleX: 'country',
        titleY: 'amount',
        selectionMode: wijmo.chart.SelectionMode.Series,
        selection: null
    };

    // series-toggling chart control
    $scope.toggleChart = null;
    $scope.funnelChart = null;
    $scope.inputNeckWidth = null;
    $scope.inputNeckHeight = null;
    $scope.neckWidth = 0.2;
    $scope.neckHeight = 0.2;
    $scope.funnelType = 'default';

    // dynamic data
    var toAddData;
    $scope.trafficData = new wijmo.collections.ObservableArray();
    $scope.setInterval = function (interval) {
        if (toAddData) {
            clearTimeout(toAddData);
            toAddData = null;
        }
        $scope.interval = interval;
        if (interval) {
            toAddData = setTimeout(addTrafficItem);
        }
    };
    $scope.setInterval(500);

    function addTrafficItem() {
        var len = $scope.trafficData.length,
            last = len ? $scope.trafficData[len - 1] : null,
            trucks = last ? last.trucks : 0,
            ships = last ? last.ships : 0,
            planes = last? last.planes : 0;
        trucks = Math.max(0, trucks + Math.round(Math.random() * 50 - 25));
        ships = Math.max(0, ships + Math.round(Math.random() * 10 - 5));
        planes = Math.max(0, planes + Math.round(Math.random() * 10 - 5));

        // add random data, limit array length
        $scope.trafficData.push({ time: new Date(), trucks: trucks, ships: ships, planes: planes });
        if ($scope.trafficData.length > 200) {
            $scope.trafficData.splice(0, 1);
        }

        // keep adding
        if ($scope.interval) {
            toAddData = setTimeout(addTrafficItem, $scope.interval);
        }
    }

    $scope.$watch('funnelChart', function () {
        var funnelChart = $scope.funnelChart;

        if (funnelChart != null) {
            funnelChart.options = {
                funnel: {
                    neckWidth: 0.2,
                    neckHeight: 0.2,
                    type: 'default'
                }
            };
            funnelChart.dataLabel.content = '{y}';
        }
    });

    $scope.$watch('neckWidth', function () {
        var neckWidth = $scope.inputNeckWidth,
            val = $scope.neckWidth;
        if (neckWidth != null) {
            if (val < neckWidth.min || val > neckWidth.max) {
                return;
            }
            $scope.funnelChart.options.funnel.neckWidth = val;
            $scope.funnelChart.refresh(true);
        }
    });

    $scope.$watch('neckHeight', function () {
        var neckHeight = $scope.inputNeckHeight,
            val = $scope.neckHeight;
        if (neckHeight != null) {
            if (val < neckHeight.min || val > neckHeight.max) {
                return;
            }
            $scope.funnelChart.options.funnel.neckHeight = val;
            $scope.funnelChart.refresh(true);
        }
    });

    $scope.funnelTypeChanged = function (sender) {
        $scope.funnelChart.options.funnel.type = sender.selectedValue;
        $scope.funnelChart.refresh(true);
        $scope.funnelType = sender.selectedValue;
    };  

});
