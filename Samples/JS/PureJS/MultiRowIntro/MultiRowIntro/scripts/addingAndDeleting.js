(function (wijmo, data) {
    'use strict';
    var adMultirow = new wijmo.grid.multirow.MultiRow('#adMultirow', {
        itemsSource: data.addNewOrders,
        layoutDefinition: data.ldThreeLines,
        showGroups: false,
        allowAddNew: true,
        allowDelete: true
    });
    var ckbAllNew = document.getElementById('ckbAllNew');
    ckbAllNew.onchange = function () {
        adMultirow.allowAddNew = ckbAllNew.checked;
    }

    var ckbAllDelete = document.getElementById('ckbAllDelete');
    ckbAllDelete.onchange = function () {
        adMultirow.allowDelete = ckbAllDelete.checked;
    }
})(wijmo, appData);