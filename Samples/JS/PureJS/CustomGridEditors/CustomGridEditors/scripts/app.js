onload = function () {

    // some random data
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');
    var products = 'Widget,Gadget,Doohickey'.split(',');
    function getData(count) {
        var data = [],
            dt = new Date();
        for (var i = 0; i < count; i++) {
            data.push({
                id: i,
                date: new Date(dt.getFullYear(), i % 12, 25, i % 24, i % 60, i % 60),
                time: new Date(dt.getFullYear(), i % 12, 25, i % 24, i % 60, i % 60),
                country: countries[Math.floor(Math.random() * countries.length)],
                product: products[Math.floor(Math.random() * products.length)],
                amount: Math.random() * 10000 - 5000,
                discount: Math.random() / 4
            });
        }
        return data;
    }

    // create FlexGrid
    var flex = new wijmo.grid.FlexGrid('#flexGrid', {
        autoGenerateColumns: false,
        itemsSource: getData(50),
        columns: [
            { header: 'ID', binding: 'id', width: '.4*', isReadOnly: true },
            { header: 'Date', binding: 'date', width: '*', format: 'd' },
            { header: 'Time', binding: 'time', width: '*', format: 't' },
            { header: 'Country', binding: 'country', width: '2*' },
            { header: 'Product', binding: 'product', width: '2*' },
            { header: 'Amount', binding: 'amount', format: 'n2', width: '*' }
        ]
    });

    // attach custom editors
    new CustomGridEditor(flex, 'date', wijmo.input.InputDate, {
        format: 'd'
    });
    new CustomGridEditor(flex, 'time', wijmo.input.InputTime, {
        format: 't',
        min: new Date(2000, 1, 1, 7, 0),
        max: new Date(2000, 1, 1, 22, 0),
        step: 30
    });
    new CustomGridEditor(flex, 'country', wijmo.input.ComboBox, {
        itemsSource: countries
    });
    new CustomGridEditor(flex, 'product', wijmo.input.ComboBox, {
        itemsSource: products
    });
    new CustomGridEditor(flex, 'amount', wijmo.input.InputNumber, {
        format: 'n2',
        step: 10
    });

    // create a context menu
    var ctxMenu = new wijmo.input.Menu(document.createElement('div')),
        hitTest;
    ctxMenu.itemsSource = 'Insert Row Above,Insert Row Below,Delete Row,Reset Row'.split(',');
    ctxMenu.selectedIndexChanged.addHandler(function () {

        // take action after menu selection
        if (ctxMenu.selectedIndex > -1) {
            alert('thank you for selecting option ' + ctxMenu.selectedIndex + ' for row ' + hitTest.row);
        }
    });

    // attach context menu to grid
    flex.addEventListener(flex.hostElement, 'contextmenu', function (e) {

        // save row/column that received the context menu request
        hitTest = flex.hitTest(e);

        // if the click was on a regular cell, cancel the regular context menu
        // and show the custom menu instead
        if (hitTest.panel == flex.cells) {
            e.preventDefault();
            ctxMenu.selectedIndex = -1;
            wijmo.showPopup(ctxMenu.dropDown, e);
            ctxMenu.dropDown.focus();
        }
    });
}