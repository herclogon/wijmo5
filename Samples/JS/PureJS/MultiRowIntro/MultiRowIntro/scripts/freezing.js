(function (wijmo, data) {
    'use strict';
    var freezeMultirow = new wijmo.grid.multirow.MultiRow('#freezeMultirow', {
        itemsSource: data.orders,
        layoutDefinition: data.ldTwoLines
    });

    var btnFreeze = document.getElementById('btnFreeze');
    btnFreeze.onclick = function () {
        if (freezeMultirow) {
            freezeMultirow.frozenColumns = freezeMultirow.frozenColumns ? 0 : 2;
            freezeMultirow.frozenRows = freezeMultirow.frozenRows ? 0 : 2;
        }
        btnFreeze.innerHTML = freezeMultirow.frozenRows == 0 ? 'Freeze' : 'Unfreeze';
    }

})(wijmo, appData);