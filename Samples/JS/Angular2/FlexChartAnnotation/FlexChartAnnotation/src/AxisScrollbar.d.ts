declare module wijmo.chart.interaction {
    /**
     * The @see:AxisScrollbar control displays a scrollbar that allows the user to
     * choose the range of Axis.

     */
    class AxisScrollbar {
        private _isVisible;
        private _min;
        private _max;
        private _buttonsVisible;
        private _minScale;
        private _chart;
        private _axis;
        private _rangeSlider;
        private _slbarContainer;
        private _isXAxis;
        private _chartRefreshDelay;
        /**
         * Initializes a new instance of the @see:AxisScrollbar control.
         *
         * @param axis The axis that displays scrollbar.
         * @param options A JavaScript object containing initialization data for the control.
         */
        constructor(axis: wijmo.chart.Axis, options?: any);
        /**
         * Gets or sets the decrease button and increase button is visible or not.
         */
        buttonsVisible: boolean;
        /**
         * Gets or sets the visibility of the Axis scrollbar.
         */
        isVisible: boolean;
        minPos: number;
        maxPos: number;
        /**
         * Gets or sets the minimum range scale of the Axis scrollbar.
         * The minimum range scale should be greater than zero.
         */
        minScale: number;
        /**
         * Removes the range selector from the chart.
         */
        remove(): void;
        private _createScrollbar();
        private _switchEvent(isOn);
        private _refresh();
        private _updateAxisRange();
        private _updatingAxisRange();
    }
}
