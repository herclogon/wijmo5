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


app.controller('pieChartAnimationCtrl', function appCtrl($scope) {

    // generate some random data
    function getData(numCount) {
        var data = new wijmo.collections.ObservableArray();
        //var data = [];

        for (var i = 0; i < numCount; i++) {
            data.push(getRandomData('random' + getRandomValue(1000)));
        }
        return data;
    }

    function getRandomData(idx) {
        return {
            x: idx,
            y: getRandomValue(200)
        };
    }

    function getRandomValue(max) {
        return Math.round(Math.random() * max);
    }

    $scope.piedata = getData(5);
    $scope.ctx = {
        pieChart: null,
        duration: 400,
        innerRadius: 0,
        easing: 'Swing',
        animationMode: 'All'
    };
    $scope.duration = 400;
    $scope.innerRadius = 0;
    $scope.inputDuration = null;
    $scope.inputInnerRadius = null;

    $scope.$watch('duration', function () {
        var input = $scope.inputDuration,
            val = $scope.duration;

        if (input != null) {
            if (val < input.min || val > input.max) {
                return;
            }
            $scope.ctx.duration = val;
        }
    });
    $scope.$watch('innerRadius', function () {
        var input = $scope.inputInnerRadius,
            val = $scope.innerRadius;

        if (input != null) {
            if (val < input.min || val > input.max) {
                return;
            }
            $scope.ctx.innerRadius = val;
        }
    });
    //selection-mode="Point"
    var insertPieIdx = 1;

    $scope.resetPieData = function () {
        $scope.piedata = getData(5);
        insertPieIdx = 1;
    };

    $scope.addSlice = function () {
        $scope.piedata.push(getRandomData('added' + insertPieIdx));
        insertPieIdx++;
    };

    $scope.removeSlice = function () {
        if ($scope.piedata.length) {
            $scope.piedata.pop();
            insertPieIdx <= 1 ? 1 : insertPieIdx--;
        }
    };

    $scope.$watch('ctx.pieChart', function () {
        var pieChart = $scope.ctx.pieChart;
        if (!pieChart) {
            return;
        }
        updatePieChart();
    });

    $scope.$watch('ctx.animationMode', function () {
        var pieChart = $scope.ctx.pieChart,
            animationMode = $scope.ctx.animationMode;

        if (!animationMode || animationMode === '') {
            return;
        }
        updatePieChart();
    });

    function updatePieChart() {
        var pieChart = $scope.ctx.pieChart;

        if (pieChart) {
            pieChart.refresh(true);
        }
    }
});
