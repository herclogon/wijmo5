DragDropColumnPicker
---------------------------------------------------------------------
Shows how you add a drag/drop based column picker to the FlexGrid.

By default, the FlexGrid allows users to drag columns into new positions.
But it does not have a built-in system for selecting which columns should be
displayed on the grid.

This sample demonstrates how you can build a dialog that allows users to select
which columns should be displayed and in what order using drag and drop.

The sample defines a ColumnPicker control and shows it in a modal dialog.
The ColumnPicker control contains two lists of columns and allows users
to drag and drop between and within columns.

The column picker dialog is defined in HTML so it can be easily customized.

The sample supports drag and drop on mobile devices by including the 
DragDropTouch polyfill.
