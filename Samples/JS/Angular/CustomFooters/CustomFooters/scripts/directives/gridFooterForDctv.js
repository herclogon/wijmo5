// application
var app = angular.module('app');

// gridFooterFor directive
//
// <wj-flex-grid grid-footer-for="ownerGridId" ...
//
app.directive('gridFooterFor', function () {

    // class used to identify footer rows
    var GRID_FOOTER_CLASS = 'wj-footer';

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            // get control instance, assert type
            var flex = wijmo.Control.getControl(element[0]);
            flex = wijmo.asType(flex, wijmo.grid.FlexGrid);

            // get master grid that controls this footer grid
            var masterId = attrs['gridFooterFor'],
                masterHost = document.getElementById(masterId),
                masterFlex = wijmo.Control.getControl(masterHost);
            wijmo.assert(flex && masterFlex && flex != masterFlex, 'bad parameters');

            // configure footer grid
            flex.isReadOnly = true;
            flex.selectionMode = wijmo.grid.SelectionMode.None;
            flex.headersVisibility = masterFlex.headersVisibility;
            flex.columnHeaders.rows.clear();
            var row = new wijmo.grid.GroupRow();
            row.cssClass = GRID_FOOTER_CLASS;
            flex.rows.push(row);

            // remove scrollbars from footer grid
            var root = flex.hostElement.querySelector('[wj-part="root"]');
            root.style.overflow = 'hidden';

            // synchronize columns with master grid
            setTimeout(syncCols, 100);
            masterFlex.draggedColumn.addHandler(syncCols);
            masterFlex.resizedColumn.addHandler(syncCols);
            masterFlex.loadedRows.addHandler(syncCols);
            masterFlex.cellEditEnded.addHandler(syncCols);
            function syncCols() {

                // copy columns/sizes etc
                flex.columnLayout = masterFlex.columnLayout;

                // add an extra column to account for vertical scrollbar (TFS 143005)
                var sbc = new wijmo.grid.Column();
                sbc.width = 2000;
                flex.columns.push(sbc);

                // set content of footer grid
                for (var i = 0; i < masterFlex.columns.length; i++) {
                    var col = masterFlex.columns[i];
                    var data = col.header ? col.header : col.binding;
                    flex.setCellData(0, i, 'f(' + data + ')', false);
                }
            }

            // synchronize scroll position with master grid
            masterFlex.scrollPositionChanged.addHandler(function () {
                flex.scrollPosition = masterFlex.scrollPosition;
            });
        }
    };
});

