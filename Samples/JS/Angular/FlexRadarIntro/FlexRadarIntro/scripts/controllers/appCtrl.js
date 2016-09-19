(function() {
    'use strict';

    // get reference to app module
    var app = angular.module('app');

    // Getting Started
    app.controller('simpleCtrl', function($scope, dataSvc) {
        $scope.itemsSource = dataSvc.getData();
    });

    // Basic Polar Features
    app.controller('basicPolarCtrl', function ($scope, dataSvc) {
        $scope.itemsSource = dataSvc.getPolarData();
        $scope.chart = null;
        $scope.chartType = 'Line';
        $scope.inputStartAngle = null;
        $scope.inputTotalAngle = null;
        $scope.startAngle = 0;
        $scope.totalAngle = 360;
        $scope.stacking = 'None';
        $scope.reversed = false;
        $scope.ctx = {
            startAngle: 0,
            totalAngle: 360
        };

        $scope.$watch('ctx.startAngle', function () {
            var startAngle = $scope.inputStartAngle,
                val = $scope.ctx.startAngle;
            if (startAngle != null) {
                if (val < startAngle.min || val > startAngle.max) {
                    return;
                }
                $scope.startAngle = val;
            }
        });

        $scope.$watch('ctx.totalAngle', function () {
            var totalAngle = $scope.inputTotalAngle,
                val = $scope.ctx.totalAngle;
            if (totalAngle != null) {
                if (val < totalAngle.min || val > totalAngle.max) {
                    return;
                }
                $scope.totalAngle = val;
            }
        });
    });

    // Basic Features
    app.controller('basicCtrl', function ($scope, dataSvc) {
        $scope.itemsSource = dataSvc.getData();
        $scope.bindingX = 'country';
        $scope.chart = null;
        $scope.chartType = 'Line';
        $scope.inputStartAngle = null;
        $scope.inputTotalAngle = null;
        $scope.startAngle = 0;
        $scope.totalAngle = 360;
        $scope.stacking = 'None';
        $scope.reversed = false;
        $scope.showDataLabel = false;
        $scope.ctx = {
            startAngle: 0,
            totalAngle: 360
        };

        $scope.$watch('ctx.startAngle', function () {
            var startAngle = $scope.inputStartAngle,
                val = $scope.ctx.startAngle;
            if (startAngle != null) {
                if (val < startAngle.min || val > startAngle.max) {
                    return;
                }
                $scope.startAngle = val;
            }
        });

        $scope.$watch('ctx.totalAngle', function () {
            var totalAngle = $scope.inputTotalAngle,
                val = $scope.ctx.totalAngle;
            if (totalAngle != null) {
                if (val < totalAngle.min || val > totalAngle.max) {
                    return;
                }
                $scope.totalAngle = val;
            }
        });

        $scope.$watch('showDataLabel', function () {
            var showDataLabel = $scope.showDataLabel;

            if ($scope.chart) {
                $scope.chart.dataLabel.content = showDataLabel ? '{y}' : '';
            }
        });
    });

    // Animation
    app.controller('animationCtrl', function ($scope, dataSvc) {
        $scope.itemsSource = dataSvc.getData();
        $scope.chart = null;
        $scope.bindingX = 'country';
        $scope.chartType = 'Line';
        $scope.animationMode = 'Point';
        $scope.easing = 'Swing';
        $scope.duration = 400;
        $scope.iptDuration = 400;
        $scope.inputDuration = null;
        $scope.isPolarChart = false;

        $scope.$watch('iptDuration', function () {
            var duration = $scope.inputDuration,
                val = $scope.iptDuration;
            if (duration != null) {
                if (val < duration.min || val > duration.max) {
                    return;
                }
                $scope.duration = val;
                $scope.chart.refresh();
            }
        });
        $scope.$watch('easing', function () {
            if ($scope.chart) {
                $scope.chart.refresh();
            }
        });
        $scope.$watch('animationMode', function () {
            if ($scope.chart) {
                $scope.chart.refresh();
            }
        });

        $scope.$watch('isPolarChart', function () {
            var isPolar = $scope.isPolarChart,
                chart = $scope.chart;

            if (!chart) {
                return;
            }
            chart.beginUpdate();
            if (isPolar) {
                $scope.itemsSource = dataSvc.getPolarData();
                $scope.bindingX = 'longitude';
                chart.series[0].binding = 'latitude1';
                chart.series[0].name = 'Latitude1';
                chart.series[1].binding = 'latitude2';
                chart.series[1].name = 'Latitude2';
            } else {
                $scope.itemsSource = dataSvc.getData();
                $scope.bindingX = 'country';
                chart.series[0].binding = 'sales';
                chart.series[0].name = 'Sales';
                chart.series[1].binding = 'downloads';
                chart.series[1].name = 'Downloads';
            }
            chart.endUpdate();
        });
    });
})();