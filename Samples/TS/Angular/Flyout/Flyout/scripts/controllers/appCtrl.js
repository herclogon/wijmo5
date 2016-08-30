'use strict';

// get reference to app (defined in app.js)
var app = angular.module('app');

// define app's single controller
app.controller('appCtrl', function ($scope) {

    // add column header flyouts to a FlexGrid
    $scope.initializeFlyout = function (s, e) {

        // create the FlexGridFlyout
        var f = new wijmo.grid.FlexGridFlyout(s);

        // add some content to the flyout element
        f.flyout.innerHTML =
            '<span id="fo-size"    title="Auto Size Column" class="glyphicon glyphicon-resize-horizontal"></span>' +
            '<span id="fo-sorta"   title="Sort Ascending"   class="glyphicon glyphicon glyphicon-sort-by-attributes"></span>' +
            '<span id="fo-sortd"   title="Sort Descending"  class="glyphicon glyphicon glyphicon-sort-by-attributes-alt"></span>' +
            '<span id="fo-refresh" title="Refresh Data"     class="glyphicon glyphicon glyphicon-refresh"></span>' +
            '<span id="fo-comment" title="Show Comment"     class="glyphicon glyphicon glyphicon-comment"></span>';

        // handle clicks on the flyout element
        s.addEventListener(f.flyout, 'click', function (e) {
            switch (e.target.id) {
                case 'fo-size':
                    s.autoSizeColumn(f.column.index);
                    break;
                case 'fo-sorta':
                case 'fo-sortd':
                    var sd = s.collectionView.sortDescriptions;
                    sd.clear();
                    sd.push(new wijmo.collections.SortDescription(f.column.binding, e.target.id == 'fo-sorta'));
                    break;
                case 'fo-refresh':
                    s.collectionView.refresh();
                    break;
                case 'fo-comment':
                    alert('Showing detail for column ' + f.column.header + '...');
                    break;
            }
            wijmo.hidePopup(f.flyout);
        })
    };

    // create some test data to populate the grid
    $scope.data = [
        { id: 0, name: 'Paul', age: 22 },
        { id: 1, name: 'Ringo', age: 23 },
        { id: 2, name: 'George', age: 24 },
        { id: 3, name: 'John', age: 25 }
    ];
});
