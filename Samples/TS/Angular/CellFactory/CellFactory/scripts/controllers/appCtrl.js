'use strict';

// get reference to the app
var app = angular.module('app');

// define the app's single controller
app.controller('appCtrl', function appCtrl($scope) {

    // create some data
    $scope.data = createData(100, 900);

    // initialize row and column sizes
    $scope.initGrid = function (flex, e) {
        flex.rows.forEach(function (item) {
            item.height = 35;
        });
        flex.columns.forEach(function (item) {
            item.width = 35;
            item.align = '';
        });
        $scope.flex = flex;
        $scope.renderMode = 'CustomCellFactory';
        $scope.$apply();
    }

    // select cell rendering mode
    $scope.$watch('renderMode', function () {
        var flex = $scope.flex;
        if (flex) {
            switch ($scope.renderMode) {
                case 'CustomCellFactory':
                    flex.cellFactory = new wijmo.grid.CustomCellFactory();
                    flex.itemFormatter = null;
                    break;
                case 'ItemFormatter':
                    flex.cellFactory = new wijmo.grid.CellFactory();
                    flex.itemFormatter = itemFormatter;
                    break;
                case 'Default':
                    flex.cellFactory = new wijmo.grid.CellFactory();
                    flex.itemFormatter = null;
                    break;
                default:
                    throw 'Invalid renderMode request';
            }
        }
    });

    // create some data for the sample  
    function createData(rows, cols) {
        var data = [];
        for (var r = 0; r < rows; r++) {
            data[r] = [];
            for (var c = 0; c < cols; c++) {
                data[r][c] = r + c;
            }
        }
        return data;
    }

    // itemFormatter function
    function itemFormatter(p, r, c, cell) {
        switch (p.cellType) {

            // regular cells
            case wijmo.grid.CellType.Cell:
                wijmo.addClass(cell, 'centered-cell');
                cell.style.backgroundColor = (r % 2 == 0) ? '#fff682' : '#b0e9ff';
                var html = '<div>' + p.getCellData(r, c, true) + '</div>';
                if (cell.innerHTML != html) {
                    cell.innerHTML = html;
                }
                break;

            // column headers
            case wijmo.grid.CellType.ColumnHeader:
                wijmo.addClass(cell, 'rotated-cell');
                var html = '<div>' + p.getCellData(r, c, true) + '</div>';
                if (cell.innerHTML != html) {
                    cell.innerHTML = html;
                }
                break;
        }
    }
});
