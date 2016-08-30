'use strict';

// get reference to app module
var app = angular.module('wj');

// local version of the wj-flex-grid-detail directive, used for testing only
//
// Allows you to add detail rows to FlexGrid controls.
// Sample usage:
// <wj-flex-grid 
//   items-source="categories"
//   allow-resizing="Both">
//   <wj-flex-grid-column header="Name" binding="CategoryName"></wj-flex-grid-column>
//   <wj-flex-grid-column header="Description" binding="Description" width="*"></wj-flex-grid-column>
//   <wj-flex-grid-detail max-height="250">
//     <wj-flex-grid items-source="getProducts($item.CategoryID)">
//     </wj-flex-grid>
//   </wj-flex-grid-detail>
// </wj-flex-grid>
//
app.directive('xwjFlexGridDetail', function ($compile, $interpolate) {
    return {
        restrict: 'E',
        require: '^wjFlexGrid',
        replace: true,
        transclude: true,
        scope: {
            control: '=',
            detailVisibilityMode: '=',
            maxHeight: '@'
        },
        template: '<div ng-transclude/>',
        priority: 100,
        terminal: true,
        link: function (scope, element, attrs, controller, transcludeFn) {

            // get detail template
            var tpl = getCellTemplate(element[0].innerHTML);
            element[0].innerHTML = '';

            // wait until grid is instantiated
            setTimeout(function () {

                // create detail provider
                var grid = wijmo.Control.getControl(element[0].parentElement),
                    dp = new wijmo.grid.detail.FlexGridDetailProvider(grid);

                // expose detail provider through scope as 'control'
                if (attrs['control']) {
                    scope.$apply(function () {
                        scope.control = dp;
                    });
                }

                // apply scope attributes to detail provider
                if (scope.maxHeight) {
                    dp.maxHeight = parseInt(scope.maxHeight);
                }

                // apply and update detailVisibilityMode
                scope.$watch('detailVisibilityMode', function () {
                    if (scope.detailVisibilityMode != null) {
                        dp.detailVisibilityMode = scope.detailVisibilityMode;
                    }
                });

                // show detail when asked to
                dp.createDetailCell = function(row, col) {

                    // create detail cell element, append it to grid so it can initialize properly
                    var cell = document.createElement('div');
                    dp.grid.hostElement.appendChild(cell);

                    // populate detail cell from template
                    var cellScope = getCellScope(scope.$parent, row, col);
                    transcludeFn(cellScope, function (clone, scope) {
                        for (var i = 0; i < clone.length; i++) {
                            cell.appendChild(clone[i]);
                        }
                    });

                    // apply the cell scope
                    if (!cellScope.$root.$$phase) {
                        cellScope.$apply();
                    }

                    // remove cell element from grid and return it to caller
                    cell.parentElement.removeChild(cell);
                    return cell;
                }
            }, 0);
        }
    }

    // helper functions
    function getCellScope(parentScope, row, col) {
        var ret = parentScope.$new();
        ret.$row = row;
        ret.$col = col;
        ret.$item = row.dataItem;
        return ret;
    };
    function getCellTemplate(tpl) {
        if (tpl) {
            tpl = tpl.replace(/ng\-style/g, 'style');
            tpl = tpl.replace(/ class\=\"ng\-scope\"( \"ng\-binding\")?/g, '');
            tpl = tpl.replace(/<span>\s*<\/span>/g, '');
        }
        return tpl;
    }

});
