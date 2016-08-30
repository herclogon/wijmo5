(function (wijmo, data) {
    'use strict';

    // create a grid and define the columns
    new wijmo.grid.FlexGrid('#nvGrid', {
        autoGenerateColumns: false,
        itemsSource: data.getData(100),
        columns: [
            { header: 'Country', binding: 'country', width: '*', isRequired: true },
            { header: 'Date', binding: 'date', isRequired: false },
            { header: 'Revenue', binding: 'amount', format: 'n0', isRequired: false },
            { header: 'Active', binding: 'active', isRequired: false }
        ]
    });

})(wijmo, appData);