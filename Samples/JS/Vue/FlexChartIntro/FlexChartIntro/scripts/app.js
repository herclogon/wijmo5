onload = function () {

    // Vue application
    var app = new Vue({
        el: '#app',
        data: {
            data: getData(),
            chartProps: {
                chartType: 'Column',
                stacking: 'None',
                rotated: false,
                header: 'Sample Chart',
                footer: 'copyright (c) ComponentOne',
                titleX: 'country',
                titleY: 'amount',
                legendPosition: 'Right',
                selectionMode: 'None',
                selection: null,
                seriesVisible: [ true, true, true ]
            },
            chartTypes: 'Column,Bar,Scatter,Line,LineSymbols,Area,Spline,SplineSymbols,SplineArea'.split(','),
            stackingOptions: 'None,Stacked,Stacked100pc'.split(','),
            legendPositions: 'None,Left,Top,Right,Bottom'.split(','),
            selectionModes: 'None,Series,Point'.split(','),
            trafficData: getTrafficData()
        },
        methods: {
            setInterval: function (interval) {
                setTrafficInterval(interval)
            }
        }
    });
}

// generate some random data
function getData() {
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [];
    for (var i = 0; i < countries.length; i++) {
        data.push({
            country: countries[i],
            downloads: Math.round(Math.random() * 20000),
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000
        });
    }
    return data;
}

// generate some dynamic data
var trafficInterval,
    trafficData = new wijmo.collections.ObservableArray();
function getTrafficData() {
    return trafficData;
}
function setTrafficInterval(value) {
    clearInterval(trafficInterval);
    if (value) {
        trafficInterval = setInterval(addTrafficItem, value);
    }
}
function addTrafficItem() {
    var len = trafficData.length,
        last = len ? trafficData[len - 1] : null,
        trucks = last ? last.trucks : 0,
        ships = last ? last.ships : 0,
        planes = last? last.planes : 0;
    trucks = Math.max(0, trucks + Math.round(Math.random() * 50 - 25));
    ships = Math.max(0, ships + Math.round(Math.random() * 10 - 5));
    planes = Math.max(0, planes + Math.round(Math.random() * 10 - 5));

    // add random data, limit array length
    trafficData.push({ time: new Date(), trucks: trucks, ships: ships, planes: planes });
    if (trafficData.length > 200) {
        trafficData.splice(0, 1);
    }
}
setTrafficInterval(500);
