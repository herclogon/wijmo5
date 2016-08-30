(function (wijmo, app) {
    'use strict';

    // create controls
    var chart = new wijmo.chart.finance.FinancialChart('#animationChart'),
        bindingYs = {
            0: 'close',
            2: 'close',
            4: 'close',
            5: 'high,low,open,close',
            6: 'high,low,open,close'
        }, animation;

    chart.initialize({
        header: 'Facebook, Inc. (FB)',
        itemsSource: app.chartData,
        bindingX: 'date',
        series: [{ binding: 'close' }],
        symbolSize: 4,
        footer: 'Click on chart to refresh',
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

                switch (chartType.value) {
                    case wijmo.chart.finance.FinancialChartType.Line:
                    case wijmo.chart.finance.FinancialChartType.Column:
                        toolTipStr = dateStr + closeStr;
                        break;
                    default:
                        toolTipStr = dateStr + hlocStr;
                        break;
                }

                return toolTipStr;
            }
        }
    });
    chart.hostElement.addEventListener('click', function () {
        if (animation) {
            chart.refresh(true);
        }
    });

    //create ChartAnimation
    animation = new wijmo.chart.animation.ChartAnimation(chart);

    // create chartType
    var chartType = new wijmo.input.Menu('#animationChartType');
    chartType.itemClicked.addHandler(function (sender) {
        var arg = wijmo.changeType(sender.selectedValue, wijmo.DataType.Number);
        // check if the conversion was successful
        if (wijmo.isNumber(arg)) {
            // update the value
            chart.chartType = arg;
            chart.series[0].binding = bindingYs[arg];
        }
        updateAnimationTypeHeader();
    });

    // update menu header to show current chart type
    function updateAnimationTypeHeader() {
        chartType.header = '<b>Chart Type:</b> ' + chartType.text;
    }
    updateAnimationTypeHeader();

    // create easing
    var easing = new wijmo.input.Menu('#easing');
    easing.itemClicked.addHandler(function (sender) {
        //var arg = wijmo.changeType(sender.selectedValue, wijmo.DataType.Number);
        var arg = sender.selectedValue;

        if (arg && arg.length && animation && chart) {
            animation.easing = wijmo.chart.animation.Easing[arg];
            chart.refresh(true);
        }

        updateEasingHeader();
    });

    // update menu header to show current chart type
    function updateEasingHeader() {
        easing.header = '<b>Easing:</b> ' + easing.text;
    }
    updateEasingHeader();

    //create duration
    var duration = new wijmo.input.InputNumber('#duration', {
        step: 200,
        format: 'n0',
        value: 400,
        min: 200,
        max: 5000
    });
    duration.valueChanged.addHandler(function (ctrl) {
        if (animation && chart && ctrl.value >= ctrl.min && ctrl.value <= ctrl.max) {
            animation.duration = ctrl.value;
            chart.refresh(true);
        }
    });

})(wijmo, app);