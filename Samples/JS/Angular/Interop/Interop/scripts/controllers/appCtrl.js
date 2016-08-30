﻿'use strict';

// get reference to the app
var app = angular.module('app');

// define the app's single controller
app.controller('appCtrl', function appCtrl($scope) {

    // app model
    var names = 'Abraham,Andrew,Carter,Charles,Daniel,David,Edward,Gunning,Jacob,John,Josiah,Pierce,Richard,Samuel,Simon,Thomas,William'.split(','),
        count = 20,
        startDate = wijmo.DateTime.addDays(new Date(), -count),
        data = [];
    for (var i = 0; i < 20; i++) {
        data.push({
            id: i,
            name: names[i % names.length],
            sales: Math.random() * 1000,
            expenses: Math.random() * 500,
            downloads: Math.random() * 2000,
            active: i % 2 == 0,
            date: wijmo.DateTime.addDays(startDate, i)
        });
    }

    // expose data to view
    $scope.names = names;
    $scope.view = new wijmo.collections.CollectionView(data);

    // refresh the CollectionView after setting values
    // outside edit/commitItem blocks
    $scope.refreshView = function (s, e) {
        $scope.view.refresh();
    };

    // edit the current item in a modal dialog
    $scope.editCurrentItem = function () {
        var view = $scope.view;
        view.editItem(view.currentItem);
        $scope.itemEditor.show(true, function (e) {
            if (e.dialogResult == 'wj-hide-ok') {
                view.commitEdit();
            } else {
                view.cancelEdit();
            }
            $scope.$apply();
        });
    }

});
