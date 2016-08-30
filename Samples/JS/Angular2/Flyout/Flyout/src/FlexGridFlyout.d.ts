declare module wijmo.grid {
    /**
     * Provides flyout menus when the mouse hovers over a FlexGrid's column headers.
     */
    class FlexGridFlyout {
        _g: FlexGrid;
        _flyout: HTMLElement;
        _col: Column;
        _toUpdate: any;
        static _SHOWDELAY: number;
        static _HIDEDELAY: number;
        /**
         * Initializes a new instance of the @see:FlexGridFlyout class.
         *
         * @param flex @see:FlexGrid that will receive the flyout menus.
         */
        constructor(flex: FlexGrid);
        /**
         * Gets a reference to the @see:HTMLElement that represents the flyout menu.
         */
        flyout: HTMLElement;
        /**
         * Gets a reference to the @see:Column that owns the flyout menu currently being shown.
         */
        column: Column;
        _mouseenter(e: MouseEvent): void;
        _mouseleave(e: MouseEvent): void;
        _show(e: MouseEvent): void;
        _hide(e: MouseEvent): void;
    }
}
