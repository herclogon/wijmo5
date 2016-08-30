'use strict';

angular.module('app').controller('frozenCellsCtrl', function ($scope, dataService) {
	$scope.ctx = {
		isFrozen: false,
		flexSheet: null
	}

	$scope.$watch('ctx.flexSheet', function () {
		var flexSheet = $scope.ctx.flexSheet;
		if (flexSheet) {
			flexSheet.selectedSheetChanged.addHandler(function () {
				if (flexSheet.frozenColumns > 0 || flexSheet.frozenRows > 0) {
					$scope.ctx.isFrozen = true;
				} else {
					$scope.ctx.isFrozen = false;
				}

				if (!$scope.$root.$$phase) {
					$scope.$apply('ctx.isFrozen');
				}
			});
		}
	});

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

	$scope.freezeCells = function () {
		var flexSheet = $scope.ctx.flexSheet;
		if (flexSheet) {
			flexSheet.freezeAtCursor();

			if (flexSheet.frozenColumns > 0 || flexSheet.frozenRows > 0) {
				$scope.ctx.isFrozen = true;
			} else {
				$scope.ctx.isFrozen = false;
			}
		}
	}
})