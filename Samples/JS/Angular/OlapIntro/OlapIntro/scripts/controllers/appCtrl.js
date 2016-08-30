'use strict';

// add controller to app
angular.module('app').controller('appCtrl', function appCtrl($scope) {

    // define sample data sets
    $scope.dataSets = [
        { name: 'Simple (1,000 items)', value: getSimpleDataSet(1000) },
        { name: 'Simple (10,000 items)', value: getSimpleDataSet(10000) },
        { name: 'Complex (100 items)', value: getDataSet(100) },
        { name: 'Complex (50,000 items)', value: getDataSet(50000) },
        { name: 'Complex (100,000 items)', value: getDataSet(100000) },
        { name: 'Northwind Orders (read-only)', value: getNorthwindOrders() },
        { name: 'Northwind Sales (read-only)', value: getNorthwindSales() }
    ];

    // define ShowTotals options/values
    $scope.showTotals = [
        { name: 'None', value: wijmo.olap.ShowTotals.None },
        { name: 'Grand totals', value: wijmo.olap.ShowTotals.GrandTotals },
        { name: 'Subtotals', value: wijmo.olap.ShowTotals.Subtotals },
    ];

    // chart types
    $scope.chartTypes = [
        { name: 'Column', value: wijmo.olap.PivotChartType.Column },
        { name: 'Bar', value: wijmo.olap.PivotChartType.Bar },
        { name: 'Scatter', value: wijmo.olap.PivotChartType.Scatter },
        { name: 'Line', value: wijmo.olap.PivotChartType.Line },
        { name: 'Area', value: wijmo.olap.PivotChartType.Area },
        { name: 'Pie', value: wijmo.olap.PivotChartType.Pie },
    ];

    // pre-defined views
    $scope.viewDefs = [
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
    ];

    // initialize the view definition
    $scope.init = function (sender, e) {
        var ng = sender.engine;
        ng.rowFields.push('Product', 'Country');
        ng.valueFields.push('Sales', 'Downloads');
        ng.showRowTotals = wijmo.olap.ShowTotals.Subtotals;
        ng.showColTotals = wijmo.olap.ShowTotals.Subtotals;
        ng.viewDefinitionChanged.addHandler(function (s, e) {
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        });
    }

    // save/restore view definitions
    $scope.saveView = function () {
        var ng = $scope.thePanel.engine;
        if (ng.isViewDefined) {
            localStorage.viewDefinition = ng.viewDefinition;
        }
    }
    $scope.loadView = function (def) {
        var ng = $scope.thePanel.engine;
        if (def) {
            // load pre-defined view (against specific dataset)
            $scope.rawData = $scope.dataSets[3].value;
            ng.itemsSource = $scope.rawData;
            ng.viewDefinition = def;
        } else {
            // load view from localStorage (whatever the user saved)
            ng.viewDefinition = localStorage.viewDefinition;
        }
    }

    // export pivot table and raw data to Excel
    $scope.export = function () {
        var ng = $scope.thePanel.engine;

        // create book with current view
        var book = wijmo.grid.xlsx.FlexGridXlsxConverter.save($scope.pivotGrid, {
            includeColumnHeaders: true,
            includeRowHeaders: true
        });
        book.sheets[0].name = 'Main View';
        addTitleCell(book.sheets[0], getViewTitle(ng));

        // add sheet with transposed view
        transposeView(ng);
        var transposed = wijmo.grid.xlsx.FlexGridXlsxConverter.save($scope.pivotGrid, {
            includeColumnHeaders: true,
            includeRowHeaders: true
        });
        transposed.sheets[0].name = 'Transposed View';
        addTitleCell(transposed.sheets[0], getViewTitle(ng));
        book.sheets.push(transposed.sheets[0]);
        transposeView(ng);

        // add sheet with raw data (unless there's too much data)
        if ($scope.rawGrid.rows.length < 20000) {
            var raw = wijmo.grid.xlsx.FlexGridXlsxConverter.save($scope.rawGrid, {
                includeColumnHeaders: true,
                includeRowHeaders: false
            });
            raw.sheets[0].name = 'Raw Data';
            book.sheets.push(raw.sheets[0]);
        }

        // save the book
        book.save('wijmo.olap.xlsx');
    }

    // create a custom PivotEngine for the custom-formatted grid
    $scope.ngFmt = new wijmo.olap.PivotEngine({
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
    $scope.ngFmt.rowFields.push('Date');
    $scope.ngFmt.columnFields.push('Product');
    $scope.ngFmt.valueFields.push('Sales', 'Diff');
    $scope.formatItem = function (s, e) {
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
});
