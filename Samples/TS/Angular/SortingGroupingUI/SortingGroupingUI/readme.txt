SortingGroupingUI
---------------------------------------------------------------------
Shows how you can build an Excel-style UI for editing sorts and groups in a CollectionView.

The CollectionView class allows you to sort and group data by multiple fields.

This application shows how you can build an Excel-style UI for managing the 
sorting and grouping fields using a dialog similar to the one used by Excel.

The sorts are managed by a model defined in the sortManager class. The sample
implements two views for this model, using Bootstrap's modal dialogs. One
of the views shows the SortDescriptions in a FlexGrid; the other uses
ComboBox controls.

The groups are managed by a model defined in the groupManager class. The sample
also implements two views for this model, one using a FlexGrid and one using
ComboBox controls.

You can use the dialogs to view, modify, add, remove, and move SortDescriptions 
and GroupDescriptions. When done, press OK and the manager will apply the new 
sort or group descriptions to the original CollectionView.
