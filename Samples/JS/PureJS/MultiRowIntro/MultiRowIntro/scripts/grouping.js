(function (wijmo, data) {
    'use strict';
    var groupMultirow = new wijmo.grid.multirow.MultiRow('#groupMultirow', {
        itemsSource: data.groupedOrders,
        layoutDefinition: data.ldThreeLines,
        showGroups: true,
        groupHeaderFormat: 'City: <b>{value} </b>({count:n0} items)'
    });

    var cbShowGroup = document.getElementById('cbShowGroup');
    cbShowGroup.onchange = function () {
        groupMultirow.showGroups = cbShowGroup.checked;
    }

    var btnCollapse = document.getElementById('btnCollapse');
    btnCollapse.onclick = function () {
        groupMultirow.collapseGroupsToLevel(0);
    }

    var btnExpand = document.getElementById('btnExpand');
    btnExpand.onclick = function () {
        groupMultirow.collapseGroupsToLevel(10);
    }

})(wijmo, appData);