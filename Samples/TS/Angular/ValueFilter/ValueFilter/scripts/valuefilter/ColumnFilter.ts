module wijmo.grid.valuefilter {
    'use strict';

    /**
     * Defines a value filter for a column on a @see:FlexGrid control.
     *
     * Value filters contain an explicit list of values that should be 
     * displayed by the grid.
     */
    export class ColumnFilter {
        _col: Column;
        _bnd: Binding;
        _values: any;
        _filterText: string;

        /**
         * Initializes a new instance of a @see:ColumnFilter.
         *
         * @param column The column to filter.
         */
        constructor(column: Column) {
            this._col = column;
            this._bnd = column.binding ? new Binding(column.binding) : null;
        }
        /**
         * Gets the @see:Column to filter.
         */
        get column(): Column {
            return this._col;
        }
        /**
         * Gets or sets an object with all the formatted values that should be shown.
         */
        get showValues(): any {
            return this._values;
        }
        set showValues(value: any) {
            this._values = value;
        }
        /**
         * Gets or sets a string used to filter the list of display values.
         */
        get filterText(): string {
            return this._filterText;
        }
        set filterText(value: string) {
            this._filterText = asString(value);
        }
        /**
         * Gets a value indicating whether the filter is active.
         *
         * The filter is active if at least one of the two conditions
         * has its operator set to a non-null value.
         */
        get isActive(): boolean {
            return this._values != null;
        }
        /**
         * Returns a value indicating whether the given value passes this @see:ColumnFilter.
         *
         * @param value The value to test.
         */
        apply(value): boolean {
            var col = this.column;

            // no binding or no values? accept everything
            if (!col.binding || !this._values || !Object.keys(this._values).length) {
                return true;
            }

            // retrieve the formatted value
            value = this._bnd.getValue(value);
            value = col.dataMap
                ? col.dataMap.getDisplayValue(value)
                : Globalize.format(value, col.format);
            if (value == null) {
                value = '';
            }

            // apply conditions
            return this._values[value] != undefined;
        }
    }
}