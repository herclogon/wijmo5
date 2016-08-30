(function () {
    // create collectionview, grid, the jQuery elements, the field name list.
    var cvSorting = new wijmo.collections.CollectionView(getData(10)),
        sortingGrid = new wijmo.grid.FlexGrid('#sortingGrid'),
        sortingFieldNameList = document.getElementById('sortingFieldNameList'),
        sortingOrderList = document.getElementById('sortingOrderList'),
        sortingNames = getNames();

    // initialize grid
    sortingGrid.initialize({
        isReadOnly: true,
        allowSorting: false,
        itemsSource: cvSorting
    });

    // initialize the list items for field names and orders.
    sortingFieldNameList.innerHTML += '<option value="" selected="selected">Please choose the field you want to sort by...</option>';
    for (var i = 0; i < sortingNames.length; i++) {
        sortingFieldNameList.innerHTML += '<option value="' + sortingNames[i] + '">' + sortingNames[i] + '</option>';
    }

    // track the list change in order to udpate the sortDescriptions property.
    sortingFieldNameList.addEventListener('change', sortGrid);
    sortingOrderList.addEventListener('change', sortGrid);

    function sortGrid() {
        var fieldName = sortingFieldNameList.value,
            ascending = sortingOrderList.value,
            sd, sdNew;

        if (!fieldName) {
            return;
        }

        ascending = ascending === 'true';
        sd = cvSorting.sortDescriptions;
        sdNew = new wijmo.collections.SortDescription(fieldName, ascending);

        // remove any old sort descriptors and add the new one
        sd.splice(0, sd.length, sdNew);
    }
})();