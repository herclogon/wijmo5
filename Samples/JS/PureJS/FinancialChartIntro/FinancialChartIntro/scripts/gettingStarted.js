(function (wijmo, app) {
    'use strict';

    // create controls
    var chart = new wijmo.chart.finance.FinancialChart('#introChart');

    chart.initialize({
        header: 'Facebook, Inc. (FB)',
        itemsSource: app.chartData,
        bindingX: 'date',
        series: [
            { name: 'Open', binding: 'open' },
            { name: 'Close', binding: 'close' }
        ]
    });
})(wijmo, app);