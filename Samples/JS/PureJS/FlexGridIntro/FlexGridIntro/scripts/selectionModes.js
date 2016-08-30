(function (wijmo, data) {
    'use strict';

    // initialize grid and menu
    var grid = new wijmo.grid.FlexGrid('#smFlexGrid'),
        menu = new wijmo.input.Menu('#smMenu'),
        cv = new wijmo.collections.CollectionView(data.getData(100));
    grid.itemsSource = cv;
    updateMenuHeader();

    // update grid selection mode when an item is selected from the menu
    menu.itemClicked.addHandler(function (sender) {
        grid.selectionMode = sender.selectedValue;
        updateMenuHeader();
    });

    // update menu header to show current selection mode
    function updateMenuHeader() {
        menu.header = '<b>Selection Mode:</b> ' + menu.text;
    }
})(wijmo, appData);