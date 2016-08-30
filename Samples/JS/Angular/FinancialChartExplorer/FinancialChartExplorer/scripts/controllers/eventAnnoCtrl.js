(function () {
    'use strict';

    angular
        .module('app')
        .controller('eventAnnoCtrl', function ($scope, $sce, DataSvc, tooltipFn) {
            $scope.title = 'Event Annotations';
            $scope.data = [];
            $scope.annotations = [];
            $scope.selectedSymbol = 'box';
            $scope.ctx = {
                chart: null,
                selectorChart: null,
                selector: null
            };

            // get data
            DataSvc.getData($scope.selectedSymbol)
                .success(function (data) {
                    $scope.data = data;
                })
                .error(function (error) {
                    console.log(error);
                });

            // get annotation data
            DataSvc.getData('box-annotations')
                .success(function (data) {
                    // loop through data and create tooltips
                    for (var i = 0; i < data.length; i++) {
                        data[i].tooltip = '<b>' + data[i].title + '</b>';
                        if (data[i].description) {
                            data[i].tooltip += '<br>' + data[i].description;
                        }

                        // $sce.trustAsHtml to avoid error in binding expression
                        // see https://docs.angularjs.org/api/ng/service/$sce for more
                        // information
                        data[i].tooltip = $sce.trustAsHtml(data[i].tooltip);
                    }

                    $scope.annotations = data;
                })
                .error(function (error) {
                    console.log(error);
                });

            // FinancialChart.rendered event handler
            $scope.chartRendered = function (sender, args) {
                if ($scope.ctx.chart) {
                    $scope.ctx.chart.tooltip.content = tooltipFn;
                }
            };

            // update chart when range selector's range changes
            $scope.rangeChanged = function (sender, args) {
                // find visible y-range
                var yRange = DataSvc.findYRange($scope.data,
                                                $scope.ctx.selector.min,
                                                $scope.ctx.selector.max);

                // update main chart's x & y range
                $scope.ctx.chart.axisX.min = $scope.ctx.selector.min;
                $scope.ctx.chart.axisX.max = $scope.ctx.selector.max;
                $scope.ctx.chart.axisY.min = yRange.min;
                $scope.ctx.chart.axisY.max = yRange.max;

                $scope.ctx.chart.invalidate();
            };

            // rendered event for selector chart
            $scope.selectorChartRendered = function (sender, args) {
                // set range
                if ($scope.ctx.selector) {
                    var range = DataSvc.findRange($scope.ctx.selectorChart.axisX.actualMin,
                                                  $scope.ctx.selectorChart.axisX.actualMax,
                                                  0.45);
                    $scope.ctx.selector.min = range.min;
                    $scope.ctx.selector.max = range.max;
                }
            };

        });
})();