(function (wijmo, data) {
    'use strict';

    // create a CollectionView, set the page size to 10, initialize pager
    var cv = new wijmo.collections.CollectionView(data.getData(100)),
        pagerButtons = Array.prototype.slice.call(document.querySelectorAll('#pPager button'));

    cv.pageSize = 10; // set collectionView's pageSize
    updatePager();

    // show the data in a grid
    var grid = new wijmo.grid.FlexGrid('#pFlexGrid');
    grid.itemsSource = cv;

    // update pager when user clicks a button
    pagerButtons.forEach(function(el) {
        el.addEventListener('click', function () {
            updatePager(this.getAttribute('data-action'));
        });
    });

    // disable/enable buttons and update display text for pager
    function updatePager(action) {

        // get buttons by id
        var display = document.getElementById('pn'),
            fb = document.getElementById('pfb'), sb = document.getElementById('psb'),
            sf = document.getElementById('psf'), ff = document.getElementById('pff'),
            enableBackwards = false,
            enableForwards = false;

        // handle pager operation based on button's attribute
        switch (action) {
            case 'fast-backward':
                cv.moveToFirstPage();
                break;
            case 'step-backward':
                cv.moveToPreviousPage();
                break;
            case 'step-forward':
                cv.moveToNextPage();
                break;
            case 'fast-forward':
                cv.moveToLastPage();
                break;
        }

        // update the pager text
        display.innerHTML = (cv.pageIndex + 1) + ' / ' + (cv.pageCount);

        // determine which pager buttons to enable/disable
        enableBackwards = cv.pageIndex <= 0;
        enableForwards = cv.pageIndex >= cv.pageCount - 1;

        // enable/disable pager buttons
        fb.disabled = enableBackwards;
        sb.disabled = enableBackwards;
        sf.disabled = enableForwards;
        ff.disabled = enableForwards;
    }
})(wijmo, appData);