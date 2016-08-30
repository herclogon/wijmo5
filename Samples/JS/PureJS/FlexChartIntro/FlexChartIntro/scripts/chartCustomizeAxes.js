(function (wijmo) {
	'use strict';

    // create FlexChart
	var chartCustomizeAxes = new wijmo.chart.FlexChart('#chartCustomizeAxes');

    // initialize FlexChart's properties
	chartCustomizeAxes.initialize({
	    itemsSource: appData,
	    bindingX: 'country',
	    axisX: { axisLine: true, majorGrid: true },
	    axisY: { format: 'c0', max: 10000, majorUnit: 2000, axisLine: true, majorGrid: true },
	    series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' }
	    ]
	});
})(wijmo);