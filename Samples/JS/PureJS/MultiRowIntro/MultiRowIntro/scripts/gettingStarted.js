(function (wijmo, data) {
    'use strict';

    var multirow = new wijmo.grid.multirow.MultiRow('#multirow', {
        itemsSource: data.orders,
        layoutDefinition: data.layoutDefs.currentItem.def
    });

    var ldComboBox = new wijmo.input.ComboBox('#ldComboBox', {
        itemsSource: data.layoutDefs,
        displayMemberPath: "name"
    });

    ldComboBox.selectedIndexChanged.addHandler(function () {
        if (data.layoutDefs.currentItem) {
            multirow.layoutDefinition = data.layoutDefs.currentItem.def;
            document.getElementById('desc').innerHTML = data.layoutDefs.currentItem.description;
        }
    });

    document.getElementById('desc').innerHTML = data.layoutDefs.currentItem.description;

})(wijmo, appData);