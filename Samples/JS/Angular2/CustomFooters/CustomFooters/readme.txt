CustomFooters (Angular2)
-----------------------------------------------------------------------
Shows how to extend the FlexGrid to provide group footer rows and a grid footer.

Group Footer Rows

When grouping is enabled, the FlexGrid adds group rows above each group.
This sample shows how you can add custom group rows below each group as well.
The group footer rows were implemented as a custom directive called
'groupFooters' which you can add to any FlexGrid.

Footer Grid

In some situations you may want to display a non-scrollable row below the 
grid to show summary information such as subtotals.

This sample shows how you can accomplish this using a separate but 
synchronized grid with a single unbound row to which you can add any data
you want.

The grid footer was implemented as a custom directive called 'gridFooterFor'
which you should add to a FlexGrid that is supposed to act as a footer for 
another FlexGrid.

System requirements
====================
Please refer to the description in the readme.txt file of the Wijmo Explorer for Angular 2 sample.