(function () {
    'use strict';

    angular
        .module('app')
        .controller('movingAvgCtrl', function ($scope, DataSvc, tooltipFn) {
            $scope.title = 'Moving Averages';
            $scope.data = [];
            $scope.selectedSymbol = 'fb';
            $scope.ctx = {
                chart: null,
                shortProps: {
                    period: 50,
                    type: 'Simple',
                    name: ' Day MA'
                },
                longProps: {
                    period: 200,
                    type: 'Simple',
                    name: ' Day MA'
                }
            };
            $scope.shortPeriod = 50;
            $scope.longPeriod = 200;
            $scope.inputShortPeriod = null;
            $scope.inputLongPeriod = null;

            DataSvc.getData($scope.selectedSymbol)
                .success(function (data) {
                    $scope.data = data;
                })
                .error(function (error) {
                    console.log(error);
                });

            $scope.chartRendered = function (sender, args) {
                if ($scope.ctx.chart) {
                    $scope.ctx.chart.tooltip.content = tooltipFn;
                }
            };

            $scope.$watch('shortPeriod', function () {
                var input = $scope.inputShortPeriod;

                if (input == null || input.value < input.min || input.value > input.max) {
                    return;
                }
                $scope.ctx.shortProps.period = input.value;
            });

            $scope.$watch('longPeriod', function () {
                var input = $scope.inputLongPeriod;

                if (input == null || input.value < input.min || input.value > input.max) {
                    return;
                }
                $scope.ctx.longProps.period = input.value;
            });
        });
})();