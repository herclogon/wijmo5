(function ($, wijmo, helper, props) {
    'use strict';

    var linearGauge = helper.createLinearGauge('#urLinearGauge', props),
        bulletGraph = helper.createBulletGraph('#urBulletGraph', props),
        radialGauge = helper.createRadialGauge('#urRadialGauge', props),
        valueInput = helper.createValueInput('#urValue', props),
        showRanges = document.getElementById('urShowRanges'),
        lowerRange = new wijmo.gauge.Range(),
        middleRange = new wijmo.gauge.Range(),
        upperRange = new wijmo.gauge.Range();

    // set Range propeties
    lowerRange.min = props.ranges.lower.min;
    lowerRange.max = props.ranges.lower.max;
    lowerRange.color = props.ranges.lower.color;
    middleRange.min = props.ranges.middle.min;
    middleRange.max = props.ranges.middle.max;
    middleRange.color = props.ranges.middle.color;
    upperRange.min = props.ranges.upper.min;
    upperRange.max = props.ranges.upper.max;
    upperRange.color = props.ranges.upper.color;

    // set LinearGauge properties and add Range objects
    linearGauge.showRanges = props.showRanges;
    linearGauge.pointer.thickness = props.ranges.pointerThickness;
    linearGauge.ranges.push(lowerRange);
    linearGauge.ranges.push(middleRange);
    linearGauge.ranges.push(upperRange);

    // set BulletGraph and Range properties
    bulletGraph.showRanges = props.showRanges;
    bulletGraph.pointer.thickness = props.ranges.pointerThickness;
    bulletGraph.good = props.ranges.middle.max;
    bulletGraph.bad = props.ranges.middle.min;
    bulletGraph.target = props.ranges.target;

    // set RadialGauge properties and add Range objects
    radialGauge.showRanges = props.showRanges;
    radialGauge.pointer.thickness = props.ranges.pointerThickness;
    radialGauge.ranges.push(lowerRange);
    radialGauge.ranges.push(middleRange);
    radialGauge.ranges.push(upperRange);

    // showRanges checkbox
    showRanges.checked = props.showRanges;
    showRanges.addEventListener('change', pubShowRangesChanged);

    // showRangesChanged subscriptions - callback in app.js
    $.subscribe('showRangesChanged', $.proxy(showRangesChanged, linearGauge));
    $.subscribe('showRangesChanged', $.proxy(showRangesChanged, bulletGraph));
    $.subscribe('showRangesChanged', $.proxy(showRangesChanged, radialGauge));

})(jQuery, wijmo, Helper, props);