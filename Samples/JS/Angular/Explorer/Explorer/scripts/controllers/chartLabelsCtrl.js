'use strict';

var app = angular.module('app');

app.controller('chartLabelsCtrl', function appCtrl($scope) {

    // data context
    $scope.ctx = {
        chart: null,
        itemsSource: [],
        pos : 2
    };

    var names = ['c1', 'c2', 'c3', 'c4', 'c5'];
    for (var i = 0; i < names.length; i++) {
        $scope.ctx.itemsSource.push({
            name: names[i],
            mar: Math.random() * 3,
            apr: Math.random() * 10,
            may: Math.random() * 5
        });
    }

    $scope.positionClicked = function (sender, args) {
        var menu = sender;
        $scope.ctx.chart.dataLabel.position = menu.selectedValue;
    }

    $scope.borderClicked = function (sender, args) {
        var menu = sender;
        $scope.ctx.chart.dataLabel.border = menu.selectedValue;
    }

    $scope.hasLabels = function () {
        var chart = $scope.ctx.chart;
        return chart && chart.dataLabel.position != 0;
    };

});
