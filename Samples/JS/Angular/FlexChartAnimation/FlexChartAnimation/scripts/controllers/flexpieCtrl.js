'use strict';

var app = angular.module('app');

app.controller('flexpieCtrl', function ($scope, menuSvc) {

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
