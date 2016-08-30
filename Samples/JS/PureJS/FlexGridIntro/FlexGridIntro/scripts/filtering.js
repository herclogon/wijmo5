(function (wijmo, data) {
    'use strict';

    // create grid, some data
    var grid = new wijmo.grid.FlexGrid('#fFlexGrid'),
        cv = new wijmo.collections.CollectionView(data.getData(100)),
        filterEl = document.getElementById('fFilter'),
        filterText = '';

    // populate the grid with data
    grid.itemsSource = cv;

    // update grid when filter changes
    filterEl.addEventListener('input', function () {
        filterText = this.value.toLowerCase();
        cv.refresh();
    });

    // CollectionView filter
    cv.filter = function (item) {
        if (filterText) {
            return item.country.toLowerCase().indexOf(filterText) > -1;
        } else {
            return true;
        }
    };
})(wijmo, appData);