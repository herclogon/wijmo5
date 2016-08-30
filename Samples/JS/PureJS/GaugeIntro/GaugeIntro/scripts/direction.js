(function ($, wijmo, helper, props) {
    'use strict';

    var linearGauge = helper.createLinearGauge('#dLinearGauge', props),
        bulletGraph = helper.createBulletGraph('#dBulletGraph', props),
        valueInput = helper.createValueInput('#dValue', props),
        menu = new wijmo.input.Menu('#dDirection'),
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

    // LinearGauge - set properties
    linearGauge.direction = props.direction;
    linearGauge.showRanges = props.showRanges;
    linearGauge.pointer.thickness = props.ranges.pointerThickness;
    linearGauge.ranges.push(lowerRange);
    linearGauge.ranges.push(middleRange);
    linearGauge.ranges.push(upperRange);

    // BulletGraph - set properties
    bulletGraph.direction = props.direction;
    bulletGraph.showRanges = props.showRanges;
    bulletGraph.pointer.thickness = props.ranges.pointerThickness;
    bulletGraph.good = props.ranges.middle.max;
    bulletGraph.bad = props.ranges.middle.min;
    bulletGraph.target = props.ranges.target;

    // Direction - set Menu properties
    menu.selectedValue = props.direction;
    helper.updateMenuHeader(menu, '<b>Direction</b>: ', menu.text);
    menu.selectedIndexChanged.addHandler(function (sender) {
        // make sure there is a a selectedValue
        if (!sender.selectedValue) return;

        var direction = sender.selectedValue,
            dirCols = Array.prototype.slice.call(document.querySelectorAll('.direction-col'));

        // split or stack columns
        dirCols.forEach(function (el) {
            if (direction === 'Up' || direction === 'Down') {
                el.className += ' col-md-6';
            }
            else {
                el.className = el.className.replace('col-md-6', '');
            }
        });

        // set Gauge.direction
        linearGauge.direction = direction;
        bulletGraph.direction = direction;

        // update gauge's CSS class
        if (direction === 'Up' || direction === 'Down') {
            linearGauge.hostElement.className += ' vertical-gauge';
            bulletGraph.hostElement.className += ' vertical-gauge';
        }
        else {
            bulletGraph.hostElement.className = bulletGraph.hostElement.className.replace('vertical-gauge', '');
            linearGauge.hostElement.className = linearGauge.hostElement.className.replace('vertical-gauge', '');
        }

        // update Menu.header
        helper.updateMenuHeader(menu, '<b>Direction</b>: ', sender.text);
    });

    // showRangesChanged subscriptions - callback in app.js
    $.subscribe('showRangesChanged', $.proxy(showRangesChanged, linearGauge));
    $.subscribe('showRangesChanged', $.proxy(showRangesChanged, bulletGraph));

})(jQuery, wijmo, Helper, props);