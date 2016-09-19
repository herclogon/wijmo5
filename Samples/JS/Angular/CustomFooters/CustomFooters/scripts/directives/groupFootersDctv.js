// application
var app = angular.module('app');

// groupFooters directive
//
// <wj-flex-grid group-footers="xxx" ...
//
app.directive('groupFooters', function () {

    // class used to identify group footer rows
    var ROW_FOOTER_CLASS = 'wj-groupfooter';

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            // get control instance, assert type
            var flex = wijmo.Control.getControl(element[0]);
            flex = wijmo.asType(flex, wijmo.grid.FlexGrid);

            // add group footers after loading rows
            flex.loadedRows.addHandler(function () {
                if (flex.collectionView.groupDescriptions.length) {
                    addGroupFooters();
                }
            });

            // add group footers
            function addGroupFooters() {
                flex.beginUpdate();
                for (var r = 0; r < flex.rows.length; r++) {
                    var row = flex.rows[r];
                    if (row instanceof wijmo.grid.GroupRow && row.cssClass != ROW_FOOTER_CLASS) {

                        // create footer row to match this group row
                        var newRow = new wijmo.grid.GroupRow();
                        newRow.level = row.level;
                        newRow.cssClass = ROW_FOOTER_CLASS;

                        // add footer row to the grid
                        var index = findFooterIndex(r);
                        flex.rows.insert(index, newRow);

                        // add some content to footer row
                        var group = row.dataItem;
                        flex.setCellData(index, 0, 'f(' + group.name + ')', false);
                    }
                }
                flex.endUpdate();
            }

            // find the index where the group footer should be inserted
            function findFooterIndex(r) {
                var level = flex.rows[r].level;
                for (var i = r + 1; i < flex.rows.length; i++) {
                    var row = flex.rows[i];
                    if (row instanceof wijmo.grid.GroupRow) {

                        // if this is *not* a footer and the level is <=, insert here
                        if (row.cssClass != ROW_FOOTER_CLASS && row.level <= level) {
                            return i;
                        }

                        // if this *is* a footer and the level is <, insert here
                        if (row.cssClass == ROW_FOOTER_CLASS && row.level < level) {
                            return i;
                        }
                    }
                }

                // insert at the bottom
                return flex.rows.length;
            }
        }
    };
});

