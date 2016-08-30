(function (wijmo, app) {
    'use strict';

    // create controls
    var chart = new wijmo.chart.FlexPie('#selChart'),
        inputNumber = new wijmo.input.InputNumber('#selItemOffset'),
        menu = new wijmo.input.Menu('#selItemPos'),
        check = document.getElementById('selAnimated');

    // initialize FlexPie's properties
    chart.beginUpdate();
    chart.binding = 'value';
    chart.bindingName = 'name';
    chart.itemsSource = app.getData();
    chart.isAnimated = true;
    chart.selectionMode = 'Point';
    chart.selectedItemPosition = 'Top';
    chart.endUpdate();

    // selectedItemOffset - initialize InputNumber's properties
    inputNumber.min = 0;
    inputNumber.max = 0.5;
    inputNumber.step = 0.1;
    inputNumber.format = 'n';
    inputNumber.valueChanged.addHandler(function (sender) {
        if (sender.value < sender.min || sender.value > sender.max) {
            return;
        }
        chart.selectedItemOffset = sender.value;
    });

    // selectedItemPosition - initialize Menu's properties
    menu.selectedIndexChanged.addHandler(function(sender) {
        if (!sender.selectedValue) return;
        chart.selectedItemPosition = sender.selectedValue;

        app.updateMenuHeader(sender, '<b>Selected Item Position</b>: ', sender.text);
    });
    menu.selectedValue = 'Top';

    // isAnimated - initialize checkbox properties
    check.checked = true;
    check.addEventListener('change', function() {
        chart.isAnimated = this.checked;
    });

})(wijmo, app);