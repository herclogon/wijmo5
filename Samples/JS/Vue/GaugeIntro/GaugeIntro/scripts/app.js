onload = function () {

    // Vue application
    var app = new Vue({
        el: '#app',
        data: {
            value: 50,
            min: 0,
            max: 100,
            format: 'n0',
            step: 10,
            showTicks: false,
            isReadOnly: false,

            showRanges: true,
            ranges: {
                pointerThickness: 0.5,
                lower: { min: 0, max: 33, color: 'rgba(255,100,100,.5)' },
                middle: { min: 33, max: 66, color: 'rgba(255,255,100,.5)' },
                upper: { min: 66, max: 100, color: 'rgba(100,255,100,.5)' }
            },

            showText: 'All',
            thumbSize: null,

            isAnimated: true,
            hasShadow: true,
            direction: 'Right',
            autoScale: true,
            startAngle: 0,
            sweepAngle: 180,

            showTextValues: 'All,None,Value,MinMax'.split(','),
            directionValues: 'Up,Down,Left,Right'.split(','),

            color: {
                red: 100,
                green: 100,
                blue: 100
            }
        },
        methods: {

            // get the style for the LinearGauge depending on its direction
            getLinearGaugeStyle: function () {
                return this.direction == 'Up' || this.direction == 'Down'
                    ? { height: '200px', width: '2em' }
                    : { width: '200px' }
            },

            // getText callback used to convert values into strings
            getText: function (gauge, part, value, text) {
                switch (part) {
                    case 'value':
                        if (value <= 10) return 'Empty!';
                        if (value <= 25) return 'Low...';
                        if (value <= 95) return 'Good';
                        return 'Full';
                    case 'min':
                        return 'EMPTY';
                    case 'max':
                        return 'FULL';
                }
                return text;
            }
        }
    });
}
