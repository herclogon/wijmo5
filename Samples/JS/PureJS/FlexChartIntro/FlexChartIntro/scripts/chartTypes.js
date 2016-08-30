(function (wijmo) {
	'use strict';

    // create FlexChart and Menus
	var chartTypes = new wijmo.chart.FlexChart('#chartTypes'),
		typeMenu = new wijmo.input.Menu('#typeMenu'),
		stackingMenu = new wijmo.input.Menu('#stackingMenu'),
		rotatedMenu = new wijmo.input.Menu('#rotatedMenu');

    // initialize FlexChart's properties
	chartTypes.initialize({
	    itemsSource: appData,
	    bindingX: 'country',
	    series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads' }
	    ]
	});

    // update the menus' headers
	updateMenuHeader(typeMenu, 'Chart Type');
	updateMenuHeader(stackingMenu, 'Stacking');
	updateMenuHeader(rotatedMenu, 'Rotated');

	typeMenu.selectedIndexChanged.addHandler(function () {
		if (typeMenu.selectedValue) {
			// update FlexChart's chartType
			chartTypes.chartType = parseInt(typeMenu.selectedValue);

			// update menu header
			updateMenuHeader(typeMenu, 'Chart Type');
		}
	});

	stackingMenu.selectedIndexChanged.addHandler(function () {
		if (stackingMenu.selectedValue) {
			// update FlexChart's stacking property
			chartTypes.stacking = parseInt(stackingMenu.selectedValue);

			// update menu header
			updateMenuHeader(stackingMenu, 'Stacking');
		}
	});

	rotatedMenu.selectedIndexChanged.addHandler(function () {
		if (rotatedMenu.selectedValue) {
			// specify if chart should be rotated or not
			chartTypes.rotated = rotatedMenu.selectedValue === 'true';

			// update menu header
			updateMenuHeader(rotatedMenu, 'Rotated');
		}
	});

    // helper function for Menu headers
	function updateMenuHeader(menu, prefix) {
	    menu.header = '<b>' + prefix + '</b>: ' + menu.text;
	}
})(wijmo);