'use strict';

var app = angular.module('app');

// application controller (single)
app.controller('appCtrl', function appCtrl($scope, $routeParams, $filter, $location) {
    var midMarker, markcontents,
        chartPeriodClicked = false,
        increColor = '#129B14', decreColor = '#BA2418',
        al, hasData = false, markerAnno,
        pt = new wijmo.Point(),
        midMarkerContent, midMarkerEles,
        volSeries, pOffset,
        datailEle = document.getElementById('detail'), detailInfo,
        quoteNameEle = document.getElementById('quotename'),
        quoteinfoEle = document.getElementById('quoteinfo'),
        chartcontainerEle = document.querySelector('.chartcontainer'),
        overlapEle = document.querySelector('.overlap');

    //create chart
    $scope.ctx = {
        stChart: null, // stock chart
        chartType: 3, // line
        rsChart: null, // range selector chart
        dateRangeSelector: null, // range selector
        midMarker: null,  // middle LineMarker
        hMarker: null, // horizontal LineMarker
        vMarker: null // vertical LineMarker
    };

    // create portfolio
    var p = new stockchart.Portfolio();
    $scope.portfolio = p;
    p.itemsChanged.addHandler(itemsChanged);

    $scope.dateRange = ''; //show date range information
    $scope.requestNum = p.requestNum;
    $scope.volSeriesIsVisible = true; // volume chart is show or not
    //Moving Average
    $scope.showMovingAverage = false;
    $scope.movingAverageType = 'Simple';
    $scope.movingAveragePeriod = 10;
    $scope.iptMovingAveragePeriod = 10;
    $scope.inputMovingAveragePeriod = null;

    $scope.$watch('iptMovingAveragePeriod', function () {
        var input = $scope.inputMovingAveragePeriod;
        if (input == null || input.value < input.min || input.vlue > input.max) {
            return;
        }
        $scope.movingAveragePeriod = input.value;
    });

    // annotation and line marker setting
    $scope.showAnnotation = false;
    $scope.showLineMarker = false;

    // update angular when portfolio items change
    p.itemsChanged.addHandler(function () {
        $scope.$apply('portfolio.items');
    });

    $scope.$watch('showMovingAverage', function () {
        if ($scope.showMovingAverage == null) {
            return;
        }
        updateStockChart();
    });

    $scope.$watch('movingAverageType', function () {
        if ($scope.movingAverageType == null || $scope.movingAverageType === '') {
            return;
        }
        updateStockChart();
    });

    $scope.$watch('movingAveragePeriod', function () {
        if ($scope.movingAveragePeriod == null) {
            return;
        }
        updateStockChart();
    });

    // create stockchart & linemarker
    $scope.$watch('ctx.stChart', function () {
        if (!$scope.ctx.stChart) {
            return;
        }
        var chart = $scope.ctx.stChart, midMarker = $scope.ctx.midMarker;
        chart.plotMargin = 'NaN 100 NaN 50';
        chart.tooltip.content = '';
        chart.legend.position = 'None';
        //add label
        chart.dataLabel.content = 'Label';
        chart.dataLabel.rendering.addHandler(function (sender, e) {
            var htInfo = e.hitTestInfo,
                date, events,
                item = $scope.portfolio.view.items[1],
                engine = e.engine,
                pt = e.point;

            e.cancel = true;
            if (!$scope.showAnnotation) {
                return;
            }
            events = item.events;
            if (htInfo && htInfo.series && htInfo.series.name === item.symbol) {
                date = htInfo.x;
                for (var i = 0; i < events.length; i++) {
                    if (date.getTime() === events[i].date.getTime()) {
                        engine.fill = '#888888';
                        engine.stroke = '#000000';
                        engine.drawRect(pt.x - 10, pt.y - 20, 20, 20, 'annotation' + i);
                        wijmo.chart.FlexChart._renderText(engine, 'N', pt, 1, 2, 'annotation' + i);
                    }
                }
            }
        });

        chart.hostElement.addEventListener('click', function (evt) {
            showNewsToolTip(evt, !chart.isTouching);
        });
        chart.hostElement.addEventListener('mousemove', function (e) {
            showNewsToolTip(e, chart.isTouching);
            setQuotesDetailInfo(e);
        });

        // control line marker
        chart.hostElement.addEventListener('mouseenter', function (e) {
            if (midMarker && hasData && $scope.showLineMarker) {
                lineMarkerShowing(midMarkerContent, true);
            }
        });

        chart.hostElement.addEventListener('mouseleave', function (e) {
            if (midMarker) {
                lineMarkerShowing(midMarkerContent, false);
                datailEle.innerHTML = detailInfo;
            }
            seriesMarkerShowing(false);
        });

        // for touch
        if ('ontouchstart' in window) {
            chart.hostElement.addEventListener('touchmove', function (e) {
                setQuotesDetailInfo(e);
                chart._hideToolTip();
                e.preventDefault();
            });
            chart.hostElement.addEventListener('touchstart', function (e) {
                if (midMarker && hasData && $scope.showLineMarker) {
                    lineMarkerShowing(midMarkerContent, true);
                }
                setQuotesDetailInfo(e);
            });
        }

        chart.rendered.addHandler(function () {
            var chartHostEle = chart.hostElement,
            pa = chartHostEle.querySelector('.wj-plot-area');
            pOffset = wijmo.getElementRect(pa);
        });

        //initial midmarker element: hide the middle, top and bottom linemarker
        midMarkerContent = document.querySelectorAll('.stchart .wj-chart-linemarker-content');
        //workaround: there is a square under middle linemarker
        midMarkerEles = document.querySelectorAll('.stchart .wj-chart-linemarker');
        if (midMarkerEles) {
            midMarkerEles[2].style.backgroundColor = 'transparent';
        }
        lineMarkerShowing(midMarkerContent, false);

        //add annotation
        if (!al) {
            al = new wijmo.chart.annotation.AnnotationLayer(chart, [{
                "name": "waterMarker",
                "type": "Text",
                "attachment": 2,
                "point": { "x": 0.5, "y": 0.5 },
                "text": "NO DATA",
                "isVisible": false,
                "style": { "fill": "#B45F04", "fill-opacity": 0.1, "stroke": "rgba(124,240,10,0.2)", "font-size": "100px" }
            }]);
            markerAnno = al.getItem('waterMarker');
        }
    });

    //create date range selector
    $scope.$watch('ctx.rsChart', function () {
        var rsChart = $scope.ctx.rsChart;
        if (!rsChart) {
            return;
        }
        rsChart.plotMargin = 'NaN 80 NaN NaN';
        rsChart.tooltip.content = '';
    });

    $scope.$watch('ctx.chartType', function () {
        var chart = $scope.ctx.stChart, series, chartType;
        if (!chart) {
            return;
        }
        //series0 is main quote
        if (chart.series && chart.series[0]) {
            series = chart.series[0];
            chart.axisY.format = undefined;
            chartType = $scope.ctx.chartType;
            series.style['fill-opacity'] = chartType === 5 ? 0.25 : 1;
            series.chartType = wijmo.chart.ChartType[chartType];

            // 7: Candlestick 8: HLOC
            series.binding = chartType === 7 || chartType === 8 ?
                            'high,low,open,close'
                            : 'close';
        }
    });

    // show annotation
    $scope.$watch('showAnnotation', function () {
        var chart = $scope.ctx.stChart;
        if (!chart) {
            return;
        }
        chart.refresh();
    });

    // show linemarker
    $scope.$watch('showLineMarker', function () {
        var chart = $scope.ctx.stChart;
        if (!chart) {
            return;
        }
        // hide or show linemarker
        lineMarkerShowing(midMarkerContent, $scope.showLineMarker);

        //create series point marker
        updateSeriesMarkers();
    });

    $scope.chartPeriodChange = function (period) {
        var chart = $scope.ctx.stChart,
            rsChart = $scope.ctx.rsChart,
            dateRangeSelector = $scope.ctx.dateRangeSelector,
            portfolio = $scope.portfolio;
        portfolio.chartPeriod = period;
        chartPeriodClicked = true;
        //change date rangeselector
        dateRangeSelector.min = $scope.portfolio.getChartStartDate().valueOf();
        dateRangeSelector.max = null;
        chartPeriodClicked = false;
    };

    $scope.$watch('volSeriesIsVisible', function () {
        var stChart = $scope.ctx.stChart;
        if (stChart) {
            volSeries.visibility = $scope.volSeriesIsVisible ? 0 : 3;
        }
    });

    $scope.rangeChanged = function (s, e) {
        var dateRangeSelector = $scope.ctx.dateRangeSelector,
            activeBtn = document.querySelector('.btn-group-xs .btn.active');
        if (!chartPeriodClicked && activeBtn) {
            wijmo.removeClass(activeBtn, 'active');
            activeBtn.blur();
        }
        updateStChartRange(dateRangeSelector.min, dateRangeSelector.max);

        //update the date range
        $scope.dateRange = wijmo.Globalize.format(new Date(dateRangeSelector.min), 'MMM dd, yyyy') +
            ' - ' + wijmo.Globalize.format(new Date(dateRangeSelector.max), 'MMM dd, yyyy');
    };

    $scope.midPosChanged = function (s, e) {
        pt = e;
    };

    $scope.changeContent = function () {
        markcontents = getMarkerContents(new wijmo.Point(pt.x, pt.y));
        return markcontents ? markcontents.content : '';
    };

    $scope.changeYContent = function () {
        return markcontents && markcontents.y ? markcontents.y.toString() : '';
    };

    $scope.changeXContent = function () {
        return markcontents && markcontents.x ? markcontents.x.toString() : '';
    };

    // update chart when portfolio changes
    function itemsChanged() {
        var rsChart = $scope.ctx.rsChart,
            portfolio = $scope.portfolio;

        updateStockChart();

        //the rangeselector chart only need update once.
        if (rsChart && portfolio && rsChart.series.length === 0) {
            updateRsChart(rsChart, portfolio);
            //set overlap's position and size
            setOverlap();
        }
    }

    function updateStockChart() {
        var chart = $scope.ctx.stChart,
            portfolio = $scope.portfolio;
        if (chart && portfolio) {
            updateStChartData(chart, portfolio);
        }
    }

    //update stock chart
    function updateStChartData(chart, portfolio) {
        // don't update chart until all done
        chart.beginUpdate();

        // remove current series
        chart.series.length = 0;

        // add new series
        var items = portfolio.view.items,
            chartType = $scope.ctx.chartType,
            itemLen = items.length,
            displayedSeriesNum = portfolio.displayChartSeriesNum;

        hasData = false;
        detailInfo = '';

        chart.axisY.format = displayedSeriesNum >= 2 ? 'p0' : undefined;
        for (var i = 1; i < itemLen; i++) {
            var item = items[i];
            if (item.chartData && item.chartData.length && item.chart) {
                var series = new wijmo.chart.Series(),
                    dataLength = item.chartData.length;
                hasData = true;
                series.itemsSource = item.chartData;
                //add main quote series
                if (displayedSeriesNum === 1) {
                    series.binding = (chartType === 7 || chartType === 8) ?
                        'high,low,open,close' : 'close';
                    series.chartType = wijmo.chart.ChartType[chartType];                    
                } else {
                    series.binding = 'closeChg';
                    series.chartType = wijmo.chart.ChartType.Line;
                }

                series.name = item.symbol;
                series.style = { stroke: item.color, fill: item.color };
                series.style['fill-opacity'] = (displayedSeriesNum === 1 && chartType === 5) ? 0.25 : 1;
                
                chart.series.push(series);

                if ($scope.showMovingAverage) {
                    var maIdx = item.analysisData.length - item.chartData.length - $scope.movingAveragePeriod + 1,
                        analySource = item.analysisData.slice(maIdx >= 0 ? maIdx : 0, item.analysisData.length - 1);
                    if ($scope.movingAveragePeriod < analySource.length) {
                        var movingAverage = new wijmo.chart.analytics.MovingAverage();
                        movingAverage.itemsSource = analySource;
                        movingAverage.binding = displayedSeriesNum === 1 ? 'close' : 'closeChg';
                        movingAverage.period = $scope.movingAveragePeriod;
                        //Simple, Weighted, Exponential, Triangular
                        movingAverage.type = wijmo.chart.analytics.MovingAverageType[$scope.movingAverageType || 'Simple'];
                        chart.series.push(movingAverage);
                    }

                }

                //add volume series and hide it's axisY
                if (i === 1) {
                    var volYAxis = new wijmo.chart.Axis(0);//hide the volume series y axis
                    volSeries = new wijmo.chart.Series();
                    volSeries.chartType = wijmo.chart.ChartType.Column;
                    volSeries.itemsSource = item.chartData;
                    volSeries.binding = 'volume';
                    volSeries.axisY = volYAxis;
                    // change the volume max value to make the volume smaller
                    if (volSeries.getValues(0)) {
                        volYAxis.max = Math.max.apply(null, volSeries.getValues(0)) * 8;
                    }
                    volSeries.style = { fill: item.color, stroke: item.color };
                    volSeries.visibility = $scope.volSeriesIsVisible ? 0 : 3;
                    chart.series.push(volSeries);
                }

                // set main quote information
                if (portfolio.mainQuoteUpdated) {
                    setMainQuoteTitle(item.color,
                        item.name + ' (' + item.symbol + ')',
                        item.chartData[dataLength - 1],
                        item.chartData[dataLength - 2]);
                    portfolio.mainQuoteUpdated = false;
                }
            }
        }

        markerAnno.isVisible = !hasData;
        // ready to update chart
        chart.endUpdate();
        //update quotes detail infotmation
        setQuotesDetailInfo();
        updateSeriesMarkers();
    }

    //update range selector chart
    function updateRsChart(chart, portfolio) {
        var items = portfolio.view.items,
            dateRangeSelector = $scope.ctx.dateRangeSelector;
        // ready to update chart
        chart.beginUpdate();

        // remove current series
        chart.series.length = 0;

        // add NASDAQ series to range selector chart
        if (items && items[0] && items[0].fullChartData.length > 0) {
            var series = new wijmo.chart.Series();
            series.itemsSource = items[0].fullChartData;
            series.style = { stroke: items[0].color };
            chart.series.push(series);
        }

        // don't update chart until all done
        chart.endUpdate();

        //wait for the chart rended, change the date range
        window.setTimeout(function () {
            if (chart.series.length > 0) {
                chartPeriodClicked = true;
                var startDate = $scope.portfolio.getChartStartDate().valueOf();
                dateRangeSelector.min = startDate;
                dateRangeSelector.max = null;
                dateRangeSelector.isVisible = true;
                chartPeriodClicked = false;
            }
        }, 250);
    }

    //help methods
    /*function toOADate(date) {
            return (date.getTime() - new Date(1899, 11, 30).getTime()) / 86400000;
    }

    function fromOADate(val) {
        var dec = val - Math.floor(val);
        if (val < 0 && dec) {
            val = Math.floor(val) - dec;
        }
        return new Date(val * 86400000 + new Date(1899, 11, 30).getTime());
    }*/

    //update stock chart range
    function updateStChartRange(min, max) {
        var chart = $scope.ctx.stChart, portfolio = $scope.portfolio;

        portfolio.startDate = new Date(min);
        portfolio.endDate = new Date(max);
    }

    //get line marker content
    function getMarkerContents(pt) {
        var chart = $scope.ctx.stChart, ht, xContent, yContent,
            newHitPoint = new wijmo.Point(pt.x, NaN), content = '';

        if (chart.series.length < 1) {
            return;
        }
        //calculate the y value
        yContent = getAxixYValue(pt.y);
        ht = chart.series[0].hitTest(newHitPoint);

        if (ht.x && ht.y !== null) {
            xContent = wijmo.Globalize.formatDate(ht.x, 'MM-dd-yyyy');
        }
        return { content: '', x: xContent, y: yContent };
    }

    //get axis y value
    function getAxixYValue(y) {
        var chart = $scope.ctx.stChart,
            yVal, axisYRange, axisYMax, axisYMin;

        if (pOffset === undefined) {
            return 0;
        }

        axisYMax = chart.axisY.actualMax;
        axisYMin = chart.axisY.actualMin;
        axisYRange = axisYMax - axisYMin;
        if (($scope.showMovingAverage && chart.series.length === 3) ||
                (!$scope.showMovingAverage && chart.series.length === 2)) {
            yVal = (axisYMax - ((y - pOffset.top) / pOffset.height) * axisYRange)
                .toFixed(2);
        } else {
            yVal = ((axisYMax - ((y - pOffset.top) / pOffset.height) * axisYRange) * 100)
                .toFixed(2) + '%';
        }
        return yVal;
    }

    // set position and size of loading icon
    function setOverlap() {
        var paneOffset = wijmo.getElementRect(chartcontainerEle);
        overlapEle.style.top = paneOffset.top + 'px';
        overlapEle.style.left = paneOffset.left + 'px';
        overlapEle.style.width = paneOffset.width + 'px';
        overlapEle.style.height = paneOffset.height + 'px';
    }

    //set main stock quote name
    function setMainQuoteTitle(color, innnerHtml, item, preItem) {
        var incre, changeColor = increColor, changeSymbol = '';

        quoteNameEle.style.color = color;
        quoteNameEle.innerHTML = innnerHtml;

        if (!item || !preItem) {
            return;
        }
        incre = item.close - preItem.close;
        if (incre < 0) {
            changeColor = decreColor;// red
        } else {
            changeSymbol = '+';
        }
        quoteinfoEle.innerHTML = '<span style=font-size:1.5em>' + item.close +
            '</span><span style=color:' + changeColor + '>' + ' ' + changeSymbol +
            incre.toFixed(2).toString() + '</span> ';
    }

    //set main quote detail information
    function setQuotesDetailInfo(e) {
        var series = $scope.ctx.stChart.series,
            hitTest, itmSource, detail = '',
            displaySeriesNum = $scope.portfolio.displayChartSeriesNum,
            point, pointIndex,
            ptMarker, annoItem;
        if (!series || series.length === 0) {
            return;
        }
        if (e) {
            point = e instanceof MouseEvent ?
            new wijmo.Point(e.pageX, e.pageY) :
            new wijmo.Point(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
        }

        series.forEach(function (ser) {
            if (e) {
                // each series has different data range
                hitTest = ser.hitTest(new wijmo.Point(point.x, NaN));
                if (hitTest == null || hitTest.x == null || hitTest.y == null) {
                    //hide the series annotation
                    annoItem = al.getItem(ser.name);
                    if (annoItem) {
                        annoItem.isVisible = false;
                    }
                    return;
                }
                pointIndex = hitTest.pointIndex;
            } else {
                pointIndex = ser.itemsSource.length - 1;
            }

            var itm = ser.itemsSource[pointIndex],
                dateStr;

            if (!itm || ser instanceof wijmo.chart.analytics.MovingAverage ||
                ser.binding === 'volume') {
                return;
            }

            annoItem = al.getItem(ser.name);
            if (annoItem) {
                if (annoItem.pointIndex !== pointIndex) {
                    annoItem.pointIndex = pointIndex;
                }
                if (!annoItem.isVisible) {
                    annoItem.isVisible = true;
                }
            }

            dateStr = wijmo.Globalize.format(itm.date, 'MMM dd, yyyy');

            if (displaySeriesNum === 1) {//include volume, trend series
                if (ser.binding === 'high,low,open,close' && e) {
                    detail = dateStr +
                        ' Open: ' + itm.open +
                        ' High: ' + itm.high +
                        ' Low: ' + itm.low +
                        ' Close: ' + itm.close +
                        ' Volume: ' + itm.volume;
                } else {
                    detail = dateStr +
                        ' Price: ' + itm.close +
                        ' Volume: ' + itm.volume;
                }
            } else {
                detail += getCurPointQuoteInfo(ser.name, itm.closeChg, ser.style.stroke);
            }
        })

        if (!e) {
            detailInfo = detail;
        }

        //for ios: when dom reload, the event don't fire
        window.setTimeout(function () {
            datailEle.innerHTML = detail;
        }, 0);
    }

    function getCurPointQuoteInfo(syml, info, symlColor) {
        var color = increColor, pSymbol = '';

        if (info < 0) {
            color = decreColor;
        } else {
            pSymbol = "+";
        }

        return '<span style="color: ' + symlColor + ';">' + syml + '</span><span style="color:' + color + ';">' +
            pSymbol + (info * 100).toFixed(2) + '%'
            + '</span> ';
    }

    // show or hide linemarker
    function lineMarkerShowing(markerContent, showing) {
        var display = showing ? 'block' : 'none';

        if ($scope.ctx.midMarker) {
            $scope.ctx.midMarker.isVisible = showing;
        }
        if ($scope.ctx.vMarker) {
            $scope.ctx.vMarker.isVisible = showing;
        }
        if ($scope.ctx.hMarker) {
            $scope.ctx.hMarker.isVisible = showing;
        }
        //horizontal and vertical line marker content display or not
        if (markerContent) {
            markerContent[0].style.display = display;
            markerContent[1].style.display = display;
        }
    }

    function updateSeriesMarkers() {
        var seriesAnno,
            series = $scope.ctx.stChart.series;

        if (!al) {
            return;
        }

        //clear items
        if (al && al.items.length > 1) {
            for (var i = al.items.length - 1; i >= 0; i--) {
                if (al.items[i] != markerAnno) {
                    al.items.removeAt(i);
                }
            }
        }
        if (!$scope.showLineMarker) {
            for (var i = 0; i < series.length; i++) {
                if (series[i] instanceof wijmo.chart.analytics.MovingAverage ||
                    series[i].binding === 'volume') {
                    continue;
                }
                seriesAnno = new wijmo.chart.annotation.Circle({
                    name: series[i].name,
                    seriesIndex: i,
                    isVisible: false,
                    position: wijmo.chart.annotation.AnnotationPosition.Center,
                    attachment: wijmo.chart.annotation.AnnotationAttachment.DataIndex,
                    radius: 3.5,
                    style: { fill: series[i].style.stroke, stroke: series[i].style.stroke }
                });
                al.items.push(seriesAnno);
            }
        }
    }

    function seriesMarkerShowing(visible) {
        if (!al) {
            return;
        }
        var annoItems = al.items;
        annoItems.forEach(function (itm) {
            if (itm.name !== 'waterMarker') {
                itm.isVisible = visible;
            }
        });
    }

    function showNewsToolTip(evt, isTouch) {
        var chart = $scope.ctx.stChart,
            tip = chart._tooltip,
            item = $scope.portfolio.view.items[1],
            target = evt.target,
            cls = target.getAttribute('class'),
            idx;
        if (isTouch) {
            return;
        }

        if (cls && cls.indexOf('annotation') > -1) {
            idx = Number(cls.replace('annotation', ''));
            chart._showToolTip(item.events[idx].title, new wijmo.Rect(evt.clientX, evt.clientY, 5, 5));
        } else {
            chart._hideToolTip();
        }
    }

    // search for companies to fill auto complete control
    var cache = {};
    $scope.searchCompany = function (query, max, callback) {
        // try getting the result from the cache
        var result = cache[query];
        if (result) {
            callback(result);
            return;
        }

        // not in cache, get from server
        //console.log('querying server for "' + query + '".');
        $.get('StockInfo.ashx', { search: query, max: max }, function (result) {
            // parse result
            var lines = result.split('\r'),
                matches = [];
            for (var i = 0; i < lines.length; i++) {
                var items = lines[i].split('\t');
                if (items.length == 2) {
                    var symbol = items[0].trim(),
                        name = items[1].trim(),
                        symbolName = '<b>' + symbol + '</b>: ' + name;
                    matches.push({ symbol: symbol, name: name, symbolName: symbolName });
                }
            }

            // store result in cache
            cache[query] = matches;

            // and return the result
            callback(matches);
        })
        .fail(function (error) {
            console.log('error: ' + error.responseText);
            cache[query] = null; // << no point in trying this query again
            callback(null);
        });
    };

    // Wijmo Menu's itemClicked event handler
    $scope.itemClicked = function (menu) {
        exportImage(menu.selectedItem.value);
    };

    // helper function to export the FlexChart to an image
    var exportImage = function (extension) {
        if ($scope.ctx.stChart) {
            var chart = $scope.ctx.stChart,
                canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d'),
                svg = chart.hostElement.querySelector('svg'),
                size = svg.getBoundingClientRect(),
                xml;

            // inline <text> styles
            textInliner(chart.hostElement);

            // set canvas height/width
            canvas.height = size.height;
            canvas.width = size.width;

            // handle rectangle fill, otherwise the fill will be transparent
            ctx.fillStyle = window.getComputedStyle(document.querySelector('.stchart')).backgroundColor;
            ctx.fillRect(0, 0, size.width, size.height);

            /* Perform other preprocessing if needed */

            // serialize SVG to XML
            xml = new XMLSerializer().serializeToString(svg);

            // call canvg extension method
            ctx.drawSvg(xml, 0, 0, size.width, size.height);
            canvas.toBlob(function (blob) {
                if (!blob) { return; }
                // use FileSaver.js to save the image
                saveAs(blob, 'chart.' + extension);
            });

            canvas = null;
        }
    };

    // external CSS is not detected when exporting
    // so one must inline some/all of these styles
    function textInliner(chartHost) {
        var textEls = [].slice.call(chartHost.querySelectorAll('text')),
            style;

        textEls.forEach(function (current, index, array) {
            style = window.getComputedStyle(current);
            current.style.fontSize = style.getPropertyValue('font-size');
            current.style.fontFamily = style.getPropertyValue('font-family');
            current.style.fill = style.getPropertyValue('fill');
        });
    }
});