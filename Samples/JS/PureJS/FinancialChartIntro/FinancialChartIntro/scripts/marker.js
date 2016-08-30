(function (wijmo, app) {
    'use strict';
    var pt = new wijmo.Point(), markcontents, pOffset;

    // create controls
    var chart = new wijmo.chart.finance.FinancialChart('#mkChart'),
        midMarker = new wijmo.chart.LineMarker(chart, {
            lines: wijmo.chart.LineMarkerLines.Both,
            interaction: wijmo.chart.LineMarkerInteraction.Move,
            alignment: wijmo.chart.LineMarkerAlignment.Top | wijmo.chart.LineMarkerAlignment.Left,
            content: function () {
                markcontents = getMarkerContents(new wijmo.Point(pt.x, pt.y));
                return markcontents ? markcontents.content : '';
            }
        }),
        hMarker = new wijmo.chart.LineMarker(chart, {
            lines: wijmo.chart.LineMarkerLines.None,
            interaction: wijmo.chart.LineMarkerInteraction.Move,
            horizontalPosition: 1,
            content: function () {
                return markcontents && markcontents.y ? markcontents.y.toString() : '';
            }

        }),
        vMarker = new wijmo.chart.LineMarker(chart, {
            lines: wijmo.chart.LineMarkerLines.None,
            interaction: wijmo.chart.LineMarkerInteraction.Move,
            verticalPosition: 1,
            content: function () {
                return markcontents && markcontents.x ? markcontents.x.toString() : '';
            }
        });
    
    chart.initialize({
        chartType: wijmo.chart.finance.FinancialChartType.Candlestick,
        itemsSource: app.chartData,
        bindingX: 'date',
        series: [{ binding: 'high,low,open,close' }],
        tooltip: { content: '' },
        axisY: { position: wijmo.chart.Position.Right },
        header: 'Facebook, Inc. (FB)',
        symbolSize: 4
    });
    chart.rendered.addHandler(function () {
        var chartHostEle = chart.hostElement,
        pa = chartHostEle.querySelector('.wj-plot-area');
        pOffset = wijmo.getElementRect(pa);
    });
    chart.hostElement.onmouseenter = function (e) {
        markershowing(lineMarkers, 'visible');
    }
    if ('ontouchstart' in window) {
        chart.hostElement.ontouchstart = function (e) {
            markershowing(lineMarkers, 'visible');
        }
    }
    chart.hostElement.onmouseleave = function (e) {
        markershowing(lineMarkers, 'hidden');
    }

    // linemarker setting
    var lineMarkers = chart.hostElement.querySelectorAll('.wj-chart-linemarker-container');
    markershowing(lineMarkers, 'hidden');
    midMarker.positionChanged.addHandler(function (s, e) {
        pt = e;
    });

    function markershowing(lineMarkers, visible) {
        for (var i = 0; i < lineMarkers.length; i++) {
            lineMarkers[i].style.visibility = visible;
        }
    }

    function getMarkerContents(pt) {
        var newHitPoint = new wijmo.Point(pt.x, NaN),
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
})(wijmo, app);