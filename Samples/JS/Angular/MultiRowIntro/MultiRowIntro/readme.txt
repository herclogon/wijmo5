MultiRowIntro
-------------------------------------------------------------------------------------
Shows how to perform common tasks with the MultiRow control.

The MultiRow extends conventional grid layouts by using multiple rows to represent 
each data item. (A more accurate name for the control would be 'MultiRowPerRecordGrid', 
but that is just too long...)

The MultiRow allows users to see and edit data in tabular form, like conventional 
grids. But unlike conventional grids, the MultiRow allows you to bind each data 
item to multiple rows, creating form-like interfaces that can display a large number 
of columns with minimal horizontal scrolling.

The MultiRow extends the FlexGrid control, so if you know how to use the FlexGrid, 
you will be able to user the MultiRow in no time. The main new property is 
layoutDefinition, which takes an object that describes the layout of the grid rows and cells.

The MultiRow is not a simple replacement for conventional grids; it is a specialized 
tool that fits some scenarios really well.