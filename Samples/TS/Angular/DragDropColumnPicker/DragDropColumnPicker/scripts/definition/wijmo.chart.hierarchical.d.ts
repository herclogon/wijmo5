/*
    *
    * Wijmo Library 5.20162.207
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * http://wijmo.com/products/wijmo-5/license/
    *
    */
/**
* Defines the @see:Sunburst chart control and its associated classes.
*/
declare module wijmo.chart.hierarchical {
    /**
     * Sunburst chart control.
     */
    class Sunburst extends FlexPie {
        private _bindName;
        private _processedData;
        private _legendLabels;
        private _level;
        private _sliceIndex;
        private _childItemsPath;
        constructor(element: any, options?: any);
        /**
                * Gets or sets the name of the property containing name of the data item;
                * it should be an array or a string.
                */
        bindingName: any;
        /**
         * Gets or sets the name of the property (or properties) used to generate
         * child items in hierarchical data.
         *
         * Set this property to a string to specify the name of the property that
         * contains an item's child items (e.g. <code>'items'</code>).
         *
         * Set this property to an array containing the names of the properties
         * that contain child items at each level, when the items are child items
         * at different levels with different names
         * (e.g. <code>[ 'accounts', 'checks', 'earnings' ]</code>).
         */
        childItemsPath: any;
        _initData(): void;
        _performBind(): void;
        private _calculateValueAndLevel(arr, level);
        _renderPie(engine: any, radius: any, innerRadius: any, startAngle: any, offset: any): void;
        _renderHierarchicalSlices(engine: any, cx: any, cy: any, values: any, sum: any, radius: any, innerRadius: any, startAngle: any, totalSweep: any, offset: any, level: any): void;
        _getLabelsForLegend(): string[];
        _highlightCurrent(): void;
    }
}

declare module wijmo.chart.hierarchical {
    class HierarchicalUtil {
        static parseDataToHierarchical(data: any, binding: any, bindingName: any, childItemsPath: any): any[];
        private static parseItems(items, binding, bindingName, childItemsPath);
        private static isFlatItem(item, binding);
        private static ConvertFlatData(items, binding, bindingName);
        private static ConvertFlatToHierarchical(arr, data);
        private static ConvertFlatItem(data, item, binding, bindingName);
        private static parseItem(item, binding, bindingName, childItemsPath);
        static parseFlatItem(data: any, item: any, binding: any, bindingName: any): void;
    }
}

