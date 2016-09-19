﻿module Util {

    // generate some random data
    export function getCountries() {
        return 'US,Germany,UK,Japan,Italy,Greece'.split(',');
    }
    export function getData() {
        var countries = getCountries(),
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

    // options for combo boxes
    export function getChartTypes() {
        return 'Column,Bar,Scatter,Line,LineSymbols,Area,Spline,SplineSymbols,SplineArea'.split(',');
    }
    export function getStackingOptions() {
        return 'None,Stacked,Stacked100pc'.split(',');
    }
    export function getLegendPositions() {
        return 'None,Left,Top,Right,Bottom'.split(',');
    }
    export function getSelectionModes() {
        return 'None,Series,Point'.split(',');
    }

    // format numbers and dates
    export function format(value, format) {
        return wijmo.Globalize.format(value, format);
    }

    // generate some dynamic data
    var trafficInterval,
        trafficData = new wijmo.collections.ObservableArray();
    setTrafficInterval(500);
    export function getTrafficData() {
        return trafficData;
    }
    export function setTrafficInterval(value) {
        if (value > 0 && value < 50) {
            // don't let this get too small or the chart might not have time to update...
            value = 50;
        }
        clearInterval(trafficInterval);
        if (value) {
            trafficInterval = setInterval(addTrafficItem, value);
        }
    };
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
}