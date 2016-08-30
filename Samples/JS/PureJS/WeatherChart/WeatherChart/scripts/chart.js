function createChart(id, chartType, itemsSource, bindingX, bindings) {
    var chart = new wijmo.chart.FlexChart(id);
    chart.beginUpdate();// endUpdate called after initialization(app.js)

    chart.chartType = chartType;
    chart.itemsSource = itemsSource;

    // create data series
    for (var i = 0; i < bindings.length; i++) {
        var series = new wijmo.chart.Series();
        series.bindingX = bindingX;
        series.name = series.binding = bindings[i];
        chart.series.push(series);
    }

    if (bindings.length > 1) {
        chart.legend.position = 'Left';
    } else {
        chart.legend.position = 'None';
        if (bindings[0] != 'MeanTemp') {
            chart.axisY.title = bindings[0];
        }
    }

    chart.tooltip.content = null; // disable tooltips

    return chart;
}