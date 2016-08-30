'use strict';

// declare app module
var app = angular.module('app');

// app controller provides data
app.controller('appCtrl', function appCtrl($scope) {

    // print directly
    $scope.printWindow = function () {
        window.print();
    }

    // print via PrintDocument
    $scope.printDocument = function () {

        // create PrintDocument
        var doc = new wijmo.PrintDocument({
            title: 'PrintDocument Test'
        });

        // add some simple text
        doc.append('<h1>Printing Example</h1>');
        doc.append('<p>This document was created using the <b>PrintDocument</b> class.</p>');

        // add existing elements
        doc.append('<h2>Render Existing Elements</h2>');
        doc.append('<p>It contains some elements that are hosted on the main page:</p>');
        doc.append(document.getElementById('titleDiv'));
        doc.append(document.getElementById('gaugeDiv'));

        // add a printer-friendly version of a FlexGrid to the document
        var flex = $scope.flex;
        if (flex) {
            doc.append('<h2>Printer-Friendly FlexGrid</h2>');
            doc.append('<p>It also contains some custom-generated content. ' +
                'Here is a printer-friendly version of a <b>FlexGrid</b> with ' +
                wijmo.Globalize.format(flex.rows.length, 'n0') + ' rows:</p>');
            var tbl = renderTable(flex);
            doc.append(tbl);
        }

        // print the document
        doc.print();
    }

    // renders a FlexGrid as a printer-friendly table element
    function renderTable(flex) {

        // start table
        var tbl = '<table>';

        // headers
        if (flex.headersVisibility & wijmo.grid.HeadersVisibility.Column) {
            tbl += '<thead>';
            for (var r = 0; r < flex.columnHeaders.rows.length; r++) {
                tbl += renderRow(flex.columnHeaders, r);
            }
            tbl += '</thead>';
        }

        // body
        tbl += '<tbody>';
        for (var r = 0; r < flex.rows.length; r++) {
            tbl += renderRow(flex.cells, r);
        }
        tbl += '</tbody>';

        // done
        tbl += '</table>';
        return tbl;
    }

    function renderRow(panel, r) {
        var tr = '',
            row = panel.rows[r],
            nextCol = -1;
        if (row.renderSize > 0) {

            // start row/group row
            tr += row instanceof wijmo.grid.GroupRow
                ? '<tr style="font-weight:bold;height:2em;border-top:2px solid grey">'
                : '<tr>';

            // render each column
            for (var c = 0; c < panel.columns.length; c++) {
                var col = panel.columns[c];
                if (col.renderSize > 0 && c >= nextCol) {
                    var colSpan = '',
                        mergedRange = null;

                    // get cell content
                    var content = panel.getCellData(r, c, true),
                        data = panel.getCellData(r, c, false),
                        isHtml = row.isContentHtml || col.isContentHtml;
                    if (!isHtml && wijmo.isString(data)) {
                        content = wijmo.escapeHtml(content);
                    }
                    if (wijmo.isBoolean(data)) {
                            content = data ? '&#9745;' : '&#9744;';
                    }
                    if (row instanceof wijmo.grid.GroupRow && c == panel.columns.firstVisibleIndex) {
                        content = row.getGroupHeader();
                    }

                    // handle merged cells
                    mergedRange = panel.grid.getMergedRange(panel, r, c, false);
                    if (mergedRange && mergedRange.columnSpan > 1) {
                        colSpan = ' colspan="' + mergedRange.columnSpan + '"';
                        nextCol = c + mergedRange.columnSpan;
                    }

                    // get cell style 
                    var style = 'width:' + (mergedRange ? mergedRange.getRenderSize(panel).width : col.renderSize) + 'px;';
                    if (col.getAlignment()) {
                        style += 'text-align:' + col.getAlignment() + ';';
                    }

                    // add cell to row
                    if (panel.cellType == wijmo.grid.CellType.ColumnHeader) {
                        tr += '<th style="' + style + '"' + colSpan + '>' + content + '</th>';
                    } else {
                        tr += '<td style="' + style + '"' + colSpan + '>' + content + '</td>';
                    }
                }
            }

            // close row
            tr += '</tr>';
        }
        return tr;
    }

    // generate some random data
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [];
    for (var i = 0; i < 1000; i++) {
        data.push({
            id: i,
            country: countries[i % countries.length],
            date: new Date(2014, i % 12, i % 28 + 1),
            amount: (i % 123) * 10000,
            active: i % 4 == 0,
            discount: Math.random() * .4
        });
    }

    // create CollectionView with groups
    var view = new wijmo.collections.CollectionView(data),
        groupDescrpition = new wijmo.collections.PropertyGroupDescription('country');
    $scope.data = view;

    // toggle grouping
    $scope.groupData = false;
    $scope.$watch('groupData', function () {
        view.groupDescriptions.clear();
        if ($scope.groupData) {
            view.groupDescriptions.push(groupDescrpition);
        }
    });
});
