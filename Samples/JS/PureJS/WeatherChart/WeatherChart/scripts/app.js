 $(document).ready(function () {
    'use strict';

     var data = loadData(), props = ['MeanPressure', 'Precipitation'], markers = [], pt = new wijmo.Point();

    // create FlexChart
    var chart1 = createChart('#chart1', 'Line', data, 'Date', ['MeanTemp', 'MinTemp', 'MaxTemp']);
    chart1.palette = [ '#88bde6', 'blue', 'red' ];
    chart1.axisX.position = 'Top';
    chart1.axisX.format = 'MMM-dd';
    chart1.axisX.labelAngle = 90;

    var chart2 = createChart('#chart2', 'Area', data, 'Date', ['MeanPressure']);
    chart2.axisX.labels = false;
    chart2.axisX.axisLine = false;
    chart2.axisX.format = 'MMM-dd';
    chart2.axisX.labelAngle = 90;

    var chart3 = createChart('#chart3', 'Column', data, 'Date', ['Precipitation']);
    chart3.axisX.labels = false;
    chart3.axisX.axisLine = false;
    chart3.axisX.format = 'MMM-dd';
    chart3.axisX.labelAngle = 90;

    // chart with scroller
    var chart = createChart('#chart', 'Line', data, 'Date', ['MeanTemp']);
    

    // set chart margins(NaN means automatic value)
    chart1.plotMargin = 'NaN 30 0 110';
    chart2.plotMargin = '0 30 0 110';
    chart3.plotMargin = '0 30 NaN 110';
    chart.plotMargin =  '0 30 NaN 110';

    chart.axisY.majorGrid = false;
    chart.axisY.labels = false;
    chart.axisX.format = 'MMM-dd';
    chart.axisX.labelAngle = 45;

     // initation range selector
    initRangeSelector(chart, updateCharts);

    chart1.endUpdate();
    chart2.endUpdate();
    chart3.endUpdate();
    chart.endUpdate();

     // initalize range selector
    function initRangeSelector(chart, update) {

        var rangeSelector = new wijmo.chart.interaction.RangeSelector(chart);
        rangeSelector.seamless = true;
        rangeSelector.rangeChanged.addHandler(function () {
            update(rangeSelector.min, rangeSelector.max);
        });
    }

    function updateCharts(min, max) {

        [chart1, chart2, chart3].forEach(function (chart) {
            chart.axisX.min = min;
            chart.axisX.max = max;
            chart.invalidate();
            chart.rendered.addHandler(function () {
                chart.hostElement.querySelector('.wj-chart-linemarker').style.display = 'none';
            })
        });
    }

    [chart1, chart2, chart3].forEach(function (chart) {
        var marker = new wijmo.chart.LineMarker(chart, {
            lines: wijmo.chart.LineMarkerLines.Both,
            interaction: wijmo.chart.LineMarkerInteraction.Move,
            content: function () {
                return getMarkercontent(new wijmo.Point(pt.x, NaN));
            }
        });
        marker.positionChanged.addHandler(function (marker, point) {
            pt = point;
            changeMarker(chart, marker);
        });
        markers.push(marker);
    });

    function changeMarker(curChart, marker) {
        var curHost = curChart.hostElement,
            vline = curHost.querySelector('.wj-chart-linemarker-vline');

        [chart1, chart2, chart3].forEach(function (chart) {
            if (chart === curChart) {
                chart.hostElement.querySelector('.wj-chart-linemarker').style.display = 'block';
            } else {
                chart.hostElement.querySelector('.wj-chart-linemarker').style.display = 'none';
            }
        });

        vline.style.height = 326 + 'px';
    }

    function getMarkercontent(pt) {
        var chart = chart1, ht = chart.series[0].hitTest(pt),
            item = chart.itemsSource[ht.pointIndex], content = '';

        for (var i = 0; i < chart.series.length; i++) {
            var series = chart.series[i];
            // find series lines to get its color
            var polyline = series.hostElement.querySelector('polyline');

            // add series info to the marker content
            if (ht.x && ht.y !== null) {
                if (i == 0) {
                    content += wijmo.Globalize.formatDate(ht.x, 'dd-MMM');
                }
                content += '<div style="color:' + polyline.getAttribute('stroke') + '">' + series.name + ' = ' + item[series.name].toFixed() + '</div>';
            }
            
        }
        for (var i = 0; i < props.length; i++) {
            content += '<div>' + props[i] + ' = ' + item[props[i]].toFixed() + '</div>';
        }
        return content;
    }
});


