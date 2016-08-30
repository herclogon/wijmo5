'use strict';

angular.module('app').controller('standaloneController', function ($scope, dataService) {
	$scope.ctx = {
		data: dataService.getData(50),
		flexSheet: null,
		sheets: [],
		selectedSheetIndex: 0
	};

	$scope.$watch('ctx.flexSheet', function () {
		var flexSheet = $scope.ctx.flexSheet;

		if (flexSheet) {
			flexSheet.loaded.addHandler(function () {
				var sheetIndex = 0;
				$scope.ctx.sheets.length = 0;
				for (; sheetIndex < flexSheet.sheets.length; sheetIndex++) {
					$scope.ctx.sheets.push(flexSheet.sheets[sheetIndex].name);
				}
				$scope.ctx.selectedSheetIndex = flexSheet.selectedSheetIndex;
				$scope.$apply();
			});
		}
	});

	// export 
	$scope.save = function () {
		var flexSheet = $scope.ctx.flexSheet;

		if (flexSheet) {
			flexSheet.save('StandaloneFlexSheet.xlsx');
		}
	};

	// import
	$scope.load = function () {
		var flexSheet = $scope.ctx.flexSheet;

		if (flexSheet && $('#importFile')[0].files[0]) {
			flexSheet.load($('#importFile')[0].files[0]);
		}
	};

	// initialize the flexSheet control when document ready.
	$scope.initialized = function (s) {
		s.deferUpdate(function () {
			var column;

			for (var i = 0; i < s.sheets.length; i++) {
				s.sheets.selectedIndex = i;
				if (s.sheets[i].name === 'Country') {
					initDataMapForBindingSheet(s);
				}
				$scope.ctx.sheets.push(s.sheets[i].name);
			}
			s.selectedSheetIndex = 0;
			$scope.$apply('ctx.sheets');
		});
	};

	//  Change the selected sheet for the flexsheet control
	$scope.changeSelectedSheet = function () {
		$scope.ctx.flexSheet.selectedSheetIndex = $scope.ctx.selectedSheetIndex;
	}

	// initialize the dataMap for the bound sheet.
	function initDataMapForBindingSheet(flexSheet) {
		var column;

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
	};

	// build a data map from a string array using the indices as keys
	function buildDataMap(items) {
		var map = [];
		for (var i = 0; i < items.length; i++) {
			map.push({ key: i, value: items[i] });
		}
		return new wijmo.grid.DataMap(map, 'key', 'value');
	};
});