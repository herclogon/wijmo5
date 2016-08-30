(function (wijmo, app) {
    'use strict';

    // create controls
    var chart = new wijmo.chart.FlexPie('#themeChart');

    // initialize FlexPie's properties
    chart.beginUpdate();
    chart.binding = 'value';
    chart.bindingName = 'name';
    chart.itemsSource = app.getData();
    chart.header = 'Header';
    chart.footer = 'Footer';
    chart.endUpdate();

})(wijmo, app);