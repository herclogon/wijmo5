GroupPanel
-----------------------------------------------------------------------------
Demonstrates the GroupPanel, an extension that adds a drag-drop grouping UI to the FlexGrid control.

The GroupPanel control is defined in the wijmo.grid.grouppanel.js module.

It allows you to add a drag-drop grouping panel to FlexGrid controls. You can
drag column headers into the panel to create groups, drag groups to new positions,
or remove existing groups.

The GroupPanel also allows you to limit the maximum number of groups that can
be created (through the maxGroups property) and to determine whether grouped
columns should be displayed on the grid (through the showGroupedColumns
property).

Using the GroupPanel control in your projects requires three steps:

1) Make sure your page references the wijmo.grid.grouppanel.js file,

2) Create a FlexGrid and a GroupPanel controls, and 

3) Connect the grid and the panel by setting the GroupPanel.grid property.

For example:

<pre>
var flex = new wijmo.grid.FlexGrid('#theGrid'),
    panel = new wijmo.grid.grouppanel.GroupPanel('#thePanel', { grid: flex });
</pre>
