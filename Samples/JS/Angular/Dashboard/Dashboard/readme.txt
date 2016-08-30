Dashboard
----------------------------------------------------------------------------------------
Shows how to create a quarterly sales dashboard using our FlexGrid Sparkline feature and BulletGraph control.

This sample implements a quarterly sales dashboard using sparklines and bullet charts 
in addition to traditional charts and gauges. The main view was created based on design 
principles described in Stephen Few's book "Information Dashboard Design: The Effective
Visual Communication of Data":

	http://www.amazon.com/Information-Dashboard-Design-Effective-Communication/dp/0596100167

The main screen shows a summary of sales by product. Each row represents a product and
shows a sparkline with quarterly sales, the product name, and a bullet chart that 
compares the current sales with target values and ranges. Products with low sales are 
highlighted with a red mark.

Placing the mouse over the red mark shows details about the problem.

Clicking on a product name shows product details in the form of a radial
gauge and a line chart. The line chart includes a trend line based on a
linear regression.

At the bottom of the main page there is a link that switches the display to a chart
view of the same information. The chart view allows users to select among several
chart types.

