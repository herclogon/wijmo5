(function (wijmo, data) {
    'use strict';

    // create grid, some data
    var grid = new wijmo.grid.FlexGrid('#csFlexGrid'),
        cv = new wijmo.collections.CollectionView(data.getData(100));

    // initialize grid
    grid.initialize({
        autoGenerateColumns: false,
        columns: [
            { header: 'Country', binding: 'country', width: '*', isContentHtml: true, isReadOnly: true },
            { header: 'Date', binding: 'date' },
            { header: 'Revenue', binding: 'amount', format: 'n0' },
            { header: 'Active', binding: 'active' },
        ],
        itemsSource: cv,
        itemFormatter: function (panel, r, c, cell) {

            // we are only interested in regular (scrollable) cells
            if (wijmo.grid.CellType.Cell === panel.cellType) {

                // compute the cell color
                // (for all columns, since cells may be recycled)
                var color = '';
                if (panel.columns[c].binding == 'amount') {
                    var cellData = panel.getCellData(r, c);
                    color = getAmountColor(cellData);
                }

                // always set the color
                cell.style.color = color;
            }
        }
    });

    // get the color used to display an amount
    function getAmountColor(amount) {
        return amount < 500 ? 'red' : amount < 2500 ? 'black' : 'green';
    }
})(wijmo, appData);