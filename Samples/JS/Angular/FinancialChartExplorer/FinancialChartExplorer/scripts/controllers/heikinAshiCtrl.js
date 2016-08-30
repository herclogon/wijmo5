(function () {
    'use strict';
    angular
        .module('app')
        .controller('heikinAshiCtrl', function ($scope, DataSvc, tooltipFn) {
            $scope.title = 'Heikin-Ashi';
            $scope.data = [];
            $scope.dataList = DataSvc.getDataList();
            $scope.selectedSymbol = $scope.dataList[0].symbol;
            $scope.ctx = {
                chart: null,
                selector: null,
                selectorChart: null
            };

            // fetch new data set for the charts
            $scope.selectedSymbolChanged = function (sender, args) {
                DataSvc.getData($scope.selectedSymbol)
                   .success(function (data) {
                       $scope.data = data;
                   })
                   .error(function (error) {
                       console.log(error);
                   });
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
                                                  $scope.ctx.selectorChart.axisX.actualMax);
                    $scope.ctx.selector.min = range.min;
                    $scope.ctx.selector.max = range.max;
                }
            };

            // rendered event for main chart
            $scope.chartRendered = function (sender, args) {
                // customize tooltips
                $scope.ctx.chart.tooltip.content = tooltipFn;
            };
        });
})();