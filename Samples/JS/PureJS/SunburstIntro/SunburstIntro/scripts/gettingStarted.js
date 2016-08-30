(function(wijmo, app) {
    'use strict';

    // create controls
    var chart = new wijmo.chart.hierarchical.Sunburst('#introChart');

    // initialize Sunburst's properties
    chart.beginUpdate();
    chart.binding = 'value';
    chart.bindingName = ['year', 'quarter', 'month'];
    chart.itemsSource = app.getData();
    chart.dataLabel.position = wijmo.chart.PieLabelPosition.Center;
    chart.dataLabel.content = '{name}';
    chart.endUpdate();

})(wijmo, app);