(function (wijmo, data) {
    'use strict';

    // create and initialize grid (editing is enabled by default)
    var grid = new wijmo.grid.FlexGrid('#eFlexGrid', {
        autoGenerateColumns: false,
        columns: [
            { header: 'ID', binding: 'id', width: '*', isReadOnly: true },  // cannot edit
            { header: 'Country', binding: 'country' },
            { header: 'Date', binding: 'date' },
            { header: 'Revenue', binding: 'amount', format: 'n0' },
            { header: 'Active', binding: 'active' },
        ],
        itemsSource: data.getData(100)
    });
})(wijmo, appData);