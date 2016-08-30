'use strict';

// declare app module
var app = angular.module('app');

// controller
app.controller('appCtrl', function ($scope) {

    // add a value filter to the grid
    $scope.initialized = function (s, e) {
        var gridFilter = new wijmo.grid.valuefilter.FlexGridFilter(s);
    }

    // create some random data
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [];
    for (var i = 0; i < 500; i++) {
        data.push({
            id: i,
            name: countries[i % countries.length],
            date: new Date(2015, i % 12, i % 25 + 1),
            time: new Date(2015, i % 12, i % 25 + 1, i % 24, i % 60, i % 60),
            country: countries[i % countries.length],
            countryMapped: i % countries.length,
            downloads: Math.round(Math.random() * 20000),
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000,
            checked: i % 9 == 0
        });
    }

    // create a data map for countries
    var map = [];
    for (var i = 0; i < countries.length; i++) {
        map.push({ key: i, val: countries[i] });
    }
    $scope.countryMap = new wijmo.grid.DataMap(map, 'key', 'val');

    // expose data to view
    $scope.data = new wijmo.collections.CollectionView(data);
});