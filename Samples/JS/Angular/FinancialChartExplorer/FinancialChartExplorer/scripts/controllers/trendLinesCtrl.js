(function() {
    'use strict';

    angular
        .module('app')
        .controller('trendLinesCtrl', function ($scope, DataSvc, tooltipFn) {
            $scope.title = 'Trend Lines';
            $scope.data = [];
            $scope.dataList = DataSvc.getDataList();
            $scope.selectedSymbol = $scope.dataList[0].symbol;
            $scope.ctx = {
                chart: null,
                properties: {
                    fitType: 'Linear',
                    order: 2,
                    sampleCount: 150
                }
            };
            $scope.sampleCount = 150;
            $scope.order = 2;
            $scope.inputSampleCount = null;
            $scope.inputOrder = null;

            // get data
            DataSvc.getData($scope.selectedSymbol)
                .success(function (data) {
                    $scope.data = data;
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

            $scope.$watch('sampleCount', function () {
                var input = $scope.inputSampleCount;

                if (input == null || input.value < input.min || input.value > input.max) {
                    return;
                }
                $scope.ctx.properties.sampleCount = input.value;
            });

            $scope.$watch('order', function () {
                var input = $scope.inputOrder;

                if (input == null || input.value < input.min || input.value > input.max) {
                    return;
                }
                $scope.ctx.properties.order = input.value;
            });
        });
})();