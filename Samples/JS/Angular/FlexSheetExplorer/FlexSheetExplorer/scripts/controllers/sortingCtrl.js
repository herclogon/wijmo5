'use strict';

angular.module('app').controller('sortingCtrl', function ($scope, dataService) {
	$scope.ctx = {
		data: dataService.getData(50),
		flexSheet: null,
		sortManager: null
	}

	$scope.$watch('ctx.flexSheet', function () {
		var flexSheet = $scope.ctx.flexSheet;
		if (flexSheet) {
			$scope.ctx.columns = getColumns();
			if (!$scope.ctx.sortManager) {
				$scope.ctx.sortManager = flexSheet.sortManager;
			}
			flexSheet.selectedSheetChanged.addHandler(function (sender, args) {
				$scope.ctx.columns = getColumns();
				safeApply('ctx.sortManager');
			});
		}
	});

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

	// commit the sorts
	$scope.commitSort = function () {
		$scope.ctx.sortManager.commitSort();
	};

	// cancel the sorts
	$scope.cancelSort = function () {
		$scope.ctx.sortManager.cancelSort();
	};

	// add new sort level
	$scope.addSortLevel = function () {
		$scope.ctx.sortManager.addSortLevel();
	};

	// delete current sort level
	$scope.deleteSortLevel = function () {
		$scope.ctx.sortManager.deleteSortLevel();
	};

	// copy a new sort level by current sort level setting.
	$scope.copySortLevel = function () {
		$scope.ctx.sortManager.copySortLevel();
	};

	// move the sort level
	$scope.moveSortLevel = function (offset) {
		$scope.ctx.sortManager.moveSortLevel(offset);
	};

	// build a data map from a string array using the indices as keys
	function buildDataMap(items) {
		var map = [];
		for (var i = 0; i < items.length; i++) {
			map.push({ key: i, value: items[i] });
		}
		return new wijmo.grid.DataMap(map, 'key', 'value');
	}

	// get the columns with the column header text for the column selection for sort setting.
	function getColumns() {
		var columns = [],
			flex = $scope.ctx.flexSheet,
			i = 0;

		if (flex) {
			for (; i < flex.columns.length; i++) {
				columns.push('Column ' + wijmo.grid.sheet.FlexSheet.convertNumberToAlpha(i));
			}
		}

		return columns;
	}

	// Safe invoking the $apply function.
	function safeApply(property) {
		if (!$scope.$root.$$phase) {
			$scope.$apply(property);
		}
	};
})