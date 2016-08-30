Custom CellFactory
-------------------------------------------------------------------------------------
Demonstrates how to use a custom CellFactory to customize cells for display.

Using a custom CellFactory class is slightly more complex than using an 
itemFormatter function or the formatItem event, but it can be more efficient 
than either because it allows you to bypass the default cell content generation 
and recycle custom cells.

The CustomCellFactory class used in this example uses the base class to position 
the cell elements without changing their content, which is updated only when necessary. 
Because the grid reorders and recycles cells, this results in improved rendering 
performance.

Turn the custom CellFactory on and off to see the impact of custom cell formatting 
on rendering/scrolling performance.


