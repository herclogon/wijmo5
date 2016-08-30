// application view model
function viewModel1() {

    // Save this pointer
    var self = this;

    // a set of property values for the Wijmo Gauges
    this.props = {
        autoScale: ko.observable(true),
        direction: ko.observable('Right'),
        format: 'p0',
        isReadOnly: ko.observable(false),
        max: 1,
        min: 0,
        showRanges: ko.observable(true),
        showText: ko.observable('All'),
        step: 0.25,
        startAngle: ko.observable(0),
        sweepAngle: ko.observable(180),
        value: ko.observable(0.5)
    };

    this.props.ranges = {
        pointerThickness: ko.computed(function () { return self.props.showRanges() ? 0.5 : 1; }),
        target: 0.75,
        lower: {
            min: 0,
            max: 0.33,
            color: ko.computed(function () { return self.props.showRanges() ? 'rgba(255,100,100,.1)' : 'red'; })
        },
        middle: {
            min: 0.33,
            max: 0.66,
            color: ko.computed(function () { return self.props.showRanges() ? 'rgba(255,255,100,.1)' : 'yellow'; })
        },
        upper: {
            min: 0.66,
            max: 1,
            color: ko.computed(function () { return self.props.showRanges() ? 'rgba(100,255,100,.1)' : 'green'; })
        }
    };
}