(function () {
    'use strict';

    // get reference to app module
    var app = angular.module('app');

    // add controller to app module
    app.controller('standardHandlerCtrl', function appCtrl($scope) {

        $scope.onValueChanged = function (sender, eventArgs) {
            alert('New value is ' + sender.value);
        }
    });
})();