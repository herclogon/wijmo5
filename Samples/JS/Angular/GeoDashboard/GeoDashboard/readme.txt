GeoDashboard
---------------------------------------------------
An interactive geographic dashboard for analyzing demographic data built with Angular.

This is the AngularJS version of the sample written to demonstrate how 
to create a web application by AngularJS.

The sample creates a service that connects ArcGIS online to get several 
information sources via the Extent object. Changing the Extent causes 
the service to update the information using ArcGIS online.

The information is displayed in tiles bound to the ViewModel. Clicking
a tile will display a corresponding layer on the map.

The sample allows you to search for locations by name (using Google's
geocoding services), or to go to your current location (using
HTML5 location services available in most modern browsers).

This AngularJS version of the sample is especially interesting because
it uses custom directives that wrap the Esri map. This simplifies the 
markup dramatically and makes the components re-usable within the 
application and across applications.

The sample also shows how you can use filters to perform tasks such
as converting coordinates from (x,y) to (longitude/latitude) notation.
This allows the app to display coordinates as [40°27'44"N, 80°1'24"W] 
instead of [-80.02, 40.46].

<product>Wijmo 5;HTML5</product>