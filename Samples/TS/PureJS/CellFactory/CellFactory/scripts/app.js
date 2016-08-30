onload = function() {

    // create the grid
    var grid = new wijmo.grid.FlexGrid('#theGrid', {
        allowResizing: 'None',
        isReadOnly: true,
        cellFactory: new wijmo.grid.CustomCellFactory(),
        itemsSource: createData(100, 900)
    });

    // initialize the grid
    grid.rows.forEach(function (item) {
        item.height = 35;
    });
    grid.columns.forEach(function (item) {
        item.width = 35;
        item.align = '';
    });

    // select cell rendering mode
    document.getElementById('renderMode').addEventListener('click', function (e) {
        if (e.target.tagName == 'INPUT') {
            setRenderMode(e.target.value);
        }
    });
    function setRenderMode(renderMode) {
        switch (renderMode) {
            case 'CustomCellFactory':
                grid.cellFactory = new wijmo.grid.CustomCellFactory();
                grid.itemFormatter = null;
                break;
            case 'ItemFormatter':
                grid.cellFactory = new wijmo.grid.CellFactory();
                grid.itemFormatter = itemFormatter;
                break;
            case 'Default':
                grid.cellFactory = new wijmo.grid.CellFactory();
                grid.itemFormatter = null;
                break;
            default:
                throw 'Invalid renderMode request';
        }
    }

    // create some data for the sample  
    function createData(rows, cols) {
        var data = [];
        for (var r = 0; r < rows; r++) {
            data[r] = [];
            for (var c = 0; c < cols; c++) {
                data[r][c] = r + c;
            }
        }
        return data;
    }

    // itemFormatter function
    function itemFormatter(p, r, c, cell) {
        switch (p.cellType) {

            // regular cells
            case wijmo.grid.CellType.Cell:
                wijmo.addClass(cell, 'centered-cell');
                cell.style.backgroundColor = (r % 2 == 0) ? '#fff682' : '#b0e9ff';
                var html = '<div>' + p.getCellData(r, c, true) + '</div>';
                if (cell.innerHTML != html) {
                    cell.innerHTML = html;
                }
                break;

            // column headers
            case wijmo.grid.CellType.ColumnHeader:
                wijmo.addClass(cell, 'rotated-cell');
                var html = '<div>' + p.getCellData(r, c, true) + '</div>';
                if (cell.innerHTML != html) {
                    cell.innerHTML = html;
                }
                break;
        }
    }
}
