'use strict';

angular.module('app').controller('excelIOCtrl', function ($scope, dataService) {
	$scope.ctx = {
		data: dataService.getData(50),
		fileName: '',
		flexSheet: null
	};

	$scope.initialized = function (flexSheet) {
		flexSheet.deferUpdate(function () {
			var sheetIdx,
				sheetName,
				colIdx,
				rowIdx;

			// initialize the dataMap for the bound sheet.
			if (flexSheet) {
				for (sheetIdx = 0; sheetIdx < flexSheet.sheets.length; sheetIdx++) {
					flexSheet.selectedSheetIndex = sheetIdx;
					sheetName = flexSheet.selectedSheet.name;
					if (sheetName === 'Country') {
						initDataMapForBindingSheet(flexSheet);
					} else {
						for (colIdx = 0; colIdx < flexSheet.columns.length; colIdx++) {
							for (rowIdx = 0; rowIdx < flexSheet.rows.length; rowIdx++) {
								flexSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
							}
						}
					}
				}
				flexSheet.selectedSheetIndex = 0;
			}
		});
	}

	$scope.load = function () {
		var flexSheet = $scope.ctx.flexSheet,
			fileInput = document.getElementById('importFile');
		if (flexSheet && fileInput.files[0]) {
			flexSheet.load(fileInput.files[0]);
		}
	}

	$scope.save = function () {
		var flexSheet = $scope.ctx.flexSheet,
			fileName;
		if (flexSheet) {
			if (!!$scope.ctx.fileName) {
				fileName = $scope.ctx.fileName;
			} else {
				fileName = 'FlexSheet.xlsx';
			}
			flexSheet.save(fileName);
		}
	}

	function initDataMapForBindingSheet(flexSheet) {
		var column;

		column = flexSheet.columns.getColumn('countryId');
		if (column && !column.dataMap) {
			column.dataMap = buildDataMap(dataService.getCountries());
		}
		column = flexSheet.columns.getColumn('productId');
		if (column && !column.dataMap) {
			column.dataMap = buildDataMap(dataService.getProducts());
		}
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