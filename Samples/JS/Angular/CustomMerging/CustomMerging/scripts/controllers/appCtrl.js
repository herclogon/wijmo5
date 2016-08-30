'use strict';

// declare app module
var app = angular.module('app');

// declare app controller
app.controller('appCtrl', function appCtrl($scope, $locale) {

    $scope.initCustomMerge = function (s, e) {
        var flex = s;

        // set custom merge manager
        flex.mergeManager = new wijmo.grid.CustomMergeManager(flex);

        // center-align cells vertically and horizontally
        flex.formatItem.addHandler(function (s, e) {
            if (e.cell.children.length == 0) {
                e.cell.innerHTML = '<div>' + e.cell.innerHTML + '</div>';
                wijmo.setCss(e.cell, {
                    display: 'table',
                    tableLayout: 'fixed'
                });
                wijmo.setCss(e.cell.children[0], {
                    display: 'table-cell',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                });
            }
        });

        // create rows and columns
        while (flex.columns.length < 7) {
            flex.columns.push(new wijmo.grid.Column());
        }
        while (flex.rows.length < 5) {
            flex.rows.push(new wijmo.grid.Row());
        }
        setData(flex.columnHeaders, 0, ',Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday'.split(','));
        flex.rowHeaders.columns[0].width = 80;
        flex.rows.defaultSize = 40;
        flex.isReadOnly = true;

        // add data
        setData(flex.cells, 0, '12:00,Walker,Morning Show,Morning Show,Sport,Weather,N/A,N/A'.split(','));
        setData(flex.cells, 1, '13:00,Today Show,Today Show,Sesame Street,Football,Market Watch,N/A,N/A'.split(','));
        setData(flex.cells, 2, '14:00,Today Show,Today Show,Kid Zone,Football,Soap Opera,N/A,N/A'.split(','));
        setData(flex.cells, 3, '15:00,News,News,News,News,News,N/A,N/A'.split(','));
        setData(flex.cells, 4, '16:00,News,News,News,News,News,N/A,N/A'.split(','));
    }
    function setData(p, r, cells) {

        // first element in row header
        if (p.cellType == wijmo.grid.CellType.Cell) {
            p.grid.rowHeaders.setCellData(r, 0, cells[0]);
        }

        // other elements in row
        for (var i = 1; i < cells.length; i++) {
            p.setCellData(r, i - 1, cells[i]);
        }
    }
});
