'use strict';

angular.module('app').controller('dataBindingCtrl', function ($scope, dataService) {
	$scope.ctx = {
		data: dataService.getData(50)
	}

	$scope.initialized = function (flexSheet) {
		flexSheet.deferUpdate(function () {
			var column;

			// initialize the dataMap for the bound sheet.
			if (flexSheet) {
				column = flexSheet.columns.getColumn('countryId');
				if (column && !column.dataMap) {
					column.dataMap = buildDataMap(dataService.getCountries());
				}
				column = flexSheet.columns.getColumn('productId');
				if (column && !column.dataMap) {
					column.dataMap = buildDataMap(dataService.getProducts());
				}
			}
		});
	}

	// build a data map from a string array using the indices as keys
	function buildDataMap(items) {
		var map = [];
		for (var i = 0; i < items.length; i++) {
			map.push({ key: i, value: items[i] });
		}
		return new wijmo.grid.DataMap(map, 'key', 'value');
	};
})