(function (wijmo) {
    'use strict';

    // create FlexChart and Menus
    var movingAverageChart = new wijmo.chart.FlexChart('#movingAverageChart'),
        typeMenu = new wijmo.input.Menu('#typeMenu'),
        periodInput = new wijmo.input.InputNumber('#periodInput'),
        movingAverage;

    //set inputnumber
    periodInput.value = 2;
    periodInput.min = 2;
    periodInput.max = 29;
    periodInput.step = 1;
    periodInput.format = "n0";

    // initialize FlexChart's properties
    movingAverageChart.initialize({
        itemsSource: getData(40),
        bindingX: 'x',
        series: [{
            name: 'Origin',
            binding: 'y',
            chartType: wijmo.chart.ChartType.Scatter
        }]
    });

    //create MovingAverage
    movingAverage = new wijmo.chart.analytics.MovingAverage();
    movingAverage.name = 'MA';
    movingAverage.binding = 'y';
    movingAverage.sampleCount = 100;
    movingAverageChart.series.push(movingAverage);

    // update the menus' headers
    updateMenuHeader();

    typeMenu.selectedIndexChanged.addHandler(function () {
        if (typeMenu.selectedValue) {
            // update MovingAverage's type
            movingAverage.type = parseInt(typeMenu.selectedValue);

            // update menu header
            updateMenuHeader();
        }
    });

    periodInput.valueChanged.addHandler(function () {
        // update MovingAverage's period
        if (periodInput.value < periodInput.min || periodInput.value > periodInput.max) {
            return;
        }
        movingAverage.period = periodInput.value;
    });

    // helper function for Menu headers
    function updateMenuHeader() {
        typeMenu.header = '<b>Type</b>: ' + typeMenu.text;
    }
})(wijmo);