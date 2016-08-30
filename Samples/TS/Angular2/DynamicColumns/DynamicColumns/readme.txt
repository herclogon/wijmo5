DynamicColumns (Angular 2)
---------------------------------------------------------------------
Shows how you can use Angular's ngFor directives to create grid columns dynamically.

The sample presents an editor where you can select a set of columns to
display on the grid and their order.

The editor's collection is used with the ngFor statement to generate
grid columns. The grid always stays in sync with the collection.

Notice that if the user moves a column by dragging it to a new position on the
grid, the controller updates the 'columns' collection to reflect the change.
This is necessary because the ngFor directive is one-way: it updates the
view to reflect changes in the controller, and not the other way around.

System requirements
====================
Please refer to the description in the readme.txt file of the Wijmo Explorer for Angular 2 sample.