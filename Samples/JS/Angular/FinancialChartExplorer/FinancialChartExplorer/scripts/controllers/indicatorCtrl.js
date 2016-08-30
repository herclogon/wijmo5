(function () {
    'use strict';

    angular
        .module('app')
        .controller('indicatorCtrl', function ($scope, DataSvc, tooltipFn) {
            $scope.title = 'Indicators';
            $scope.data = [];
            $scope.dataList = DataSvc.getDataList();
            $scope.selectedSymbol = $scope.dataList[0].symbol;
            $scope.indicators = DataSvc.getIndicatorList();
            $scope.selectedIndicator = $scope.indicators[0].abbreviation;
            $scope.ctx = {
                chart: null,
                indicatorChart: null,
                properties: {
                    // ATR, CCI, RSI, Williams %R
                    atrPeriod: 14,
                    cciPeriod: 20,
                    rsiPeriod: 14,
                    williamsRPeriod: 14,

                    // MACD
                    fastPeriod: 12,
                    slowPeriod: 26,
                    smoothingPeriod: 9,
                    macdStyles: {   // named styles
                        macdLine: {
                            stroke: '#bfa554'
                        },
                        signalLine: {
                            stroke: '#bf8c54'
                        }
                    },

                    // Fast Stochastic
                    stochKPeriod: 14,
                    stochDPeriod: 3,
                    stochSmoothingPeriod: 1,
                    stochStyles: {   // named styles
                        kLine: {
                            stroke: '#eddd46'
                        },
                        dLine: {
                            stroke: '#edb747'
                        }
                    }
                },
                atrPeriod: 14,
                cciPeriod: 20,
                rsiPeriod: 14,
                williamsRPeriod: 14,
                fastPeriod: 12,
                slowPeriod: 26,
                smoothingPeriod: 9,
                stochKPeriod: 14,
                stochDPeriod: 3,
                stochSmoothingPeriod: 1
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

            // FinancialChart.rendered event handler
            $scope.chartRendered = function (sender, args) {
                if ($scope.ctx.chart) {
                    $scope.ctx.chart.tooltip.content = tooltipFn;
                }
                if ($scope.ctx.indicatorChart) {
                    $scope.ctx.indicatorChart.tooltip.content = tooltipFn;
                }

                // set min/max for indicator chart to match main chart
                if ($scope.ctx.chart && $scope.ctx.indicatorChart) {
                    $scope.ctx.indicatorChart.axisX.min = $scope.ctx.chart.axisX.actualMin;
                    $scope.ctx.indicatorChart.axisX.max = $scope.ctx.chart.axisX.actualMax;
                }
            };
            $scope.atrPeriodChanged = function (s, e) {
                if (s == null || s.value < s.min || s.value > s.max) {
                    return;
                }
                $scope.ctx.properties.atrPeriod = s.value;
            }
            $scope.cciPeriodChanged = function (s, e) {
                if (s == null || s.value < s.min || s.value > s.max) {
                    return;
                }
                $scope.ctx.properties.cciPeriod = s.value;
            }
            $scope.rsiPeriodChanged = function (s, e) {
                if (s == null || s.value < s.min || s.value > s.max) {
                    return;
                }
                $scope.ctx.properties.rsiPeriod = s.value;
            }
            $scope.williamsRPeriodChanged = function (s, e) {
                if (s == null || s.value < s.min || s.value > s.max) {
                    return;
                }
                $scope.ctx.properties.williamsRPeriod = s.value;
            }
            
            $scope.fastPeriodChanged = function (s, e) {
                if (s == null || s.value < s.min || s.value > s.max) {
                    return;
                }
                $scope.ctx.properties.fastPeriod = s.value;
            }

            $scope.slowPeriodChanged = function (s, e) {
                if (s == null || s.value < s.min || s.value > s.max) {
                    return;
                }
                $scope.ctx.properties.slowPeriod = s.value;
            }

            $scope.smoothingPeriodChanged = function (s, e) {
                if (s == null || s.value < s.min || s.value > s.max) {
                    return;
                }
                $scope.ctx.properties.smoothingPeriod = s.value;
            }

            $scope.stochKPeriodChanged = function (s, e) {
                if (s == null || s.value < s.min || s.value > s.max) {
                    return;
                }
                $scope.ctx.properties.stochKPeriod = s.value;
            }

            $scope.stochDPeriodChanged = function (s, e) {
                if (s == null || s.value < s.min || s.value > s.max) {
                    return;
                }
                $scope.ctx.properties.stochDPeriod = s.value;
            }

            $scope.stochSmoothingPeriodChanged = function (s, e) {
                if (s == null || s.value < s.min || s.value > s.max) {
                    return;
                }
                $scope.ctx.properties.stochSmoothingPeriod = s.value;
            }

            // MACD max value validation
            $scope.$watchGroup(['ctx.properties.fastPeriod', 'ctx.properties.slowPeriod'], function (newValue, oldValue) {
                if ($scope.data.length <= 0) return;
                var len = $scope.data.length,
                    smoothing = $scope.ctx.properties.smoothingPeriod;

                $scope.$applyAsync(function () {
                    $scope.ctx.properties.fastPeriod = wijmo.clamp($scope.ctx.properties.fastPeriod, 2, Math.abs(len - smoothing));
                    $scope.ctx.properties.slowPeriod = wijmo.clamp($scope.ctx.properties.slowPeriod, 2, Math.abs(len - smoothing));
                });
            });
            $scope.$watch('ctx.properties.smoothingPeriod', function (newValue, oldValue) {
                if ($scope.data.length <= 0) return;
                var len = $scope.data.length,
                    max = Math.max($scope.ctx.properties.fastPeriod, $scope.ctx.properties.slowPeriod);

                $scope.$applyAsync(function() {
                    $scope.ctx.properties.smoothingPeriod = wijmo.clamp(newValue, 2, Math.abs(len - max));
                });
            });

            // stochastic max value validation
            $scope.$watch('ctx.properties.stochKPeriod', function (newValue, oldValue) {
                if ($scope.data.length <= 0) return;
                var len = $scope.data.length,
                    kMax = Math.abs(len - $scope.ctx.properties.stochDPeriod);

                if ($scope.ctx.properties.stochSmoothingPeriod > 1) {
                    kMax -= $scope.ctx.properties.stochSmoothingPeriod;
                }

                $scope.$applyAsync(function() {
                    $scope.ctx.properties.stochKPeriod = wijmo.clamp(newValue, 2, kMax);
                });
            });
            $scope.$watch('ctx.properties.stochDPeriod', function (newValue, oldValue) {
                if ($scope.data.length <= 0) return;
                var len = $scope.data.length,
                    dMax = Math.abs(len - $scope.ctx.properties.stochKPeriod);

                if ($scope.ctx.properties.stochSmoothingPeriod > 1) {
                    dMax -= $scope.ctx.properties.stochSmoothingPeriod;
                }

                $scope.$applyAsync(function () {
                    $scope.ctx.properties.stochDPeriod = wijmo.clamp(newValue, 2, dMax);
                });
            });
            $scope.$watch('ctx.properties.stochSmoothingPeriod', function (newValue, oldValue) {
                if ($scope.data.length <= 0 || newValue <= 1) return;
                var len = $scope.data.length,
                    sMax = Math.abs(len - $scope.ctx.properties.stochKPeriod - $scope.ctx.properties.stochDPeriod);

                sMax = sMax || 1;
                $scope.$applyAsync(function () {
                    $scope.ctx.properties.stochSmoothingPeriod = wijmo.clamp(newValue, 1, sMax);
                });
            });
        });
})();