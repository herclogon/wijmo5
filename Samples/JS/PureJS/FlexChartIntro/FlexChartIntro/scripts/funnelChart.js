(function (wijmo) {
    'use strict';

    // create FlexChart and Menus
    var funnelChart = new wijmo.chart.FlexChart('#funnelChart'),
        neckWidth = new wijmo.input.InputNumber('#funnelNeckWidth'),
        funnelType = new wijmo.input.Menu('#funnelType'),
        neckHeight = new wijmo.input.InputNumber('#funnelNeckHeight');

    // initialize FlexChart's properties
    funnelChart.initialize({
        itemsSource: funnelData,
        chartType: wijmo.chart.ChartType.Funnel,
        bindingX: 'country',
        series: [
            { name: 'Sales', binding: 'sales' }
        ],
        dataLabel: { content: '{y}' },
        options: {
            funnel: {
                neckWidth: 0.2,
                neckHeight: 0.2,
                type: 'default'
            }
        }
    });

    // neckWidth - initialize InputNumber's properties
    neckWidth.min = 0;
    neckWidth.max = 1;
    neckWidth.step = 0.1;
    neckWidth.valueChanged.addHandler(function (sender) {
        if (sender.value < sender.min || sender.value > sender.max) {
            return;
        }
        funnelChart.options.funnel.neckWidth = sender.value;
        funnelChart.refresh(true);
    });
    neckWidth.value = 0.2;

    // neckHeight - initialize InputNumber's properties
    neckHeight.min = 0;
    neckHeight.max = 1;
    neckHeight.step = 0.1;
    neckHeight.valueChanged.addHandler(function (sender) {
        if (sender.value < sender.min || sender.value > sender.max) {
            return;
        }
        funnelChart.options.funnel.neckHeight = sender.value;
        funnelChart.refresh(true);
    });
    neckHeight.value = 0.2;

    updateMenuHeader(funnelType, 'Funnel Type');
    funnelType.selectedIndexChanged.addHandler(function () {
        if (funnelType.selectedValue) {
            funnelChart.options.funnel.type = funnelType.selectedValue;
            updateMenuHeader(funnelType, 'Funnel Type');
            funnelChart.refresh(true);
        }
    });

    // helper function for Menu headers
    function updateMenuHeader(menu, prefix) {
        menu.header = '<b>' + prefix + '</b>: ' + menu.text;
    }
})(wijmo);