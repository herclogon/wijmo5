var wijmo;
(function (wijmo) {
    var grid;
    (function (grid) {
        var valuefilter;
        (function (valuefilter) {
            'use strict';
            /**
             * Defines a value filter for a column on a @see:FlexGrid control.
             *
             * Value filters contain an explicit list of values that should be
             * displayed by the grid.
             */
            var ColumnFilter = (function () {
                /**
                 * Initializes a new instance of a @see:ColumnFilter.
                 *
                 * @param column The column to filter.
                 */
                function ColumnFilter(column) {
                    this._col = column;
                    this._bnd = column.binding ? new wijmo.Binding(column.binding) : null;
                }
                Object.defineProperty(ColumnFilter.prototype, "column", {
                    /**
                     * Gets the @see:Column to filter.
                     */
                    get: function () {
                        return this._col;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ColumnFilter.prototype, "showValues", {
                    /**
                     * Gets or sets an object with all the formatted values that should be shown.
                     */
                    get: function () {
                        return this._values;
                    },
                    set: function (value) {
                        this._values = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ColumnFilter.prototype, "filterText", {
                    /**
                     * Gets or sets a string used to filter the list of display values.
                     */
                    get: function () {
                        return this._filterText;
                    },
                    set: function (value) {
                        this._filterText = wijmo.asString(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ColumnFilter.prototype, "isActive", {
                    /**
                     * Gets a value indicating whether the filter is active.
                     *
                     * The filter is active if at least one of the two conditions
                     * has its operator set to a non-null value.
                     */
                    get: function () {
                        return this._values != null;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Returns a value indicating whether the given value passes this @see:ColumnFilter.
                 *
                 * @param value The value to test.
                 */
                ColumnFilter.prototype.apply = function (value) {
                    var col = this.column;
                    // no binding or no values? accept everything
                    if (!col.binding || !this._values || !Object.keys(this._values).length) {
                        return true;
                    }
                    // retrieve the formatted value
                    value = this._bnd.getValue(value);
                    value = col.dataMap
                        ? col.dataMap.getDisplayValue(value)
                        : wijmo.Globalize.format(value, col.format);
                    if (value == null) {
                        value = '';
                    }
                    // apply conditions
                    return this._values[value] != undefined;
                };
                return ColumnFilter;
            }());
            valuefilter.ColumnFilter = ColumnFilter;
        })(valuefilter = grid.valuefilter || (grid.valuefilter = {}));
    })(grid = wijmo.grid || (wijmo.grid = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=ColumnFilter.js.map