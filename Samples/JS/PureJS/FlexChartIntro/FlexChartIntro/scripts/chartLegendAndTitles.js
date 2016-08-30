(function (wijmo) {
	'use strict';

	var chartLegendAndTitles = new wijmo.chart.FlexChart('#chartLegendAndTitles'),
		positionMenu = new wijmo.input.Menu('#positionMenu'),
		headerInput = document.getElementById('headerInput'),
		footerInput = document.getElementById('footerInput'),
		xTitleInput = document.getElementById('xTitleInput'),
		yTitleInput = document.getElementById('yTitleInput');

    // initialize FlexChart's properties
	chartLegendAndTitles.initialize({
	    itemsSource: appData,
	    bindingX: 'country',
	    header: 'Sample Chart',
	    footer: 'copyright (c) ComponentOne',
	    axisX: { title: 'country' },
	    axisY: { title: 'amount' },
	    series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads' }
	    ]
	});

    // sync the input's value with FlexChart's header
	headerInput.value = chartLegendAndTitles.header;

    // update the FlexChart's header
	headerInput.addEventListener('input', function () {
		chartLegendAndTitles.header = this.value;
	});

    // sync the input's value with FlexChart's footer
	footerInput.value = chartLegendAndTitles.footer;

    // update the FlexChart's footer
	footerInput.addEventListener('input', function () {
	    chartLegendAndTitles.footer = this.value;
	});

    // sync the input's value with FlexChart's X-Axis title
	xTitleInput.value = chartLegendAndTitles.axisX.title;

    // update the FlexChart's X-Axis title
	xTitleInput.addEventListener('input', function () {
	    chartLegendAndTitles.axisX.title = this.value;
	});

    // sync the input's value with FlexChart's Y-Axis title
	yTitleInput.value = chartLegendAndTitles.axisY.title;

    // update the FlexChart's Y-Axis title
	yTitleInput.addEventListener('input', function () {
	    chartLegendAndTitles.axisY.title = this.value;
	});

    // update menu's header
	updatePositionMenuHeader();
	positionMenu.selectedIndexChanged.addHandler(function () {
		if (positionMenu.selectedValue) {
			// update the FlexChart legend's position
			chartLegendAndTitles.legend.position = parseInt(positionMenu.selectedValue);

			// update menu's header
			updatePositionMenuHeader();
		}
	});

	function updatePositionMenuHeader() {
	    positionMenu.header = '<b>Legend:</b> ' + positionMenu.text;
	}
})(wijmo);