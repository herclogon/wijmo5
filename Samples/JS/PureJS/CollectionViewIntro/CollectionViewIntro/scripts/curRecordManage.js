(function () {
    // create collectionview, grid
    var cvCRM = new wijmo.collections.CollectionView(getData(10)),
        crmGrid = new wijmo.grid.FlexGrid('#crmGrid');

    // initialize grid
    crmGrid.initialize({
        isReadOnly: true,
        selectionMode: wijmo.grid.SelectionMode.Row,
        itemsSource: cvCRM
    });

    // Add the processes for buttons' click
    // move the current to the next one
    document.getElementById('btnCRMMoveNext').addEventListener('click', function () {
        cvCRM.moveCurrentToNext();
    });

    // move the current to the preivous one
    document.getElementById('btnCRMMovePre').addEventListener('click', function () {
        cvCRM.moveCurrentToPrevious();
    });

    // when the current item is the 4th one, forbid changing current.
    document.getElementById('btnCRMStop4').addEventListener('click', function () {
        cvCRM.currentChanging.addHandler(stopCurrentIn4th);
    });

    // restore to be able to change current.
    document.getElementById('btnCRMReset').addEventListener('click', function () {
        cvCRM.currentChanging.removeHandler(stopCurrentIn4th);
    });

    // define the funciton to forbid the current moving.
    function stopCurrentIn4th(sender, e) {
        // when the current is the 4rd item, stop moving.
        if (sender.currentPosition === 3) {
            e.cancel = true;
        }
    }
})();