(function (wijmo, app) {
    'use strict';

    // create controls
    var chart = new wijmo.chart.hierarchical.Sunburst('#themeChart');

    var data = [{
        name: '5',
        items: [{
            name: '4',
            items: [{
                name: '3',
                items: [{
                    name: '2',
                    items: [{
                        name: '1',
                        value: 1
                    }]
                }]
            }]
        }]
    }];
    // initialize Sunburst's properties
    chart.beginUpdate();
    chart.tooltip.content = '';
    chart.binding = 'value';
    chart.bindingName = 'name';
    chart.childItemsPath = 'items';
    chart.itemsSource = data;
    chart.legend.position = wijmo.chart.Position.None;
    chart.header = 'Bullseye(target)';
    chart.endUpdate();

})(wijmo, app);