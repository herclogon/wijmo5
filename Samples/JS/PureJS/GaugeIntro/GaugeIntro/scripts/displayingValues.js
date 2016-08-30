(function (wijmo, helper, props) {
    'use strict';

    // init Wijmo controls
    var linearGauge = helper.createLinearGauge('#dvLinearGauge', props),
        radialGauge = helper.createRadialGauge('#dvRadialGauge', props),
        valueInput = helper.createValueInput('#dvValue', props),
        showTextMenu = new wijmo.input.Menu('#dvShowTextMenu');

    // set LinearGauge properties
    linearGauge.showText = props.showText;

    // set RadialGauge properties
    radialGauge.showText = props.showText;

    // set Menu properties
    showTextMenu.selectedValue = props.showText;
    helper.updateMenuHeader(showTextMenu, '<b>Show Text</b>: ', showTextMenu.text);
    showTextMenu.selectedIndexChanged.addHandler(function (sender) {
        // make sure a value is selected
        if (!sender.selectedValue) return;

        // update Gauges' showText property
        linearGauge.showText = sender.selectedValue;
        radialGauge.showText = sender.selectedValue;

        // update showTextMenu's header - see app.js
        helper.updateMenuHeader(sender, '<b>Show Text</b>: ', sender.text);
    });

})(wijmo, Helper, props);