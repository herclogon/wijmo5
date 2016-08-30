var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var wijmo;
(function (wijmo) {
    var grid;
    (function (grid_1) {
        var valuefilter;
        (function (valuefilter) {
            'use strict';
            /**
             * The editor used to inspect and modify @see:ColumnFilter objects.
             *
             * This class is used by the @see:FlexGridFilter class; you
             * rarely use it directly.
             */
            var ColumnFilterEditor = (function (_super) {
                __extends(ColumnFilterEditor, _super);
                /**
                 * Initializes a new instance of the @see:ColumnFilterEditor.
                 *
                 * @param element The DOM element that hosts the control, or a selector
                 * for the host element (e.g. '#theCtrl').
                 * @param filter The @see:ColumnFilter to edit.
                 */
                function ColumnFilterEditor(element, filter) {
                    var _this = this;
                    _super.call(this, element);
                    /**
                     * Occurs after the filter is modified.
                     */
                    this.filterChanged = new wijmo.Event();
                    // save reference to filter
                    this._filter = wijmo.asType(filter, valuefilter.ColumnFilter, false);
                    // instantiate and apply template
                    var tpl = this.getTemplate();
                    this.applyTemplate('wj-control wj-columnfiltereditor wj-content', tpl, {
                        _btnAsc: 'btn-asc',
                        _btnDsc: 'btn-dsc',
                        _divFilter: 'div-filter',
                        _cbSelectAll: 'cb-select-all',
                        _divValues: 'div-values',
                        _btnApply: 'btn-apply',
                        _btnClear: 'btn-clear'
                    });
                    // create sorted/filtered collection view with the values
                    this._view = new wijmo.collections.CollectionView();
                    this._view.sortDescriptions.push(new wijmo.collections.SortDescription('value', true));
                    this._view.filter = this._filterValues.bind(this);
                    this._view.collectionChanged.addHandler(this._updateSelectAllCheck, this);
                    // create search combo and value list
                    this._cmbFilter = new wijmo.input.ComboBox(this._divFilter, {
                        placeholder: 'Search'
                    });
                    this._lbValues = new wijmo.input.ListBox(this._divValues, {
                        displayMemberPath: 'text',
                        checkedMemberPath: 'show',
                        itemsSource: this._view,
                        itemFormatter: function (index, item) {
                            return item ? item : '(nothing)';
                        }
                    });
                    // add event listeners
                    var bnd = this._btnClicked.bind(this);
                    this._btnApply.addEventListener('click', bnd);
                    this._btnClear.addEventListener('click', bnd);
                    this._btnAsc.addEventListener('click', bnd);
                    this._btnDsc.addEventListener('click', bnd);
                    this._cmbFilter.textChanged.addHandler(this._filterTextChanged, this);
                    this._cbSelectAll.addEventListener('click', this._cbSelectAllClicked.bind(this));
                    // close filter when user presses the Escape key (TFS 131567)
                    this.addEventListener(this.hostElement, 'keypress', function (e) {
                        if (e.keyCode == 27) {
                            var grid = _this._filter.column.grid;
                            if (grid) {
                                grid.focus();
                            }
                        }
                    });
                    // initialize all values
                    this._updateUIFromFilter();
                }
                Object.defineProperty(ColumnFilterEditor.prototype, "filter", {
                    /**
                     * Gets a reference to the @see:ColumnFilter being edited.
                     */
                    get: function () {
                        return this._filter;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Raises the @see:filterChanged event.
                 */
                ColumnFilterEditor.prototype.onFilterChanged = function (e) {
                    this.filterChanged.raise(this, e);
                };
                // ** implementation
                // filter items on the list
                ColumnFilterEditor.prototype._filterTextChanged = function () {
                    var self = this;
                    if (self._toText) {
                        clearTimeout(self._toText);
                    }
                    self._toText = setTimeout(function () {
                        self._filterText = self._cmbFilter.text.toLowerCase();
                        self._view.refresh();
                    }, 500);
                };
                // filter values for display
                ColumnFilterEditor.prototype._filterValues = function (value) {
                    if (this._filterText) {
                        return value && value.text
                            ? value.text.toLowerCase().indexOf(this._filterText) > -1
                            : false;
                    }
                    return true;
                };
                // update UI from filter
                ColumnFilterEditor.prototype._updateUIFromFilter = function () {
                    // get a list of the values present in the data source
                    var col = this._filter.column, g = col.grid, src = g.collectionView ? g.collectionView.sourceCollection : [], textArr = [], values = [];
                    for (var i = 0; i < src.length; i++) {
                        var value = col._binding.getValue(src[i]), text = col.dataMap
                            ? col.dataMap.getDisplayValue(value)
                            : wijmo.Globalize.format(value, col.format);
                        if (text == null) {
                            text = '';
                        }
                        if (textArr.indexOf(text) < 0) {
                            textArr.push(text);
                            values.push({ value: value, text: text });
                        }
                    }
                    // check the items that are currently selected
                    var showValues = this._filter.showValues;
                    if (!showValues || Object.keys(showValues).length == 0) {
                        for (var i = 0; i < values.length; i++) {
                            values[i].show = true;
                        }
                    }
                    else {
                        for (var key in showValues) {
                            for (var i = 0; i < values.length; i++) {
                                if (values[i].text == key) {
                                    values[i].show = true;
                                    break;
                                }
                            }
                        }
                    }
                    // load filter and apply immeditately
                    this._cmbFilter.text = this._filter.filterText;
                    this._filterText = this._cmbFilter.text.toLowerCase();
                    // show the values
                    this._view.sourceCollection = values;
                };
                // update filter from UI
                ColumnFilterEditor.prototype._updateFilterFromUI = function () {
                    // build list of values to show
                    var showValues = {}, items = this._view.items;
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        if (item.show) {
                            showValues[item.text] = true;
                        }
                    }
                    // save to filter
                    this._filter.showValues = showValues;
                    this._filter.filterText = this._filterText;
                };
                // create operator combo
                // checks whether a format represents a time (and not just a date)
                ColumnFilterEditor.prototype._isTimeFormat = function (fmt) {
                    if (!fmt)
                        return false;
                    fmt = wijmo.culture.Globalize.calendar.patterns[fmt] || fmt;
                    return /[Hmst]+/.test(fmt); // TFS 109409
                };
                // handle buttons
                ColumnFilterEditor.prototype._btnClicked = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    // ignore disabled elements
                    if (wijmo.hasClass(e.target, 'wj-state-disabled')) {
                        return;
                    }
                    // apply sort
                    if (e.target == this._btnAsc || e.target == this._btnDsc) {
                        var col = this._filter.column, binding = col.sortMemberPath ? col.sortMemberPath : col.binding, view = col.grid.collectionView, sortDesc = new wijmo.collections.SortDescription(binding, e.target == this._btnAsc);
                        view.sortDescriptions.deferUpdate(function () {
                            view.sortDescriptions.clear();
                            view.sortDescriptions.push(sortDesc);
                        });
                    }
                    // apply/clear filter
                    if (e.target == this._btnApply) {
                        this._updateFilterFromUI();
                    }
                    else if (e.target == this._btnClear) {
                        this._filter.showValues = null;
                        this._filter.filterText = null;
                    }
                    // show current filter state
                    this._updateUIFromFilter();
                    // raise event so caller can apply the new filter
                    this.onFilterChanged();
                };
                // handle clicks on 'Select All' checkbox
                ColumnFilterEditor.prototype._cbSelectAllClicked = function (e) {
                    var checked = this._cbSelectAll.checked, values = this._view.items;
                    for (var i = 0; i < values.length; i++) {
                        values[i].show = checked;
                    }
                    this._view.refresh();
                };
                // update 'Select All' checkbox
                ColumnFilterEditor.prototype._updateSelectAllCheck = function () {
                    // count checked itmes
                    var checked = 0, values = this._view.items;
                    for (var i = 0; i < values.length; i++) {
                        if (values[i].show)
                            checked++;
                    }
                    // update checkbox
                    if (checked == 0) {
                        this._cbSelectAll.checked = false;
                        this._cbSelectAll.indeterminate = false;
                    }
                    else if (checked == values.length) {
                        this._cbSelectAll.checked = true;
                        this._cbSelectAll.indeterminate = false;
                    }
                    else {
                        this._cbSelectAll.indeterminate = true;
                    }
                    // disable Apply button if nothing is selected
                    wijmo.toggleClass(this._btnApply, 'wj-state-disabled', checked == 0);
                    this._btnApply.style.cursor = (checked == 0) ? 'default' : '';
                };
                /**
                 * Gets or sets the template used to instantiate @see:ColumnFilterEditor controls.
                 */
                ColumnFilterEditor.controlTemplate = '<div style="padding:6px;min-width:250px">' +
                    '<a wj-part="btn-asc" href="" style="min-width:95px">&#8593; Ascending</a>&nbsp;&nbsp;&nbsp;' +
                    '<a wj-part="btn-dsc" href="" style="min-width:95px">&#8595; Descending</a>' +
                    '<br/>' +
                    '<br/>' +
                    '<div wj-part="div-filter" style="width:100%"></div>' +
                    '<br/>' +
                    '<label class="wj-listbox-item"><input type="checkbox" wj-part="cb-select-all"> Select All</label>' +
                    '<div wj-part="div-values" style="height:150px;width:100%;margin:0px"></div>' +
                    '<br/>' +
                    '<div style="text-align:right;margin-top:6px">' +
                    '<a wj-part="btn-apply" href="">Apply</a>&nbsp;&nbsp;&nbsp;' +
                    '<a wj-part="btn-clear" href="">Clear</a>' +
                    '</div>';
                return ColumnFilterEditor;
            }(wijmo.Control));
            valuefilter.ColumnFilterEditor = ColumnFilterEditor;
        })(valuefilter = grid_1.valuefilter || (grid_1.valuefilter = {}));
    })(grid = wijmo.grid || (wijmo.grid = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=ColumnFilterEditor.js.map