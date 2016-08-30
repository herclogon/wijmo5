PrintDocument
-----------------------------------------------------------------------
Shows how you can use the PrintDocument class to create printer-friendly documents.

Many business applications need to generate printed output, either as paper reports,
PDF files, or other export formats. 

Calling the 'print' method on the application's main window creates a printed version
of the current page, but in most cases the output is not printer-friendly. For example,
if you print a page that contains a FlexGrid control, the output will include only
the parts of the grid that are currently visible, along with images of scrollbars
that cannot be used at all.

The PrintDocument class allows you to create printer-friendly documents that include
whatever elements you want, in the order you prefer. You can also add custom elements
that are not present on the main page, or create printer-friendly versions of elements
that would not render well by default.

This sample demonstrates this by creating a PrintDocument that includes some elements
present on the main page (title and gauges), some custom content (descriptive strings),
and a printer-friendly version of a FlexGrid control (rendered as a table element).

Note that printing support is good but not 100% consistent among browsers. For example:

- Google Chrome automatically displays a preview, and allows you to modify the paper
  size, margins, and whether to show page headers and footers.

- IE11 allows you to customize printing by right-clicking a document, selecting "Print 
  Preview", and selecting the "Page Setup" button in the toolbar.

- FireFox allows you to customize printing by selecting the "Print" option on a page
  and selecting the "Page Setup" button in the print preview that appears by default.

- In IE and FireFox, table headers are automatically repeated at the top of each page.
  In Chrome, the headers appear only once, at the top of the table. This is a known 
  limitation in Chrome: https://code.google.com/p/chromium/issues/detail?id=24826
