angular.module('app')
.directive('kendoGrid', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data: '=',
            columns: '='
        },
        template: '<div></div>',
        link: function (scope, element, attrs) {
            if (scope.data && scope.columns) {
                element.kendoGrid({
                    dataSource: {
                        data: scope.data,
                        pageSize: 20 // to enable virtualization
                    },
                    scrollable: { virtual: true },
                    selectable: 'multiple cell',
                    columns: scope.columns,
                    sortable: true,
                    resizable: true,
                    navigatable: true,
                    filterable: true,
                    editable: true
                });
                scope.$watch('data', function (newValue, oldValue) {
                    element.kendoGrid("destroy").empty();
                    element.kendoGrid({
                        dataSource: {
                            data: newValue,
                            pageSize: 20 // to enable virtualization
                        },
                        scrollable: { virtual: true },
                        selectable: 'multiple cell',
                        columns: scope.columns,
                        sortable: true,
                        resizable: true,
                        navigatable: true,
                        filterable: true,
                        editable: true
                    });
                });
                scope.$watch('data', function (newValue, oldValue) {
                    element.kendoGrid("destroy").empty();
                    element.kendoGrid({
                        dataSource: {
                            data: newValue,
                            pageSize: 20 // to enable virtualization
                        },
                        scrollable: { virtual: true },
                        selectable: 'multiple cell',
                        columns: scope.columns,
                        sortable: true,
                        resizable: true,
                        navigatable: true,
                        filterable: true
                        //editable: true
                    });
                });
            }
        }
    }
})

.directive('kendoChart', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: { data: '=', binding: '@' },
        template: '<div></div>',
        link: function (scope, element, attrs) {
            if (scope.data && scope.binding) {

                // prepare data for chart
                var bxy = scope.binding.split(','),
                    bindingX = bxy[0],
                    bindingY = bxy[1],
                    dataX = [],
                    dataY = [];
                for (var i = 0; i < scope.data.length; i++) {
                    var item = scope.data[i];
                    dataX.push(item[bindingX]);
                    dataY.push(item[bindingY]);
                }

                // create the chart
                $(element).kendoChart({
                    seriesDefaults: { type: "line" },
                    series: [{
                        data: dataY,
                        name: bindingY,
                        visibleInLegend: false,
                        markers: { visible: false }
                    }],
                    categoryAxis: {
                        //categories: dataX,
                        majorGridLines: { visible: false }
                    },
                    transitions: false
                });
            }
        }
    }
});

