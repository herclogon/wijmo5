(function () {
    'use strict';

    angular
        .module('app')
        .controller('overlayCtrl', function ($scope, DataSvc, tooltipFn) {
            $scope.title = 'Overlays';
            $scope.data = [];
            $scope.dataList = DataSvc.getDataList();
            $scope.selectedSymbol = $scope.dataList[0].symbol;
            $scope.overlays = DataSvc.getOverlayList();
            $scope.selectedOverlay = $scope.overlays[0].abbreviation;
            $scope.ctx = {
                chart: null,
                overlayComboBox: null,
                properties: {
                    // Bollinger Bands
                    bollingerPeriod: 20,
                    bollingerMultiplier: 2,

                    // Moving Average Envelopes
                    envelopePeriod: 20,
                    envelopeType: 'Simple',
                    envelopeSize: 0.03
                },
                bollingerPeriod: 20,
                bollingerMultiplier: 2,
                envelopePeriod: 20,
                envelopeSize: 0.03
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
            };

            $scope.bollingerPeriodChanged = function (s, e) {
                if (s == null || s.value < s.min || s.value > s.max) {
                    return;
                }
                $scope.ctx.properties.bollingerPeriod = s.value;
            }
            $scope.bollingerMultiplierChanged = function (s, e) {
                if (s == null || s.value < s.min || s.value > s.max) {
                    return;
                }
                $scope.ctx.properties.bollingerMultiplier = s.value;
            }
            $scope.envelopePeriodChanged = function (s, e) {
                if (s == null || s.value < s.min || s.value > s.max) {
                    return;
                }
                $scope.ctx.properties.envelopePeriod = s.value;
            }
            $scope.envelopeSizeChanged = function (s, e) {
                if (s == null || s.value < s.min || s.value > s.max) {
                    return;
                }
                $scope.ctx.properties.envelopeSize = s.value;
            }
        });
})();