(function(wijmo, app) {
    'use strict';

    // create controls
    var chart = new wijmo.chart.FlexPie('#introChart');

    // initialize FlexPie's properties
    chart.beginUpdate();
    chart.binding = 'value';
    chart.bindingName = 'name';
    chart.itemsSource = app.getData();
    chart.endUpdate();

})(wijmo, app);