(function (wijmo) {
	'use strict';

    // create FlexChart and variables for its series
	var chartSeriesStyle = new wijmo.chart.FlexChart('#chartSeriesStyle'),
        salesSeries, expensesSeries, downloadsSeries;

	chartSeriesStyle.itemsSource = appData;
	chartSeriesStyle.bindingX = 'country';

    // initialize "Sales" data series
	salesSeries = new wijmo.chart.Series();
	salesSeries.name = 'Sales';
	salesSeries.binding = 'sales';
	salesSeries.style = {};
	salesSeries.style.fill = 'green';
	salesSeries.style.stroke = 'darkgreen';
	salesSeries.style.strokeWidth = 1;

    // initialize "Expenses" data series
	expensesSeries = new wijmo.chart.Series();
	expensesSeries.name = 'Expenses';
	expensesSeries.binding = 'expenses';
	expensesSeries.style = {};
	expensesSeries.style.fill = 'red';
	expensesSeries.style.stroke = 'darkred';
	expensesSeries.style.strokeWidth = 1;

    // initialize "Downloads" data series
	downloadsSeries = new wijmo.chart.Series();
	downloadsSeries.name = 'Downloads';
	downloadsSeries.binding = 'downloads';
	downloadsSeries.chartType = wijmo.chart.ChartType.LineSymbols;
	downloadsSeries.style = {};
	downloadsSeries.symbolStyle = {};
	downloadsSeries.style.stroke = 'orange';
	downloadsSeries.style.strokeWidth = 5;
	downloadsSeries.symbolStyle.fill = 'gold';
	downloadsSeries.symbolStyle.stroke = 'gold';

    // add data series to chart
	chartSeriesStyle.series.push(salesSeries);
	chartSeriesStyle.series.push(expensesSeries);
	chartSeriesStyle.series.push(downloadsSeries);
})(wijmo);