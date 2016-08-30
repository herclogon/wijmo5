'use strict';

// declare app module
var app = angular.module('app');

// app controller provides data
app.controller('appCtrl', function appCtrl($scope, $locale) {

    // NorthWind OData V4 service
    var url = 'http://services.odata.org/V4/Northwind/Northwind.svc';

    // initialize an ODataCollectionView and bind it to a grid
    $scope.initODataCollectionView = function (s, e) {

        // declare collection view
        var cv = new wijmo.odata.ODataCollectionView(url, 'Order_Details_Extendeds', {
            oDataVersion: 4,
            collectionChanged: function (s, e) {
                $scope.$apply();
            }
        });

        // use virtual collection as grid data source
        var flex = s;
        flex.itemsSource = cv;

        // show row indices in row header cells
        flex.formatItem.addHandler(function (s, e) {
            if (e.panel.cellType == wijmo.grid.CellType.RowHeader) {
                e.cell.textContent = e.row;
            }
        })

        // add a filter
        var filter = new wijmo.grid.filter.FlexGridFilter(flex);
    }

    // initialize an ODataVirtualCollectionView and bind it to a grid
    $scope.initODataVirtualCollectionView = function (s, e) {

        // declare virtual collection view
        var vcv = new wijmo.odata.ODataVirtualCollectionView(url, 'Order_Details_Extendeds', {
            oDataVersion: 4,
            collectionChanged: function (s, e) {
                $scope.$apply();
            }
        });

        // use virtual collection as grid data source
        var flex = s;
        flex.itemsSource = vcv;

        // update data window when the grid scrolls
        flex.scrollPositionChanged.addHandler(function () {
            var rng = flex.viewRange;
            vcv.setWindow(rng.row, rng.row2);
        });

        // show row indices in row header cells
        flex.formatItem.addHandler(function (s, e) {
            if (e.panel.cellType == wijmo.grid.CellType.RowHeader) {
                e.cell.textContent = e.row;
            }
        })

        // add a filter
        var filter = new wijmo.grid.filter.FlexGridFilter(flex);
    }
});
