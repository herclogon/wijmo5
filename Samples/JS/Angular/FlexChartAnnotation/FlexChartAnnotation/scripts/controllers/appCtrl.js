'use strict';

// get reference to app module
var app = angular.module('app');

// add controller to app module
app.controller('appCtrl', function appCtrl($scope, $http, $sce) {

    $scope.trustHtml = function (html_code) {
        return $sce.trustAsHtml(html_code);
    }

    $http.get('data/fb.json')
      .success(function (data) {
          for (var i = 0; i < data.length; i++) {
              data[i].date = wijmo.Globalize.parseDate(data[i].date, 'MM/dd/yy');
          }
          $scope.data = data;        

      }).error(function (error) {
          console.log(error);
      });

    var axisXScrollbar, volYAxis;   

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

    $scope.date1 = new Date(2014, 1, 10);
    $scope.date2 = new Date(2014, 0, 25);
    $scope.basicData = getData();
    $scope.anChart = null;
    $scope.ctx = {};
    $scope.annotation = {
        trendLine1: {
            start: {
                x: new Date(2014, 4, 8),
                y: 64
            },
            end: {
                x: new Date(2014, 8, 8),
                y: 84
            }
        },
        trendLine2: {
            start: {
                x: new Date(2014, 4, 8),
                y: 56
            },
            end: {
                x: new Date(2014, 8, 8),
                y: 76
            }
        },
        eventStyle: {
            fill: '#01DFD7',
            stroke: '#000000',
            'fill-opacity': 1,
            'stroke-width': 1,
            'stroke-opacity': 1
        },
        detailStyle: {
            fill: '#6E6E6E',
            'font-size': '12px'
        },
        startLine: {
            start: {
                x: new Date(2014, 3, 10),
                y: 59.16
            },
            end: {
                x: new Date(2016, 3, 10),
                y: 59.16
            }
        },
        tradeRange: {
            point: {
                x: new Date(2014, 10, 26),
                y: 70
            },
            style: {
                fill: "#669999",
                stroke: "#B40431",
                "fill-opacity": 0.2,
                "stroke-width": 0.5,
                "stroke-opacity": 0.2
            }
        },
        newsa: {
            x: new Date(2015, 2, 2),
            y: 80
        },
        newsb: {
            x: new Date(2014, 6, 8),
            y: 62
        },
        trendDesc: {
            x: new Date(2014, 4, 8),
            y: 64
        },
        buyAnno: {
            x: new Date(2014, 9, 14),
            y: 73
        },
        sellAnno: {
            x: new Date(2015, 0, 8),
            y: 73
        }
    };
    
    $scope.$watch('data', function () {
        var anChart = $scope.anChart;
        if (!anChart) {
            return;
        }
        // add scrollbar
        if (!axisXScrollbar) {
            axisXScrollbar = new wijmo.chart.interaction.AxisScrollbar(anChart.axes[0]);
            
            window.setTimeout(function () {
                axisXScrollbar.maxPos = 0.5;
            }, 20);
        }

        anChart.rendered.addHandler(function () {

            //adjust last point
            window.setTimeout(function () { updateLastPoint(); }, 40);
            if (!volYAxis) {
                var volSeries = anChart.series[1];
                volYAxis = new wijmo.chart.Axis(0);
                volSeries.axisY = volYAxis;
                if (volSeries.getValues(0)) {
                    volYAxis.max = Math.max.apply(null, volSeries.getValues(0)) * 8;
                }
            }
        });

        anChart.hostElement['ontouchmove'] = function (e) {
            setQuoteDetailInfo(e);
        }
        anChart.hostElement['onmousemove'] = function (e) {
            setQuoteDetailInfo(e);
        }
        anChart.hostElement.onmouseleave = function (e) {
            clearDetail();
        }

    });

    //set main quote detail information
    function setQuoteDetailInfo(e) {
        if ($scope.ctx.al == null) return;
        var series = $scope.anChart.series[0], hitTest, itmSource,
            detailContainer, detailLow, detailHigh, detailOpen, detailClose,
            al = $scope.ctx.al,
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
        itmSource = $scope.data[hitTest.pointIndex];

        al.getItem('detailContainer').isVisible = true;
        al.getItem('detailLow').text = 'Low: ' + itmSource.low;
        al.getItem('detailHigh').text = 'High: ' + itmSource.high;
        al.getItem('detailOpen').text = 'Open: ' + itmSource.open;
        al.getItem('detailClose').text = 'Close: ' + itmSource.close;
        al.getItem('detailVolume').text = 'Volume: ' + itmSource.volume;
    }

    function clearDetail() {
        var al = $scope.ctx.al;
        if (al == null) return;

        al.getItem('detailContainer').isVisible = false;
        al.getItem('detailLow').text = '';
        al.getItem('detailHigh').text = '';
        al.getItem('detailOpen').text = '';
        al.getItem('detailClose').text = '';
        al.getItem('detailVolume').text = '';
    }

    function updateLastPoint() {
        var content, maxItm, maxLineItm, len = $scope.data.length,
            al = $scope.ctx.al,
            maxDate = Math.ceil($scope.anChart.axisX.max);
        maxDate = fromOADate(maxDate);
        
        if (al && al.items) {
            maxItm = al.getItem('endPrice');
            maxLineItm = al.getItem('endPriceLine');
            if (!maxItm || !maxLineItm) {
                return;
            }
            for (var i = 0; i < len; i++) {
                if (i === len-1 ||  $scope.data[i].date.getTime() === maxDate.getTime()) {
                    content = $scope.data[i].close;                    
                    break;
                } else if (i < len-1 && maxDate.getTime() > $scope.data[i].date.getTime() && 
                    maxDate.getTime() < $scope.data[i + 1].date.getTime()) {
                    content = $scope.data[i+ 1].close;
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

});
