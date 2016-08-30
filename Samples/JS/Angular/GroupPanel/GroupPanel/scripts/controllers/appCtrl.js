'use strict';

// declare app module
var app = angular.module('app');

// controller
app.controller('appCtrl', function ($scope, $http) {

    // create some random data
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [];
    for (var i = 0; i < 10; i++) {
        data.push({
            id: i,
            name: countries[i % countries.length],
            date: new Date(2015, i % 12, i % 25 + 1),
            time: new Date(2015, i % 12, i % 25 + 1, i % 24, i % 60, i % 60),
            country: countries[i % countries.length],
            downloads: Math.round(Math.random() * 20000),
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000,
            checked: i % 9 == 0
        });
    }

    // expose data
    var view = new wijmo.collections.CollectionView(data);
    view.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('name'));
    view.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('checked'));
    $scope.data = view;
});