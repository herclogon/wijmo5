DragDropTouch
------------------------------------------------------------------------------
Shows how you can support HTML5 drag and drop on mobile devices.

The sample implements a DragDropTouch class that handles touch events and
generates HTML5 drag drop events to be handled by applications running
on mobile browsers (IOS and Android) the same way they are handled by
desktop browsers.

The DragDropTouch class is a polyfill that allows drag and drop applications
to run on mobile devices without any changes. The sample demonstrates this
using four scenarios:

1) A standard drag and drop sample based on the html5rocks tutorial 
   published here: http://www.html5rocks.com/en/tutorials/dnd/basics/
   This sample allows users to drag panels to new positions.

2) FlexGrid controls. Users can resize and reorder grid columns
   by dragging the column headers.

3) GroupPanel control. Users can drag grid columns into the panel
   and reorder the groups by dragging, or sort the groups by
   clicking the group indicators.

4) PivotPanel control. Users can generate pivot tables by dragging
   pivot fields between field lists, or customize fields using
   a context menu.

