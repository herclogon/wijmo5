'use strict';

var app = angular.module('app');

// groupPanel controller
app.controller('groupPanelCtrl', function appCtrl($scope, dataSvc) {

    // expose data
    var view = dataSvc.getData(500);
    view.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('product'));
    view.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('country'));
    $scope.data = view;
});
