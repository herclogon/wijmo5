(function (wijmo, data) {
    'use strict';
    var pagedOrders = data.pagedOrders;
    var pagingMultirow = new wijmo.grid.multirow.MultiRow('#pageMultirow', {
        itemsSource: pagedOrders,
        layoutDefinition: data.ldThreeLines
    });    

    var firstBtn = document.getElementById('firstBtn');
    firstBtn.onclick = function () {
        pagedOrders.moveToFirstPage();
        settingText();
    }

    var previousBtn = document.getElementById('previousBtn');
    previousBtn.onclick = function () {
        pagedOrders.moveToPreviousPage();
        settingText();
    }

    var nextBtn = document.getElementById('nextBtn');
    nextBtn.onclick = function () {
        pagedOrders.moveToNextPage();
        settingText();
    }

    var lastBtn = document.getElementById('lastBtn');
    lastBtn.onclick = function () {
        pagedOrders.moveToLastPage();
        settingText();
    }

    var numBtn = document.getElementById('numBtn');
    settingText();
    
    function settingText() {
        numBtn.innerHTML = (pagedOrders.pageIndex + 1) + '' + '/' + (pagedOrders.pageCount);
    }
})(wijmo, appData);