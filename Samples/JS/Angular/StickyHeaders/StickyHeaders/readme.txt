StickyHeaders
---------------------------------------------------------------------------------
Demonstrates the FleGrid's stickyHeaders property.

The stickyHeaders property is used to keep the grid's column headers visible 
while the user scrolls the document. It works whether the grid is hosted directly 
in the document body or in other scrollable elements.

This sample also shows how you can host arbitrary HTML elements within the 
grid's element tree and handle the layoutUpdated event to make these elements
inherit the "sticky" behavior.

The sample defines a sticky toolbar element with buttons that toggle filtering
and grouping UI elements.