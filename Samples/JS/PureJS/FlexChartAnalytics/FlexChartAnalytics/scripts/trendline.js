(function (wijmo) {
    'use strict';

    // create FlexChart and Menus
    var trendLineChart = new wijmo.chart.FlexChart('#trendLineChart'),
        fitTypeMenu = new wijmo.input.Menu('#fitTypeMenu'),
        trendLine;

    // initialize FlexChart's properties
    trendLineChart.initialize({
        itemsSource: appData,
        bindingX: 'x',
        series: [{
            name: 'Origin',
            binding: 'y',
            chartType: wijmo.chart.ChartType.Scatter
        }]
    });

    //create TrendLine
    trendLine = new wijmo.chart.analytics.TrendLine();
    trendLine.name = 'Trend Line';
    trendLine.binding = 'y';
    trendLine.sampleCount = 100;
    trendLineChart.series.push(trendLine);

    // update the menus' headers
    updateMenuHeader();

    fitTypeMenu.selectedIndexChanged.addHandler(function () {
        if (fitTypeMenu.selectedValue) {
            // update TrendLine's fitType
            trendLine.fitType = parseInt(fitTypeMenu.selectedValue);

            // update menu header
            updateMenuHeader();
        }
    });

    // helper function for Menu headers
    function updateMenuHeader() {
        fitTypeMenu.header = '<b>Fit Type</b>: ' + fitTypeMenu.text;
    }
})(wijmo);