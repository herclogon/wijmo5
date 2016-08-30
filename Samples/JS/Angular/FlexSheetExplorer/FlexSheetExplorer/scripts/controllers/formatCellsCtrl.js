'use strict';

angular.module('app').controller('formatCellsCtrl', function ($scope) {
	var applyFillColor = false,
		updatingSelection = false;

	$scope.ctx = {
		format: '',
		flexSheet: null,
		cboFontName: null,
		cboFontSize: null,
		sheetName: '',
		selectionFormatState: {},
		fonts: [{ name: 'Arial', value: 'Arial, Helvetica, sans-serif' },
			{ name: 'Arial Black', value: '"Arial Black", Gadget, sans-serif' },
			{ name: 'Comic Sans MS', value: '"Comic Sans MS", cursive, sans-serif' },
			{ name: 'Courier New', value: '"Courier New", Courier, monospace' },
			{ name: 'Georgia', value: 'Georgia, serif' },
			{ name: 'Impact', value: 'Impact, Charcoal, sans-serif' },
			{ name: 'Lucida Console', value: '"Lucida Console", Monaco, monospace' },
			{ name: 'Lucida Sans Unicode', value: '"Lucida Sans Unicode", "Lucida Grande", sans-serif' },
			{ name: 'Palatino Linotype', value: '"Palatino Linotype", "Book Antiqua", Palatino, serif' },
			{ name: 'Tahoma', value: 'Tahoma, Geneva, sans-serif' },
			{ name: 'Segoe UI', value: '"Segoe UI", "Roboto", sans-serif' },
			{ name: 'Times New Roman', value: '"Times New Roman", Times, serif' },
			{ name: 'Trebuchet MS', value: '"Trebuchet MS", Helvetica, sans-serif' },
			{ name: 'Verdana', value: 'Verdana, Geneva, sans-serif' }],
		fontSizeList: [{ name: '8', value: '8px' }, { name: '9', value: '9px' }, { name: '10', value: '10px' },
			{ name: '11', value: '11px' }, { name: '12', value: '12px' }, { name: '14', value: '14px' },
			{ name: '16', value: '16px' }, { name: '18', value: '18px' }, { name: '20', value: '20px' },
			{ name: '22', value: '22px' }, { name: '24', value: '24px' }]
	};

	$scope.$watch('ctx.flexSheet', function () {
		var flexSheet = $scope.ctx.flexSheet;
		if (flexSheet) {
			flexSheet.selectionChanged.addHandler(function (sender, args) {
				updateSelection(args.range);
				$scope.ctx.selectionFormatState = flexSheet.getSelectionFormatState();
				safeApply('ctx.selectionFormatState');
			});
		}
	});

	$scope.initialized = function (flexSheet) {
		flexSheet.deferUpdate(function () {
			var sheetIdx,
				sheetName,
				colIdx,
				rowIdx,
				date;

			if (flexSheet) {
				for (sheetIdx = 0; sheetIdx < flexSheet.sheets.length; sheetIdx++) {
					flexSheet.selectedSheetIndex = sheetIdx;
					sheetName = flexSheet.selectedSheet.name;
					for (colIdx = 0; colIdx < flexSheet.columns.length; colIdx++) {
						for (rowIdx = 0; rowIdx < flexSheet.rows.length; rowIdx++) {
							if (sheetName === 'Number') {
								flexSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
							} else {
								date = new Date(2015, colIdx, rowIdx + 1);
								flexSheet.setCellData(rowIdx, colIdx, date);
							}
						}
					}
				}
				flexSheet.selectedSheetIndex = 0;
				updateSelection(flexSheet.selection);
			}
		});
	};

	// initialize the colorPicker control.
	$scope.$watch('ctx.colorPicker', function () {
		var colorPicker = $scope.ctx.colorPicker,
			ua = window.navigator.userAgent,
			blurEvt;

		if (colorPicker) {
			// if the browser is firefox, we should bind the blur event. (TFS #124387)
			// if the browser is IE, we should bind the focusout event. (TFS #124500)
			blurEvt = /firefox/i.test(ua) ? 'blur' : 'focusout';
			// Hide the color picker control when it lost the focus.
			colorPicker.hostElement.addEventListener(blurEvt, function () {
				setTimeout(function () {
					if (!colorPicker.containsFocus()) {
						applyFillColor = false;
						colorPicker.hostElement.style.display = 'none';
					}
				}, 0);
			});

			// Initialize the value changed event handler for the color picker control.
			colorPicker.valueChanged.addHandler(function () {
				if (applyFillColor) {
					$scope.ctx.flexSheet.applyCellsStyle({ backgroundColor: colorPicker.value });
				} else {
					$scope.ctx.flexSheet.applyCellsStyle({ color: colorPicker.value });
				}
			});
		}
	});

	$scope.$watch('ctx.format', function () {
		var flexSheet = $scope.ctx.flexSheet;
		if (flexSheet && !updatingSelection) {
			flexSheet.applyCellsStyle({ format: $scope.ctx.format });
		}
	});

	// initialize the cboFontName control.
	$scope.$watch('ctx.cboFontName', function () {
		var cboFontName = $scope.ctx.cboFontName;
		if (cboFontName) {
			cboFontName.selectedIndexChanged.addHandler(function () {
				// apply the font family for the selected cells
				if (!updatingSelection) {
					$scope.ctx.flexSheet.applyCellsStyle({ fontFamily: $scope.ctx.cboFontName.selectedItem.value });
				}
			});
		}
	});

	// initialize the cboFontSize control.
	$scope.$watch('ctx.cboFontSize', function () {
		var cboFontSize = $scope.ctx.cboFontSize;
		if (cboFontSize) {
			cboFontSize.selectedIndexChanged.addHandler(function () {
				// apply the font size for the selected cells
				if (!updatingSelection) {
					$scope.ctx.flexSheet.applyCellsStyle({ fontSize: $scope.ctx.cboFontSize.selectedItem.value });
				}
			});
		}
	})

	// apply the text alignment for the selected cells
	$scope.applyCellTextAlign = function (textAlign) {
		$scope.ctx.flexSheet.applyCellsStyle({ textAlign: textAlign });
		$scope.ctx.selectionFormatState.textAlign = textAlign;
	};

	// apply the bold font weight for the selected cells
	$scope.applyBoldStyle = function () {
		$scope.ctx.flexSheet.applyCellsStyle({ fontWeight: $scope.ctx.selectionFormatState.isBold ? 'none' : 'bold' });
		$scope.ctx.selectionFormatState.isBold = !$scope.ctx.selectionFormatState.isBold;
	};

	// apply the underline text decoration for the selected cells
	$scope.applyUnderlineStyle = function () {
		$scope.ctx.flexSheet.applyCellsStyle({ textDecoration: $scope.ctx.selectionFormatState.isUnderline ? 'none' : 'underline' });
		$scope.ctx.selectionFormatState.isUnderline = !$scope.ctx.selectionFormatState.isUnderline;
	};

	// apply the italic font style for the selected cells
	$scope.applyItalicStyle = function () {
		$scope.ctx.flexSheet.applyCellsStyle({ fontStyle: $scope.ctx.selectionFormatState.isItalic ? 'none' : 'italic' });
		$scope.ctx.selectionFormatState.isItalic = !$scope.ctx.selectionFormatState.isItalic;
	};

	// show the color picker control.
	$scope.showColorPicker = function (e, isFillColor) {
		var colorPicker = $scope.ctx.colorPicker,
			offset = cumulativeOffset(e.target);

		if (colorPicker) {
			colorPicker.hostElement.style.display = 'inline';
			colorPicker.hostElement.style.left = offset.left + 'px';
			colorPicker.hostElement.style.top = (offset.top + e.target.clientHeight + 5) + 'px';
			colorPicker.hostElement.focus();
		}

		applyFillColor = isFillColor;
	};

	// Update the selection object of the scope.
	function updateSelection(sel) {
		var flexSheet = $scope.ctx.flexSheet,
			row = flexSheet.rows[sel.row],
			rowCnt = flexSheet.rows.length,
			colCnt = flexSheet.columns.length,
			r,
			c,
			cellStyle,
			cellContent,
			cellFormat;

		updatingSelection = true;
		if (sel.row > -1 && sel.col > -1 && rowCnt > 0 && colCnt > 0
				&& sel.col < colCnt && sel.col2 < colCnt
				&& sel.row < rowCnt && sel.row2 < rowCnt) {
			r = sel.row >= rowCnt ? rowCnt - 1 : sel.row;
			c = sel.col >= colCnt ? colCnt - 1 : sel.col;
			cellContent = flexSheet.getCellData(sel.row, sel.col);
			cellStyle = flexSheet.selectedSheet.getCellStyle(sel.row, sel.col);
			if (cellStyle) {
				$scope.ctx.cboFontName.selectedIndex = checkFontfamily(cellStyle.fontFamily);
				$scope.ctx.cboFontSize.selectedIndex = checkFontSize(cellStyle.fontSize);
				cellFormat = cellStyle.format;
			} else {
				$scope.ctx.cboFontName.selectedIndex = 0;
				$scope.ctx.cboFontSize.selectedIndex = 5;
			}

			if (!!cellFormat) {
				$scope.ctx.format = cellFormat;
			} else {
				if (wijmo.isInt(cellContent)) {
					$scope.ctx.format = '0';
				} else if (wijmo.isNumber(cellContent)) {
					$scope.ctx.format = 'n2';
				} else if (wijmo.isDate(cellContent)) {
					$scope.ctx.format = 'd';
				}
			}
		}
		safeApply('ctx.format');
		updatingSelection = false;
	};

	// check font family for the font name combobox of the ribbon.
	function checkFontfamily(fontFamily) {
		var fonts = $scope.ctx.fonts,
			fontIndex = 0,
			font;

		if (!fontFamily) {
			return fontIndex;
		}

		for (; fontIndex < fonts.length; fontIndex++) {
			font = fonts[fontIndex];

			if (font.name === fontFamily || font.value === fontFamily) {
				return fontIndex;
			}
		}

		return 0;
	}

	// check font size for the font size combobox of the ribbon.
	function checkFontSize(fontSize) {
		var sizeList = $scope.ctx.fontSizeList,
			index = 0,
			size;

		if (fontSize == undefined) {
			return 5;
		}

		for (; index < sizeList.length; index++) {
			size = sizeList[index];

			if (size.value === fontSize || size.name === fontSize) {
				return index;
			}
		}

		return 5;
	}

	// Get the absolute position of the dom element.
	function cumulativeOffset(element) {
		var top = 0, left = 0, scrollTop = 0, scrollLeft = 0;

		do {
			top += element.offsetTop || 0;
			left += element.offsetLeft || 0;
			scrollTop += element.scrollTop || 0;
			scrollLeft += element.scrollLeft || 0;
			element = element.offsetParent;
		} while (element && !(element instanceof HTMLBodyElement));

		scrollTop += document.body.scrollTop || document.documentElement.scrollTop;
		scrollLeft += document.body.scrollLeft || document.documentElement.scrollLeft;

		return {
			top: top - scrollTop,
			left: left - scrollLeft
		};
	};

	// Safe invoking the $apply function.
	function safeApply(property) {
		if (!$scope.$root.$$phase) {
			$scope.$apply(property);
		}
	};
})