(function() {
    'use strict';

    // get reference to app module
    var app = angular.module('app');

    // Getting Started & Theming
    app.controller('simpleCtrl', function($scope, dataSvc) {
        $scope.itemsSource = dataSvc.getData();
    });

    // Legends & Titles
    app.controller('legendTitlesCtrl', function ($scope, dataSvc) {
        $scope.itemsSource = dataSvc.getData();
        $scope.header = 'Fruit By Value';
        $scope.footer = '2014 GrapeCity, inc.';
        $scope.legendPosition = 'Right';
    });

    // Basic Features
    app.controller('basicCtrl', function ($scope, dataSvc) {
        $scope.itemsSource = dataSvc.getData();
        $scope.chart = null;
        $scope.inputInnerRadius = null;
        $scope.inputOffset = null;
        $scope.inputStartAngle = null;
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

        $scope.paletteChanged = function (sender) {
            var p = $scope.palettes[sender.selectedIndex];
            $scope.palette = p;
            $scope.chart.palette = wijmo.chart.Palettes[p];
        };

        $scope.$watch('ctx.innerRadius', function () {
            var innerRadius = $scope.inputInnerRadius,
                val = $scope.ctx.innerRadius;
            if (innerRadius != null) {
                if (val < innerRadius.min || val > innerRadius.max) {
                    return;
                }
                $scope.innerRadius = val;
            }
        });

        $scope.$watch('ctx.offset', function () {
            var offset = $scope.inputOffset,
                val = $scope.ctx.offset;
            if (offset != null) {
                if (val < offset.min || val > offset.max) {
                    return;
                }
                $scope.offset = val;
            }
        });

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
    });

    // Selection
    app.controller('selectionCtrl', function ($scope, dataSvc) {
        $scope.itemsSource = dataSvc.getData();
        $scope.selectedPosition = 'Top';
        $scope.selectedOffset = 0;
        $scope.inputSelectedOffset = null;
        $scope.ctx = { selectedOffset: 0};
        $scope.isAnimated = true;

        $scope.$watch('ctx.selectedOffset', function () {
            var selectedOffset = $scope.inputSelectedOffset,
                val = $scope.ctx.selectedOffset;
            if (selectedOffset != null) {
                if (val < selectedOffset.min || val > selectedOffset.max) {
                    return;
                }
                $scope.selectedOffset = val;
            }
        });
    });
})();