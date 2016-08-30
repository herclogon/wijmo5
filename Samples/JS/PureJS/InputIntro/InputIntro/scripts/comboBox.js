(function (wijmo, data) {
    'use strict';

    var comboBox1 = new wijmo.input.ComboBox('#cbComboBox1'),
        comboBox2 = new wijmo.input.ComboBox('#cbComboBox2');
    comboBox1.isEditable = false;
    comboBox1.itemsSource = data.countries;
    for (var i = 0; i < comboBox1.itemsSource.length; i++) {
        var cc = comboBox1.hostControl;
    }

    comboBox2.isEditable = true;
    comboBox2.itemsSource = data.countries;
})(wijmo, appData);