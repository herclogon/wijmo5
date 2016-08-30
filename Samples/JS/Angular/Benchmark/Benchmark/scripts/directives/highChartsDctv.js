angular.module('app')
.directive('highChart', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: { data: '=', binding: '@' },
        template: '<div></div>',
        link: function (scope, element, attrs) {

            // prepare data for highcharts
            var bxy = scope.binding.split(','),
                x = bxy[0],
                y = bxy[1],
                data = [];
            for (var i = 0; i < scope.data.length; i++) {
                var item = scope.data[i];
                data.push([item[x], item[y]]);
            }

            // create the chart
            $(element).highcharts({
                title: { text: '' },
                subtitle: { text: '' },
                legend: { enabled: false },
                plotOptions: { series: { animation: false } },
                yAxis: { title: { text: '' } },
                series: [{
                    name: 'Amounts',
                    data: data
                }]
            });
        }
    }
});
