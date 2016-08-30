(function (helper, props) {
    'use strict';

    // init Wijmo controls
    var radialGauge = helper.createRadialGauge('#asRadialGauge', props),
        valueInput = helper.createValueInput('#asValue', props),
        startAngleInput = new wijmo.input.InputNumber('#asStartAngle'),
        sweepAngleInput = new wijmo.input.InputNumber('#asSweepAngle'),
        autoScaleInput = document.getElementById('asAutoScale');

    // set RadialGauge propeties
    radialGauge.autoScale = props.autoScale;

    // StartAngle - set InputNumber properties
    startAngleInput.value = props.startAngle;
    startAngleInput.min = -360;
    startAngleInput.max = 360;
    startAngleInput.step = 45;
    startAngleInput.valueChanged.addHandler(function (sender) {
        // update gauge's startAngle property
        radialGauge.startAngle = sender.value;
    });

    // SweepAngle - set InputNumber properties
    sweepAngleInput.value = props.sweepAngle;
    sweepAngleInput.min = 0;
    sweepAngleInput.max = 360;
    sweepAngleInput.step = 45;
    sweepAngleInput.valueChanged.addHandler(function (sender) {
        // update gauge's sweepAngle property
        radialGauge.sweepAngle = sender.value;
    });

    // AutoScale - set CheckBox properties
    autoScaleInput.checked = props.autoScale;
    autoScaleInput.addEventListener('change', function () {
        // update gauge's autoScale property based on
        // checkbox's checked state
        radialGauge.autoScale = this.checked;
    });

})(Helper, props);