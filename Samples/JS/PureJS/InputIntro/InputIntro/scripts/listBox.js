(function (wijmo, data) {
    'use strict';

    var listBox = new wijmo.input.ListBox('#lbListBox');
    listBox.selectedIndexChanged.addHandler(selectedIndexChanged);
    listBox.itemsSource = data.cities;

    // selectedIndexChanged event handler
    function selectedIndexChanged(sender) {

        // set selectedIndex and selectedValue text
        document.getElementById('lbSelIdx').innerHTML = sender.selectedIndex;
        document.getElementById('lbSelVal').innerHTML = sender.selectedValue;
    }
})(wijmo, appData);