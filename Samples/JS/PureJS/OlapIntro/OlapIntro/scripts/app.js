'use strict';

/**************************************************
    app
*/

var app = {};

// define all when page loads
onload = function () {

    // highlight code blocks 
    // (highlight.js requires <pre><code> blocks, we want just <code>)
    var code = document.querySelectorAll('code');
    for (var i = 0; i < code.length; i++) {
        hljs.highlightBlock(code[i]);
    }

    // define propertyChanged event used to implement binding
    app.propertyChanged = new wijmo.Event();
    app.setProperty = function (name, value) {
        if (app[name] !== value) {
            var oldValue = app[name];
            app[name] = value;
            app.propertyChanged.raise(app, new wijmo.PropertyChangedEventArgs(name, oldValue, value));
            //console.log('property ' + name + ' changed');
        }
    }

    // define sample data sets
    app.dataSets = [
        { name: 'Simple (1,000 items)', value: getSimpleDataSet(1000) },
        { name: 'Simple (10,000 items)', value: getSimpleDataSet(10000) },
        { name: 'Complex (100 items)', value: getDataSet(100) },
        { name: 'Complex (50,000 items)', value: getDataSet(50000) },
        { name: 'Complex (100,000 items)', value: getDataSet(100000) },
        { name: 'Northwind Orders (read-only)', value: getNorthwindOrders() },
        { name: 'Northwind Sales (read-only)', value: getNorthwindSales() }
    ];

    // update item count when filters are applied to the data
    for (var i = 0; i < app.dataSets.length; i++) {
        app.dataSets[i].value.collectionChanged.addHandler(function () {
            document.getElementById('itemCount').textContent = wijmo.Globalize.format(app.data.items.length, 'n0');
        })
    }

    // define ShowTotals options/values
    app.showTotals = [
        { name: 'None', value: wijmo.olap.ShowTotals.None },
        { name: 'Grand totals', value: wijmo.olap.ShowTotals.GrandTotals },
        { name: 'Subtotals', value: wijmo.olap.ShowTotals.Subtotals },
    ];

    // chart types
    app.chartTypes = [
        { name: 'Column', value: wijmo.olap.PivotChartType.Column },
        { name: 'Bar', value: wijmo.olap.PivotChartType.Bar },
        { name: 'Scatter', value: wijmo.olap.PivotChartType.Scatter },
        { name: 'Line', value: wijmo.olap.PivotChartType.Line },
        { name: 'Area', value: wijmo.olap.PivotChartType.Area },
        { name: 'Pie', value: wijmo.olap.PivotChartType.Pie },
    ];

    // pre-defined views
    app.viewDefs = [
        {
            name: "Sales by Product",
            def: "{\"showZeros\":false,\"showColumnTotals\":2,\"showRowTotals\":2,\"defaultFilterType\":3,\"fields\":[{\"binding\":\"id\",\"header\":\"Id\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"product\",\"header\":\"Product\",\"dataType\":1,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"country\",\"header\":\"Country\",\"dataType\":1,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"date\",\"header\":\"Date\",\"dataType\":4,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"format\":\"d\",\"isContentHtml\":false},{\"binding\":\"sales\",\"header\":\"Sales\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"downloads\",\"header\":\"Downloads\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"active\",\"header\":\"Active\",\"dataType\":3,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"discount\",\"header\":\"Discount\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false}],\"rowFields\":{\"items\":[\"Product\"]},\"columnFields\":{\"items\":[]},\"filterFields\":{\"items\":[]},\"valueFields\":{\"items\":[\"Sales\"]}}"
        },
        {
            name: "Sales by Country",
            def: "{\"showZeros\":false,\"showColumnTotals\":2,\"showRowTotals\":2,\"defaultFilterType\":3,\"fields\":[{\"binding\":\"id\",\"header\":\"Id\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"product\",\"header\":\"Product\",\"dataType\":1,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"country\",\"header\":\"Country\",\"dataType\":1,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"date\",\"header\":\"Date\",\"dataType\":4,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"format\":\"d\",\"isContentHtml\":false},{\"binding\":\"sales\",\"header\":\"Sales\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"downloads\",\"header\":\"Downloads\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"active\",\"header\":\"Active\",\"dataType\":3,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"discount\",\"header\":\"Discount\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false}],\"rowFields\":{\"items\":[\"Country\"]},\"columnFields\":{\"items\":[]},\"filterFields\":{\"items\":[]},\"valueFields\":{\"items\":[\"Sales\"]}}"
        },
        {
            name: "Sales and Downloads by Country",
            def: "{\"showZeros\":false,\"showColumnTotals\":2,\"showRowTotals\":2,\"defaultFilterType\":3,\"fields\":[{\"binding\":\"id\",\"header\":\"Id\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"product\",\"header\":\"Product\",\"dataType\":1,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"country\",\"header\":\"Country\",\"dataType\":1,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"date\",\"header\":\"Date\",\"dataType\":4,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"format\":\"d\",\"isContentHtml\":false},{\"binding\":\"sales\",\"header\":\"Sales\",\"dataType\":2,\"aggregate\":3,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"downloads\",\"header\":\"Downloads\",\"dataType\":2,\"aggregate\":3,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"active\",\"header\":\"Active\",\"dataType\":3,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"discount\",\"header\":\"Discount\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false}],\"rowFields\":{\"items\":[\"Country\"]},\"columnFields\":{\"items\":[]},\"filterFields\":{\"items\":[]},\"valueFields\":{\"items\":[\"Sales\",\"Downloads\"]}}"
        },
        {
            name: "Sales Trend by Product",
            def: "{\"showZeros\":false,\"showColumnTotals\":0,\"showRowTotals\":0,\"defaultFilterType\":3,\"fields\":[{\"binding\":\"id\",\"header\":\"Id\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"product\",\"header\":\"Product\",\"dataType\":1,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"country\",\"header\":\"Country\",\"dataType\":1,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"date\",\"header\":\"Date\",\"dataType\":4,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"format\":\"yyyy \\\"Q\\\"q\",\"isContentHtml\":false},{\"binding\":\"sales\",\"header\":\"Sales\",\"dataType\":2,\"aggregate\":3,\"showAs\":2,\"descending\":false,\"format\":\"p2\",\"isContentHtml\":false},{\"binding\":\"downloads\",\"header\":\"Downloads\",\"dataType\":2,\"aggregate\":3,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"active\",\"header\":\"Active\",\"dataType\":3,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"discount\",\"header\":\"Discount\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false}],\"rowFields\":{\"items\":[\"Date\"]},\"columnFields\":{\"items\":[\"Product\"]},\"filterFields\":{\"items\":[]},\"valueFields\":{\"items\":[\"Sales\"]}}"
        }
    ]

    // 1) create/bind the controls that configure the PivotPanel control
    app.cmbDataSets = new wijmo.input.ComboBox('#cmbDataSets', {
        itemsSource: app.dataSets,
        displayMemberPath: 'name',
        selectedValuePath: 'value',
        selectedIndexChanged: function (s, e) {
            app.setProperty('data', s.selectedValue);
        }
    });
    app.cmbRowTotals = new wijmo.input.ComboBox('#cmbRowTotals', {
        itemsSource: app.showTotals,
        displayMemberPath: 'name',
        selectedValuePath: 'value',
        selectedIndexChanged: function (s, e) {
            app.setProperty('showRowTotals', s.selectedValue);
        }
    });
    app.cmbColTotals = new wijmo.input.ComboBox('#cmbColTotals', {
        itemsSource: app.showTotals,
        displayMemberPath: 'name',
        selectedValuePath: 'value',
        selectedIndexChanged: function (s, e) {
            app.setProperty('showColTotals', s.selectedValue);
        }
    });
    app.chkShowZeros = document.getElementById('chkShowZeros');
    app.chkShowZeros.addEventListener('click', function (e) {
        app.setProperty('showZeros', app.chkShowZeros.checked);
    });
    app.propertyChanged.addHandler(function (s, e) {
        switch (e.propertyName) {
            case 'data':
                app.cmbDataSets.selectedValue = e.newValue;
                break;
            case 'showRowTotals':
                app.cmbRowTotals.selectedValue = e.newValue;
                break;
            case 'showColTotals':
                app.cmbColTotals.selectedValue = e.newValue;
                break;
            case 'showZeros':
                app.chkShowZeros.checked = e.newValue;
        }
    });

    // 2) create/bind the PivotPanel, PivotGrid, and PivotChart controls
    app.panel = new wijmo.olap.PivotPanel('#pivotPanel');
    var ng = app.panel.engine;
    app.propertyChanged.addHandler(function (s, e) {
        switch (e.propertyName) {
            case 'data':
                ng.itemsSource = e.newValue;
                break;
            case 'showRowTotals':
                ng.showRowTotals = e.newValue;
                break;
            case 'showColTotals':
                ng.showColumnTotals = e.newValue;
                break;
            case 'showZeros':
                ng.showZeros = e.newValue;

        }
    });
    ng.viewDefinitionChanged.addHandler(function () {
        document.getElementById('chartPanel').style.display = ng.isViewDefined ? '' : 'none';
        document.getElementById('noChartPanel').style.display = ng.isViewDefined ? 'none' : '';
    });
    app.pivotGrid = new wijmo.olap.PivotGrid('#pivotGrid', {
        itemsSource: app.panel,
        showSelectedHeaders: 'All'
    });
    app.pivotChart = new wijmo.olap.PivotChart('#pivotChart', {
        itemsSource: app.panel
    });
    app.cmbChartType = new wijmo.input.ComboBox('#cmbChartType', {
        itemsSource: app.chartTypes,
        displayMemberPath: 'name',
        selectedValuePath: 'value',
        selectedIndexChanged: function (s, e) {
            app.pivotChart.chartType = s.selectedValue;
        }
    });

    // configure the initial view
    ng.itemsSource = app.dataSets[0].value;
    ng.rowFields.push('Product', 'Country');
    ng.valueFields.push('Sales', 'Downloads');

    // save/restore view definitions
    app.saveView = function () {
        if (ng.isViewDefined) {
            localStorage.viewDefinition = ng.viewDefinition;
        }
    }
    app.loadView = function () {
        if (localStorage.viewDefinition) {
            ng.viewDefinition = localStorage.viewDefinition;
            app.cmbRowTotals.selectedValue = ng.showRowTotals;
            app.cmbColTotals.selectedValue = ng.showColumnTotals;
            app.chkShowZeros.checked = ng.showZeros;
        }
    }

    // populate list of pre-defined views
    var viewList = document.getElementById('views');
    for (var i = 0; i < app.viewDefs.length; i++) {
        var li = wijmo.createElement('<li><a href="#theView" index="' + i + '">' + app.viewDefs[i].name + '</a></li>');
        viewList.appendChild(li);
    }

    // apply pre-defined views
    viewList.addEventListener('click', function (e) {
        if (e.target.tagName == 'A') {
            app.setProperty('data', app.dataSets[3].value);
            var index = parseInt(e.target.getAttribute('index'));
            ng.viewDefinition = app.viewDefs[index].def;
            //e.preventDefault();
        }
    });

    // 3) create bind a FlexGrid to show and filter the raw data
    app.rawGrid = new wijmo.grid.FlexGrid('#rawGrid', {
        showSelectedHeaders: 'All'
    });
    app.rawGridFilter = new wijmo.grid.filter.FlexGridFilter(app.rawGrid);
    app.propertyChanged.addHandler(function (s, e) {
        switch (e.propertyName) {
            case 'data':

                // update items source
                app.rawGrid.itemsSource = e.newValue;

                // update item count message and read-only visibility
                document.getElementById('itemCount').textContent = wijmo.Globalize.format(e.newValue.items.length, 'n0');
                document.getElementById('readOnlyData').style.display = e.newValue instanceof wijmo.odata.ODataCollectionView
                    ? ''
                    : 'none';
                break;
        }
    });

    // 4) export the current view to Excel
    app.export = function () {

        // create book with current view
        var book = wijmo.grid.xlsx.FlexGridXlsxConverter.save(app.pivotGrid, {
            includeColumnHeaders: true,
            includeRowHeaders: true
        });
        book.sheets[0].name = 'Main View';
        addTitleCell(book.sheets[0], getViewTitle(app.panel.engine));

        // add sheet with transposed view
        transposeView(app.panel.engine);
        var transposed = wijmo.grid.xlsx.FlexGridXlsxConverter.save(app.pivotGrid, {
            includeColumnHeaders: true,
            includeRowHeaders: true
        });
        transposed.sheets[0].name = 'Transposed View';
        addTitleCell(transposed.sheets[0], getViewTitle(app.panel.engine));
        book.sheets.push(transposed.sheets[0]);
        transposeView(app.panel.engine);

        // add sheet with raw data
        if (app.rawGrid.rows.length < 20000) {
            var raw = wijmo.grid.xlsx.FlexGridXlsxConverter.save(app.rawGrid, {
                includeColumnHeaders: true,
                includeRowHeaders: false
            });
            raw.sheets[0].name = 'Raw Data';
            book.sheets.push(raw.sheets[0]);
        }

        // save the book
        book.save('wijmo.olap.xlsx');
    }

    // 5) create a PivotGrid with custom formatting
    var ngFmt = new wijmo.olap.PivotEngine({
        autoGenerateFields: false,
        itemsSource: getSimpleDataSet(10000),
        showColumnTotals: wijmo.olap.ShowTotals.GrandTotals,
        showRowTotals: wijmo.olap.ShowTotals.None,
        fields: [
            { binding: 'product', header: 'Product' },
            { binding: 'date', header: 'Date', format: 'yyyy \"Q\"q' },
            { binding: 'sales', header: 'Sales', format: 'n0' },
            { binding: 'sales', header: 'Diff', format: 'p0', showAs: wijmo.olap.ShowAs.DiffRowPct }
        ]
    });
    ngFmt.rowFields.push('Date');
    ngFmt.columnFields.push('Product');
    ngFmt.valueFields.push('Sales', 'Diff');
    app.formattedGrid = new wijmo.olap.PivotGrid('#formattedGrid', {
        itemsSource: ngFmt,
        showSelectedHeaders: 'All',
        formatItem: function (s, e) {
            if (e.panel == s.cells && e.col % 2 == 1) {
                var value = s.getCellData(e.row, e.col),
                    color = '#d8b400',
                    glyph = 'circle';
                if (value != null) {
                    if (value < 0) { // negative variation
                        color = '#9f0000';
                        glyph = 'down';
                    } else if (value > 0.05) { // positive variation
                        color = '#4c8f00';
                        glyph = 'down';
                    }
                    e.cell.style.color = color;
                    e.cell.innerHTML += ' <span style="font-size:120%" class="wj-glyph-' + glyph + '"></span>';
                }
            }
        }
    });

    // initialize app properties
    app.setProperty('data', app.dataSets[0].value);
    app.setProperty('showRowTotals', wijmo.olap.ShowTotals.Subtotals);
    app.setProperty('showColTotals', wijmo.olap.ShowTotals.Subtotals);
    app.setProperty('showZeros', false);
}


/**************************************************
    utilities
*/

// save/load/transpose/export views
function transposeView(ng) {
    ng.deferUpdate(function () {

        // save row/col fields
        var rows = [],
            cols = [];
        for (var r = 0; r < ng.rowFields.length; r++) {
            rows.push(ng.rowFields[r].header);
        }
        for (var c = 0; c < ng.columnFields.length; c++) {
            cols.push(ng.columnFields[c].header);
        }

        // clear row/col fields
        ng.rowFields.clear();
        ng.columnFields.clear();

        // restore row/col fields in transposed order
        for (var r = 0; r < rows.length; r++) {
            ng.columnFields.push(rows[r]);
        }
        for (var c = 0; c < cols.length; c++) {
            ng.rowFields.push(cols[c]);
        }
    });
}

// build a title for the current view
function getViewTitle(ng) {
    var title = '';
    for (var i = 0; i < ng.valueFields.length; i++) {
        if (i > 0) title += ', ';
        title += ng.valueFields[i].header;
    }
    title += ' by ';
    if (ng.rowFields.length) {
        for (var i = 0; i < ng.rowFields.length; i++) {
            if (i > 0) title += ', ';
            title += ng.rowFields[i].header;
        }
    }
    if (ng.rowFields.length && ng.columnFields.length) {
        title += ' and by ';
    }
    if (ng.columnFields.length) {
        for (var i = 0; i < ng.columnFields.length; i++) {
            if (i > 0) title += ', ';
            title += ng.columnFields[i].header;
        }
    }
    return title;
}

// adds a title cell into an xlxs sheet
function addTitleCell(sheet, title) {

    // create cell
    var cell = new wijmo.xlsx.WorkbookCell();
    cell.value = title;
    cell.style = new wijmo.xlsx.WorkbookStyle();
    cell.style.font = new wijmo.xlsx.WorkbookFont();
    cell.style.font.bold = true;

    // create row to hold the cell
    var row = new wijmo.xlsx.WorkbookRow();
    row.cells[0] = cell;

    // and add the new row to the sheet
    sheet.rows.splice(0, 0, row);
}

// gets a random integer between zero and max
function randomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

// gets a simple data set for basic demos
function getSimpleDataSet(cnt) {
    var dtOct = new Date(2015, 9, 1),
        dtDec = new Date(2015, 11, 1),
        data = [
            { product: 'Wijmo', country: 'USA', sales: 10, downloads: 100, date: dtOct, active: true },
            { product: 'Wijmo', country: 'Japan', sales: 10, downloads: 100, date: dtOct, active: false },
            { product: 'Aoba', country: 'USA', sales: 10, downloads: 100, date: dtDec, active: true },
            { product: 'Aoba', country: 'Japan', sales: 10, downloads: 100, date: dtDec, active: false }
        ];
    for (var i = 0; i < cnt - 4; i++) {
        data.push({
            product: randomInt(1) ? 'Wijmo' : 'Aoba',
            country: randomInt(1) ? 'USA' : 'Japan',
            active: i % 2 == 0,
            date: new Date(2015 + randomInt(2), randomInt(11), randomInt(27) + 1),
            sales: randomInt(10, 20),
            downloads: randomInt(10, 200)
        });
    }
    return new wijmo.collections.CollectionView(data);
}

// gets a slightly more complex data set for more advanced demos
function getDataSet(cnt) {
    var countries = 'US,Germany,UK,Japan,Italy,Greece,Spain,Portugal'.split(','),
        products = 'Wijmo,Aoba,Xuni,Olap'.split(','),
        data = [];
    for (var i = 0; i < cnt; i++) {
        data.push({
            id: i,
            product: products[randomInt(products.length - 1)],
            country: countries[randomInt(countries.length - 1)],
            date: new Date(2015 + randomInt(2), randomInt(11), randomInt(27) + 1),
            sales: randomInt(10000),
            downloads: randomInt(10000),
            active: randomInt(1) ? true : false,
            discount: Math.random()
        });
    }
    return new wijmo.collections.CollectionView(data);
}

// get Northwind data (these are not very good sources for this demo, but are so easy to get...)
function getNorthwindOrders() {
    var url = 'http://services.odata.org/V4/Northwind/Northwind.svc/';
    return new wijmo.odata.ODataCollectionView(url, 'Order_Details_Extendeds');
}
function getNorthwindSales() {
    var url = 'http://services.odata.org/V4/Northwind/Northwind.svc/';
    return new wijmo.odata.ODataCollectionView(url, 'Product_Sales_for_1997');
}
