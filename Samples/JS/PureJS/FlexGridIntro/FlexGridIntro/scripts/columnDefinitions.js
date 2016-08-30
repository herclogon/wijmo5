(function (wijmo, data) {
    'use strict';

    // create two grids and some data
    var fgInitMethod = new wijmo.grid.FlexGrid('#cdInitMethod'),
        fgColsCollection = new wijmo.grid.FlexGrid('#cdColsCollection'),
        cv = new wijmo.collections.CollectionView(data.getData(100));

    // initialize one grid using 'initialize' method
    fgInitMethod.initialize({
        autoGenerateColumns: false,
        columns: [
            { header: 'Country', binding: 'country', width: '*' },
            { header: 'Date', binding: 'date' },
            { header: 'Revenue', binding: 'amount', format: 'n0' },
            { header: 'Active', binding: 'active' },
        ],
        itemsSource: cv
    });

    // initialize the other grid using the columns collection
    fgColsCollection.autoGenerateColumns = false;
    fgColsCollection.itemsSource = cv;

    var c = new wijmo.grid.Column();
    c.binding = 'country';
    c.header = 'Country';
    c.width = '*';
    fgColsCollection.columns.push(c);

    c = new wijmo.grid.Column();
    c.binding = 'date';
    c.header = 'Date';
    fgColsCollection.columns.push(c);

    c = new wijmo.grid.Column();
    c.binding = 'amount';
    c.header = 'Revenue';
    c.format = 'n0';
    fgColsCollection.columns.push(c);

    c = new wijmo.grid.Column();
    c.binding = 'active';
    c.header = 'Active';
    fgColsCollection.columns.push(c);
})(wijmo, appData);