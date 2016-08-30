'use strict';

// get reference to the app
var app = angular.module('app');
app.controller('appCtrl', function ($scope) {

    // nation data
    $scope.yrMin = 1800;
    $scope.yrMax = 2009;
    $scope.year = $scope.yrMin;
    $scope.animLength = 15000; // 15s for the full animation
    $scope.data = new wijmo.collections.CollectionView(null, {
        sortDescriptions: [
            new wijmo.collections.SortDescription('yearPopulation', false) // small countries above big ones
        ], 
        filter: function (item) { // filter out countries without enough data
            return item.population.length > 1 &&
                item.income.length > 1 &&
                item.lifeExpectancy.length > 1;
        }
    });

    // update data for current year
    $scope.$watch('year', function () {
        $scope.updateData();
    });
    $scope.updateData = function () {
        var year = $scope.year;
        var items = $scope.data.items;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.yearIncome = interpolate(item.income, year);
            item.yearLifeExpectancy = interpolate(item.lifeExpectancy, year);
            var pop = interpolate(item.population, year);
            if (pop > 1000000) pop = Math.round(pop / 1000000) * 1000000;
            item.yearPopulation = pop;
        }
        $scope.data.refresh();
    }
    function interpolate(arr, year) {

        // binary search
        var min = 0, max = arr.length - 1, cur, item;
        while (min <= max) {
            cur = (min + max) >>> 1,
            item = arr[cur];
            if (item[0] > year) {
                max = cur - 1;
            } else if (item[0] < year) {
                min = cur + 1;
            } else {
                return item[1]; // found year, no need to interpolate
            }
        }

        // before the first/after the last
        if (min == 0) return arr[min][1];
        if (min == arr.length) return arr[max][1];

        // in range: interpolate
        var pct = (year - arr[max][0]) / (arr[min][0] - arr[max][0]);
        return arr[max][1] + pct * (arr[min][1] - arr[max][1]);
    }

    // animate the year
    $scope.animating = 0;
    $scope.toggleAnimation = function () {
        if ($scope.animating) {
            clearInterval($scope.animating);
            $scope.animating = null;
        } else {
            var min = ($scope.year < $scope.yrMax - 10) ? $scope.year : $scope.yrMin,
                max = $scope.yrMax,
                duration = $scope.animLength * (max - min) / ($scope.yrMax - $scope.yrMin);
            $scope.animating = wijmo.animate(function (pct) {
                $scope.year = Math.round(min + (max - min) * pct);
                $scope.$apply();
                if (pct == 1) {
                    $scope.animating = null;
                    $scope.$apply();
                }
            }, duration);
        }
    }
    $scope.stopAnimation = function () {
        if ($scope.animating) {
            clearInterval($scope.animating);
            $scope.animating = null;
        }
    }

    // color bubbles by region
    $scope.chartItemFormatter = function (engine, hitTestInfo, defaultFormat) {
        if (hitTestInfo.chartElement == wijmo.chart.ChartElement.SeriesSymbol) {
            var fill = 'black',
                stroke = 'black'
            switch (hitTestInfo.item.region) {
                case 'Sub-Saharan Africa':
                    fill = '#1F77B4';
                    break;
                case 'South Asia':
                    fill = '#FF7F0E';
                    break;
                case 'Middle East & North Africa':
                    fill = '#2CA02C';
                    break;
                case 'America':
                    fill = '#D62728';
                    break;
                case 'Europe & Central Asia':
                    fill = '#9467BD';
                    break;
                case 'East Asia & Pacific':
                    fill = '#8C564B';
                    break;
            }
            engine.fill = fill;
            engine.stroke = stroke;
            engine.strokeWidth = 1;
            defaultFormat();
        }
    };

    // get nations data
    // https://bost.ocks.org/mike/nations/nations.json
    wijmo.httpRequest('nations.json', {
        success: function (xhr) {
            $scope.data.sourceCollection = JSON.parse(xhr.response);
            $scope.data.currentItem = null; // start with no selection
            $scope.toggleAnimation(); // start animation when data is loaded
        }
    });
});
