'use strict';

angular.module('app').controller('customFuncCtrl', function ($scope) {
	$scope.ctx = {
		flexSheet: null
	};

	$scope.initialized = function (flexSheet) {
		flexSheet.addCustomFunction('customSumProduct', function (range1, range2) {
			var flexSheet = $scope.ctx.flexSheet,
				result = 0,
				val1, val2;

			if (range1.rowSpan === range2.rowSpan && range1.columnSpan === range2.columnSpan) {
				for (var rowIndex = 0; rowIndex < range1.rowSpan; rowIndex++) {
					for (var columnIndex = 0; columnIndex < range1.columnSpan; columnIndex++) {
						val1 = +flexSheet.getCellValue(range1.topRow + rowIndex, range1.leftCol + columnIndex, false);
						val2 = +flexSheet.getCellValue(range2.topRow + rowIndex, range2.leftCol + columnIndex, false);
						result += val1 * val2;
					}
				}
			}
			return result;
		}, 'Custom SumProduct Function', 2, 2);

		flexSheet.unknownFunction.addHandler(function (sender, e) {
			var result = '';
			if (e.params) {
				for (var i = 0; i < e.params.length; i++) {
					result += e.params[i];
				}
			}
			e.value = result;
		});

		flexSheet.deferUpdate(function () {
			for (var ri = 0; ri < flexSheet.rows.length; ri++) {
				for (var ci = 0; ci < 3; ci++) {
					flexSheet.setCellData(ri, ci, ri + ci);
				}
			}

			flexSheet.setCellData(0, 3, '=customSumProduct(A1:A10, B1:B10)');
			flexSheet.setCellData(1, 3, '=customFunc(1, "B", 3)');
		});

	}
})