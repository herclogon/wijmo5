(function (wijmo, data) {
    'use strict';
    var styleMultirow = new wijmo.grid.multirow.MultiRow('#styleMultirow', {
        itemsSource: data.orders,
        layoutDefinition: data.ldThreeLines
    });
})(wijmo, appData);