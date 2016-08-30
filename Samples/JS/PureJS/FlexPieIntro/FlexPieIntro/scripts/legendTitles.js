(function (wijmo, app) {
    'use strict';

    // create controls
    var chart = new wijmo.chart.FlexPie('#ltChart'),
        menu = new wijmo.input.Menu('#ltLegPos'),
        header = document.getElementById('ltHeader'),
        footer = document.getElementById('ltFooter');

    // initialize FlexPie's properties
    chart.beginUpdate();
    chart.binding = 'value';
    chart.bindingName = 'name';
    chart.itemsSource = app.getData();
    chart.header = 'Fruit By Value';
    chart.footer = '2014 GrapeCity, inc.';
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