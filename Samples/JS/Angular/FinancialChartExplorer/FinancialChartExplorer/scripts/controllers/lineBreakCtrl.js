(function () {
    'use strict';
    angular
        .module('app')
        .controller('lineBreakCtrl', function ($scope, DataSvc, tooltipFn) {
            $scope.title = 'Line Break';
            $scope.data = [];
            $scope.dataList = DataSvc.getDataList();
            $scope.selectedSymbol = $scope.dataList[0].symbol;
            $scope.ctx = {
                chart: null,
                options: {
                    lineBreak: {
                        newLineBreaks: 3
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

            $scope.optionChanged = function (sender, args) {
                $scope.ctx.chart.invalidate();
            };

            $scope.chartRendered = function (sender, args) {
                if ($scope.ctx.chart) {
                    $scope.ctx.chart.tooltip.content = tooltipFn;
                }
            };
        });
})();