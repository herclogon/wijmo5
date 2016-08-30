
// generate some random data
function getData() {
    var data = [], sales = [
        96, 19, 54, 83, 15, 56, 36, 4, 29, 93,
        38, 71, 50, 77, 69, 13, 79, 57, 29, 62,
        4, 27, 66, 96, 65, 12, 52, 3, 61, 48, 50,
        70, 39, 33, 25, 49, 69, 46, 44, 40, 35,
        72, 64, 10, 66, 63, 78, 19, 96, 26];

    for (var i = 0; i < 50; i++) {
        data.push({
            sale: sales[i],
            date: new Date(2014, 0, i),
        });
    }
    return data;
}

function createBasicChart() {
    var basicChart = new wijmo.chart.FlexChart('#basicChart');
    basicChart.beginUpdate();

    basicChart.chartType = wijmo.chart.ChartType.Line;
    basicChart.bindingX = 'date';
    basicChart.itemsSource = getData();

    // create data series
    var series1 = new wijmo.chart.Series();
    series1.name = 'Sale';
    series1.binding = 'sale';
    basicChart.series.push(series1);
    basicChart.endUpdate();

    //add annotations
    $.get('data/basic.json', function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].attachment === 1 && data[i].point && data[i].point.x && isNaN(data[i].point.x)) {
                data[i].point.x = wijmo.Globalize.parseDate(data[i].point.x, 'yyyy-MM-dd');
            }
        }
        var basicAL = new wijmo.chart.annotation.AnnotationLayer(basicChart, data);
    });
}

var volYAxis, al, axisXScrollbar, chart, $data;

$(document).ready(function () {
    'use strict';

    //create basic chart
    createBasicChart();


    //create advanced chart
    chart = new wijmo.chart.FlexChart('#chart');
    chart.beginUpdate();

    chart.chartType = wijmo.chart.ChartType.Line;
    chart.bindingX = 'date';
    //chart.itemsSource = itemsSource;

    // create data series
    var series1 = new wijmo.chart.Series();
    series1.name = 'Close';
    series1.binding = 'close';
    chart.series.push(series1);

    var series2 = new wijmo.chart.Series();
    series2.name = 'Volume';
    series2.binding = 'volume';
    series2.chartType = wijmo.chart.ChartType.Column;
    chart.series.push(series2);
    
    //axis
    chart.axisX.axisLine = false;
    chart.axisX.format = 'MM/dd/yy';

    chart.axisY.position = wijmo.chart.Position.Right;

    chart.rendered.addHandler(function () {
        //adjust last point
        window.setTimeout(function () { updateLastPoint(); }, 40);

        if (!volYAxis) {
            var volSeries = chart.series[1];
            volYAxis = new wijmo.chart.Axis(0);
            volSeries.axisY = volYAxis;
            if (volSeries.getValues(0)) {
                volYAxis.max = Math.max.apply(null, volSeries.getValues(0)) * 8;
            }
        }
    });

    //get chart data
    $.get('data/fb.json', function (data) {
        for (var i = 0; i < data.length; i++) {
            data[i].date = wijmo.Globalize.parseDate(data[i].date, 'MM/dd/yy');
        }
        $data = data;
        chart.itemsSource = data;
        chart.endUpdate();

        // add scrollbar
        if (!axisXScrollbar) {
            axisXScrollbar = new wijmo.chart.interaction.AxisScrollbar(chart.axes[0]);

            window.setTimeout(function () {
                axisXScrollbar.maxPos = 0.5;
            }, 20);
        }
    });

    //add annotations
    $.get('data/annotions.json', function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].start && data[i].start.x) {
                data[i].start.x = wijmo.Globalize.parseDate(data[i].start.x, 'yyyy-MM-dd');
            }
            if (data[i].end && data[i].end.x) {
                data[i].end.x = wijmo.Globalize.parseDate(data[i].end.x, 'yyyy-MM-dd');
            }
            if (data[i].attachment === 1 && data[i].point && data[i].point.x) {
                data[i].point.x = wijmo.Globalize.parseDate(data[i].point.x, 'yyyy-MM-dd');
            }
        }
        al = new wijmo.chart.annotation.AnnotationLayer(chart, data);
    });

    // add move event
    var moveEvent = 'ontouchstart' in window ? 'ontouchmove' : 'onmousemove';

    chart.hostElement['ontouchmove'] = function (e) {
        setQuoteDetailInfo(e);
    }
    chart.hostElement['onmousemove'] = function (e) {
        setQuoteDetailInfo(e);
    }
    chart.hostElement.onmouseleave = function (e) {
        clearDetail();
    }
});


//set main quote detail information
function setQuoteDetailInfo(e) {
    var series = chart.series[0], hitTest, itmSource,
        detailContainer, detailLow, detailHigh, detailOpen, detailClose,
        point = e instanceof MouseEvent ?
    new wijmo.Point(e.pageX, e.pageY) :
    new wijmo.Point(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
    if (!series) {
        return;
    }
    hitTest = series.hitTest(new wijmo.Point(point.x, NaN));
    if (hitTest == null || hitTest.x == null || hitTest.y == null) {
        return;
    }
    itmSource = $data[hitTest.pointIndex];

    al.getItem('detailContainer').isVisible = true;
    al.getItem('detailLow').text = 'Low: ' + itmSource.low;
    al.getItem('detailHigh').text = 'High: ' + itmSource.high;
    al.getItem('detailOpen').text = 'Open: ' + itmSource.open;
    al.getItem('detailClose').text = 'Close: ' + itmSource.close;
    al.getItem('detailVolume').text = 'Volume: ' + itmSource.volume;
}

function clearDetail() {
    al.getItem('detailContainer').isVisible = false;
    al.getItem('detailLow').text = '';
    al.getItem('detailHigh').text = '';
    al.getItem('detailOpen').text = '';
    al.getItem('detailClose').text = '';
    al.getItem('detailVolume').text = '';
}

function updateLastPoint() {
    var content, maxItm, maxLineItm, len = $data.length,
        maxDate = Math.ceil(chart.axisX.max);
    maxDate = fromOADate(maxDate);

    if (al && al.items) {
        maxItm = al.getItem('endPrice');
        maxLineItm = al.getItem('endPriceLine');
        if (!maxItm || !maxLineItm) {
            return;
        }
        for (var i = 0; i < len; i++) {
            if (i === len - 1 || $data[i].date.getTime() === maxDate.getTime()) {
                content = $data[i].close;
                break;
            } else if (i < len - 1 && maxDate.getTime() > $data[i].date.getTime() &&
                maxDate.getTime() < $data[i + 1].date.getTime()) {
                content = $data[i + 1].close;
                break;
            }
        }
        if (!content) {
            maxItm.isVisible = false;
            maxLineItm.isVisible = false;
        } else {
            maxItm.isVisible = true;
            maxItm.content = content;
            maxItm.point = { x: maxDate, y: content };
            maxLineItm.isVisible = true;
            maxLineItm.start = { x: new Date(2014, 3, 10, 0, 0, 0), y: content };
            maxLineItm.end = { x: maxDate, y: content };
        }
    }
}

function fromOADate(val) {
    var dec = val - Math.floor(val);
    if (val < 0 && dec) {
        val = Math.floor(val) - dec;
    }
    return new Date(val * 86400000 + new Date(1899, 11, 30).getTime());
}