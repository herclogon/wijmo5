ValueFilter
------------------------------------------------------------------
This sample shows how you can create a value-based filter for the FlexGrid control.

The sample is based on the wijmo.grid.filter extension, which provides
condition-based filtering.

Instead of using conditions to filter the values, this sample filters
based on a set of selected values.

The filter editor presents to the user a list with all the values present 
in the data source, and the user can then select one or more values to display.

The filter editor itself uses a filter to allow users to narrow down the 
number of elements to pick from, and there's a "Select All" checkbox that
can be used to quickly select or de-select all items.

The filter editor is based on a CollectionView that contains the actual values,
the formatted text that represents the value, and a "show" variable that defines
whether to show the items. This CollectionView is sorted by actual values and 
filtered based on a search string provided by the user.

A ListBox control is used to show and select the display values (using 
the displayMemberPath and checkedMemberPath properties). The ListBox has an 
itemFormatter is used to convert empty values into an '(empty)' string for 
display on the list.