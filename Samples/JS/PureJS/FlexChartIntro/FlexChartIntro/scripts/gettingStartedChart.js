(function(wijmo){
	'use strict';

    // create FlexChart
	var gettingStartedChart = new wijmo.chart.FlexChart('#gettingStartedChart');

    // initialize FlexChart's properties
	gettingStartedChart.initialize({
	    itemsSource: appData,
	    bindingX: 'country',
	    series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads' }
	    ]
	});
})(wijmo);