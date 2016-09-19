'use strict';

var app = angular.module('app');

app.controller('chartSunburstCtrl', function ($scope, dataSvc) {
    $scope.itemsSource = dataSvc.getHierarchicalData();
    $scope.chart = null;
    $scope.bindingName = ['year', 'quarter', 'month'];
    $scope.childItemsPath = 'items';
    $scope.innerRadius = 0;
    $scope.offset = 0;
    $scope.startAngle = 0;
    $scope.reversed = false;
    $scope.palette = 'standard';
    $scope.palettes = ['standard', 'cocoa', 'coral', 'dark', 'highcontrast', 'light', 'midnight', 'minimal', 'modern', 'organic', 'slate'];
    $scope.ctx = {
        innerRadius: 0,
        offset: 0,
        startAngle: 0
    };
    $scope.inputInnerRadius = null;
    $scope.inputOffset = null;
    $scope.inputStartAngle = null;

    $scope.$watch('chart', function () {
        if ($scope.chart) {
            $scope.chart.dataLabel.position = wijmo.chart.PieLabelPosition.Center;
            $scope.chart.dataLabel.content = '{name}';
        }
    });
    $scope.paletteChanged = function (sender) {
        var p = $scope.palettes[sender.selectedIndex];
        $scope.palette = p;
        $scope.chart.palette = wijmo.chart.Palettes[p];
    };

    $scope.$watch('ctx.innerRadius', function () {
        var input = $scope.inputInnerRadius,
            val = $scope.ctx.innerRadius;

        if (!input || val < input.min || val > input.max) {
            return;
        }
        $scope.innerRadius = val;
    });

    $scope.$watch('ctx.offset', function () {
        var input = $scope.inputOffset,
            val = $scope.ctx.offset;

        if (!input || val < input.min || val > input.max) {
            return;
        }
        $scope.offset = val;
    });

    $scope.$watch('ctx.startAngle', function () {
        var input = $scope.inputStartAngle,
            val = $scope.ctx.startAngle;

        if (!input || val < input.min || val > input.max) {
            return;
        }
        $scope.startAngle = val;
    });
});

