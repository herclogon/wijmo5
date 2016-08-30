'use strict';

// get reference to app module
var app = angular.module('app');

// add controller to app module
app.controller('appCtrl', function appCtrl($scope, $http) {

    // add data array to scope
    $http.get('data/fb.json')
          .success(function (data) {
              $scope.data = data;
          }).error(function (error) {
              console.log(error);
          });

    // add chart properties to scope
    $scope.chartProps = {
        chartType: wijmo.chart.finance.FinancialChartType.Line,
        animationChartType: wijmo.chart.finance.FinancialChartType.Line,
        legendPosition: wijmo.chart.Position.Right,
        bindingY: 'close',
        bindingY1: 'close',
        header: 'Facebook, Inc. (FB)',
        footer: 'Click on chart to refresh',
        movingAveragePeriod: 2,
        movingAverageType: 0,
        movingAverageName: wijmo.chart.analytics.MovingAverageType.Simple,
        rangeSelector: null,
        easing: 'Swing',
        duration: 400
    };

    $scope.tlChart = null;
    $scope.tpChart = null;
    $scope.anChart = null;
    $scope.lmChart = null;
    $scope.rsChart = null;
    $scope.stChart = null;
    $scope.animationChart = null;
    $scope.inputPeriod = null;
    $scope.movingAveragePeriod = 2;
    $scope.iptDuration = 400;
    $scope.inputDuration = null;

    // chart types
    var bindingYs = {
        0: 'close',
        2: 'close',
        4: 'close',
        5: 'high,low,open,close',
        6: 'high,low,open,close',
        7: 'high,low,open,close',
        8: 'high,low,open,close',
        9: 'high,low,open,close',
        10: 'high,low,open,close',
        11: 'close,volume',
        12: 'high,low,open,close,volume',
        13: 'high,low,open,close,volume',
        14: 'high,low,open,close,volume'
    };

    $scope.$watch('iptDuration', function () {
        var input = $scope.inputDuration,
            val = $scope.iptDuration;

        if (!input) {
            return;
        }
        if (val < input.min || val > input.max) {
            return;
        }
        $scope.chartProps.duration = val;
    });

    $scope.$watch('movingAveragePeriod', function () {
        var input = $scope.inputPeriod,
            val = $scope.movingAveragePeriod;

        if (!input) {
            return;
        }
        if (val < input.min || val > input.max) {
            return;
        }
        $scope.chartProps.movingAveragePeriod = val;
    });

    $scope.$watch('tpChart', function () {
        var tpChart = $scope.tpChart;
        if (!tpChart) {
            return;
        }

        tpChart.tooltip.content = function (ht) {
            var dateStr = 'Date: ' + ht.x + '<br/>',
                hlocStr = 'Open: ' + wijmo.Globalize.format(ht.item.open, 'n2') + '<br/>' +
                          'High: ' + wijmo.Globalize.format(ht.item.high, 'n2') + '<br/>' +
                          'Low: ' + wijmo.Globalize.format(ht.item.low, 'n2') + '<br/>' +
                          'Close: ' + wijmo.Globalize.format(ht.item.close, 'n2') + '<br/>',
                closeStr = 'Close: ' + wijmo.Globalize.format(ht.item.close, 'n2'),
                volStr = 'Volume: ' + wijmo.Globalize.format(ht.item.volume, 'n0'),
                toolTipStr;
            switch ($scope.chartProps.chartType) {
                case wijmo.chart.finance.FinancialChartType.Line:
                case wijmo.chart.finance.FinancialChartType.Column:
                    toolTipStr = dateStr + closeStr;
                    break;
                case wijmo.chart.finance.FinancialChartType.ColumnVolume:
                    toolTipStr = dateStr + closeStr + '<br/>' + volStr;
                    break;
                case wijmo.chart.finance.FinancialChartType.EquiVolume:
                case wijmo.chart.finance.FinancialChartType.CandleVolume:
                case wijmo.chart.finance.FinancialChartType.ArmsCandleVolume:
                    toolTipStr = dateStr + hlocStr + volStr;
                    break;
                default:
                    toolTipStr = dateStr + hlocStr;
                    break;
            }
            return toolTipStr;
        };
    });

    $scope.$watch('animationChart', function () {
        var animationChart = $scope.animationChart;
        if (!animationChart) {
            return;
        }

        animationChart.tooltip.content = function (ht) {
            var dateStr = 'Date: ' + ht.x + '<br/>',
                hlocStr = 'Open: ' + wijmo.Globalize.format(ht.item.open, 'n2') + '<br/>' +
                          'High: ' + wijmo.Globalize.format(ht.item.high, 'n2') + '<br/>' +
                          'Low: ' + wijmo.Globalize.format(ht.item.low, 'n2') + '<br/>' +
                          'Close: ' + wijmo.Globalize.format(ht.item.close, 'n2') + '<br/>',
                closeStr = 'Close: ' + wijmo.Globalize.format(ht.item.close, 'n2'),
                volStr = 'Volume: ' + wijmo.Globalize.format(ht.item.volume, 'n0'),
                toolTipStr;
            switch ($scope.chartProps.animationChartType) {
                case wijmo.chart.finance.FinancialChartType.Line:
                case wijmo.chart.finance.FinancialChartType.Column:
                    toolTipStr = dateStr + closeStr;
                    break;
                default:
                    toolTipStr = dateStr + hlocStr;
                    break;
            }
            return toolTipStr;
        };

        animationChart.hostElement.addEventListener('click', function () {
            animationChart.refresh(true);
        });
    });

    $scope.$watch('chartProps.easing', function () {
        var animationChart = $scope.animationChart,
            easing = $scope.chartProps.easing;

        if (!easing || easing === '') {
            return;
        }
        if (animationChart) {
            animationChart.refresh(true);
        }
    });

    $scope.$watch('chartProps.duration', function () {
        var animationChart = $scope.animationChart;

        if (animationChart) {
            animationChart.refresh(true);
        }
    });

    $scope.$watch('chartProps.animationChartType', function () {
        var chartProps = $scope.chartProps, animationChart = $scope.animationChart;
        if (!animationChart) {
            return;
        }
        chartProps.bindingY1 = bindingYs[chartProps.animationChartType];
    });

    $scope.$watch('chartProps.chartType', function () {
        var chartProps = $scope.chartProps, tpChart = $scope.tpChart;
        if (!tpChart) {
            return;
        }
        chartProps.bindingY = bindingYs[chartProps.chartType];

        switch (chartProps.chartType) {
            case wijmo.chart.finance.FinancialChartType.LineBreak:
                tpChart.options = {
                    lineBreak: {
                        newLineBreaks: 3
                    }
                };
                break;
            case wijmo.chart.finance.FinancialChartType.Renko:
                tpChart.options = {
                    renko: {
                        boxSize: 2,
                        rangeMode: 'Fixed',
                        fields: 'Close'
                    }
                };
                break;
            case wijmo.chart.finance.FinancialChartType.Kagi:
                tpChart.options = {
                    kagi: {
                        reversalAmount: 1,
                        rangeMode: 'Fixed',
                        fields: 'Close'
                    }
                };
                break;
            default:
                break;
        }
    });

    // linemarker
    var pt = new wijmo.Point(), markcontents, pOffset;
    //var enterEvent = 'ontouchstart' in window ? 'ontouchstart' : 'onmouseenter';
    $scope.$watch('lmChart', function () {
        var lmChart = $scope.lmChart;
        if (!lmChart) {
            return;
        }
        lmChart.tooltip.content = '';
        lmChart.axisY.position = 3;
        lmChart.rendered.addHandler(function () {
            var chartHostEle = lmChart.hostElement,
            pa = chartHostEle.querySelector('.wj-plot-area');
            pOffset = wijmo.getElementRect(pa);
        });

        var lineMarkers = lmChart.hostElement.querySelectorAll('.wj-chart-linemarker-container');
        markershowing(lineMarkers, 'hidden');
        lmChart.hostElement.onmouseenter = function (e) {
            markershowing(lineMarkers, 'visible');
        }
        if ('ontouchstart' in window) {
            lmChart.hostElement.ontouchstart = function (e) {
                markershowing(lineMarkers, 'visible');
            }
        }
        lmChart.hostElement.onmouseleave = function (e) {
            markershowing(lineMarkers, 'hidden');
        }
    });

    $scope.midPosChanged = function (s, e) {
        pt = e;
    };

    $scope.changeContent = function () {
        markcontents = getMarkerContents(new wijmo.Point(pt.x, pt.y));
        return markcontents ? markcontents.content : '';
    };

    $scope.changeYContent = function () {
        return markcontents && markcontents.y ? markcontents.y.toString() : '';
    }

    $scope.changeXContent = function () {
        return markcontents && markcontents.x ? markcontents.x.toString() : '';
    }

    function markershowing(lineMarkers, visible) {
        for (var i = 0; i < lineMarkers.length; i++) {
            lineMarkers[i].style.visibility = visible;
        }
    }

    //get line marker content
    function getMarkerContents(pt) {
        var chart = $scope.lmChart,
            newHitPoint = new wijmo.Point(pt.x, NaN),
            ht, xContent, yContent, axisYMax, axisYMin,
            content = '';

        if (!chart || chart.series.length < 1) {
            return;
        }
        axisYMax = chart.axisY.actualMax;
        axisYMin = chart.axisY.actualMin;
        //calculate the y value
        if (pOffset === undefined) {
            yContent = 0;
        } else {
            yContent = axisYMax - ((pt.y - pOffset.top) / pOffset.height) * (axisYMax - axisYMin);
            yContent = yContent.toFixed(2);
        }
        ht = chart.series[0].hitTest(newHitPoint);

        if (ht.x && ht.y !== null) {
            xContent = ht.x;
        }
        return { content: '', x: xContent, y: yContent };
    }

    // range selector
    $scope.$watch('stChart', function () {
        var stChart = $scope.stChart;
        if (!stChart) {
            return;
        }
        stChart.axisX.labels = false;
        stChart.axisX.axisLine = false;
        stChart.legend.position = 0;
        stChart.plotMargin = '60 30 0 50';

        stChart.tooltip.content = function (ht) {
             return 'Date: ' + ht.x + '<br/>' +
                   'Open: ' + wijmo.Globalize.format(ht.item.open, 'n2') + '<br/>' +
                   'High: ' + wijmo.Globalize.format(ht.item.high, 'n2') + '<br/>' +
                   'Low: ' + wijmo.Globalize.format(ht.item.low, 'n2') + '<br/>' +
                   'Close: ' + wijmo.Globalize.format(ht.item.close, 'n2');
        };
    });

    $scope.$watch('rsChart', function () {
        var rsChart = $scope.rsChart;
        if (!rsChart) {
            return;
        }
        rsChart.axisY.labels = false;
        rsChart.axisY.majorGrid = false;
        rsChart.tooltip.content = '';
        rsChart.plotMargin = '0 30 NaN 50';
    });

    $scope.rangeChanged = function (sender, e) {
        var stChart = $scope.stChart, rs = $scope.chartProps.rangeSelector;
        if (stChart && rs) {
            stChart.axisX.min = rs.min;
            stChart.axisX.max = rs.max;
            stChart.invalidate();
        }
    };

    //trend line
    $scope.$watch('chartProps.movingAverageType', function () {
        $scope.chartProps.movingAverageName = wijmo.chart.analytics.MovingAverageType[$scope.chartProps.movingAverageType] + ' Moving Average';
    });

    // annotations
    $scope.annotations = [
        {
            type: 'Rectangle',
            width: 40,
            height: 30,
            pointIndex: 16,
            tooltip: 'FACEBOOK INC Files SEC form 8-K, Results of Operations and Financial Condition',
            position: 'Center',
            attachment: 'DataIndex',
            content: 'E'
        },
        {
            type: 'Ellipse',
            width: 40,
            height: 30,
            pointIndex: 17, //01/29/15
            position: 'Center',
            attachment: 'DataIndex',
            content: 'E',
            tooltip: 'FACEBOOK INC Files SEC form 10-K, Annual Report'
        },
        {
            type: 'Circle',
            radius: 20,
            pointIndex: 49, //03/17/15
            tooltip: 'Coverage initiated on Facebook by Brean Capital',
            position: 'Center',
            attachment: 'DataIndex',
            content: 'E'
        },
        {
            type: 'Square',
            length: 30,
            pointIndex: 75, //04/22/15
            tooltip: 'FACEBOOK INC Files SEC form 8-K, Results of Operations and Financial Condition',
            position: 'Center',
            attachment: 'DataIndex',
            content: 'E'
        }
    ];
});
