angular.module('app')
.directive('igGrid', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            options: '=',
            data: '='
        },
        template: '<table id="igGrid"></table>',
        link: function (scope, element, attrs) {
            if (scope.options) {
                scope.options.dataSource = scope.data;
                $(element).igGrid(scope.options);
                scope.$watch('data', function (newValue, oldValue) {
                    $(element).igGrid("option", "dataSource", newValue);
                });
            }
        }
    }
})

.directive('igChart', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: { data: '=', binding: '@' },
        template: '<div></div>',
        link: function (scope, element, attrs) {
            if (scope.data && scope.binding) {
                var bindingY = scope.binding.split(',')[1];
                $(element).igDataChart({
                    width: '100%',
                    height: '450px',
                    dataSource: scope.data,
                    axes: [
                        { name: 'XAxis', type: 'categoryX' },
                        { name: 'YAxis', type: 'numericY' }
                    ],
                    series: [
                        {
                            name: bindingY,
                            valueMemberPath: bindingY,
                            xAxis: 'XAxis',
                            yAxis: 'YAxis',
                            type: 'line',
                            isTransitionInEnabled: false
                        }
                    ]
                });
            }
        }
    }
});

