///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, Input, Inject, enableProdMode, AfterViewInit, ViewChild, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjChartAnnotationModule } from 'wijmo/wijmo.angular2.chart.annotation';


// Services
import { DataSvc } from './services/DataSvc';

export module FlexChartAnnotation {
    'use strict';

    // The FlexChartAnnotation application root component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html'
    })
    export class AppCmp implements AfterViewInit {
        data: any[];
        basicData: any[];
        basic: any;
        advanced: any;
        axisXScrollbar: wijmo.chart.interaction.AxisScrollbar;
        volYAxis: wijmo.chart.Axis;
        // references control in the view
        @ViewChild('advancedChart') advancedChart: wijmo.chart.FlexChart;
        @ViewChild('al') al: wijmo.chart.annotation.AnnotationLayer;

        constructor( @Inject(DataSvc) dataSvc: DataSvc) {
            this.basicData = dataSvc.getBasicData();
            dataSvc.getData().subscribe(data => {
                this.data = data;
                this._initAxisScrollbar();
            });
            this.basic = {
                rectDate: new Date(2014, 1, 10),
                imageDate: new Date(2014, 0, 25)
            };
            this.advanced = {
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
        }

        ngAfterViewInit() {
            this.advancedChart.rendered.addHandler(() => {
                //adjust last point
                window.setTimeout(() => {
                    this._updateLastPoint();
                }, 40);
                if (!this.volYAxis && this.advancedChart.series.length > 1) {
                    var volSeries = this.advancedChart.series[1];
                    this.volYAxis = new wijmo.chart.Axis(0);
                    volSeries.axisY = this.volYAxis;
                    if (volSeries.getValues(0)) {
                        this.volYAxis.max = Math.max.apply(null, volSeries.getValues(0)) * 8;
                    }
                }
            });
        }
        
        _initAxisScrollbar() {
            var chart = this.advancedChart,
                ele;
            var self = this;
            if (!chart) {
                return;
            }
            chart.axes[0].axisLine = false;
            chart.axes[0].format = 'MM/dd/yy';
            chart.axes[1].position = wijmo.chart.Position.Right;
            // add scrollbar
            if (!this.axisXScrollbar) {
                this.axisXScrollbar = new wijmo.chart.interaction.AxisScrollbar(chart.axes[0]);

                window.setTimeout(()=> {
                    this.axisXScrollbar.maxPos = 0.5;
                }, 20);
            }

            ele = chart.hostElement;
            ele.ontouchmove = (e) => {
                this._setQuoteDetailInfo(e);
            }
            ele.onmousemove = (e) => {
                this._setQuoteDetailInfo(e);
            }
            ele.onmouseleave = (e) => {
                this._clearDetail();
            }
        }


        //set main quote detail information
        _setQuoteDetailInfo(e) {
            if (this.al == null) return;
            var series = this.advancedChart.series[0], hitTest, itmSource,
                detailContainer, detailLow, detailHigh, detailOpen, detailClose,
                al = this.al,
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
            itmSource = this.data[hitTest.pointIndex];

            al.getItem('detailContainer').isVisible = true;
            this._setAnnotationText(al, 'detailLow', 'Low: ' + itmSource.low);
            this._setAnnotationText(al, 'detailHigh', 'High: ' + itmSource.high);
            this._setAnnotationText(al, 'detailOpen', 'Open: ' + itmSource.open);
            this._setAnnotationText(al, 'detailClose', 'Close: ' + itmSource.close);
            this._setAnnotationText(al, 'detailVolume', 'Volume: ' + itmSource.volume);
        }

        _clearDetail() {
            var al = this.al;
            if (al == null) return;

            al.getItem('detailContainer').isVisible = false;
            this._setAnnotationText(al, 'detailLow', '');
            this._setAnnotationText(al, 'detailHigh', '');
            this._setAnnotationText(al, 'detailOpen', '');
            this._setAnnotationText(al, 'detailClose', '');
            this._setAnnotationText(al, 'detailVolume', '');
        }

        _setAnnotationText(al, name, text) {
            (<wijmo.chart.annotation.Text>al.getItem(name)).text = text;
        }

        _updateLastPoint() {
            var content, maxItm, maxLineItm,
                data = this.data,
                len = data.length,
                al = this.al,
                maxDate;

            maxDate = this._fromOADate(Math.ceil(this.advancedChart.axisX.max));

            if (al && al.items) {
                maxItm = al.getItem('endPrice');
                maxLineItm = al.getItem('endPriceLine');
                if (!maxItm || !maxLineItm) {
                    return;
                }
                for (var i = 0; i < len; i++) {
                    if (i === len - 1 || data[i].date.getTime() === maxDate.getTime()) {
                        content = data[i].close;
                        break;
                    } else if (i < len - 1 && maxDate.getTime() > data[i].date.getTime() &&
                        maxDate.getTime() < data[i + 1].date.getTime()) {
                        content = data[i + 1].close;
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

        _fromOADate(val) {
            var dec = val - Math.floor(val);
            if (val < 0 && dec) {
                val = Math.floor(val) - dec;
            }
            return new Date(val * 86400000 + new Date(1899, 11, 30).getTime());
        }
    }
}

@NgModule({
    imports: [WjChartModule, WjChartAnnotationModule, BrowserModule, FormsModule, HttpModule],
    declarations: [FlexChartAnnotation.AppCmp],
    providers: [DataSvc],
    bootstrap: [FlexChartAnnotation.AppCmp]
})
export class AppModule {
}


enableProdMode();
// Bootstrap application with hash style navigation and global services.
platformBrowserDynamic().bootstrapModule(AppModule);
