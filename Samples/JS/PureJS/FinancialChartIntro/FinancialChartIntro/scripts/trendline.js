(function (wijmo, app) {
    'use strict';

    // create chart controls
    var tlChart = new wijmo.chart.finance.FinancialChart('#tlChart');

    tlChart.initialize({
        header: 'Facebook, Inc. (FB)',
        itemsSource: app.chartData,
        bindingX: 'date',
        chartType: wijmo.chart.finance.FinancialChartType.Line,
        axisY: { position: wijmo.chart.Position.Right },
        legend: { position: wijmo.chart.Position.Top },
        series: [{ name: 'Close', binding: 'close' }]
    });

    // add trend line
    var movingAverage = new wijmo.chart.analytics.MovingAverage();
    movingAverage.itemsSource = app.chartData;
    movingAverage.binding = 'close';
    movingAverage.name = wijmo.chart.analytics.MovingAverageType[0] + ' Moving Average';
    movingAverage.period = 2;
    movingAverage.type = wijmo.chart.analytics.MovingAverageType.Simple;
    tlChart.series.push(movingAverage);

    // create number control
    var period = new wijmo.input.InputNumber('#period', {
        step: 1,
        format: 'n0',
        value: 2,
        min: 2,
        max: app.chartData.length - 1
    });
    period.valueChanged.addHandler(function () {
        if (period.value < period.min || period.value > period.max) {
            return;
        }
        tlChart.series[1].period = period.value;
    });

    // create menu control
    var menu = new wijmo.input.Menu('#maMenu');
    menu.itemClicked.addHandler(function (sender) {
        var arg = wijmo.changeType(sender.selectedValue, wijmo.DataType.Number);
        // check if the conversion was successful
        if (wijmo.isNumber(arg)) {
            tlChart.series[1].type = arg;
        }

        // update name for legend item
        tlChart.series[1].name = sender.text + ' Moving Average';

        updateMenuHeader();
    });
   
    // update menu header to show current selection mode
    function updateMenuHeader() {
        menu.header = '<b>Moving Average Type:</b> ' + menu.text;
    }
    updateMenuHeader();
})(wijmo, app);