ColumnPicker
---------------------------------------------------------------------
Shows how you add a column picker to the FlexGrid.

The sample implements a column picker as an AngularJS directive. 
To use the directive, add it to the grid markup as follows:

<pre>
    <wj-flex-grid 
        column-picker="images/colpicker.png"
        style="max-height:350px"
        items-source="data">
    </wj-flex-grid>
</pre>

The value of the column-picker directive/parameter represents an
image to be displayed at the top-right of the grid.

Clicking the image shows a drop-down with a list of checkboxes 
representing the grid columns. The user may toggle the column
visibility by clicking the checkboxes.

