(function (wijmo) {
	'use strict';

    // create FlexChart
	var chartTooltip = new wijmo.chart.FlexChart('#chartTooltip');

    // initialize FlexChart's properties
	chartTooltip.initialize({
	    itemsSource: appData,
	    bindingX: 'country',
	    tooltip: { content: "<img src='resources/{x}.png'/> <b>{seriesName}</b><br/>{y}" },
	    series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads' }
	    ]
	});
})(wijmo);