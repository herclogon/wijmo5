(function() {
    'use strict';

    angular
        .module('app')
        .controller('fibonacciToolCtrl', function ($scope, DataSvc, tooltipFn) {
            $scope.title = 'Fibonacci Tool';
            $scope.data = [];
            $scope.dataList = DataSvc.getDataList();
            $scope.selectedSymbol = $scope.dataList[0].symbol;
            $scope.selectedFib = 'retracements';
            $scope.ctx = {
                chart: null,
                selector: null,
                properties: {
                    retracements : {
                        labelPosition: 'Left',
                        uptrend: true,
                        selectorVisible: false
                    },
                    arcs: {
                        labelPosition: 'Top',
                        start: new wijmo.chart.DataPoint(46, 19.75),
                        end: new wijmo.chart.DataPoint(54, 17.1)

                    },
                    fans: {
                        labelPosition: 'Top',
                        start: new wijmo.chart.DataPoint(10, 18.12),
                        end: new wijmo.chart.DataPoint(32, 20.53)
                    },
                    timeZones: {
                        labelPosition: 'Right',
                        start: 0,
                        end: 3
                    }
                }
            };

            // get data
            DataSvc.getData($scope.selectedSymbol)
                .success(function (data) {
                    $scope.data = data;
                })
                .error(function (error) {
                    console.log(error);
                });

            // update chart when range selector's range changes
            $scope.rangeChanged = function (sender, args) {
                $scope.ctx.chart.beginUpdate();
                $scope.ctx.chart.series[1].minX = $scope.ctx.selector.min;
                $scope.ctx.chart.series[1].maxX = $scope.ctx.selector.max;
                $scope.ctx.chart.endUpdate();
            };

            // invalidate when data points change
            $scope.valueChanged = function(sender, args) {
                $scope.ctx.chart.invalidate();
            };

            // Fibonacci Type menu's itemClicked handler
            $scope.fibTypeClicked = function (sender, args) {
                // ensure range selector is hidden
                if (sender.selectedIndex !== 2) {
                    $scope.ctx.properties.retracements.selectorVisible = false;
                }
            };
        });
})();