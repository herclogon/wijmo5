(function (wijmo) {
	'use strict';

    // create FlexChart
	var chartTheme = new wijmo.chart.FlexChart('#chartTheme');

    // initialize FlexChart's properties
	chartTheme.initialize({
	    itemsSource: appData,
	    bindingX: 'country',
	    series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads' }
	    ]
	});
})(wijmo);