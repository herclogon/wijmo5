(function (wijmo, app) {
    'use strict';

    // create chart controls
    var stChart = new wijmo.chart.finance.FinancialChart('#stChart'),
        rsChart = new wijmo.chart.finance.FinancialChart('#rsChart');

    stChart.initialize({
        chartType: wijmo.chart.finance.FinancialChartType.Candlestick,
        itemsSource: app.chartData,
        series: [{ binding: 'high,low,open,close' }],
        header: 'Facebook, Inc. (FB)',
        symbolSize: 4,
        bindingX: 'date',
        axisX: { labels: false, axisLine: false },
        legend: { position: wijmo.chart.Position.None },
        plotMargin:'60 30 0 50',
        tooltip: {content: function (ht) {
            return 'Date: ' + ht.x + '<br/>' +
                  'Open: ' + wijmo.Globalize.format(ht.item.open, 'n2') + '<br/>' +
                  'High: ' + wijmo.Globalize.format(ht.item.high, 'n2') + '<br/>' +
                  'Low: ' + wijmo.Globalize.format(ht.item.low, 'n2') + '<br/>' +
                  'Close: ' + wijmo.Globalize.format(ht.item.close, 'n2');
        }}
    });

    rsChart.initialize({
        chartType: wijmo.chart.finance.FinancialChartType.Line,
        itemsSource: app.chartData,
        bindingX: 'date',
        series: [{ binding: 'close' }],
        axisY: { labels: false, majorGrid: false },
        tooltip: {content: ''},
        plotMargin:'0 30 NaN 50'
    });


    //create range selector
    var rs = new wijmo.chart.interaction.RangeSelector(rsChart);
    rs.seamless = true;
    rs.rangeChanged.addHandler(function (sender, e) {
        if (stChart && rs) {
            stChart.axisX.min = rs.min;
            stChart.axisX.max = rs.max;
            stChart.invalidate();
        }
    });
})(wijmo, app);