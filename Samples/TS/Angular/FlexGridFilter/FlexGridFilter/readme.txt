FlexGridFilter
-----------------------------------------------------------------------------
Demonstrates the FlexGridFilter, an extension that adds column filtering to the FlexGrid control.

The FlexGridFilter extension is defined in the wijmo.grid.filter.js module.

It allows you to add column filtering to FlexGrid controls, so column headers will
include a filter icon. The filter icon indicates whether the column is currently 
being filtered, and clicking it allows users to edit the filter associated with 
the column.

Using the FlexGridFilter extension in your projects requires two steps:

1) Make sure your page references the wijmo.grid.filter.js file.

2) Enable filtering by instantiating a FlexGridFilter object and specifying the 
   FlexGrid control to filter. For example:

<pre>
var flexGrid = new wijmo.grid.FlexGrid('#theGrid'),
    filter = new wijmo.grid.filter.FlexGridFilter(flexGrid);
</pre>