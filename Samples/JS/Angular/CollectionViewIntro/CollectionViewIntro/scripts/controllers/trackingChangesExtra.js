(function () {
    'use strict';

    /* define the controller for tracking changes with extra/custom tracking */
    var app = angular.module('app');
    app.controller('appTCCtrlX', function ($scope, dataSvc) {

        // initialize the collectionview
        var cv = new wijmo.collections.CollectionView(dataSvc.getData(6));

        //track the changes
        cv.trackChanges = true;

        // initialize the scope data.
        $scope.cvTrackingChanges = cv;

        // keep the original state of the current item
        var current = cv.currentItem ? JSON.stringify(cv.currentItem) : null;
        cv.currentChanged.addHandler(function (s, e) {
            current = s.currentItem ? JSON.stringify(s.currentItem) : null;
        });

        // keep track of the original state of edited items
        var original = [];
        cv.itemsEdited.collectionChanged.addHandler(function (s, e) {
            if (e.action == wijmo.collections.NotifyCollectionChangedAction.Add ||
                e.action == wijmo.collections.NotifyCollectionChangedAction.Change) {

                // check if we have this item's original data
                var index = cv.sourceCollection.indexOf(e.item);
                var found = -1;
                for (var i = 0; i < original.length && found < 0; i++) {
                    if (original[i].index == index) {
                        found = i;
                    }
                }

                // if we have the item, check original value
                if (found > -1) {

                    // if the current value is the same as the original, remove
                    var valueNow = JSON.stringify(e.item);
                    if (valueNow == original[found].value) {
                        original.splice(found, 1);
                        index = cv.itemsEdited.indexOf(e.item);
                        cv.itemsEdited.splice(index, 1);
                    }
                } else { // if we don't, store it now
                    found = original.length;
                    original.push({ index: index, value: current });
                }
            }
        });

    });
})();