(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'wj'])
        .config(function ($routeProvider) {
            $routeProvider
                // chart types
                .when('/chart-types/heikin-ashi', {
                    templateUrl: 'views/chartTypes/heikinAshi.htm',
                    controller: 'heikinAshiCtrl',
                    resolve: {
                        tooltipFn: function (TooltipSvc) {
                            return TooltipSvc.financialTooltip;
                        }
                    }
                })
                .when('/chart-types/line-break', {
                    templateUrl: 'views/chartTypes/lineBreak.htm',
                    controller: 'lineBreakCtrl',
                    resolve: {
                        tooltipFn: function (TooltipSvc) {
                            return TooltipSvc.financialTooltip;
                        }
                    }
                })
                .when('/chart-types/kagi', {
                    templateUrl: 'views/chartTypes/kagi.htm',
                    controller: 'kagiCtrl',
                    resolve: {
                        tooltipFn: function (TooltipSvc) {
                            return TooltipSvc.financialTooltip;
                        }
                    }
                })
                .when('/chart-types/renko', {
                    templateUrl: 'views/chartTypes/renko.htm',
                    controller: 'renkoCtrl',
                    resolve: {
                        tooltipFn: function (TooltipSvc) {
                            return TooltipSvc.financialTooltip;
                        }
                    }
                })
                .when('/chart-types/column-volume', {
                    templateUrl: 'views/chartTypes/colVol.htm',
                    controller: 'volCtrl',
                    resolve: {
                        tooltipFn: function (TooltipSvc) {
                            return TooltipSvc.tooltip;
                        },
                        title: function () {
                            return 'ColumnVolume';
                        }
                    }
                })
                .when('/chart-types/equi-volume', {
                    templateUrl: 'views/chartTypes/equiVol.htm',
                    controller: 'volCtrl',
                    resolve: {
                        tooltipFn: function (TooltipSvc) {
                            return TooltipSvc.financialTooltip;
                        },
                        title: function () {
                            return 'EquiVolume';
                        }
                    }
                })
                .when('/chart-types/candle-volume', {
                    templateUrl: 'views/chartTypes/candleVol.htm',
                    controller: 'volCtrl',
                    resolve: {
                        tooltipFn: function (TooltipSvc) {
                            return TooltipSvc.financialTooltip;
                        },
                        title: function () {
                            return 'CandleVolume';
                        }
                    }
                })
                .when('/chart-types/arms-candle-volume', {
                    templateUrl: 'views/chartTypes/armsCandleVol.htm',
                    controller: 'volCtrl',
                    resolve: {
                        tooltipFn: function (TooltipSvc) {
                            return TooltipSvc.financialTooltip;
                        },
                        title: function () {
                            return 'Arms CandleVolume';
                        }
                    }
                })

                // interaction
                .when('/interaction/markers', {
                    templateUrl: 'views/interaction/markers.htm',
                    controller: 'markerCtrl',
                    resolve: {
                        tooltipFn: function (TooltipSvc) {
                            return TooltipSvc.tooltip;
                        }
                    }
                })
                .when('/interaction/range-selector', {
                    templateUrl: 'views/interaction/rangeSelector.htm',
                    controller: 'rangeSelectorCtrl',
                    resolve: {
                        tooltipFn: function (TooltipSvc) {
                            return TooltipSvc.financialTooltip;
                        }
                    }
                })

                // analytics
                .when('/analytics/trend-lines', {
                    templateUrl: 'views/analytics/trendLines.htm',
                    controller: 'trendLinesCtrl',
                    resolve: {
                        tooltipFn: function(TooltipSvc) {
                            return TooltipSvc.tooltip;
                        }
                    }
                })
                .when('/analytics/moving-averages', {
                    templateUrl: 'views/analytics/movingAverages.htm',
                    controller: 'movingAvgCtrl',
                    resolve: {
                        tooltipFn: function (TooltipSvc) {
                            return TooltipSvc.tooltip;
                        }
                    }
                })
                .when('/analytics/overlays', {
                    templateUrl: 'views/analytics/overlays.htm',
                    controller: 'overlayCtrl',
                    resolve: {
                        tooltipFn: function (TooltipSvc) {
                            return TooltipSvc.tooltip;
                        }
                    }
                })
                .when('/analytics/indicators', {
                    templateUrl: 'views/analytics/indicators.htm',
                    controller: 'indicatorCtrl',
                    resolve: {
                        tooltipFn: function (TooltipSvc) {
                            return TooltipSvc.tooltip;
                        }
                    }
                })
                .when('/analytics/event-annotations', {
                    templateUrl: 'views/analytics/eventAnnotations.htm',
                    controller: 'eventAnnoCtrl',
                    resolve: {
                        tooltipFn: function (TooltipSvc) {
                            return TooltipSvc.financialTooltip;
                        }
                    }
                })
                .when('/analytics/fibonacci-tool', {
                    templateUrl: 'views/analytics/fibonacciTool.htm',
                    controller: 'fibonacciToolCtrl',
                    resolve: {
                        tooltipFn: function (TooltipSvc) {
                            return TooltipSvc.financialTooltip;
                        }
                    }
                })

                // default
                .otherwise({ redirectTo: '/chart-types/heikin-ashi' });
        });
})();