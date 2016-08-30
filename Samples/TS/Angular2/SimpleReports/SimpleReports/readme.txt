SimpleReports (Angular2)
-------------------------------------------------------------------------------------
Shows how to use the PrintDocument and CollectionView classes to create simple reports.

Business applications often have to create reports that can be printed or exported
to PDF.

There are many advanced tools available to fill that need, including products such as
FlexReport, Active Reports, and Microsoft Reporting Services.

But if you are used to creating HTML5 applications with Wijmo and AngularJS, you don't
need any additional tools to create simple reports. All you have to do is:

<ol>
  <li>Load the report data into 
      <a href="http://wijmo.com/5/docs/topic/wijmo.collections.CollectionView.Class.html">CollectionView</a>
	  objects so you can sort, filter, and group it,</li>
  <li>Create a regular HTML document using "ng-repeat" directives and templates,</li>
  <li>Create a <a href=""http://wijmo.com/5/docs/topic/wijmo.PrintDocument.Class.html>PrintDocument</a>
	  object,</li>
  <li>Add the elements you want to include in the report to the document, and</li>
  <li>Call the document's "print" method.</li>
</ol>

Some modern browsers (including Chrome and Edge) provide print previews, and options for 
customizing page size, orientation, margins, and more. Virtually every modern browser also
provides options for generating PDF documents.

The content you add to the PrintDocument may be copied from parts of the page, or it
can be generated specifically for the report.

This sample demonstrates this approach with a few basic reports based on the traditional
NorthWind database. The reports are created as HTML fragments stored in the application's
"partials" folder.

Notice the following important points about the HTML used to define the reports:

 <ul>
   <li>They use inline styles, so they are self-contained and independent of the application's CSS files.</li>
   <li>The "page-break-inside" CSS attribute is used to prevent page breaks within some report sections.</li>
   <li>Borders are used to generate colored bars in some reports, because colored empty divs typically 
       don't work when printing.</li>
   <li>Reports may contain Wijmo controls such as charts and gauges.</li>
   <li>Report may contain groups created using the CollectionView's grouping feature.</li>
</ul>

System requirements
====================
Please refer to the description in the readme.txt file of the Wijmo Explorer for Angular 2 sample.

