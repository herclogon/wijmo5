'use strict';

angular.module('app').controller('multipleHeadersCtrl', function ($scope, dataService) {
	$scope.ctx = {
		flexSheet: null
	}

	$scope.initialized = function (flexSheet) {
		flexSheet.deferUpdate(function () {
			var colIdx,
				rowIdx;

			// initialize the dataMap for the bound sheet.
			if (flexSheet) {
				for (colIdx = 0; colIdx < flexSheet.columns.length; colIdx++) {
					for (rowIdx = 0; rowIdx < flexSheet.rows.length; rowIdx++) {
						flexSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
					}
				}
			}
		});
	}

	$scope.addRowHeader = function () {
		var flexSheet = $scope.ctx.flexSheet;
		if (flexSheet) {
			flexSheet.rowHeaders.columns.push(new wijmo.grid.Column());
		}
	}

	$scope.removeRowHeader = function () {
		var flexSheet = $scope.ctx.flexSheet,
			colCnt;
		if (flexSheet) {
			colCnt = flexSheet.rowHeaders.columns.length;
			flexSheet.rowHeaders.columns.removeAt(colCnt - 1);
		}
	}

	$scope.addColumnHeader = function () {
		var flexSheet = $scope.ctx.flexSheet;
		if (flexSheet) {
			flexSheet.columnHeaders.rows.push(new wijmo.grid.Row());
		}
	}

	$scope.removeColumnHeader = function () {
		var flexSheet = $scope.ctx.flexSheet,
			rowCnt;
		if (flexSheet) {
			rowCnt = flexSheet.columnHeaders.rows.length;
			flexSheet.columnHeaders.rows.removeAt(rowCnt - 1);
		}
	}
})