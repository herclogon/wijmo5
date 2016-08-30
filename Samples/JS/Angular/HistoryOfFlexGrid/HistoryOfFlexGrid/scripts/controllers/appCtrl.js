'use strict';

// get reference to the app
var app = angular.module('app');

// define the app's single controller
app.controller('appCtrl', function appCtrl($scope) {

    // generate some random data
    function getData(count) {
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
            data = new wijmo.collections.ObservableArray();
        for (var i = 0; i < count; i++) {
            data.push({
                Id: i,
                Country: countries[i % countries.length],
                Date: new Date(2014, i % 12, i % 28),
                Amount: Math.random() * 10000
            });
        }
        return data;
    }

    $scope.ctx = {
        flexWin95: null,
        flexWinMobile: null,
        flexWinPhone: null
    };

    // expose data as a CollectionView (to get updates on changes)
    $scope.data = new wijmo.collections.CollectionView(getData(100));

    $scope.$watch('ctx.flexWin95', function (newValue, oldValue) {
        if($scope.ctx.flexWin95 !== null) {
            $scope.ctx.flexWin95.cells.rows.defaultSize = 17;
            $scope.ctx.flexWin95.columnHeaders.rows.defaultSize = 17;
        }
    });
    $scope.$watch('ctx.flexWinMobile', function (newValue, oldValue) {
        if ($scope.ctx.flexWinMobile !== null) {
            $scope.ctx.flexWinMobile.cells.rows.defaultSize = 15;
            $scope.ctx.flexWinMobile.columnHeaders.rows.defaultSize = 15;
            $scope.ctx.flexWinMobile.cells.columns.minSize = 50;
            $scope.ctx.flexWinMobile.autoSizeColumns();
        }
    });
});
