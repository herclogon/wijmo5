// get application
var app = angular.module('app');

// add directive
app.directive('wjFlexGridEditor', function () {
    return {
        restrict: 'A',
        priority: 110, // << required to work within 'wj-flex-grid-column' directives
        link: function (scope, element, attrs) {

            // get grid, editor, and column info
            var eEdt = document.getElementById(attrs['wjFlexGridEditor']);
            var eGrid = element[0].parentElement;
            var att = element[0].attributes['name'];
            if (!att) att = element[0].attributes['binding'];
            wijmo.assert(eEdt && eGrid && att && att.value);

            // get grid and column after they have been instantiated
            setTimeout(function () {

                // get grid and column
                var grid = wijmo.Control.getControl(eGrid);
                wijmo.assert(grid instanceof wijmo.grid.FlexGrid);
                var col = grid.columns.getColumn(att.value);
                wijmo.assert(col instanceof wijmo.grid.Column);

                // associate the custom editor with the column
                var ce = new CustomGridEditor(col, eEdt);
            });
        }
    };
});
