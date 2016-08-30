(function (wijmo, data) {
    'use strict';

    // create the grid
    var grid = new wijmo.grid.FlexGrid('#tvFlexGrid');

    // populate the grid and set childItemsPath to show data hierarchically
    grid.childItemsPath = 'items';

    // initialize the grid to show hierarchical data
    grid.initialize({
        autoGenerateColumns: false,
        columns: [
            { binding: 'name', width: '*' },
            { binding: 'length', width: 80, align: 'center' }
        ],
        itemsSource: data.treeData,                             // hierarchical data
        childItemsPath: 'items',                                // set hierarchy path
        allowResizing: wijmo.grid.AllowResizing.None,           // disable resizing
        headersVisibility: wijmo.grid.HeadersVisibility.None,   // hide headers
        selectionMode: wijmo.grid.SelectionMode.ListBox         // use ListBox selection
    });
})(wijmo, appData);