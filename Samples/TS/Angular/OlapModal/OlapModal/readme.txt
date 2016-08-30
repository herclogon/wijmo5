OlapModal
------------------------------------------------------------------------------
Shows how you can use the PivotPanel control in modal dialogs.

The sample has a PivotGrid and two PivotPanel controls.

The main PivotPanel is configured with some sample data and an initial view, 
and is used as the PivotGrid's itemsSource.

The main PivotPanel is hosted in a Boostrap modal element. To see and use
the control, the user must click the first "Configure Pivot View..." 
button.

The second PivotPanel control is hosted in a wijmo Popup control, and shares
the same PivotEngine as the first one. To see and use it, the user must click 
the second "Configure Pivot View..." button.

In addition to the modal dialogs, the sample also shows how you can define 
pivot fields with deep bindings (e.g. 'person.firstName', 'bug.severity').
