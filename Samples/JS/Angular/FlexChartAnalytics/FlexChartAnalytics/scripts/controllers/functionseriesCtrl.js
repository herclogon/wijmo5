'use strict';

var app = angular.module('app');

app.controller('functionseriesCtrl', function ($scope) {

    $scope.func = function (value) {
        return Math.sin(4 * value) * Math.cos(3 * value);
    }
    $scope.xFunc = function (value) {
        return Math.cos(value * 5);
    }
    $scope.yFunc = function (value) {
        return Math.sin(value * 7);
    }
    $scope.max = 2 * Math.PI;
});
