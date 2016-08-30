angular.module('app')
.directive('flotChart', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: { data: '=', binding: '@' },
        template: '<div></div>',
        link: function (scope, element, attrs) {
            if (scope.data && scope.binding) {

                // prepare data for flot
                var bxy = scope.binding.split(','),
                    x = bxy[0],
                    y = bxy[1],
                    data = [];
                for (var i = 0; i < scope.data.length; i++) {
                    var item = scope.data[i];
                    data.push([item[x], item[y]]);
                }

                // create the chart
                $.plot(element, [ data ]);
            }
        }
    }
});
