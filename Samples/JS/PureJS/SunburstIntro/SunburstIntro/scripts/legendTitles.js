(function (wijmo, app) {
    'use strict';

    // create controls
    var chart = new wijmo.chart.hierarchical.Sunburst('#ltChart'),
        menu = new wijmo.input.Menu('#ltLegPos'),
        header = document.getElementById('ltHeader'),
        footer = document.getElementById('ltFooter');

    // initialize Sunburst's properties
    chart.beginUpdate();
    chart.binding = 'value';
    chart.bindingName = ['year', 'quarter', 'month'];
    chart.itemsSource = app.getData();
    chart.header = 'Sales';
    chart.footer = 'GrapeCity, inc.';
    chart.endUpdate();

    // header input
    header.value = chart.header;
    header.addEventListener('input', function () {
        chart.header = this.value;
    });

    // footer input
    footer.value = chart.footer;
    footer.addEventListener('input', function () {
        chart.footer = this.value;
    });

    // legend.position - initialize Menu's properties
    menu.selectedIndexChanged.addHandler(function (sender, args) {
        if (!sender.selectedValue) return;

        chart.legend.position = sender.selectedValue;
        app.updateMenuHeader(sender, '<b>Legend Position</b>: ', sender.text);
    });
    menu.selectedValue = 'Right';

})(wijmo, app);