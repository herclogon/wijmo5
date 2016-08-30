(function (wijmo, app) {
    'use strict';

    // create controls
    var chart = new wijmo.chart.finance.FinancialChart('#tpChart'),       
        bindingYs = {
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

    chart.initialize({
        header: 'Facebook, Inc. (FB)',
        itemsSource: app.chartData,
        bindingX: 'date',
        series: [{ binding: 'close' }],
        symbolSize: 4,
        tooltip: {
            content: function (ht) {
                var dateStr = 'Date: ' + ht.x + '<br/>',
                    hlocStr = 'Open: ' + wijmo.Globalize.format(ht.item.open, 'n2') + '<br/>' +
                              'High: ' + wijmo.Globalize.format(ht.item.high, 'n2') + '<br/>' +
                              'Low: ' + wijmo.Globalize.format(ht.item.low, 'n2') + '<br/>' +
                              'Close: ' + wijmo.Globalize.format(ht.item.close, 'n2') + '<br/>',
                    closeStr = 'Close: ' + wijmo.Globalize.format(ht.item.close, 'n2'),
                    volStr = 'Volume: ' + wijmo.Globalize.format(ht.item.volume, 'n0'),
                    toolTipStr;
                switch (menu.value) {
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
            }
        }
    });

    // create menu
    var menu = new wijmo.input.Menu('#tpMenu');
    menu.itemClicked.addHandler(function (sender) {
        var arg = wijmo.changeType(sender.selectedValue, wijmo.DataType.Number);
        // check if the conversion was successful
        if (wijmo.isNumber(arg)) {
            // update the value
            chart.chartType = arg;
            chart.series[0].binding = bindingYs[arg];
            switch (arg) {
                case wijmo.chart.finance.FinancialChartType.LineBreak:
                    chart.options = {
                        lineBreak: {
                            newLineBreaks: 3
                        }
                    };
                    break;
                case wijmo.chart.finance.FinancialChartType.Renko:
                    chart.options = {
                        renko: {
                            boxSize: 2,
                            rangeMode: 'Fixed',
                            fields: 'Close'
                        }
                    };
                    break;
                case wijmo.chart.finance.FinancialChartType.Kagi:
                    chart.options = {
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
        }
        updateMenuHeader();
    });

    // update menu header to show current chart type
    function updateMenuHeader() {
        menu.header = '<b>Chart Type:</b> ' + menu.text;
    }
    updateMenuHeader();
})(wijmo, app);