(function (wijmo, data) {
    'use strict';
    var grid = new wijmo.grid.FlexGrid('#tFlexGrid');
    grid.itemsSource = data.getData(100);
})(wijmo, appData);