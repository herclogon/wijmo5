(function (wijmo, app) {
    'use strict';

    // create chart controls
    var anChart = new wijmo.chart.finance.FinancialChart('#anChart');

    anChart.initialize({
        header: 'Facebook, Inc. (FB)',
        itemsSource: app.chartData,
        bindingX: 'date',
        chartType: wijmo.chart.finance.FinancialChartType.Line,
        series: [
            { name: 'Close', binding: 'close' }
        ]
    });

    // add annotation
    var al = new wijmo.chart.annotation.AnnotationLayer(anChart),
        pos = wijmo.chart.annotation.AnnotationPosition.Center,
        offset = { x: 0, y: -15 },
        style = { 'fill': '#cccccc', 'stroke': '#888888', 'fill-opacity': 1, 'stroke-width': 1, 'stroke-opacity': 1 };

    // rectangle annotation
    var rect = new wijmo.chart.annotation.Rectangle({
        width: 40, height: 30, pointIndex: 16,//1/28/15 
        tooltip: 'FACEBOOK INC Files SEC form 8-K, Results of Operations and Financial Condition',
        offset: offset,
        seriesIndex: 0,
        position: wijmo.chart.annotation.AnnotationPosition.Center,
        attachment: wijmo.chart.annotation.AnnotationAttachment.DataIndex,
        style: style,
        content: 'E'
    });
    al.items.push(rect);

    // ellipse annotation
    var ellip = new wijmo.chart.annotation.Ellipse({
        width: 40, height: 30, pointIndex: 17, //01/29/15
        offset: offset,
        seriesIndex: 0,
        position: wijmo.chart.annotation.AnnotationPosition.Center,
        attachment: wijmo.chart.annotation.AnnotationAttachment.DataIndex,
        style: style,
        content: 'E',
        tooltip: 'FACEBOOK INC Files SEC form 10-K, Annual Report'
    });
    al.items.push(ellip);

    // circle annotation
    var circle = new wijmo.chart.annotation.Circle({
        radius: 20, pointIndex: 49, //03/17/15
        tooltip: 'Coverage initiated on Facebook by Brean Capital',
        offset: offset,
        seriesIndex: 0,
        style: style,
        position: wijmo.chart.annotation.AnnotationPosition.Center,
        attachment: wijmo.chart.annotation.AnnotationAttachment.DataIndex,
        content: 'E'
    });
    al.items.push(circle);

    // square annotation
    var square = new wijmo.chart.annotation.Square({
        length: 30, pointIndex: 75, //04/22/15
        tooltip: 'FACEBOOK INC Files SEC form 8-K, Results of Operations and Financial Condition',
        offset: offset,
        seriesIndex: 0,
        style: style,
        position: wijmo.chart.annotation.AnnotationPosition.Center,
        attachment: wijmo.chart.annotation.AnnotationAttachment.DataIndex,
        content: 'E'
    });
    al.items.push(square);
})(wijmo, app);