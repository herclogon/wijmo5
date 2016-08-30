'use strict';

// get reference to the app
var app = angular.module('app');
app.controller('appCtrl', function ($scope) {

    $scope.mainItem = {
        name: '',
        email: '',
        country: '',
        dateTime: null,
        quantity: null,
        discount: null,
        creditCard: '',
        favoriteColors: []
    };
    $scope.dlgItem = clone($scope.mainItem);
    $scope.countries = 'US,UK,Japan,Germany,France,Italy,Russia,China,India,Korea,Spain,Canada,Denmark,Sweden,,Holland,Norway,Portugal'.split(',');
    $scope.colors = 'Black,White,Grey,Red,Green,Blue,Yellow,Pink,Purple,Orange'.split(',');

    // edit the item using a modal dialog
    $scope.editItem = function () {

        // save the original data to undo later if necessary
        var original = clone($scope.dlgItem);

        // show the dialog
        // and undo changes if the user didn't click the OK button
        $scope.modalDialog.show(true, function (e) {
            if (e.dialogResult == 'submit') {
                // process form data
            } else { // restore original values
                for (var k in original) {
                    $scope.dlgItem[k] = original[k];
                }
            }
        })
    }

    function clone(obj) {
        var c = {};
        for (var k in obj) {
            c[k] = obj[k];
        }
        return c;
    }
});
