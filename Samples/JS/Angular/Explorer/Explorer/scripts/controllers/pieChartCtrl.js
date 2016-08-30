'use strict';

var app = angular.module('app');

app.controller('pieChartCtrl', function appCtrl($scope) {

    // data context
    $scope.ctx = {
        chart: null,
        palette: 'standard',
        palettes: ['standard', 'cocoa', 'coral', 'dark', 'highcontrast', 'light', 'midnight', 'minimal', 'modern', 'organic', 'slate'],
        itemsSource: [],
        labels: 0,
        lblBorder:false
    };

    $scope.menuPaletteItemClicked = function (sender, args) {
        var menu = sender;
        $scope.ctx.chart.palette = wijmo.chart.Palettes[$scope.ctx.palettes[menu.selectedIndex]];
    }

    $scope.labelsClicked = function (sender, args) {
        var menu = sender;
        $scope.ctx.chart.dataLabel.position = menu.selectedValue;
    }

    $scope.lblBorderClicked = function (sender, args) {
        var menu = sender;
        $scope.ctx.chart.dataLabel.border = menu.selectedValue;
    }

    $scope.hasLabels = function () {
        var chart = $scope.ctx.chart;
        return chart && chart.dataLabel.position != 0;
    };

    // populate itemsSource
    var names = ['Oranges', 'Apples', 'Pears', 'Bananas', 'Pineapples'],
        data = [];
    for (var i = 0; i < names.length; i++) {
        data.push({
            name: names[i],
            value: Math.round(Math.random() * 100)
        });
    }
    $scope.ctx.itemsSource = data;
});

app.controller('pieChartSelectionCtrl', function appCtrl($scope) {

    // data context
    $scope.ctx = {
        chart: null,
        itemsSource: [],
        selectionMode: 'Point',
        selectedItemPosition: 'Top',
        isAnimated: true
    };

    // populate itemsSource
    var names = ['Oranges', 'Apples', 'Pears', 'Bananas', 'Pineapples'],
        data = [];
    for (var i = 0; i < names.length; i++) {
        data.push({
            name: names[i],
            value: Math.round(Math.random() * 100)
        });
    }
    $scope.ctx.itemsSource = data;

    //$scope.$watch('ctx.chart', function () {
    //    if ($scope.ctx.chart) {
    //        var chart = $scope.ctx.chart;
    //        //chart.binding = 'value';
    //        //chart.bindingName = 'name';


    //    }
    //});
});

app.controller('pieChartItemFormatterCtrl', function appCtrl($scope) {

    // data context
    $scope.ctx = {
        chart: null,
        itemsSource: []
    };

    // populate itemsSource
    var names = ['Oranges', 'Apples', 'Pears', 'Bananas', 'Pineapples'],
        data = [];
    for (var i = 0; i < names.length; i++) {
        data.push({
            name: names[i],
            value: Math.round(10 + Math.random() * 90)
        });
    }
    $scope.ctx.itemsSource = data;

    $scope.$watch('ctx.chart', function () {
        if ($scope.ctx.chart) {
            var chart = $scope.ctx.chart;
            chart.plotMargin = 10;
            chart.itemFormatter = function (engine, hitTestInfo, defaultFormatter) {
                var fsz = engine.fontSize;
                engine.fontSize = '10';
                defaultFormatter();
                var point = hitTestInfo.point.clone();
                var text = hitTestInfo.name + '=' + hitTestInfo.value.toFixed(1);
                var sz = engine.measureString(text);
                var fill = engine.fill;
                engine.fill = 'white';
                engine.drawRect(point.x - 2 - sz.width / 2, point.y - sz.height - 2, sz.width + 4, sz.height + 4);
                engine.fill = fill;
                point.x -= sz.width / 2;
                engine.drawString(text, point);
                engine.fontSize = fsz;
            }
        }
    });
});
