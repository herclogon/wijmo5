ODataExplorer
--------------------------------------------------------------------------------------------
Allows browsing arbitrary OData endpoints.

This sample shows how you can use the wijmo.odata.ODataCollectionView class to retrieve 
data from arbitrary OData services.

This sample follows the MVVM pattern.
The OData services are loaded into a 'services' CollectionView.
When a service is selected, the entities available are loaded into an 'entities' CollectionView.
When an entity is selected, the data is loaded into a 'data' CollectionView.

The services and entities are shown in ListBox controls, and the data is shown in 
a FlexGrid.

NOTE: This sample only works with OData services that support the JSON format.
