(function (wijmo) {
	'use strict';

    // create FlexChart
	var mixedTypesChart = new wijmo.chart.FlexChart('#mixedTypesChart');

    // initialize FlexChart's properties
	mixedTypesChart.initialize({
	    itemsSource: appData,
	    bindingX: 'country',
	    series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads', chartType: wijmo.chart.ChartType.LineSymbols }
	    ]
	});
})(wijmo);