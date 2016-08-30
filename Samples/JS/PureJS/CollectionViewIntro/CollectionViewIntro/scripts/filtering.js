(function () {
    // create collectionview, grid, filter with timeout, textbox for inputting filter.
    var cvFiltering = new wijmo.collections.CollectionView(getData(20)),
        filteringGrid = new wijmo.grid.FlexGrid('#filteringGrid'),
        toFilter,
        filteringInput = document.getElementById('filteringInput');

    // initialize grid
    filteringGrid.initialize({
        isReadOnly: true,
        itemsSource: cvFiltering
    });

    // apply filter when input
    filteringInput.addEventListener('input', filterGrid);

    // define the filter function for the collection view.
    function filterFunction(item) {
        var filter = filteringInput.value.toLowerCase();
        if (!filter) {
            return true;
        }

        return item.country.toLowerCase().indexOf(filter) > -1;
    }

    // apply filter (applied on a 500 ms timeOut)
    function filterGrid() {
        if (toFilter) {
            clearTimeout(toFilter);
        }

        toFilter = setTimeout(function () {
            toFilter = null;
            if (cvFiltering.filter === filterFunction) {
                cvFiltering.refresh();
            }
            else {
                cvFiltering.filter = filterFunction;
            }
        }, 500);
    }
})();