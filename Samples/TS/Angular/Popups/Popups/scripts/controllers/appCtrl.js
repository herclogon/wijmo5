'use strict';

// get reference to app module
var app = angular.module('app');

// controller
app.controller('appCtrl', function ($scope) {
    $scope.dialogs = {};

    // submit or ignore the dialog when it is closed
    $scope.hiding = function (s, e) {
        switch (s.dialogResult) {

            // process the form variables here...
            case 'submit':
                console.log('** Submitting **');
                break;

            // show 'create account' dialog
            case 'wj-hide-create':
                $scope.dialogs.create.show(true);
                break;

            // ignore the form changes...
            default:
                console.log('Closing without submitting...');
                break;
        }
    }

    // add/remove classes used for custom animation
    $scope.showingAnimated = function (s, e) {
        setTimeout(function () {
            wijmo.toggleClass(s.hostElement, 'custom-animation-visible', true);
        });
    }
    $scope.hidingAnimated = function (s, e) {
        setTimeout(function () {
            wijmo.toggleClass(s.hostElement, 'custom-animation-visible', false);
        });
    }

    // using the Popup control with Promises
    $scope.browserSupportsPromises = typeof Promise !== 'undefined';
    $scope.popupPromise = function () {

        // get the promise
        var promise = getPopupPromise();

        // execute the promise
        promise.then(
            function (result) {
                console.log('** Promise was resolved, handle the dialog data');
            },
            function (err) {
                console.log('** Promise was rejected, ignore the dialog data');
            });
    }

    function getPopupPromise() {
        var p = new Promise(function (resolve, reject) {
            var popup = $scope.dialogs.login;
            popup.show(true);
            popup.hidden.addHandler(function () {
                popup.hidden.removeAllHandlers();
                if (popup.dialogResult == 'submit') {
                    resolve(popup);
                } else {
                    reject(popup);
                }
            });
        });
        return p;
    }
});
