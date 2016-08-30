'use strict';

angular.module('app').controller('cellMergingCtrl', function ($scope) {
	$scope.ctx = {
		flexSheet: null,
		selectionFormatState: {}
	};

	$scope.$watch('ctx.flexSheet', function () {
		var flexSheet = $scope.ctx.flexSheet;
		if (flexSheet) {
			flexSheet.selectionChanged.addHandler(function () {
				$scope.ctx.selectionFormatState = flexSheet.getSelectionFormatState();
				safeApply('ctx.selectionFormatState');
			});
		}
	});

	$scope.initialized = function (flexSheet) {
		flexSheet.deferUpdate(function () {
			var colIdx,
				rowIdx;

			if (flexSheet) {
				for (colIdx = 0; colIdx < flexSheet.columns.length; colIdx++) {
					for (rowIdx = 0; rowIdx < flexSheet.rows.length; rowIdx++) {
						flexSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
					}
				}
			}
		});
	};

	$scope.mergeCells = function () {
		var flexSheet = $scope.ctx.flexSheet;

		if (flexSheet) {
			flexSheet.mergeRange();
			$scope.ctx.selectionFormatState = flexSheet.getSelectionFormatState();
			safeApply('ctx.selectionFormatState');
		}
	}

	// Safe invoking the $apply function.
	function safeApply(property) {
		if (!$scope.$root.$$phase) {
			$scope.$apply(property);
		}
	};
});