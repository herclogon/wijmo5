var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
                 * Defines the _ChartInsertAction class.
                 *
                 * It deals with the undo\redo for inserting chart in the @see:FlexSheet control.
                 */
                var _ChartInsertAction = (function (_super) {
                    __extends(_ChartInsertAction, _super);
                    /*
                     * Initializes a new instance of the @see:_ChartInsertAction class.
                     *
                     * @param chartEngine The @see: ChartEngine the engine to handle the @see:FlexChart in the @see:FlexSheet control.
                     * @param chartType the type of the chart.
                     * @param data the data used to render the chart.
                     * @param chartRect the bounds rectangle to locate the chart.
                     * @param cellRanges the cells to generate the @see:FlexChart in the @see:FlexSheet control.
                     */
                    function _ChartInsertAction(chartEngine, chartType, data, chartRect, cellRanges) {
                        _super.call(this, chartEngine._owner);
                        this._chartEngine = chartEngine;
                        this._chartType = chartType;
                        this._data = data;
                        this._chartRect = chartRect;
                        this._cellRnages = cellRanges;
                    }
                    /*
                     * Overrides the undo method of its base class @see:_UndoAction.
                     */
                    _ChartInsertAction.prototype.undo = function () {
                        var chart, chartHost, chartContainer, chartCnt = this._chartEngine._charts.length;
                        if (chartCnt > 0) {
                            chart = this._chartEngine._charts[chartCnt - 1].chart;
                            chartHost = chart.hostElement;
                            chartContainer = chartHost.parentElement;
                            this._chartEngine._undoing = true;
                            this._chartRect = new wijmo.Rect(chartHost.offsetLeft, chartHost.offsetTop, chartHost.offsetWidth, chartHost.offsetHeight);
                            this._chartContainerRect = new wijmo.Rect(chartContainer.offsetLeft, chartContainer.offsetTop, chartContainer.offsetWidth, chartContainer.offsetHeight);
                            if (chart === this._chartEngine._selectedChart) {
                                this._chartEngine._selectedChart = null;
                            }
                            this._chartEngine.removeChart(chart);
                            this._chartEngine._undoing = false;
                        }
                    };
                    /*
                     * Overrides the redo method of its base class @see:_UndoAction.
                     */
                    _ChartInsertAction.prototype.redo = function () {
                        var chartObj, chart, chartContainer;
                        this._chartEngine._undoing = true;
                        chartObj = this._chartEngine.addChart(this._chartType, this._data, this._chartRect);
                        chartObj.cellRanges = this._cellRnages;
                        chart = chartObj.chart;
                        chartContainer = chart.hostElement.parentElement;
                        wijmo.setCss(chart.hostElement, {
                            top: this._chartRect.top + 'px',
                            left: this._chartRect.left + 'px',
                            height: this._chartRect.height + 'px',
                            width: this._chartRect.width + 'px'
                        });
                        wijmo.setCss(chartContainer, {
                            top: this._chartContainerRect.top + 'px',
                            left: this._chartContainerRect.left + 'px',
                            height: this._chartContainerRect.height + 'px',
                            width: this._chartContainerRect.width + 'px'
                        });
                        this._chartEngine._undoing = false;
                    };
                    return _ChartInsertAction;
                }(sheet._UndoAction));
                chart_1._ChartInsertAction = _ChartInsertAction;
                /*
                 * Defines the _ChartRemoveAction class.
                 *
                 * It deals with the undo\redo for removing chart in the @see:FlexSheet control.
                 */
                var _ChartRemoveAction = (function (_super) {
                    __extends(_ChartRemoveAction, _super);
                    /*
                     * Initializes a new instance of the @see:_ChartRemoveAction class.
                     *
                     * @param chartEngine The @see: ChartEngine the engine to handle the @see:FlexChart in the @see:FlexSheet control.
                     * @param chartObj contains related information of the @see:FlexChart in the @see:FlexSheet control.
                     */
                    function _ChartRemoveAction(chartEngine, chartObj) {
                        _super.call(this, chartEngine._owner);
                        var chart = chartObj.chart, chartHost = chartObj.chart.hostElement, chartContainer = chartHost.parentElement;
                        this._chartEngine = chartEngine;
                        this._chartType = chart.chartType;
                        this._data = chart.itemsSource;
                        this._cellRnages = chartObj.cellRanges;
                        this._chartRect = new wijmo.Rect(chartHost.offsetLeft, chartHost.offsetTop, chartHost.offsetWidth, chartHost.offsetHeight);
                        this._chartContainerRect = new wijmo.Rect(chartContainer.offsetLeft, chartContainer.offsetTop, chartContainer.offsetWidth, chartContainer.offsetHeight);
                    }
                    /*
                     * Overrides the undo method of its base class @see:_UndoAction.
                     */
                    _ChartRemoveAction.prototype.undo = function () {
                        var chartObj, chart, chartContainer;
                        this._chartEngine._undoing = true;
                        chartObj = this._chartEngine.addChart(this._chartType, this._data, this._chartRect);
                        chartObj.cellRanges = this._cellRnages;
                        chart = chartObj.chart;
                        chartContainer = chart.hostElement.parentElement;
                        wijmo.setCss(chart.hostElement, {
                            top: this._chartRect.top + 'px',
                            left: this._chartRect.left + 'px',
                            height: this._chartRect.height + 'px',
                            width: this._chartRect.width + 'px'
                        });
                        wijmo.setCss(chartContainer, {
                            top: this._chartContainerRect.top + 'px',
                            left: this._chartContainerRect.left + 'px',
                            height: this._chartContainerRect.height + 'px',
                            width: this._chartContainerRect.width + 'px'
                        });
                        this._chartEngine._undoing = false;
                    };
                    /*
                     * Overrides the redo method of its base class @see:_UndoAction.
                     */
                    _ChartRemoveAction.prototype.redo = function () {
                        var chart, chartCnt = this._chartEngine._charts.length;
                        if (chartCnt > 0) {
                            chart = this._chartEngine._charts[chartCnt - 1].chart;
                            this._chartEngine._undoing = true;
                            if (chart === this._chartEngine._selectedChart) {
                                this._chartEngine._selectedChart = null;
                            }
                            this._chartEngine.removeChart(chart);
                            this._chartEngine._undoing = false;
                        }
                    };
                    return _ChartRemoveAction;
                }(sheet._UndoAction));
                chart_1._ChartRemoveAction = _ChartRemoveAction;
            })(chart = sheet.chart || (sheet.chart = {}));
        })(sheet = grid.sheet || (grid.sheet = {}));
    })(grid = wijmo.grid || (wijmo.grid = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=_ChartUndoAction.js.map