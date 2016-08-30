(function (wijmo) {
    'use strict';

    // create FlexChart
    var gettingStartedChart = new wijmo.chart.FlexChart('#gettingStartedChart');

    // initialize FlexChart's properties
    gettingStartedChart.initialize({
        itemsSource: appData,
        bindingX: 'x',
        series: [{
            name: 'Origin',
            binding: 'y',
            chartType: wijmo.chart.ChartType.Scatter
        }]
    });

    //create TrendLine
    var trendLine = new wijmo.chart.analytics.TrendLine();
    trendLine.name = 'Trend Line';
    trendLine.binding = 'y';
    trendLine.sampleCount = 100;
    gettingStartedChart.series.push(trendLine);

})(wijmo);