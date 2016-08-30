var wijmo;
(function (wijmo) {
    var grid;
    (function (grid) {
        var sheet;
        (function (sheet) {
            var chart;
            (function (chart_1) {
                'use strict';
                /*
                 * Resize mode for the chart.
                 */
                var ResizeMode;
                (function (ResizeMode) {
                    /* No resizing */
                    ResizeMode[ResizeMode["none"] = 0] = "none";
                    /* Resizing towards left */
                    ResizeMode[ResizeMode["left"] = 2] = "left";
                    /* Resizing towards top */
                    ResizeMode[ResizeMode["top"] = 4] = "top";
                    /* Resizing towards right */
                    ResizeMode[ResizeMode["right"] = 8] = "right";
                    /* Resizing towards bottom */
                    ResizeMode[ResizeMode["bottom"] = 16] = "bottom";
                    /* Resizing towards left and top */
                    ResizeMode[ResizeMode["leftTop"] = 6] = "leftTop";
                    /* Resizing towards left and bottom */
                    ResizeMode[ResizeMode["leftBottom"] = 18] = "leftBottom";
                    /* Resizing towards right and top */
                    ResizeMode[ResizeMode["rightTop"] = 12] = "rightTop";
                    /* Resizing towards right and bottom */
                    ResizeMode[ResizeMode["rightBottom"] = 24] = "rightBottom";
                })(ResizeMode || (ResizeMode = {}));
                /**
                 * Defines the @see:ChartEngine class.
                 *
                 * The @see:ChartEngine class processes the @see:FlexChart for the @see:FlexSheet control.
                 */
                var ChartEngine = (function () {
                    /**
                     * Initializes a new instance of the @see:ChartEngine class.
                     *
                     * @param owner The @see: FlexSheet control that the <b>ChartEngine</b> works for.
                     */
                    function ChartEngine(owner) {
                        this._charts = [];
                        this._chartMousePosition = new wijmo.Point();
                        this._chartOriginalBounds = new wijmo.Rect(0, 0, 0, 0);
                        this._containerOriginalBounds = new wijmo.Rect(0, 0, 0, 0);
                        this._movingChart = false;
                        this._resizingChart = false;
                        this._lastScrollPosition = new wijmo.Point();
                        this._undoing = false;
                        this._owner = owner;
                        this._init();
                    }
                    ;
                    /**
                     *  Add chart into FlexSheet
                     *
                     * @param chartType the type of the chart.
                     * @param data the data used to render the chart.
                     * @param chartRect the bounds rectangle to locate the chart.
                     */
                    ChartEngine.prototype.addChart = function (chartType, data, chartRect) {
                        if (chartType == null) {
                            chartType = wijmo.chart.ChartType.Column;
                        }
                        if (chartRect == null) {
                            chartRect = this._getChartRect();
                        }
                        return this._appendChart(chartType, data, chartRect);
                    };
                    /**
                     * Remove the specified chart in the FlexSheet.
                     * If the chart is not specified, it will remove the selected chart in FlexSheet.
                     *
                     * @param chart The specified chart to remove.
                     */
                    ChartEngine.prototype.removeChart = function (chart) {
                        var delChart = chart ? chart : this._selectedChart, chartObj, i, undoAction;
                        if (delChart && this._charts.length > 0) {
                            for (i = 0; i < this._charts.length; i++) {
                                chartObj = this._charts[i];
                                if (delChart === chartObj.chart) {
                                    if (!this._undoing) {
                                        undoAction = new chart_1._ChartRemoveAction(this, chartObj);
                                        this._owner.undoStack._addAction(undoAction);
                                    }
                                    this._charts.splice(i, 1);
                                    this._chartHost.removeChild(delChart.hostElement.parentElement);
                                    delChart._hideToolTip();
                                    delChart.dispose();
                                    delChart = null;
                                    break;
                                }
                            }
                        }
                        this._owner.hostElement.focus();
                    };
                    // Initialize the chart engine.
                    ChartEngine.prototype._init = function () {
                        var self = this;
                        self._currentSheetIndex = self._owner.selectedSheetIndex;
                        self._chartHost = document.createElement('div');
                        wijmo.setCss(self._chartHost, {
                            position: 'relative',
                            top: '0px',
                            left: '0px',
                            height: '0px'
                        });
                        self._owner.hostElement.insertBefore(self._chartHost, self._owner.hostElement.firstChild);
                        self._owner.selectedSheetChanged.addHandler(function () {
                            var chartObj;
                            // Show/hide chart for current sheet
                            for (var i = 0; i < self._charts.length; i++) {
                                chartObj = self._charts[i];
                                if (chartObj.sheetIndex === self._owner.selectedSheetIndex) {
                                    chartObj.chart.hostElement.parentElement.style.display = 'inline';
                                    chartObj.chart.refresh();
                                }
                                else {
                                    chartObj.chart.hostElement.parentElement.style.display = 'none';
                                }
                            }
                            self._lastScrollPosition = self._owner.selectedSheet._scrollPosition;
                            self._currentSheetIndex = self._owner.selectedSheetIndex;
                        });
                        self._owner.cellEditEnded.addHandler(function (sender, args) {
                            var chartObj, cellRange;
                            // Updated the charts the cell ranges contains the editted cell.
                            for (var i = 0; i < self._charts.length; i++) {
                                chartObj = self._charts[i];
                                if (chartObj.sheetIndex === self._owner.selectedSheetIndex) {
                                    for (var j = 0; j < chartObj.cellRanges.length; j++) {
                                        cellRange = chartObj.cellRanges[j];
                                        if (cellRange.contains(args.range)) {
                                            self._updateChart(chartObj);
                                            break;
                                        }
                                    }
                                }
                            }
                        });
                        // Adjust the position of the charts in current sheet after scrolling current sheet.
                        self._owner.scrollPositionChanged.addHandler(function () {
                            var deltaScrollX = self._owner.scrollPosition.x - self._lastScrollPosition.x, deltaScrollY = self._owner.scrollPosition.y - self._lastScrollPosition.y, chartObj, i;
                            if (self._currentSheetIndex !== self._owner.selectedSheetIndex) {
                                return;
                            }
                            for (i = 0; i < self._charts.length; i++) {
                                chartObj = self._charts[i];
                                if (chartObj.sheetIndex === self._owner.selectedSheetIndex) {
                                    self._scrollChart(chartObj.chart, deltaScrollX, deltaScrollY);
                                }
                            }
                            self._lastScrollPosition = self._owner.scrollPosition;
                        });
                        // Clear all the charts when the FlexSheet was cleared.
                        self._owner.sheetCleared.addHandler(function () {
                            var chartObj, delChart, i;
                            for (i = 0; i < self._charts.length; i++) {
                                chartObj = self._charts[i];
                                delChart = chartObj.chart;
                                self._chartHost.removeChild(delChart.hostElement.parentElement);
                                delChart._hideToolTip();
                                delChart.dispose();
                                delChart = null;
                            }
                            self._charts.splice(0, self._charts.length);
                        });
                        self._owner.updatedView.addHandler(function () {
                            if (self._toRefresh) {
                                clearTimeout(self._toRefresh);
                                self._toRefresh = null;
                            }
                            self._toRefresh = setTimeout(function () {
                                var chartObj;
                                // Updated the charts after refreshing current sheet.
                                for (var i = 0; i < self._charts.length; i++) {
                                    chartObj = self._charts[i];
                                    if (chartObj.sheetIndex === self._owner.selectedSheetIndex) {
                                        self._updateChart(chartObj);
                                    }
                                }
                            }, 100);
                        });
                        document.addEventListener('mousedown', function () {
                            if (self._selectedChart && !self._movingChart && !self._resizingChart) {
                                self._selectedChart.hostElement.style.borderStyle = 'none';
                                self._selectedChart = null;
                            }
                        });
                        document.addEventListener('keydown', function (e) {
                            if (self._selectedChart && e.keyCode === 46) {
                                self.removeChart();
                                self._selectedChart = null;
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        }, true);
                    };
                    // Generate the data for the adding chart
                    ChartEngine.prototype._generateChartData = function (cellRanges) {
                        var selections = (cellRanges ? cellRanges : this._owner.selectedSheet.selectionRanges), dataValid = this._dataIsValid(), selection, datas, index, startRowIndex, item, seriesBinding, seriesIndex, lastSeriesIndex, needSeriesBinding, xIndex, cellVal;
                        if (dataValid) {
                            datas = [];
                            seriesIndex = 0;
                            selections = selections.length > 0 ? selections : [this._owner.selection];
                            needSeriesBinding = this._checkSeriesBinding(selections);
                            xIndex = this._checkBindingX(needSeriesBinding, selections);
                            for (var i = 0; i < selections.length; i++) {
                                selection = selections[i];
                                if (!selection.isValid) {
                                    continue;
                                }
                                startRowIndex = selection.topRow + (needSeriesBinding ? 1 : 0);
                                index = 0;
                                lastSeriesIndex = seriesIndex;
                                for (var rowIndex = startRowIndex; rowIndex <= selection.bottomRow; rowIndex++) {
                                    if (this._owner.rows[rowIndex].visible) {
                                        seriesIndex = lastSeriesIndex;
                                        if (i === 0) {
                                            item = {};
                                            datas.push(item);
                                        }
                                        else {
                                            item = datas[index];
                                        }
                                        for (var colIndex = selection.leftCol; colIndex <= selection.rightCol; colIndex++) {
                                            if (this._owner.columns[colIndex].visible) {
                                                if (colIndex === xIndex) {
                                                    item.x = this._owner.getCellValue(rowIndex, colIndex, true);
                                                }
                                                else {
                                                    cellVal = this._owner.getCellValue(rowIndex, colIndex);
                                                    if (typeof cellVal !== 'number') {
                                                        cellVal = 0;
                                                    }
                                                    if (needSeriesBinding) {
                                                        seriesBinding = this._owner.getCellValue(startRowIndex - 1, colIndex);
                                                        item[seriesBinding] = cellVal;
                                                    }
                                                    else {
                                                        seriesIndex++;
                                                        item['series' + seriesIndex] = cellVal;
                                                    }
                                                }
                                            }
                                        }
                                        index++;
                                    }
                                }
                            }
                        }
                        return datas;
                    };
                    // Gets the rectangle for the adding chart.
                    ChartEngine.prototype._getChartRect = function () {
                        var root = this._owner['_root'], cells = this._owner['_eCt'], rect = new wijmo.Rect(0, 0, 468, 284), elementWidth, elementHeight;
                        elementWidth = root.clientWidth > cells.clientWidth ? cells.clientWidth : root.clientWidth;
                        elementHeight = root.clientHeight > cells.clientHeight ? cells.clientHeight : root.clientHeight;
                        rect.left = cells.offsetLeft + (elementWidth - rect.width) / 2;
                        rect.top = cells.offsetTop + (elementHeight - rect.height) / 2;
                        return rect;
                    };
                    // Appends the chart into FlexSheet.
                    ChartEngine.prototype._appendChart = function (chartType, data, chartRect) {
                        var self = this, chartContainer = document.createElement('div'), hostElement = document.createElement('div'), mouseUp = function () {
                            document.removeEventListener('mousemove', mouseMove);
                            document.removeEventListener('mouseup', mouseUp);
                            self._mouseUp();
                        }, mouseMove = function (e) {
                            self._mouseMove(e);
                        }, cellRanges, range, chart, undoAction, chartObj;
                        if (data == null) {
                            data = self._generateChartData();
                            if (!data || data.length === 0) {
                                return;
                            }
                            cellRanges = [];
                            for (var i = 0; i < self._owner.selectedSheet.selectionRanges.length; i++) {
                                range = self._owner.selectedSheet.selectionRanges[i];
                                cellRanges.push(range.clone());
                            }
                        }
                        wijmo.setCss(hostElement, {
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            height: chartRect.height + 'px',
                            width: chartRect.width + 'px',
                            borderWidth: '2px',
                            borderStyle: 'dashed'
                        });
                        hostElement.focus();
                        chartContainer.appendChild(hostElement);
                        wijmo.setCss(chartContainer, {
                            position: 'absolute',
                            display: 'inline',
                            overflow: 'hidden',
                            zIndex: '1',
                            top: chartRect.top + 'px',
                            left: chartRect.left + 'px',
                            height: chartRect.height + 'px',
                            width: chartRect.width + 'px'
                        });
                        self._chartHost.appendChild(chartContainer);
                        chart = new wijmo.chart.FlexChart(hostElement);
                        chart.chartType = chartType;
                        chart.itemsSource = data;
                        hostElement.addEventListener('mousedown', function (e) {
                            var i, chartObj;
                            document.addEventListener('mousemove', mouseMove);
                            document.addEventListener('mouseup', mouseUp);
                            self._mouseDown(e, hostElement);
                            self._selectedChart = chart;
                            for (i = 0; i < self._charts.length; i++) {
                                chartObj = self._charts[i];
                                if (chartObj.chart !== self._selectedChart) {
                                    chartObj.chart.hostElement.style.borderStyle = 'none';
                                }
                            }
                            e.preventDefault();
                        }, true);
                        hostElement.addEventListener('contextmenu', function (e) {
                            e.preventDefault();
                        });
                        hostElement.addEventListener('mousemove', function (e) {
                            if (self._resizingChart || self._movingChart) {
                                return;
                            }
                            self._hoverChart(e, chart);
                        });
                        self._setChartSeries(chart, data[0]);
                        self._selectedChart = chart;
                        if (!self._undoing) {
                            undoAction = new chart_1._ChartInsertAction(self, chartType, data, chartRect, cellRanges);
                            self._owner.undoStack._addAction(undoAction);
                        }
                        chartObj = {
                            sheetIndex: self._owner.selectedSheetIndex,
                            cellRanges: cellRanges,
                            chart: chart
                        };
                        self._charts.push(chartObj);
                        self._owner.hostElement.focus();
                        return chartObj;
                    };
                    // Check whether the data for the chart is valid or not.
                    ChartEngine.prototype._dataIsValid = function () {
                        var selections = this._owner.selectedSheet.selectionRanges, dataIsValid = true, selection, selectionRange;
                        for (var i = 0; i < selections.length; i++) {
                            selection = selections[i];
                            if (i === 0) {
                                selectionRange = selection.rowSpan;
                            }
                            else if (selectionRange !== selection.rowSpan) {
                                dataIsValid = false;
                                break;
                            }
                        }
                        return dataIsValid;
                    };
                    // Check whether the chart data contains series binding.
                    ChartEngine.prototype._checkSeriesBinding = function (selections) {
                        var selection, startRowIndex, cellData, needSeriesBinding = true;
                        for (var i = 0; i < selections.length; i++) {
                            selection = selections[i];
                            startRowIndex = selection.topRow;
                            for (var colIndex = selection.leftCol; colIndex <= selection.rightCol; colIndex++) {
                                cellData = this._owner.getCellValue(startRowIndex, colIndex);
                                if (!wijmo.isString(cellData) || !cellData) {
                                    needSeriesBinding = false;
                                    break;
                                }
                            }
                        }
                        return needSeriesBinding;
                    };
                    // Check whether the chart data contains binding x.
                    ChartEngine.prototype._checkBindingX = function (needSeriesBinding, selections) {
                        var xIndex = -1, selection, colIndex, startRowIndex, cellData;
                        selectionLoop: for (var i = 0; i < selections.length; i++) {
                            selection = selections[i];
                            colIndex = selection.leftCol;
                            if (this._owner.columns[colIndex].dataMap != null) {
                                if (xIndex === -1 || xIndex < colIndex) {
                                    xIndex = colIndex;
                                }
                            }
                            else {
                                startRowIndex = selection.topRow + (needSeriesBinding ? 1 : 0);
                                for (var rowIndex = startRowIndex; rowIndex <= selection.bottomRow; rowIndex++) {
                                    cellData = this._owner.getCellValue(rowIndex, colIndex);
                                    if (((typeof cellData === 'string' && !!cellData) || cellData instanceof Date) && (xIndex === -1 || xIndex < colIndex)) {
                                        xIndex = colIndex;
                                        continue selectionLoop;
                                    }
                                }
                            }
                        }
                        return xIndex;
                    };
                    ;
                    // Set the series for the adding/updating chart.
                    ChartEngine.prototype._setChartSeries = function (chart, item) {
                        Object.keys(item).forEach(function (key) {
                            var series = new wijmo.chart.Series();
                            if (key === 'x') {
                                chart.bindingX = key;
                            }
                            else {
                                series.name = key;
                                series.binding = key;
                                chart.series.push(series);
                            }
                        });
                    };
                    // Update the chart in the FlexSheet.
                    ChartEngine.prototype._updateChart = function (chartObj) {
                        if (!!chartObj.cellRanges) {
                            var data = this._generateChartData(chartObj.cellRanges);
                            chartObj.chart.itemsSource = data;
                            chartObj.chart.series.clear();
                            this._setChartSeries(chartObj.chart, data[0]);
                        }
                    };
                    // Indicates resize mode for the chart.
                    ChartEngine.prototype._hoverChart = function (e, chart) {
                        var hostElement = chart.hostElement, offset = this._cumulativeOffset(hostElement), right = offset.x + hostElement.clientWidth, bottom = offset.y + hostElement.clientHeight;
                        if (chart !== this._selectedChart) {
                            hostElement.style.cursor = 'move';
                            return;
                        }
                        this._resizeMode = ResizeMode.none;
                        hostElement.style.cursor = 'move';
                        if (e.clientX < offset.x || e.clientX > right || e.clientY < offset.y || e.clientY > bottom) {
                            return;
                        }
                        if (e.clientX > offset.x && e.clientX <= offset.x + 10) {
                            this._resizeMode = this._resizeMode | ResizeMode.left;
                        }
                        if (e.clientX >= right - 10 && e.clientX < right) {
                            this._resizeMode = this._resizeMode | ResizeMode.right;
                        }
                        if (e.clientY > offset.y && e.clientY <= offset.y + 10) {
                            this._resizeMode = this._resizeMode | ResizeMode.top;
                        }
                        if (e.clientY >= bottom - 10 && e.clientY < bottom) {
                            this._resizeMode = this._resizeMode | ResizeMode.bottom;
                        }
                        if (this._resizeMode & ResizeMode.right) {
                            if (this._resizeMode & ResizeMode.bottom) {
                                hostElement.style.cursor = 'se-resize';
                            }
                            else if (this._resizeMode & ResizeMode.top) {
                                hostElement.style.cursor = 'ne-resize';
                            }
                            else {
                                hostElement.style.cursor = 'e-resize';
                            }
                            return;
                        }
                        if (this._resizeMode & ResizeMode.left) {
                            if (this._resizeMode & ResizeMode.bottom) {
                                hostElement.style.cursor = 'sw-resize';
                            }
                            else if (this._resizeMode & ResizeMode.top) {
                                hostElement.style.cursor = 'nw-resize';
                            }
                            else {
                                hostElement.style.cursor = 'w-resize';
                            }
                            return;
                        }
                        if (this._resizeMode & ResizeMode.bottom) {
                            hostElement.style.cursor = 's-resize';
                        }
                        else if (this._resizeMode & ResizeMode.top) {
                            hostElement.style.cursor = 'n-resize';
                        }
                    };
                    // Event handler for mouse move event to indicate to move chart or reszie chart.
                    ChartEngine.prototype._mouseMove = function (e) {
                        var hostEle = this._selectedChart.hostElement, deltaX = e.clientX - this._chartMousePosition.x, deltaY = e.clientY - this._chartMousePosition.y, left = this._containerOriginalBounds.left + deltaX, top = this._containerOriginalBounds.top + deltaY;
                        this._owner.hostElement.style.cursor = '';
                        if (this._movingChart) {
                            this._moveChart(e, left, top, deltaX, deltaY);
                        }
                        else if (this._resizingChart) {
                            this._owner.hostElement.style.cursor = hostEle.style.cursor;
                            this._resizeChart(e, left, top, deltaX, deltaY);
                            this._selectedChart.refresh();
                        }
                    };
                    // Event handler for mouse down event.
                    ChartEngine.prototype._mouseDown = function (e, hostElement) {
                        var root = this._owner['_root'], cells = this._owner['_eCt'], rowHeader = this._owner['_eRHdr'], columnHeader = this._owner['_eCHdr'];
                        hostElement.style.borderStyle = 'dashed';
                        hostElement.focus();
                        this._containerRect = new wijmo.Rect(cells.offsetLeft, cells.offsetTop, root.clientWidth > cells.clientWidth ? cells.clientWidth : (root.clientWidth - rowHeader.clientWidth), root.clientHeight > cells.clientHeight ? cells.clientHeight : (root.clientHeight - columnHeader.clientHeight));
                        this._chartMousePosition.x = e.clientX;
                        this._chartMousePosition.y = e.clientY;
                        this._containerOriginalBounds.left = hostElement.parentElement.offsetLeft;
                        this._containerOriginalBounds.top = hostElement.parentElement.offsetTop;
                        this._containerOriginalBounds.width = hostElement.parentElement.offsetWidth;
                        this._containerOriginalBounds.height = hostElement.parentElement.offsetHeight;
                        this._chartOriginalBounds.left = hostElement.offsetLeft;
                        this._chartOriginalBounds.top = hostElement.offsetTop;
                        this._chartOriginalBounds.width = hostElement.offsetWidth;
                        this._chartOriginalBounds.height = hostElement.offsetHeight;
                        if (hostElement.style.cursor === 'move') {
                            this._movingChart = true;
                        }
                        else if (this._resizeMode !== ResizeMode.none) {
                            this._resizingChart = true;
                        }
                    };
                    // Event handler for mouse up event to reset the move chart and resize chart status.
                    ChartEngine.prototype._mouseUp = function () {
                        this._movingChart = false;
                        this._resizingChart = false;
                        this._resizeMode = ResizeMode.none;
                    };
                    // Move the chart in the FlexSheet.
                    ChartEngine.prototype._moveChart = function (e, left, top, deltaX, deltaY) {
                        var hostElement = this._selectedChart.hostElement, container = hostElement.parentElement, width = 0, height = 0, innerDelta;
                        // Adjust the horizontal postion and width of the chart, if the horizontal part of the chart is partial visible with the sheet scrolling.
                        if (this._containerOriginalBounds.width < this._chartOriginalBounds.width) {
                            if (hostElement.offsetLeft < 0) {
                                //Adjust the chart if the left part of the chart is invisible.
                                if (deltaX > 0) {
                                    innerDelta = this._chartOriginalBounds.left + deltaX;
                                    if (innerDelta > 0) {
                                        width = this._chartOriginalBounds.width;
                                        hostElement.style.left = '0px';
                                        left = innerDelta;
                                        this._chartOriginalBounds.left = 0;
                                        this._containerOriginalBounds.width = width;
                                        this._chartMousePosition.x = e.clientX;
                                    }
                                    else {
                                        width = this._containerOriginalBounds.width + deltaX;
                                        hostElement.style.left = innerDelta + 'px';
                                        left = 0;
                                    }
                                }
                            }
                            else {
                                //Adjust the chart if the right part of the chart is invisible.
                                if (deltaX < 0) {
                                    if (this._containerOriginalBounds.width - deltaX > this._chartOriginalBounds.width) {
                                        width = this._chartOriginalBounds.width;
                                        this._containerOriginalBounds.width = width;
                                    }
                                    else {
                                        width = this._containerOriginalBounds.width - deltaX;
                                    }
                                }
                            }
                        }
                        // Adjust the vertical postion and height of the chart, if the vertical part of the chart is partial visible with the sheet scrolling.
                        if (this._containerOriginalBounds.height < this._chartOriginalBounds.height) {
                            if (hostElement.offsetTop < 0) {
                                //Adjust the chart if the top part of the chart is invisible.
                                if (deltaY > 0) {
                                    innerDelta = this._chartOriginalBounds.top + deltaY;
                                    if (innerDelta > 0) {
                                        height = this._chartOriginalBounds.height;
                                        hostElement.style.top = '0px';
                                        top = innerDelta;
                                        this._chartOriginalBounds.top = 0;
                                        this._containerOriginalBounds.height = height;
                                        this._chartMousePosition.y = e.clientY;
                                    }
                                    else {
                                        height = this._containerOriginalBounds.height + deltaY;
                                        hostElement.style.top = innerDelta + 'px';
                                        top = 0;
                                    }
                                }
                            }
                            else {
                                //Adjust the chart if the bottom part of the chart is invisible.
                                if (deltaY < 0) {
                                    if (this._containerOriginalBounds.height - deltaY > this._chartOriginalBounds.height) {
                                        height = this._chartOriginalBounds.height;
                                        this._containerOriginalBounds.height = height;
                                    }
                                    else {
                                        height = this._containerOriginalBounds.height - deltaY;
                                    }
                                }
                            }
                        }
                        if (left < this._containerRect.left) {
                            left = this._containerRect.left;
                        }
                        else if (left + container.clientWidth > this._containerRect.left + this._containerRect.width) {
                            left = this._containerRect.left + this._containerRect.width - container.clientWidth;
                        }
                        if (top < this._containerRect.top) {
                            top = this._containerRect.top;
                        }
                        else if (top + container.clientHeight > this._containerRect.top + this._containerRect.height) {
                            top = this._containerRect.top + this._containerRect.height - container.clientHeight;
                        }
                        if (width > 0) {
                            container.style.width = width + 'px';
                        }
                        if (height > 0) {
                            container.style.height = height + 'px';
                        }
                        container.style.left = left + 'px';
                        container.style.top = top + 'px';
                    };
                    // Resize the chart in the FlexSheet.
                    ChartEngine.prototype._resizeChart = function (e, left, top, deltaX, deltaY) {
                        var hostEle = this._selectedChart.hostElement, container = hostEle.parentElement, cells = this._owner['_eCt'], offset = this._cumulativeOffset(cells);
                        if (!!(this._resizeMode & ResizeMode.right) && e.clientX < offset.x + this._containerRect.width) {
                            hostEle.style.width = this._chartOriginalBounds.width + deltaX + 'px';
                            container.style.width = this._containerOriginalBounds.width + deltaX + 'px';
                        }
                        if (!!(this._resizeMode & ResizeMode.left) && e.clientX >= offset.x) {
                            container.style.left = left + 'px';
                            hostEle.style.width = this._chartOriginalBounds.width - deltaX + 'px';
                            container.style.width = this._containerOriginalBounds.width - deltaX + 'px';
                        }
                        if (!!(this._resizeMode & ResizeMode.bottom) && e.clientY < offset.y + this._containerRect.height) {
                            hostEle.style.height = this._chartOriginalBounds.height + deltaY + 'px';
                            container.style.height = this._containerOriginalBounds.height + deltaY + 'px';
                        }
                        if (!!(this._resizeMode & ResizeMode.top) && e.clientY >= offset.y) {
                            container.style.top = top + 'px';
                            hostEle.style.height = this._chartOriginalBounds.height - deltaY + 'px';
                            container.style.height = this._containerOriginalBounds.height - deltaY + 'px';
                        }
                    };
                    // Adjust the position of chart with scrolling.
                    ChartEngine.prototype._scrollChart = function (chart, deltaScrollX, deltaScrollY) {
                        var hostElement = chart.hostElement, container = hostElement.parentElement;
                        if (deltaScrollX < 0) {
                            this._scrollRightDownChart(hostElement, container, deltaScrollX, true);
                            return;
                        }
                        if (deltaScrollY < 0) {
                            this._scrollRightDownChart(hostElement, container, deltaScrollY);
                            return;
                        }
                        if (deltaScrollX > 0) {
                            this._scrollLeftUpChart(hostElement, container, deltaScrollX, true);
                            return;
                        }
                        if (deltaScrollY > 0) {
                            this._scrollLeftUpChart(hostElement, container, deltaScrollY);
                            return;
                        }
                    };
                    // Adjust the position of the chart with right\down scroll direction.
                    ChartEngine.prototype._scrollRightDownChart = function (hostElement, container, delta, isHorizontal) {
                        if (isHorizontal === void 0) { isHorizontal = false; }
                        var root = this._owner['_root'], cells = this._owner['_eCt'], direction = isHorizontal ? 'Left' : 'Top', widthOrHeight = isHorizontal ? 'Width' : 'Height', containerSize = container['offset' + widthOrHeight], chartSize = hostElement['offset' + widthOrHeight], innerDelta = 0, pos;
                        if (container['offset' + direction] === root['offset' + direction] + root['client' + widthOrHeight]) {
                            innerDelta = hostElement['offset' + direction] + delta;
                            if (innerDelta > 0) {
                                hostElement.style[direction.toLowerCase()] = innerDelta + 'px';
                                pos = container['offset' + direction];
                            }
                            else {
                                hostElement.style[direction.toLowerCase()] = '0px';
                                container.style[widthOrHeight.toLowerCase()] = containerSize - innerDelta + 'px';
                                pos = container['offset' + direction] + innerDelta;
                            }
                        }
                        else {
                            pos = container['offset' + direction] + delta;
                            if (containerSize < chartSize && container['offset' + direction] !== cells['offset' + direction]) {
                                innerDelta = containerSize - delta;
                                if (innerDelta > chartSize) {
                                    container.style[widthOrHeight.toLowerCase()] = chartSize + 'px';
                                }
                                else {
                                    container.style[widthOrHeight.toLowerCase()] = innerDelta + 'px';
                                }
                            }
                            else {
                                if (pos < cells['offset' + direction]) {
                                    innerDelta = cells['offset' + direction] - pos;
                                    pos = cells['offset' + direction];
                                }
                                if (innerDelta > 0) {
                                    if (innerDelta <= container['offset' + widthOrHeight]) {
                                        container.style[widthOrHeight.toLowerCase()] = container['offset' + widthOrHeight] - innerDelta + 'px';
                                    }
                                    else {
                                        container.style[widthOrHeight.toLowerCase()] = '0px';
                                    }
                                    hostElement.style[direction.toLowerCase()] = hostElement['offset' + direction] - innerDelta + 'px';
                                }
                            }
                        }
                        container.style[direction.toLowerCase()] = pos + 'px';
                    };
                    // Adjust the position of the chart with left\up scroll direction.
                    ChartEngine.prototype._scrollLeftUpChart = function (hostElement, container, delta, isHorizontal) {
                        if (isHorizontal === void 0) { isHorizontal = false; }
                        var root = this._owner['_root'], cells = this._owner['_eCt'], direction = isHorizontal ? 'Left' : 'Top', widthOrHeight = isHorizontal ? 'Width' : 'Height', containerSize = container['offset' + widthOrHeight], chartSize = hostElement['offset' + widthOrHeight], innerDelta = 0, pos;
                        if (container['offset' + direction] === cells['offset' + direction]) {
                            if (containerSize < chartSize) {
                                innerDelta = hostElement['offset' + direction] + delta;
                                if (innerDelta < 0) {
                                    if (chartSize + innerDelta > 0) {
                                        container.style[widthOrHeight.toLowerCase()] = chartSize + innerDelta + 'px';
                                    }
                                    hostElement.style[direction.toLowerCase()] = innerDelta + 'px';
                                    pos = cells['offset' + direction];
                                }
                                else {
                                    hostElement.style[direction.toLowerCase()] = '0px';
                                    container.style[widthOrHeight.toLowerCase()] = chartSize + 'px';
                                    pos = cells['offset' + direction] + innerDelta;
                                }
                            }
                            else {
                                pos = container['offset' + direction] + delta;
                            }
                        }
                        else if (container['offset' + direction] === root['offset' + direction] + root['client' + widthOrHeight]) {
                            hostElement.style[direction.toLowerCase()] = hostElement['offset' + direction] + delta + 'px';
                            pos = root['offset' + direction] + root['client' + widthOrHeight];
                        }
                        else {
                            pos = container['offset' + direction] + delta;
                            if (pos + containerSize > root['offset' + direction] + root['client' + widthOrHeight]) {
                                innerDelta = pos + containerSize - root['offset' + direction] - root['client' + widthOrHeight];
                                if (innerDelta > containerSize) {
                                    pos = root['offset' + direction] + root['client' + widthOrHeight];
                                    container.style[widthOrHeight.toLowerCase()] = '0px';
                                    hostElement.style[direction.toLowerCase()] = hostElement['offset' + direction] + innerDelta - containerSize + 'px';
                                }
                                else {
                                    container.style[widthOrHeight.toLowerCase()] = container['offset' + widthOrHeight] - innerDelta + 'px';
                                }
                            }
                        }
                        container.style[direction.toLowerCase()] = pos + 'px';
                    };
                    // Gets the absolute offset for the element.
                    ChartEngine.prototype._cumulativeOffset = function (element) {
                        var top = 0, left = 0;
                        do {
                            top += element.offsetTop || 0;
                            left += element.offsetLeft || 0;
                            element = element.offsetParent;
                        } while (element);
                        return new wijmo.Point(left, top);
                    };
                    return ChartEngine;
                }());
                chart_1.ChartEngine = ChartEngine;
            })(chart = sheet.chart || (sheet.chart = {}));
        })(sheet = grid.sheet || (grid.sheet = {}));
    })(grid = wijmo.grid || (wijmo.grid = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=ChartEngine.js.map