(function () {
    'use strict';
    angular
        .module('app')
        .controller('kagiCtrl', function ($scope, DataSvc, tooltipFn) {
            $scope.title = 'Kagi';
            $scope.data = [];
            $scope.dataList = DataSvc.getDataList();
            $scope.selectedSymbol = $scope.dataList[0].symbol;
            $scope.ctx = {
                chart: null,
                reversalInput: null,
                options: {
                    kagi: {
                        reversalAmount: 1,
                        rangeMode: 'Fixed',
                        fields: 'Close'
                    }
                },
                style: {
                    stroke: 'rgb(136, 189, 230)'
                },
                altStyle: {
                    stroke: 'rgb(136, 189, 230)'
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
                var reversalInput = $scope.ctx.reversalInput;
                if (sender.selectedValue === 'Percentage') {
                    reversalInput.format = 'p0';
                    reversalInput.min = 0;
                    reversalInput.max = 1;
                    reversalInput.value = wijmo.clamp(reversalInput.value, 0, .05);
                    reversalInput.step = 0.05;
                } else if (sender.selectedValue === 'ATR') {
                    reversalInput.format = 'n0';
                    reversalInput.min = 2;
                    reversalInput.max = $scope.data.length - 2;
                    reversalInput.value = wijmo.clamp(reversalInput.value, 14, $scope.data.length - 2);
                    reversalInput.step = 1;
                } else {
                    reversalInput.format = 'n0';
                    reversalInput.min = 1;
                    reversalInput.max = null;
                    reversalInput.value = 1;
                    reversalInput.step = 1;
                }

                $scope.optionChanged(sender, args);
            };

            $scope.optionChanged = function (sender, args) {
                $scope.ctx.chart.invalidate();
            };

            $scope.reversalAmountChanged = function (sender, args) {
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