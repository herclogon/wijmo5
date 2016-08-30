VirtualData
------------------------------------------------------------------------
Demonstrates how to use the wijmo.odata.ODataVirtualCollectionView class.

The ODataVirtualCollectionView class implements a 'data window' so only
data that is actually being displayed is loaded from the server. Items that are
not being displayed are added to the collection as null values until they a call
to the @see:setWindow method causes them to be loaded.

This 'on-demand' method of loading data has advantages when dealing with large
data sets, because it prevents the application from loading data until it is
required. But it does impose some limitation: sorting and filtering must be
done on the server; grouping and paging are not supported.

When you run the sample, you will see two grids.

The grid on the left is bound to an ODataCollectionView which loads all the 
data asynchronously. You can see the record count increasing as the data comes in.

The grid on the right is bound to an ODataVirtualCollectionView which loads data 
on demand. You can see the total record count immediately, but the data is loaded
only when you scroll down the grid.