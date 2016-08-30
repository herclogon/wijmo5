(function (wijmo, data) {

    'use strict';
    var chMultirow = new wijmo.grid.multirow.MultiRow('#chMultirow', {
        itemsSource: data.orders,
        layoutDefinition: data.ldThreeLines,
        collapsedHeaders: true,
        showHeaderCollapseButton: true
    });

    var cbCollapsedHeaders = document.getElementById('cbCollapsedHeaders');
    cbCollapsedHeaders.onchange = function () {
        chMultirow.collapsedHeaders = cbCollapsedHeaders.checked;
    }

    var cbshowHeaderCollapseButton = document.getElementById('cbshowHeaderCollapseButton');
    cbshowHeaderCollapseButton.onchange = function () {
        chMultirow.showHeaderCollapseButton = cbshowHeaderCollapseButton.checked;
    }

})(wijmo, appData);