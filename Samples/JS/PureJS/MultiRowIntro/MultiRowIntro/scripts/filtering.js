(function (wijmo, data) {
    'use strict';
    var filterMultirow = new wijmo.grid.multirow.MultiRow('#filterMultirow', {
        itemsSource: data.orders,
        layoutDefinition: data.ldThreeLines
    });
    var filter = new wijmo.grid.filter.FlexGridFilter(filterMultirow);
})(wijmo, appData);