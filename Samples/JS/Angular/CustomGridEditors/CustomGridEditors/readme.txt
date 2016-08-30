CustomGridEditors
--------------------------------------------------------------------------
Shows how you can use custom editors to change the values in FlexGrid cells.

The sample defines a <b>CustomGridEditor</b> class that creates a mapping
between a grid column and a control. When the user starts editing a cell,
the class positions the control over the cell and gives it the focus.

You can use any Wijmo control that has "value" or "text" properties (like 
the ones in wijmo.input) as a custom editor. Using non-Wijmo controls 
as editors would require some adjustments to the sample code.

The sample also defines a <b>wj-flex-grid-editor</b> directive that 
allows you to associate custom editors with grid columns in markup.
