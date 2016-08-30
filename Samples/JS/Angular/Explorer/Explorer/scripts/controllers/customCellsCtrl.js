'use strict';

var app = angular.module('app');

// basic controller: show basic grid functionality
app.controller('customCellsCtrl', function appCtrl($scope, dataSvc, sparkSvc) {

    // data context
    $scope.ctx = {
        flex: null,
        data: dataSvc.getData(1000),
        // custom cell formatter function
        itemFormatter: itemFormatter
    };

    $scope.itemsSourceChangedHandler = function () {
        var flex = $scope.ctx.flex;

        var chartColumns = ['amount', 'amount2', 'discount'],
                   items = flex.collectionView.items;
        for (var i = 0; i < chartColumns.length; i++) {
            var col = flex.columns.getColumn(chartColumns[i]);
            if (col) {
                col.chartInfo = {
                    posColor: 'green',
                    negColor: 'red',
                    min: wijmo.getAggregate(wijmo.Aggregate.Minimum, items, col.binding),
                    max: wijmo.getAggregate(wijmo.Aggregate.Maximum, items, col.binding)
                };
            }
        }
    };

    // create custom content for cells
    function itemFormatter(panel, r, c, cell) {
        if (panel.cellType == wijmo.grid.CellType.Cell) {

            // use chartInfo to draw a bar chart
            var col = panel.columns[c];
            if (col.chartInfo) {
                cell.innerHTML = getBar(panel, r, c);
                return;
            }

            // create other types of custom content
            switch (col.name) {
                case 'sparklines':
                    cell.innerHTML = sparkSvc.getSparklines(panel.rows[r].dataItem['sales']);
                    break;
                case 'sparkbars':
                    cell.innerHTML = sparkSvc.getSparkbars(panel.rows[r].dataItem['sales']);
                    break;
                case 'ticker':
                    var sales = panel.rows[r].dataItem['sales'],
                        first = sales[0],
                        last = sales[sales.length - 1],
                        delta = last / first - 1;
                    cell.innerHTML =
                        '<div style="color:' + (delta >= 0 ? 'green' : 'red') + '">' +
                        '<span style="float:left;width:60px;font-size:larger;text-align:right">' + wijmo.Globalize.format(last, 'n2') + '</span>' +
                        '<span style="float:left;width:30px">' + (delta > 0 ? '&#x25b2;' : '&#x25bc;') + '</span>' +
                        '<span style="float:left;font-size:smaller;">(' + wijmo.Globalize.format(delta, 'p0') + ')</span>' +
                        '<div>';
                    break;
            }
        }
    }

    // builds an HTML string that represents a bar in a grid column
    function getBar(panel, r, c) {
        var col = panel.columns[c],
            ci = col.chartInfo,
            base = Math.min(ci.max, Math.max(ci.min, 0)),
            xbase = Math.round((base - ci.min) / (ci.max - ci.min) * 100),
            val = panel.getCellData(r, c, false),
            xval = Math.round((val - ci.min) / (ci.max - ci.min) * 100),
            style = 'box-sizing:border-box;height:100%;padding:4px;opacity:.5;';
        style += 'background-color:' + (val > 0 ? ci.posColor : ci.negColor) + ';';
        style += (xval > xbase)
            ? 'width:' + (xval - xbase) + '%;margin-left:' + xbase + '%;'
            : 'width:' + (xbase - xval) + '%;margin-left:' + xval + '%;';
        return '<div style="' + style + '" />';
    }
});
