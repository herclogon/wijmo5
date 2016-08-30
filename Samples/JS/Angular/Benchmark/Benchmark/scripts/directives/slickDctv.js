angular.module('app')
.directive('slickGrid', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: { options: '=', data: '=', columns: '=' },
        template: '<div></div>',
        link: function (scope, element, attrs) {
            if (scope.data && scope.columns && scope.options) {

                // create the grid
                var grid = new Slick.Grid(element, scope.data, scope.columns, scope.options);

                // provide sorting
                grid.onSort.subscribe(function (e, args) {
                    var field = args.sortCol.field;
                    scope.data.sort(function (a, b) {
                        var result =
                            a[field] > b[field] ? 1 :
                            a[field] < b[field] ? -1 :
                            0;
                        return args.sortAsc ? result : -result;
                    });
                    grid.invalidate();
                });
            }
        }
    }
});
