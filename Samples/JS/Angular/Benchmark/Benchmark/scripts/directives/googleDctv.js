angular.module('app')
.directive('googleChart', function () {
    return {
        restrict: 'E',
        template: '<div></div>',
        scope: { data: '=', binding: '@' },
        link: function (scope, element, attrs) {
            if (scope.data && scope.binding) {

                // prepare data for Google
                var bxy = scope.binding.split(','),
                    x = bxy[0],
                    y = bxy[1],
                    data = [];
                for (var i = 0; i < scope.data.length; i++) {
                    var item = scope.data[i];
                    data.push([item[x], item[y]]);
                }

                // create the chart
                var gv = google.visualization,
                    dataTable = gv.arrayToDataTable(data, true),
                    chart = new gv.LineChart(element[0]);

                // must provide dimensions!!!
                var width = parseInt(element[0].style.width);
                var height = parseInt(element[0].style.height);
                if (!width) width = 600;
                if (!height) height = 450;

                // draw the chart
                chart.draw(dataTable, {
                    legend: 'none',
                    width: width,
                    height: height
                });
            }
        }
    }
});
