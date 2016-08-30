(function (wijmo, helper, props) {
    'use strict';

    // init Wijmo controls
    var linearGauge = helper.createLinearGauge('#sLinearGauge', props),
        radialGauge = helper.createRadialGauge('#sRadialGauge', props),
        valueInput = helper.createValueInput('#sValue', props);

    // set LinearGauge properties
    linearGauge.showText = wijmo.gauge.ShowText.Value;

    // set RadialGauge properties
    radialGauge.showText = wijmo.gauge.ShowText.Value;

})(wijmo, Helper, props);