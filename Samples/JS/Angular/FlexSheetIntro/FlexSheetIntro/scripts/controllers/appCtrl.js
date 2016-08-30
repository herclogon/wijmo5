'use strict';

angular.module('app').controller('appCtrl', function ($scope, dataService) {
    var applyFillColor = false,
		updatingSelection = false;

    $scope.ctx = {
        data: dataService.getData(50),
        sortSheet: null,
        formatSheet: null,
        mergeCellSheet: null,
        frozenSheet: null,
        undoSheet: null,
        formulaSheet: null,
        customFuncSheet: null,
        excelIOSheet: null,
        sortManager: null,
        columns: null,
        format: '',
        cboFontName: null,
        cboFontSize: null,
        sheetName: '',
        selectionFormatState: {},
        mergeState: {},
        isFrozen: false,
        undoStack: null,
        currentCellData: '',
        fileName: '',
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
    }

    // initialize the flexSheet control when document ready.
    $scope.initialized = function (s) {
        s.deferUpdate(function () {
            var column;

            for (var i = 0; i < s.sheets.length; i++) {
                s.sheets.selectedIndex = i;
                if (s.sheets[i].name === 'Country') {
                    initDataMapForBindingSheet(s);
                }
            }
            s.selectedSheetIndex = 0;
        });
    };

    $scope.$watch('ctx.sortSheet', function () {
        var flexSheet = $scope.ctx.sortSheet;
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

    // get the columns with the column header text for the column selection for sort setting.
    function getColumns() {
        var columns = [],
			flex = $scope.ctx.sortSheet,
			i = 0;
        if (flex) {
            for (; i < flex.columns.length; i++) {
                columns.push('Column ' + wijmo.grid.sheet.FlexSheet.convertNumberToAlpha(i));
            }
        }
        return columns;
    }

    $scope.$watch('ctx.formatSheet', function () {
        var flexSheet = $scope.ctx.formatSheet;
        if (flexSheet) {
            flexSheet.selectionChanged.addHandler(function (sender, args) {
                updateSelection(args.range);
                $scope.ctx.selectionFormatState = flexSheet.getSelectionFormatState();
                safeApply('ctx.selectionFormatState');
            });
        }
    });

    $scope.initializeFormatSheet = function (flexSheet) {
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
                    $scope.ctx.formatSheet.applyCellsStyle({ backgroundColor: colorPicker.value });
                } else {
                    $scope.ctx.formatSheet.applyCellsStyle({ color: colorPicker.value });
                }
            });
        }
    });

    $scope.$watch('ctx.format', function () {
        var flexSheet = $scope.ctx.formatSheet;
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
                    $scope.ctx.formatSheet.applyCellsStyle({ fontFamily: $scope.ctx.cboFontName.selectedItem.value });
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
                    $scope.ctx.formatSheet.applyCellsStyle({ fontSize: $scope.ctx.cboFontSize.selectedItem.value });
                }
            });
        }
    })

    // apply the text alignment for the selected cells
    $scope.applyCellTextAlign = function (textAlign) {
        $scope.ctx.formatSheet.applyCellsStyle({ textAlign: textAlign });
        $scope.ctx.selectionFormatState.textAlign = textAlign;
    };

    // apply the bold font weight for the selected cells
    $scope.applyBoldStyle = function () {
        $scope.ctx.formatSheet.applyCellsStyle({ fontWeight: $scope.ctx.selectionFormatState.isBold ? 'none' : 'bold' });
        $scope.ctx.selectionFormatState.isBold = !$scope.ctx.selectionFormatState.isBold;
    };

    // apply the underline text decoration for the selected cells
    $scope.applyUnderlineStyle = function () {
        $scope.ctx.formatSheet.applyCellsStyle({ textDecoration: $scope.ctx.selectionFormatState.isUnderline ? 'none' : 'underline' });
        $scope.ctx.selectionFormatState.isUnderline = !$scope.ctx.selectionFormatState.isUnderline;
    };

    // apply the italic font style for the selected cells
    $scope.applyItalicStyle = function () {
        $scope.ctx.formatSheet.applyCellsStyle({ fontStyle: $scope.ctx.selectionFormatState.isItalic ? 'none' : 'italic' });
        $scope.ctx.selectionFormatState.isItalic = !$scope.ctx.selectionFormatState.isItalic;
    };

    // show the color picker control.
    $scope.showColorPicker = function (e, isFillColor) {
        var colorPicker = $scope.ctx.colorPicker,
			offset = cumulativeOffset(e.target);

        if (colorPicker) {
            colorPicker.hostElement.style.display = 'inline';
            colorPicker.hostElement.style.left = offset.left + 'px';
            colorPicker.hostElement.style.top = (offset.top - colorPicker.hostElement.clientHeight - 5) + 'px';
            colorPicker.hostElement.focus();
        }

        applyFillColor = isFillColor;
    };

    // Update the selection object of the scope.
    function updateSelection(sel) {
        var flexSheet = $scope.ctx.formatSheet,
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
    };

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

    $scope.$watch('ctx.mergeCellSheet', function () {
        var flexSheet = $scope.ctx.mergeCellSheet;
        if (flexSheet) {
            flexSheet.selectionChanged.addHandler(function () {
                $scope.ctx.mergeState = flexSheet.getSelectionFormatState();
                safeApply('ctx.mergeState');
            });
        }
    });

    $scope.initializeMergeCellSheet = function (flexSheet) {
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
        var flexSheet = $scope.ctx.mergeCellSheet;

        if (flexSheet) {
            flexSheet.mergeRange();
            $scope.ctx.mergeState = flexSheet.getSelectionFormatState();
            safeApply('ctx.mergeState');
        }
    }

    $scope.initializeDragDropSheet = function (flexSheet) {
        flexSheet.deferUpdate(function () {
            var colIdx,
				rowIdx;

            if (flexSheet) {
                for (colIdx = 0; colIdx < flexSheet.columns.length; colIdx++) {
                    for (rowIdx = 0; rowIdx < flexSheet.rows.length; rowIdx++) {
                        flexSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                    }
                }
                flexSheet.applyCellsStyle({ fontWeight: 'bold' }, [new wijmo.grid.CellRange(0, 0, 5, 0),
					new wijmo.grid.CellRange(6, 1, 11, 1)]);
                flexSheet.applyCellsStyle({ textDecoration: 'underline' }, [new wijmo.grid.CellRange(0, 2, 5, 2),
					new wijmo.grid.CellRange(6, 3, 11, 3)]);
                flexSheet.applyCellsStyle({ fontStyle: 'italic' }, [new wijmo.grid.CellRange(0, 4, 5, 4),
					new wijmo.grid.CellRange(6, 5, 11, 5)]);
                flexSheet.applyCellsStyle({ format: 'c2' }, [new wijmo.grid.CellRange(0, 0, 5, 7)]);
                flexSheet.applyCellsStyle({ backgroundColor: '#4488CC' }, [new wijmo.grid.CellRange(0, 0, 11, 0),
					new wijmo.grid.CellRange(0, 2, 11, 2), new wijmo.grid.CellRange(0, 4, 11, 4)]);
                flexSheet.applyCellsStyle({ color: '#CC8844' }, [new wijmo.grid.CellRange(0, 1, 11, 1),
					new wijmo.grid.CellRange(0, 3, 11, 3), new wijmo.grid.CellRange(0, 5, 11, 5)]);
                flexSheet.applyCellsStyle({ color: '#336699' }, [new wijmo.grid.CellRange(0, 6, 5, 7)]);
                flexSheet.applyCellsStyle({ backgroundColor: '#996633' }, [new wijmo.grid.CellRange(6, 6, 11, 7)]);
            }
        });
    };

    $scope.$watch('ctx.frozenSheet', function () {
        var flexSheet = $scope.ctx.frozenSheet;
        if (flexSheet) {
            flexSheet.selectedSheetChanged.addHandler(function () {
                if (flexSheet.frozenColumns > 0 || flexSheet.frozenRows > 0) {
                    $scope.ctx.isFrozen = true;
                } else {
                    $scope.ctx.isFrozen = false;
                }
                safeApply('ctx.isFrozen');
            });
        }
    });

    $scope.initializeFrozenSheet = function (flexSheet) {
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
    };

    $scope.freezeCells = function () {
        var flexSheet = $scope.ctx.frozenSheet;
        if (flexSheet) {
            flexSheet.freezeAtCursor();

            if (flexSheet.frozenColumns > 0 || flexSheet.frozenRows > 0) {
                $scope.ctx.isFrozen = true;
            } else {
                $scope.ctx.isFrozen = false;
            }
        }
    };

    $scope.initializeUndoSheet = function (flexSheet) {
        flexSheet.deferUpdate(function () {
            var colIdx,
				rowIdx;

            $scope.ctx.undoStack = flexSheet.undoStack;
            flexSheet.undoStack.undoStackChanged.addHandler(function () {
                safeApply('ctx.undoStack');
            });
            // initialize the dataMap for the bound sheet.
            if (flexSheet) {
                for (colIdx = 0; colIdx < flexSheet.columns.length; colIdx++) {
                    for (rowIdx = 0; rowIdx < flexSheet.rows.length; rowIdx++) {
                        flexSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                    }
                }
            }
        });
    };

    // Excutes undo command.
    $scope.undo = function () {
        $scope.ctx.undoSheet.undo();
    };

    // Excutes redo command.
    $scope.redo = function () {
        $scope.ctx.undoSheet.redo();
    };

    $scope.initializeFormulaSheet = function (flexSheet) {
        flexSheet.selectionChanged.addHandler(function (sender, args) {
            var selection = args.range;
            if (selection.isValid) {
                $scope.ctx.currentCellData = $scope.ctx.formulaSheet.getCellData(selection.row, selection.col, true);
                safeApply('ctx.currentCellData');
            }
        });
        flexSheet.deferUpdate(function () {
            generateExpenceReport(flexSheet);
        });
    };

    // Set content for the use case template sheet.
    function generateExpenceReport(flexSheet) {
        flexSheet.setCellData(1, 1, 'Expense Report');
        flexSheet.setCellData(3, 1, 'Date');
        flexSheet.setCellData(3, 2, 'Fuel');
        flexSheet.setCellData(3, 3, 'Parking(per hour)');
        flexSheet.setCellData(3, 4, 'Parking(hours)');
        flexSheet.setCellData(3, 5, 'Total');;
        flexSheet.setCellData(9, 1, 'Total');
        flexSheet.setCellData(10, 4, 'Subtotal');
        flexSheet.setCellData(11, 4, 'Cash Advances');
        flexSheet.setCellData(12, 4, 'Total');

        setExpenseData(flexSheet);

        applyStyleForExpenceReport(flexSheet);
    }

    // set expense detail data for the use case template sheet.
    function setExpenseData(flexSheet) {
        var rowIndex,
			colIndex,
			value;

        for (rowIndex = 4; rowIndex <= 8; rowIndex++) {
            for (colIndex = 2; colIndex <= 5; colIndex++) {
                if (colIndex === 5) {
                    flexSheet.setCellData(rowIndex, colIndex, '=C' + (rowIndex + 1) + ' + Product(C' + (rowIndex + 1) + ':D' + (rowIndex + 1) + ')');
                } else if (colIndex === 4 ) {
                    value = parseInt(7 * Math.random()) + 1;
                    flexSheet.setCellData(rowIndex, colIndex, value);
                } else if (colIndex === 3) {
                    flexSheet.setCellData(rowIndex, colIndex, 3.75);
                } else {
                    value = 200 * Math.random();
                    flexSheet.setCellData(rowIndex, colIndex, value);
                }
            }
        }

        flexSheet.setCellData(4, 1, '2015-3-1');
        flexSheet.setCellData(5, 1, '2015-3-3');
        flexSheet.setCellData(6, 1, '2015-3-7');
        flexSheet.setCellData(7, 1, '2015-3-11');
        flexSheet.setCellData(8, 1, '2015-3-18');
        flexSheet.setCellData(9, 2, '=Sum(C5:C9)');
        flexSheet.setCellData(9, 4, '=Sum(Product(D5:E5), Product(D6:E6), Product(D7:E7), Product(D8:E8), Product(D9:E9))');
        flexSheet.setCellData(9, 5, '=Sum(F5:F9)');
        flexSheet.setCellData(10, 5, '=F13-F12');
        flexSheet.setCellData(11, 5, 800);
        flexSheet.setCellData(12, 5, '=F10');
    }

    // Apply styles for the use case template sheet.
    function applyStyleForExpenceReport(flexSheet) {
        flexSheet.columns[0].width = 10;
        flexSheet.columns[1].width = 90;
        flexSheet.columns[2].width = 80;
        flexSheet.columns[3].width = 140;
        flexSheet.columns[4].width = 120;
        flexSheet.columns[5].width = 80;
        for (var i = 2; i <= 3; i++) {
            flexSheet.columns[i].format = 'c2';
        }
        flexSheet.columns[5].format = 'c2';
        flexSheet.rows[1].height = 45;
        flexSheet.applyCellsStyle({
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#696964'
        }, [new wijmo.grid.CellRange(1, 1, 1, 3)]);
        flexSheet.mergeRange(new wijmo.grid.CellRange(1, 1, 1, 3));
        flexSheet.applyCellsStyle({
            fontWeight: 'bold',
            backgroundColor: '#FAD9CD',
        }, [new wijmo.grid.CellRange(3, 1, 3, 5),
			new wijmo.grid.CellRange(9, 1, 9, 5)]);
        flexSheet.applyCellsStyle({
            textAlign: 'center'
        }, [new wijmo.grid.CellRange(3, 1, 3, 5)]);
        flexSheet.applyCellsStyle({
            format: 'c2'
        }, [new wijmo.grid.CellRange(9, 4, 9, 4)]);
        flexSheet.applyCellsStyle({
            backgroundColor: '#F4B19B'
        }, [new wijmo.grid.CellRange(4, 1, 8, 5)]);
        flexSheet.applyCellsStyle({
            fontWeight: 'bold',
            textAlign: 'right'
        }, [new wijmo.grid.CellRange(10, 4, 12, 4)]);
    }

    $scope.initializeCustomFuncSheet = function (flexSheet) {
        flexSheet.addCustomFunction('customSumProduct', function (range1, range2) {
            var flexSheet = $scope.ctx.customFuncSheet,
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
    };

    $scope.initializeExcelIOSheet = function (flexSheet) {
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
    };

    $scope.load = function () {
        var flexSheet = $scope.ctx.excelIOSheet,
			fileInput = document.getElementById('importFile');
        if (flexSheet && fileInput.files[0]) {
            flexSheet.load(fileInput.files[0]);
        }
    };

    $scope.save = function () {
        var flexSheet = $scope.ctx.excelIOSheet,
			fileName;
        if (flexSheet) {
            if (!!$scope.ctx.fileName) {
                fileName = $scope.ctx.fileName;
            } else {
                fileName = 'FlexSheet.xlsx';
            }
            flexSheet.save(fileName);
        }
    };

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

    // Safe invoking the $apply function.
    function safeApply(property) {
        if (!$scope.$root.$$phase) {
            $scope.$apply(property);
        }
    };
});