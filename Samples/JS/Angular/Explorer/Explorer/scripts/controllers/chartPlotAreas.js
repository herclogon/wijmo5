'use strict';

var app = angular.module('app');

app.controller('chartPlotAreasCtrl', function appCtrl($scope) {

    // data context
    $scope.ctx = {
        chart: null,
        itemsSource: []
    };

    var data = [];

    for (var i = 0; i < 20; i++) {
        var a = i,
            v = a * i,
            s = 0.5 * a * i*i;
        
        data[i] = { a: a, v: v, s: s, t:i };
    }

    // populate itemsSource
    $scope.ctx.itemsSource = data;

});
