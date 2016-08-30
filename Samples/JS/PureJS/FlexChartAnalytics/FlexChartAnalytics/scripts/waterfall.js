(function (wijmo) {
    'use strict';
    //create chart
    var waterfallChart = new wijmo.chart.FlexChart('#waterfallChart'),
        relativeData = document.getElementById('relativeData'),
        connectorLines = document.getElementById('connectorLines'),
        showTotal = document.getElementById('showTotal'),
        showIntermediateTotal = document.getElementById('showIntermediateTotal');
    // populate itemsSource
    var names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data = [];
    for (var i = 0, len = names.length; i < len; i++) {
        data.push({
            name: names[i],
            value: Math.round((0.5 - Math.random()) * 1000)
        });
    }
    //create Waterfall series
    waterfallChart.itemsSource = data;
    waterfallChart.binding = 'value';
    waterfallChart.bindingX = 'name';
    var waterfall = new wijmo.chart.analytics.Waterfall();
    waterfall.relativeData = true;
    waterfall.connectorLines = true;
    waterfall.showTotal = true;
    waterfall.start = 1000;
    waterfall.showIntermediateTotal = true;
    waterfall.intermediateTotalPositions = [3, 6, 9, 12];
    waterfall.intermediateTotalLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
    waterfall.name = 'Increase,Decrease,Total';
    waterfall.styles = {
        connectorLines: {
            stroke: '#333',
            'stroke-dasharray': '5 5'
        },
        start: {
            fill: '#7dc7ed'
        },
        falling: {
            fill: '#dd2714',
            stroke: '#a52714'
        },
        rising: {
            fill: '#0f9d58',
            stroke: '#0f9d58'
        },
        intermediateTotal: {
            fill: '#7dc7ed'
        },
        total: {
            fill: '#7dc7ed'
        }
    };
    waterfallChart.series.push(waterfall);
    waterfallChart.tooltip.content = function (ht) {
        if (ht) {
            return '<b>' + ht.x + '</b><br/>value: ' + ht.y;
        }
    }

    // relativeData - initialize checkbox properties
    relativeData.checked = true;
    relativeData.addEventListener('change', function () {
        waterfall.relativeData = this.checked;
    });

    // connectorLines - initialize checkbox properties
    connectorLines.checked = true;
    connectorLines.addEventListener('change', function () {
        waterfall.connectorLines = this.checked;
    });

    // showTotal - initialize checkbox properties
    showTotal.checked = true;
    showTotal.addEventListener('change', function () {
        waterfall.showTotal = this.checked;
    });

    // showIntermediateTotal - initialize checkbox properties
    showIntermediateTotal.checked = true;
    showIntermediateTotal.addEventListener('change', function () {
        waterfall.showIntermediateTotal = this.checked;
    });
})(wijmo);