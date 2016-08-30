(function (wijmo) {
    'use strict';

    // create yFuncSeriesChart
    var yFuncSeriesChart = new wijmo.chart.FlexChart('#yFuncSeriesChart');

    //create YFunctionSeries
    var yFuncSeries = new wijmo.chart.analytics.YFunctionSeries();
    yFuncSeries.name = 'YFunc';
    yFuncSeries.min = -10;
    yFuncSeries.max = 10;
    yFuncSeries.sampleCount = 300;
    yFuncSeries.func = function (value) {
        return Math.sin(4 * value) * Math.cos(3 * value);
    };
    yFuncSeriesChart.series.push(yFuncSeries);


    //create paramFuncSeriesChart
    var paramFuncSeriesChart = new wijmo.chart.FlexChart('#paramFuncSeriesChart'),
        xParam = 5,
        yParam = 7;

    //create ParametricFunctionSeries
    var paramFuncSeries = new wijmo.chart.analytics.ParametricFunctionSeries();
    paramFuncSeries.name = 'ParamFunc';
    paramFuncSeries.max = 2 * Math.PI;
    paramFuncSeries.sampleCount = 1000;
    paramFuncSeries.xFunc = function (value) {
        return Math.cos(value * xParam);
    };
    paramFuncSeries.yFunc = function (value) {
        return Math.sin(value * yParam);
    };
    paramFuncSeriesChart.series.push(paramFuncSeries);

})(wijmo);