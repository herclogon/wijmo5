(function () {
    // create collectionview, grids, the grid column layout
    var cvTrackingChanges = new wijmo.collections.CollectionView(getData(6)),
        tcMainGrid = new wijmo.grid.FlexGrid('#tcMainGrid'), // the flexGrid to edit the data
        tcEditedGrid = new wijmo.grid.FlexGrid('#tcEditedGrid'), // the flexGrid to record the edited items
        tcAddedGrid = new wijmo.grid.FlexGrid('#tcAddedGrid'), // the flexGrid to record the added items
        tcRemovedGrid = new wijmo.grid.FlexGrid('#tcRemovedGrid'), // the flexGrid to record the removed items
        columnsDefinition = [
          { header: 'id', binding: 'id' },
          { header: 'start', binding: 'start' },
          { header: 'end', binding: 'end' },
          { header: 'country', binding: 'country' },
          { header: 'product', binding: 'product' },
          { header: 'color', binding: 'color' },
          { header: 'amount', binding: 'amount' },
          { header: 'active', binding: 'active' }
        ];

    // initialize the grids
    tcMainGrid.initialize({
        allowAddNew: true,
        allowDelete: true,
        itemsSource: cvTrackingChanges
    });

    tcEditedGrid.initialize({
        isReadOnly: true,
        autoGenerateColumns: false,
        columns: columnsDefinition,
        itemsSource: cvTrackingChanges.itemsEdited
    });

    tcAddedGrid.initialize({
        isReadOnly: true,
        autoGenerateColumns: false,
        columns: columnsDefinition,
        itemsSource: cvTrackingChanges.itemsAdded
    });

    tcRemovedGrid.initialize({
        isReadOnly: true,
        autoGenerateColumns: false,
        columns: columnsDefinition,
        itemsSource: cvTrackingChanges.itemsRemoved
    });

    // track changes of the collectionview
    cvTrackingChanges.trackChanges = true;
})();