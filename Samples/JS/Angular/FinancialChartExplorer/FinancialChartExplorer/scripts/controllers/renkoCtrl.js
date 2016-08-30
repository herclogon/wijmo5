(function () {
    'use strict';
    angular
        .module('app')
        .controller('renkoCtrl', function ($scope, DataSvc, tooltipFn) {
            $scope.title = 'Renko';
            $scope.data = [];
            $scope.dataList = DataSvc.getDataList();
            $scope.selectedSymbol = $scope.dataList[0].symbol;
            $scope.ctx = {
                chart: null,
                boxSizeInput: null,
                options: {
                    renko: {
                        boxSize: 2,
                        rangeMode: 'Fixed',
                        fields: 'Close'
                    }
                },
                style: {
                    stroke: 'rgb(136, 189, 230)',
                    fill: 'rgba(136, 189, 230, 0.701961)'
                },
                altStyle: {
                    stroke: 'rgb(136, 189, 230)',
                    fill: 'transparent'
                }
            };

            $scope.selectedSymbolChanged = function (sender, args) {
                DataSvc.getData($scope.selectedSymbol)
                   .success(function (data) {
                       $scope.data = data;
                   })
                   .error(function (error) {
                       console.log(error);
                   });
            };

            $scope.rangeModeChanged = function (sender, args) {
                if (sender.selectedValue === 'ATR') {
                    $scope.ctx.boxSizeInput.format = 'n0';
                    $scope.ctx.boxSizeInput.min = 2;
                    $scope.ctx.boxSizeInput.max = $scope.data.length - 2;
                    $scope.ctx.boxSizeInput.value = wijmo.clamp($scope.ctx.boxSizeInput.value, 14, $scope.data.length - 2);
                    $scope.ctx.boxSizeInput.step = 1;
                } else {
                    $scope.ctx.boxSizeInput.format = 'n0';
                    $scope.ctx.boxSizeInput.min = 1;
                    $scope.ctx.boxSizeInput.max = null;
                    $scope.ctx.boxSizeInput.step = 1;
                }

                $scope.optionChanged(sender, args);
            };

            $scope.optionChanged = function (sender, args) {
                $scope.ctx.chart.invalidate();
            };

            $scope.boxSizeChanged = function (sender, args) {
                if (sender.value < sender.min || sender.value > sender.max) {
                    return;
                }
                $scope.ctx.chart.invalidate();
            };

            $scope.chartRendered = function (sender, args) {
                if ($scope.ctx.chart) {
                    $scope.ctx.chart.tooltip.content = tooltipFn;
                }
            };

        });
})();