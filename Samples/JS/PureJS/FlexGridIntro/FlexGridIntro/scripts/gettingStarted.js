(function (wijmo, data) {
    'use strict';

    // create the grid and give it some data
    var grid = new wijmo.grid.FlexGrid('#gsFlexGrid');
    grid.itemsSource = data.getData(100);

})(wijmo, appData);