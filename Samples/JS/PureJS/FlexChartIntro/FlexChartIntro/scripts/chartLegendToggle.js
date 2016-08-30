(function (wijmo) {
	'use strict';

    // create FlexChart
	var chartLegendToggle = new wijmo.chart.FlexChart('#chartLegendToggle');

    // initialize FlexChart's properties
	chartLegendToggle.initialize({
	    itemsSource: appData,
	    bindingX: 'country',
	    legendToggle: true,
	    series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads' }
	    ]
	});

	chartLegendToggle.seriesVisibilityChanged.addHandler(function () {
        // loop through chart series
	    chartLegendToggle.series.forEach(function (series) {
	        var seriesName = series.name,
				checked = series.visibility === wijmo.chart.SeriesVisibility.Visible;

            // update custom checkbox panel
	        document.getElementById('cb' + seriesName).checked = checked;
	    });
	});

    // loop through custom check boxes
	['cbSales', 'cbExpenses', 'cbDownloads'].forEach(function (item, index) {
	    // update checkbox and toggle FlexChart's series visibility when clicked
	    var el = document.getElementById(item);
	    el.checked = chartLegendToggle.series[index].visibility === wijmo.chart.SeriesVisibility.Visible;
	    el.addEventListener('click', function () {
	        if (this.checked) {
	            chartLegendToggle.series[index].visibility = wijmo.chart.SeriesVisibility.Visible;
	        }
	        else {
	            chartLegendToggle.series[index].visibility = wijmo.chart.SeriesVisibility.Legend;
	        }
	    });
	});
})(wijmo);