// a collection of property values for the Wijmo Gauges
var props = {
    autoScale: true,
    direction: 'Right',
    format: 'p0',
    isReadOnly: false,
    max: 1,
    min: 0,
    showRanges: true,
    showText: 'All',
    step: 0.25,
    startAngle: 0,
    sweepAngle: 180,
    ranges: {
        pointerThickness: 0.5,
        target: .75,
        lower: {
            min: 0,
            max: .33,
            color: 'rgba(255,100,100,.1)'
        },
        middle: {
            min: .33,
            max: .66,
            color: 'rgba(255,255,100,.1)'
        },
        upper: {
            min: .66,
            max: 1,
            color: 'rgba(100,255,100,.1)'
        }
    },
    value: 0.5
};


/*
 * Publish/Subscribe
 */

// Simple Publish/Subscribe implementation in jQuery
// Courtesy of Ben Alman
(function ($) {
    var o = $({});

    $.subscribe = function () {
        o.on.apply(o, arguments);
    };

    $.unsubscribe = function () {
        o.off.apply(o, arguments);
    };

    $.publish = function () {
        o.trigger.apply(o, arguments);
    };
}(jQuery));

// Pub/Sub callbacks for props.value
function pubValueChanged(sender) {
    $.publish('valueChanged', sender.value);
}
function subValueChanged(event, value) {
    this.value = value;
}

// Pub/Sub callbacks for props.showRanges
function pubShowRangesChanged(sender) {
    var checked = this.checked;
    $.publish('showRangesChanged', checked);
}
function showRangesChanged(event, showRanges) {
    this.showRanges = showRanges;
    this.pointer.thickness = showRanges ? 0.5 : 1;
}