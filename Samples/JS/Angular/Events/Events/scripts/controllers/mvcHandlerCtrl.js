(function () {
    'use strict';

    // get reference to app module
    var app = angular.module('app');

    // add controller to app module
    app.controller('mvcHandlerCtrl', function appCtrl($scope) {

        $scope.onValueChanged = function (newValue) {
            alert('New value is ' + newValue);
        }
    });
})();