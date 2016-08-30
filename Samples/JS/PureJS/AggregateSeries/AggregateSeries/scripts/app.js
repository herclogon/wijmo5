(function() {
    'use strict';

    var chart = new wijmo.chart.FlexChart('#chart'),
        selChart = new wijmo.chart.FlexChart('#selChart'),
        series = new wijmo.chart.research.AggregateSeries(),
        selSeries = new wijmo.chart.Series(),
        rngSel = new wijmo.chart.interaction.RangeSelector(selChart),
        aggMenu = new wijmo.input.Menu('#aggMenu'),
        perMenu = new wijmo.input.Menu('#perMenu'),
        ctMenu = new wijmo.input.Menu('#ctMenu'),
        tooltip = new wijmo.Tooltip(),
        bindings = {
            Column: 'close',
            LineSymbols: 'close',
            Candlestick: 'high,low,open,close'
        };

    tooltip.setTooltip('#aggInfo', 'Note that some of the Aggregate types don\'t make sense for financial chart types and may yield unexpected results.');

    chart.beginUpdate();
    chart.chartType = ctMenu.selectedValue;
    chart.binding = bindings[ctMenu.selectedValue];
    series.chartType = ctMenu.selectedValue;
    series.binding = bindings[ctMenu.selectedValue];
    series.bindingX = 'date';
    series.groupAggregate = wijmo.Aggregate[aggMenu.selectedValue];
    series.autoGroupIntervals = ["DD", "WW", "MM", "YYYY"];
    series.autoInterval = true;
    chart.series.push(series);

    chart.tooltip.content = function (ht) {
        if (!ht) {
             return '';
        } else if (ctMenu.selectedValue === 'Candlestick' && ht.item && ht.item.x) {
            return '<b>Date:</b> ' + wijmo.Globalize.formatDate(ht.x, 'MM-dd-yyyy') + '<br>' +
                '<b>High:</b> ' + ht.item.high.toFixed(2) + '<br>' +
                '<b>Low:</b> ' + ht.item.low.toFixed(2) + '<br>' +
                '<b>Open:</b> ' + ht.item.open.toFixed(2) + '<br>' +
                '<b>Close:</b> ' + ht.item.close.toFixed(2);
        } else if(ht.x && ht.y) {
            return '<b>Date:</b> ' + wijmo.Globalize.formatDate(ht.x, 'MM-dd-yyyy') + '<br>' +
               '<b>Value:</b> ' + ht.y.toFixed(2);
        }
    };
    chart.endUpdate();

    selSeries.chartType = wijmo.chart.ChartType.Area;
    selSeries.binding = 'close';
    selSeries.bindingX = 'date';
    selChart.series.push(selSeries);
    selChart.tooltip.content = '';

    // update axisX min/max to match RangeSelector.
    rngSel.seamless = true;
    rngSel.rangeChanged.addHandler(function (sender, args) {
        chart.beginUpdate();
        chart.axisX.min = sender.min;
        chart.axisX.max = sender.max;
        chart.endUpdate();
    });


    // aggregate menu
    aggMenu.selectedIndexChanged.addHandler(function (sender, args) {
        if (!sender.selectedValue) { return; }
        series.groupAggregate = wijmo.Aggregate[sender.selectedValue];
        updateHeader(sender, '<b>Aggregate</b>: ', sender.text);
    });
    updateHeader(aggMenu, '<b>Aggregate</b>: ', aggMenu.text);

    // period menu
    perMenu.selectedIndexChanged.addHandler(function (sender, args) {
        if (!sender.selectedValue) { return; }
        series.groupInterval = sender.selectedValue;
        updateHeader(sender, '<b>Interval</b>: ', sender.text);
    });
    updateHeader(perMenu, '<b>Interval</b>: ', perMenu.text);

    // chart type menu
    ctMenu.selectedIndexChanged.addHandler(function (sender, args) {
        if (!sender.selectedValue) { return; }
        chart.beginUpdate();
        chart.chartType = sender.selectedValue;
        chart.binding = bindings[sender.selectedValue];
        series.chartType = sender.selectedValue;
        series.binding = bindings[sender.selectedValue];
        chart.endUpdate();
        updateHeader(sender, '<b>Chart Type</b>: ', sender.text);
    });
    updateHeader(ctMenu, '<b>Chart Type</b>: ', ctMenu.text);

    // function to update menu header text
    function updateHeader(menu, prefix, text) {
        menu.header = prefix + text;
    }

    wijmo.httpRequest('data/msft.json', {
        success: function(xhr) {
            var data = JSON.parse(xhr.response, function(key, value) {
                if (key === 'date') {
                    value = new Date(value);
                }
                return value;
            });

            series.itemsSource = data;
            selSeries.itemsSource = data;
        }
    });

    // autoInterval checkbox
    document.querySelector('#autoInterval').addEventListener('change', function() {
        series.autoInterval = this.checked;
    });

})();
