///<reference path="../typings/globals/core-js/index.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Angular
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var wjInput = require('wijmo/wijmo.angular2.input');
var wjFlexSheet = require('wijmo/wijmo.angular2.grid.sheet');
var AppTab_1 = require('./components/AppTab');
var DataSvc_1 = require('./services/DataSvc');
'use strict';
// The Explorer application root component.
var AppCmp = (function () {
    function AppCmp(dataSvc) {
        this.selection = {
            content: '',
            position: '',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '8px'
        };
        this.isFrozen = false;
        this._format = '';
        this._updatingSelection = false;
        this._applyFillColor = false;
        this.dataSvc = dataSvc;
        this.data = dataSvc.getData(50);
        this.fonts = [{ name: 'Arial', value: 'Arial, Helvetica, sans-serif' },
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
            { name: 'Verdana', value: 'Verdana, Geneva, sans-serif' }];
        this.fontSizeList = [{ name: '8', value: '8px' }, { name: '9', value: '9px' }, { name: '10', value: '10px' },
            { name: '11', value: '11px' }, { name: '12', value: '12px' }, { name: '14', value: '14px' },
            { name: '16', value: '16px' }, { name: '18', value: '18px' }, { name: '20', value: '20px' },
            { name: '22', value: '22px' }, { name: '24', value: '24px' }];
        this.selectionFormatState = {};
        this.mergeState = {};
    }
    Object.defineProperty(AppCmp.prototype, "format", {
        // Gets or sets _format for the formatSheet.
        get: function () {
            return this._format;
        },
        set: function (value) {
            if (this._format !== value) {
                this._format = value;
                if (!this._updatingSelection) {
                    this.formatSheet.applyCellsStyle({ format: this._format });
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    AppCmp.prototype.flexSheetInit = function (flexSheetIntro) {
        var self = this;
        if (flexSheetIntro) {
            flexSheetIntro.deferUpdate(function () {
                flexSheetIntro.selectedSheetIndex = 0;
                flexSheetIntro.selectedSheet.itemsSource = self.data;
                self._initDataMapForBindingSheet(flexSheetIntro);
            });
        }
    };
    AppCmp.prototype.sortSheetInit = function (sortSheet) {
        var self = this;
        if (sortSheet) {
            sortSheet.deferUpdate(function () {
                sortSheet.selectedSheetIndex = 0;
                sortSheet.selectedSheet.itemsSource = self.data;
                self._initDataMapForBindingSheet(sortSheet);
                self.sortManager = sortSheet.sortManager;
                self.columns = self._getColumns(sortSheet);
            });
            sortSheet.selectedSheetChanged.addHandler(function () {
                self.columns = self._getColumns(sortSheet);
                if (!self.sortManager) {
                    self.sortManager = sortSheet.sortManager;
                }
            });
        }
    };
    AppCmp.prototype.formatSheetInit = function (formatSheet) {
        var self = this;
        if (formatSheet) {
            formatSheet.deferUpdate(function () {
                var sheetIdx, sheetName, colIdx, rowIdx, date;
                for (sheetIdx = 0; sheetIdx < formatSheet.sheets.length; sheetIdx++) {
                    formatSheet.selectedSheetIndex = sheetIdx;
                    sheetName = formatSheet.selectedSheet.name;
                    for (colIdx = 0; colIdx < formatSheet.columns.length; colIdx++) {
                        for (rowIdx = 0; rowIdx < formatSheet.rows.length; rowIdx++) {
                            if (sheetName === 'Number') {
                                formatSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                            }
                            else {
                                date = new Date(2015, colIdx, rowIdx + 1);
                                formatSheet.setCellData(rowIdx, colIdx, date);
                            }
                        }
                    }
                }
                formatSheet.selectedSheetIndex = 0;
                self._updateSelection(formatSheet, formatSheet.selection);
            });
            formatSheet.selectionChanged.addHandler(function (sender, args) {
                self._updateSelection(formatSheet, args.range);
                self.selectionFormatState = formatSheet.getSelectionFormatState();
            });
        }
    };
    AppCmp.prototype.mergeCellSheetInit = function (mergeCellSheet) {
        var self = this;
        if (mergeCellSheet) {
            mergeCellSheet.deferUpdate(function () {
                var colIdx, rowIdx;
                for (colIdx = 0; colIdx < mergeCellSheet.columns.length; colIdx++) {
                    for (rowIdx = 0; rowIdx < mergeCellSheet.rows.length; rowIdx++) {
                        mergeCellSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                    }
                }
            });
            mergeCellSheet.selectionChanged.addHandler(function () {
                self.mergeState = mergeCellSheet.getSelectionFormatState();
            });
        }
    };
    AppCmp.prototype.dragDropSheetInit = function (dragDropSheet) {
        var self = this;
        if (dragDropSheet) {
            dragDropSheet.deferUpdate(function () {
                var colIdx, rowIdx;
                for (colIdx = 0; colIdx < dragDropSheet.columns.length; colIdx++) {
                    for (rowIdx = 0; rowIdx < dragDropSheet.rows.length; rowIdx++) {
                        dragDropSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                    }
                }
                dragDropSheet.applyCellsStyle({ fontWeight: 'bold' }, [new wijmo.grid.CellRange(0, 0, 5, 0),
                    new wijmo.grid.CellRange(6, 1, 11, 1)]);
                dragDropSheet.applyCellsStyle({ textDecoration: 'underline' }, [new wijmo.grid.CellRange(0, 2, 5, 2),
                    new wijmo.grid.CellRange(6, 3, 11, 3)]);
                dragDropSheet.applyCellsStyle({ fontStyle: 'italic' }, [new wijmo.grid.CellRange(0, 4, 5, 4),
                    new wijmo.grid.CellRange(6, 5, 11, 5)]);
                dragDropSheet.applyCellsStyle({ format: 'c2' }, [new wijmo.grid.CellRange(0, 0, 5, 7)]);
                dragDropSheet.applyCellsStyle({ backgroundColor: '#4488CC' }, [new wijmo.grid.CellRange(0, 0, 11, 0),
                    new wijmo.grid.CellRange(0, 2, 11, 2), new wijmo.grid.CellRange(0, 4, 11, 4)]);
                dragDropSheet.applyCellsStyle({ color: '#CC8844' }, [new wijmo.grid.CellRange(0, 1, 11, 1),
                    new wijmo.grid.CellRange(0, 3, 11, 3), new wijmo.grid.CellRange(0, 5, 11, 5)]);
                dragDropSheet.applyCellsStyle({ color: '#336699' }, [new wijmo.grid.CellRange(0, 6, 5, 7)]);
                dragDropSheet.applyCellsStyle({ backgroundColor: '#996633' }, [new wijmo.grid.CellRange(6, 6, 11, 7)]);
            });
        }
    };
    AppCmp.prototype.frozenSheetInit = function (frozenSheet) {
        var self = this;
        if (frozenSheet) {
            frozenSheet.deferUpdate(function () {
                var colIdx, rowIdx;
                for (colIdx = 0; colIdx < frozenSheet.columns.length; colIdx++) {
                    for (rowIdx = 0; rowIdx < frozenSheet.rows.length; rowIdx++) {
                        frozenSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                    }
                }
            });
            frozenSheet.selectedSheetChanged.addHandler(function () {
                if (frozenSheet.frozenColumns > 0 || frozenSheet.frozenRows > 0) {
                    self.isFrozen = true;
                }
                else {
                    self.isFrozen = false;
                }
            });
        }
    };
    AppCmp.prototype.undoSheetInit = function (undoSheet) {
        var self = this;
        if (undoSheet) {
            undoSheet.deferUpdate(function () {
                var colIdx, rowIdx;
                self.undoStack = undoSheet.undoStack;
                for (colIdx = 0; colIdx < undoSheet.columns.length; colIdx++) {
                    for (rowIdx = 0; rowIdx < undoSheet.rows.length; rowIdx++) {
                        undoSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                    }
                }
            });
        }
    };
    AppCmp.prototype.formulaSheetInit = function (formulaSheet) {
        var self = this;
        if (formulaSheet) {
            formulaSheet.selectionChanged.addHandler(function (sender, args) {
                var selection = args.range;
                if (selection.isValid) {
                    self.currentCellData = formulaSheet.getCellData(selection.row, selection.col, true);
                }
            });
            formulaSheet.deferUpdate(function () {
                self._generateExpenceReport(formulaSheet);
            });
        }
    };
    AppCmp.prototype.customFuncSheetInit = function (customFuncSheet) {
        var self = this;
        if (customFuncSheet) {
            customFuncSheet.addCustomFunction('customSumProduct', function (range1, range2) {
                var flexSheet = customFuncSheet, result = 0, val1, val2;
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
            customFuncSheet.unknownFunction.addHandler(function (sender, e) {
                var result = '';
                if (e.params) {
                    for (var i = 0; i < e.params.length; i++) {
                        result += e.params[i];
                    }
                }
                e.value = result;
            });
            customFuncSheet.deferUpdate(function () {
                for (var ri = 0; ri < customFuncSheet.rows.length; ri++) {
                    for (var ci = 0; ci < 3; ci++) {
                        customFuncSheet.setCellData(ri, ci, ri + ci);
                    }
                }
                customFuncSheet.setCellData(0, 3, '=customSumProduct(A1:A10, B1:B10)');
                customFuncSheet.setCellData(1, 3, '=customFunc(1, "B", 3)');
            });
        }
    };
    AppCmp.prototype.excelIOSheetInit = function (excelIOSheet) {
        var self = this;
        if (excelIOSheet) {
            excelIOSheet.deferUpdate(function () {
                var sheetIdx, sheetName, colIdx, rowIdx;
                // initialize the dataMap for the bound sheet.
                if (excelIOSheet) {
                    for (sheetIdx = 0; sheetIdx < excelIOSheet.sheets.length; sheetIdx++) {
                        excelIOSheet.selectedSheetIndex = sheetIdx;
                        sheetName = excelIOSheet.selectedSheet.name;
                        if (sheetName === 'Country') {
                            excelIOSheet.selectedSheet.itemsSource = self.data;
                            self._initDataMapForBindingSheet(excelIOSheet);
                        }
                        else {
                            for (colIdx = 0; colIdx < excelIOSheet.columns.length; colIdx++) {
                                for (rowIdx = 0; rowIdx < excelIOSheet.rows.length; rowIdx++) {
                                    excelIOSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                                }
                            }
                        }
                    }
                    excelIOSheet.selectedSheetIndex = 0;
                }
            });
        }
    };
    AppCmp.prototype.cboFontNameInit = function (cboFontName) {
        var self = this;
        if (cboFontName) {
            cboFontName.selectedIndexChanged.addHandler(function () {
                // apply the font family for the selected cells
                if (!self._updatingSelection) {
                    self.formatSheet.applyCellsStyle({ fontFamily: cboFontName.selectedItem.value });
                }
            });
        }
    };
    AppCmp.prototype.cboFontSizeInit = function (cboFontSize) {
        var self = this;
        if (cboFontSize) {
            cboFontSize.selectedIndexChanged.addHandler(function () {
                // apply the font size for the selected cells
                if (!self._updatingSelection) {
                    self.formatSheet.applyCellsStyle({ fontSize: cboFontSize.selectedItem.value });
                }
            });
        }
    };
    AppCmp.prototype.colorPickerInit = function (colorPicker) {
        var self = this, ua = window.navigator.userAgent, blurEvt;
        if (colorPicker) {
            // if the browser is firefox, we should bind the blur event. (TFS #124387)
            // if the browser is IE, we should bind the focusout event. (TFS #124500)
            blurEvt = /firefox/i.test(ua) ? 'blur' : 'focusout';
            // Hide the color picker control when it lost the focus.
            colorPicker.hostElement.addEventListener(blurEvt, function () {
                setTimeout(function () {
                    if (!colorPicker.containsFocus()) {
                        self._applyFillColor = false;
                        colorPicker.hostElement.style.display = 'none';
                    }
                }, 0);
            });
            // Initialize the value changed event handler for the color picker control.
            colorPicker.valueChanged.addHandler(function () {
                if (self._applyFillColor) {
                    self.formatSheet.applyCellsStyle({ backgroundColor: colorPicker.value });
                }
                else {
                    self.formatSheet.applyCellsStyle({ color: colorPicker.value });
                }
            });
        }
    };
    // commit the sorts
    AppCmp.prototype.commitSort = function () {
        this.sortManager.commitSort();
    };
    ;
    // cancel the sorts
    AppCmp.prototype.cancelSort = function () {
        this.sortManager.cancelSort();
    };
    ;
    // add new sort level
    AppCmp.prototype.addSortLevel = function () {
        this.sortManager.addSortLevel();
    };
    ;
    // delete current sort level
    AppCmp.prototype.deleteSortLevel = function () {
        this.sortManager.deleteSortLevel();
    };
    ;
    // copy a new sort level by current sort level setting.
    AppCmp.prototype.copySortLevel = function () {
        this.sortManager.copySortLevel();
    };
    ;
    // move the sort level
    AppCmp.prototype.moveSortLevel = function (offset) {
        this.sortManager.moveSortLevel(offset);
    };
    ;
    // apply column index property for sort item
    AppCmp.prototype.applySortColumnIndex = function (e, sortItem) {
        sortItem.columnIndex = +e.target.value;
    };
    // apply asceding property for sort item
    AppCmp.prototype.applySortAscending = function (e, sortItem) {
        if (e.target.value === 'true') {
            sortItem.ascending = true;
        }
        else {
            sortItem.ascending = false;
        }
    };
    // apply the text alignment for the selected cells
    AppCmp.prototype.applyCellTextAlign = function (textAlign) {
        if (this.formatSheet) {
            this.formatSheet.applyCellsStyle({ textAlign: textAlign });
            this.selectionFormatState.textAlign = textAlign;
        }
    };
    // apply the bold font weight for the selected cells
    AppCmp.prototype.applyBoldStyle = function () {
        if (this.formatSheet) {
            this.formatSheet.applyCellsStyle({ fontWeight: this.selectionFormatState.isBold ? 'none' : 'bold' });
            this.selectionFormatState.isBold = !this.selectionFormatState.isBold;
        }
    };
    // apply the underline text decoration for the selected cells
    AppCmp.prototype.applyUnderlineStyle = function () {
        if (this.formatSheet) {
            this.formatSheet.applyCellsStyle({ textDecoration: this.selectionFormatState.isUnderline ? 'none' : 'underline' });
            this.selectionFormatState.isUnderline = !this.selectionFormatState.isUnderline;
        }
    };
    // apply the italic font style for the selected cells
    AppCmp.prototype.applyItalicStyle = function () {
        if (this.formatSheet) {
            this.formatSheet.applyCellsStyle({ fontStyle: this.selectionFormatState.isItalic ? 'none' : 'italic' });
            this.selectionFormatState.isItalic = !this.selectionFormatState.isItalic;
        }
    };
    // show the color picker control.
    AppCmp.prototype.showColorPicker = function (e, isFillColor) {
        var offset = this._cumulativeOffset(e.target);
        if (this.colorPicker) {
            this.colorPicker.hostElement.style.display = 'inline';
            this.colorPicker.hostElement.style.left = offset.left + 'px';
            this.colorPicker.hostElement.style.top = (offset.top - this.colorPicker.hostElement.clientHeight - 5) + 'px';
            this.colorPicker.hostElement.focus();
        }
        this._applyFillColor = isFillColor;
    };
    ;
    AppCmp.prototype.mergeCells = function () {
        if (this.mergeCellSheet) {
            this.mergeCellSheet.mergeRange();
            this.mergeState = this.mergeCellSheet.getSelectionFormatState();
        }
    };
    AppCmp.prototype.freezeCells = function () {
        if (this.frozenSheet) {
            this.frozenSheet.freezeAtCursor();
            if (this.frozenSheet.frozenColumns > 0 || this.frozenSheet.frozenRows > 0) {
                this.isFrozen = true;
            }
            else {
                this.isFrozen = false;
            }
        }
    };
    // Excutes undo command.
    AppCmp.prototype.undo = function () {
        this.undoSheet.undo();
    };
    // Excutes redo command.
    AppCmp.prototype.redo = function () {
        this.undoSheet.redo();
    };
    // Load xlsx file to FlexSheet.
    AppCmp.prototype.load = function () {
        var flexSheet = this.excelIOSheet, fileInput = document.getElementById('importFile');
        if (flexSheet && fileInput.files[0]) {
            flexSheet.load(fileInput.files[0]);
        }
    };
    // Save FlexSheet to xlsx file.
    AppCmp.prototype.save = function () {
        var flexSheet = this.excelIOSheet, fileName;
        if (flexSheet) {
            if (!!this.fileName) {
                fileName = this.fileName;
            }
            else {
                fileName = 'FlexSheet.xlsx';
            }
            flexSheet.save(fileName);
        }
    };
    AppCmp.prototype._getColumns = function (flexSheet) {
        var columns = [], i = 0;
        if (flexSheet) {
            for (; i < flexSheet.columns.length; i++) {
                columns.push('Column ' + wijmo.grid.sheet.FlexSheet.convertNumberToAlpha(i));
            }
        }
        return columns;
    };
    // initialize the dataMap for the bound sheet.
    AppCmp.prototype._initDataMapForBindingSheet = function (flexSheet) {
        var column;
        if (flexSheet) {
            column = flexSheet.columns.getColumn('countryId');
            if (column && !column.dataMap) {
                column.dataMap = this._buildDataMap(this.dataSvc.countries);
            }
            column = flexSheet.columns.getColumn('productId');
            if (column && !column.dataMap) {
                column.width = 100;
                column.dataMap = this._buildDataMap(this.dataSvc.products);
            }
        }
    };
    // build a data map from a string array using the indices as keys
    AppCmp.prototype._buildDataMap = function (items) {
        var map = [];
        for (var i = 0; i < items.length; i++) {
            map.push({ key: i, value: items[i] });
        }
        return new wijmo.grid.DataMap(map, 'key', 'value');
    };
    // Update the selection object of the scope.
    AppCmp.prototype._updateSelection = function (flexSheet, sel) {
        var row = flexSheet.rows[sel.row], rowCnt = flexSheet.rows.length, colCnt = flexSheet.columns.length, r, c, cellStyle, cellContent, cellFormat;
        this._updatingSelection = true;
        if (sel.row > -1 && sel.col > -1 && rowCnt > 0 && colCnt > 0
            && sel.col < colCnt && sel.col2 < colCnt
            && sel.row < rowCnt && sel.row2 < rowCnt) {
            r = sel.row >= rowCnt ? rowCnt - 1 : sel.row;
            c = sel.col >= colCnt ? colCnt - 1 : sel.col;
            cellContent = flexSheet.getCellData(sel.row, sel.col, false);
            cellStyle = flexSheet.selectedSheet.getCellStyle(sel.row, sel.col);
            if (cellStyle) {
                this.cboFontName.selectedIndex = this._checkFontfamily(cellStyle.fontFamily);
                this.cboFontSize.selectedIndex = this._checkFontSize(cellStyle.fontSize);
                cellFormat = cellStyle.format;
            }
            else {
                this.cboFontName.selectedIndex = 0;
                this.cboFontSize.selectedIndex = 5;
            }
            if (!!cellFormat) {
                this.format = cellFormat;
            }
            else {
                if (wijmo.isInt(cellContent)) {
                    this.format = '0';
                }
                else if (wijmo.isNumber(cellContent)) {
                    this.format = 'n2';
                }
                else if (wijmo.isDate(cellContent)) {
                    this.format = 'd';
                }
            }
        }
        this._updatingSelection = false;
    };
    // check font family for the font name combobox of the ribbon.
    AppCmp.prototype._checkFontfamily = function (fontFamily) {
        var fonts = this.fonts, fontIndex = 0, font;
        if (!fontFamily) {
            return fontIndex;
        }
        for (; fontIndex < fonts.length; fontIndex++) {
            font = fonts[fontIndex];
            if (font.name === fontFamily || font.value === fontFamily) {
                return fontIndex;
            }
        }
        return 10;
    };
    // check font size for the font size combobox of the ribbon.
    AppCmp.prototype._checkFontSize = function (fontSize) {
        var sizeList = this.fontSizeList, index = 0, size;
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
    AppCmp.prototype._cumulativeOffset = function (element) {
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
    // Set content for the use case template sheet.
    AppCmp.prototype._generateExpenceReport = function (flexSheet) {
        flexSheet.setCellData(1, 1, 'Expense Report');
        flexSheet.setCellData(3, 1, 'Date');
        flexSheet.setCellData(3, 2, 'Fuel');
        flexSheet.setCellData(3, 3, 'Parking(per hour)');
        flexSheet.setCellData(3, 4, 'Parking(hours)');
        flexSheet.setCellData(3, 5, 'Total');
        ;
        flexSheet.setCellData(9, 1, 'Total');
        flexSheet.setCellData(10, 4, 'Subtotal');
        flexSheet.setCellData(11, 4, 'Cash Advances');
        flexSheet.setCellData(12, 4, 'Total');
        this._setExpenseData(flexSheet);
        this._applyStyleForExpenceReport(flexSheet);
    };
    // set expense detail data for the use case template sheet.
    AppCmp.prototype._setExpenseData = function (flexSheet) {
        var rowIndex, colIndex, value;
        for (rowIndex = 4; rowIndex <= 8; rowIndex++) {
            for (colIndex = 2; colIndex <= 5; colIndex++) {
                if (colIndex === 5) {
                    flexSheet.setCellData(rowIndex, colIndex, '=C' + (rowIndex + 1) + ' + Product(C' + (rowIndex + 1) + ':D' + (rowIndex + 1) + ')');
                }
                else if (colIndex === 4) {
                    value = Math.ceil(7 * Math.random());
                    flexSheet.setCellData(rowIndex, colIndex, value);
                }
                else if (colIndex === 3) {
                    flexSheet.setCellData(rowIndex, colIndex, 3.75);
                }
                else {
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
    };
    // Apply styles for the use case template sheet.
    AppCmp.prototype._applyStyleForExpenceReport = function (flexSheet) {
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
    };
    __decorate([
        core_1.ViewChild('flexSheetIntro')
    ], AppCmp.prototype, "flexSheetIntro", void 0);
    __decorate([
        core_1.ViewChild('sortSheet')
    ], AppCmp.prototype, "sortSheet", void 0);
    __decorate([
        core_1.ViewChild('formatSheet')
    ], AppCmp.prototype, "formatSheet", void 0);
    __decorate([
        core_1.ViewChild('mergeCellSheet')
    ], AppCmp.prototype, "mergeCellSheet", void 0);
    __decorate([
        core_1.ViewChild('dragDropSheet')
    ], AppCmp.prototype, "dragDropSheet", void 0);
    __decorate([
        core_1.ViewChild('frozenSheet')
    ], AppCmp.prototype, "frozenSheet", void 0);
    __decorate([
        core_1.ViewChild('undoSheet')
    ], AppCmp.prototype, "undoSheet", void 0);
    __decorate([
        core_1.ViewChild('formulaSheet')
    ], AppCmp.prototype, "formulaSheet", void 0);
    __decorate([
        core_1.ViewChild('customFuncSheet')
    ], AppCmp.prototype, "customFuncSheet", void 0);
    __decorate([
        core_1.ViewChild('excelIOSheet')
    ], AppCmp.prototype, "excelIOSheet", void 0);
    __decorate([
        core_1.ViewChild('cboFontName')
    ], AppCmp.prototype, "cboFontName", void 0);
    __decorate([
        core_1.ViewChild('cboFontSize')
    ], AppCmp.prototype, "cboFontSize", void 0);
    __decorate([
        core_1.ViewChild('colorPicker')
    ], AppCmp.prototype, "colorPicker", void 0);
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html',
            directives: [common_1.CORE_DIRECTIVES, AppTab_1.AppTab, AppTab_1.AppTabPane,
                wjFlexSheet.WjFlexSheet, wjFlexSheet.WjSheet,
                wjInput.WjMenu, wjInput.WjMenuItem, wjInput.WjMenuSeparator,
                wjInput.WjComboBox, wjInput.WjColorPicker]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.bootstrap(AppCmp, [
    DataSvc_1.DataSvc
]);
//# sourceMappingURL=app.js.map