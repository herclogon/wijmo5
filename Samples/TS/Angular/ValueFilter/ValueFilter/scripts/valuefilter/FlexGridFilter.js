var wijmo;
(function (wijmo) {
    var grid;
    (function (grid_1) {
        var valuefilter;
        (function (valuefilter) {
            'use strict';
            /**
             * Implements an Excel-style filter for @see:FlexGrid controls.
             *
             * To enable filtering on a @see:FlexGrid control, create an instance
             * of the @see:FlexGridFilter and pass the grid as a parameter to the
             * constructor. For example:
             *
             * <pre>
             * // create FlexGrid
             * var flex = new wijmo.grid.FlexGrid('#gridElement');
             * // enable filtering on the FlexGrid
             * var filter = new wijmo.grid.filter.FlexGridFilter(flex);
             * </pre>
             *
             * Once this is done, a filter icon is added to the grid's column headers.
             * Clicking the icon shows an editor where the user can edit the filter
             * conditions for that column.
             *
             * The @see:FlexGridFilter class depends on the <b>wijmo.grid</b> and
             * <b>wijmo.input</b> modules.
             */
            var FlexGridFilter = (function () {
                /**
                 * Initializes a new instance of the @see:FlexGridFilter.
                 *
                 * @param grid The @see:FlexGrid to filter.
                 */
                function FlexGridFilter(grid) {
                    this._showIcons = true;
                    /**
                     * Occurs after the filter is applied.
                     */
                    this.filterApplied = new wijmo.Event();
                    // check dependencies
                    var depErr = 'Missing dependency: FlexGridFilter requires ';
                    wijmo.assert(wijmo.grid.FlexGrid != null, depErr + 'wijmo.grid.');
                    wijmo.assert(wijmo.input.ComboBox != null, depErr + 'wijmo.input.');
                    // initialize filter
                    this._filters = [];
                    this._grid = wijmo.asType(grid, grid_1.FlexGrid, false);
                    this._grid.formatItem.addHandler(this._formatItem.bind(this));
                    this._grid.itemsSourceChanged.addHandler(this.clear.bind(this));
                    this._grid.hostElement.addEventListener('mousedown', this._mouseDown.bind(this), true);
                    // initialize column filters
                    this._grid.invalidate();
                }
                Object.defineProperty(FlexGridFilter.prototype, "showFilterIcons", {
                    /**
                     * Gets or sets a value indicating whether the @see:FlexGridFilter adds filter
                     * editing buttons to the grid's column headers.
                     */
                    get: function () {
                        return this._showIcons;
                    },
                    set: function (value) {
                        this._showIcons = wijmo.asBoolean(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlexGridFilter.prototype, "filterColumns", {
                    /**
                     * Gets or sets an array containing the names or bindings of the columns
                     * that have filters.
                     *
                     * Setting this property to null or to an empty array adds filters to all
                     * columns.
                     */
                    get: function () {
                        return this._filterColumns;
                    },
                    set: function (value) {
                        this._filterColumns = wijmo.asArray(value);
                        this.clear();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Gets the filter for the given column.
                 *
                 * @param col The @see:Column that the filter applies to.
                 * @param create The value indicating whether to create the filter if it does not exist.
                 */
                FlexGridFilter.prototype.getColumnFilter = function (col, create) {
                    if (create === void 0) { create = true; }
                    // look for the filter
                    for (var i = 0; i < this._filters.length; i++) {
                        if (this._filters[i].column == col) {
                            return this._filters[i];
                        }
                    }
                    // not found, create one now
                    if (create) {
                        var cf = new valuefilter.ColumnFilter(col);
                        this._filters.push(cf);
                        return cf;
                    }
                    // not found, not created
                    return null;
                };
                /**
                 * Shows the filter editor for the given grid column.
                 *
                 * @param col The @see:Column that contains the filter to edit.
                 */
                FlexGridFilter.prototype.editColumnFilter = function (col) {
                    // remove current editor
                    this.closeEditor();
                    // get column by name of by reference
                    col = wijmo.isString(col)
                        ? this._grid.columns.getColumn(col)
                        : wijmo.asType(col, grid_1.Column, false);
                    // get the header cell to position editor
                    var ch = this._grid.columnHeaders, rc = ch.getCellBoundingRect(ch.rows.length - 1, col.index);
                    // get the filter and the editor
                    var div = document.createElement('div'), flt = this.getColumnFilter(col, true), edt = new valuefilter.ColumnFilterEditor(div, flt);
                    wijmo.addClass(div, 'wj-dropdown-panel');
                    // close editor when buttons are clicked or when it loses focus
                    var self = this;
                    edt.filterChanged.addHandler(function () {
                        self.closeEditor();
                        self.apply();
                    });
                    // use blur+capture to emulate focusout (not supported in FireFox)
                    div.addEventListener('blur', function () {
                        setTimeout(function () {
                            if (!wijmo.contains(self._divEdt, document.activeElement)) {
                                self.closeEditor();
                            }
                        }, 200); // let others handle it first
                    }, true);
                    // show editor and give it focus
                    var host = document.body;
                    host.appendChild(div);
                    div.tabIndex = -1;
                    wijmo.showPopup(div, rc);
                    div.focus();
                    // save reference to editor
                    this._divEdt = div;
                    this._edtCol = col;
                };
                /**
                 * Closes the filter editor.
                 */
                FlexGridFilter.prototype.closeEditor = function () {
                    if (this._divEdt) {
                        wijmo.hidePopup(this._divEdt, true);
                        this._divEdt = null;
                        this._edtCol = null;
                    }
                };
                /**
                 * Applies the current column filters to the grid.
                 */
                FlexGridFilter.prototype.apply = function () {
                    var cv = this._grid.collectionView;
                    if (cv) {
                        if (cv.filter) {
                            cv.refresh();
                        }
                        else {
                            cv.filter = this._filter.bind(this);
                        }
                    }
                    this.onFilterApplied();
                };
                /**
                 * Clears all column filters.
                 */
                FlexGridFilter.prototype.clear = function () {
                    this._filters = [];
                    this.apply();
                };
                /**
                 * Raises the @see:filterApplied event.
                 */
                FlexGridFilter.prototype.onFilterApplied = function () {
                    this.filterApplied.raise(this);
                };
                // predicate function used to filter the CollectionView
                FlexGridFilter.prototype._filter = function (item) {
                    for (var i = 0; i < this._filters.length; i++) {
                        if (!this._filters[i].apply(item)) {
                            return false;
                        }
                    }
                    return true;
                };
                // handle the formatItem event to add filter icons to the column header cells
                FlexGridFilter.prototype._formatItem = function (sender, e) {
                    // check that this is a filter cell
                    if (this._showIcons &&
                        e.panel.cellType == grid_1.CellType.ColumnHeader &&
                        e.row == this._grid.columnHeaders.rows.length - 1) {
                        // check that this column should have a filter
                        var col = this._grid.columns[e.col];
                        if (!this._filterColumns || this._filterColumns.indexOf(col.binding) > -1) {
                            // show filter glyph for this column
                            var cf = this.getColumnFilter(col, true), op = cf.isActive ? .85 : .25, filterGlyph = '<div ' + FlexGridFilter._WJA_FILTER +
                                ' style ="float:right;cursor:pointer;padding:0px 4px;opacity:' + op + '">' +
                                '<span class="wj-glyph-filter"></span>' +
                                '</div>';
                            // insert filter glyph before cell content (so it appears in Firefox...)
                            e.cell.innerHTML = filterGlyph + e.cell.innerHTML;
                        }
                    }
                };
                // handle mouse down to show/hide the filter editor
                FlexGridFilter.prototype._mouseDown = function (e) {
                    if (this._hasAttribute(e.target, FlexGridFilter._WJA_FILTER)) {
                        var ht = this._grid.hitTest(e);
                        if (ht.cellType == wijmo.grid.CellType.ColumnHeader) {
                            var col = this._grid.columns[ht.col];
                            if (this._divEdt && this._edtCol == col) {
                                this.closeEditor();
                            }
                            else {
                                this.editColumnFilter(col);
                            }
                            e.stopPropagation();
                            e.preventDefault();
                        }
                    }
                };
                // checks whether an element or any of its ancestors contains an attribute
                FlexGridFilter.prototype._hasAttribute = function (e, att) {
                    for (; e; e = e.parentNode) {
                        if (e.getAttribute && e.getAttribute(att) != null)
                            return true;
                    }
                    return false;
                };
                FlexGridFilter._WJA_FILTER = 'wj-filter';
                return FlexGridFilter;
            }());
            valuefilter.FlexGridFilter = FlexGridFilter;
        })(valuefilter = grid_1.valuefilter || (grid_1.valuefilter = {}));
    })(grid = wijmo.grid || (wijmo.grid = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=FlexGridFilter.js.map