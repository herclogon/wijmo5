///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, provide, Input, Inject, ViewChild, enableProdMode, AfterViewInit } from '@angular/core';
import { Http, HTTP_BINDINGS } from '@angular/http';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import * as wjNg2FlexChart from 'wijmo/wijmo.angular2.chart';
import * as wjNg2Interaction from 'wijmo/wijmo.angular2.chart.interaction';

// Services
import { DataSvc } from './services/DataSvc';

export module WeatherChart {
    'use strict';

    // The WeatherChart application root component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html',
        directives: [wjNg2FlexChart.WjFlexChart, wjNg2FlexChart.WjFlexChartSeries, wjNg2Interaction.WjFlexChartRangeSelector,
            wjNg2FlexChart.WjFlexChartAxis, wjNg2FlexChart.WjFlexChartLegend, wjNg2FlexChart.WjFlexChartLineMarker, CORE_DIRECTIVES, FORM_DIRECTIVES]
    })
    export class AppCmp implements AfterViewInit {
        isViewInitialized = false;
        data: any[];
        palette: any[];
        pt: wijmo.Point;
        props: any[];
        markerContent: Function;
        // references control in the view
        @ViewChild('chart1') chart1: wijmo.chart.FlexChart;
        @ViewChild('chart2') chart2: wijmo.chart.FlexChart;
        @ViewChild('chart3') chart3: wijmo.chart.FlexChart;
        @ViewChild('selector') selector: wijmo.chart.interaction.RangeSelector;

        constructor( @Inject(DataSvc) dataSvc: DataSvc) {
            this.props = ['MeanPressure', 'Precipitation']
            this.pt = new wijmo.Point();
            dataSvc.getData().subscribe(data => {
                this.data = data;
            });
            this.palette = ['#88bde6', 'blue', 'red'];
            this.markerContent = ()=> {
                return this.getMarkercontent(new wijmo.Point(this.pt.x, NaN));
            };
        }

        ngAfterViewInit() {
            this.isViewInitialized = true;
            
            [this.chart1, this.chart2, this.chart3].forEach(chart => {
                if (chart) {
                    chart.rendered.addHandler(() => {
                        var ele = chart.hostElement.querySelector('.wj-chart-linemarker');
                        if (ele) {
                            (<HTMLElement>ele).style.display = 'none';
                        }
                    });
                }
            });
        }

        rangeChanged() {
            this.update(this.selector.min, this.selector.max);
        }

        update(min, max) {
            [this.chart1, this.chart2, this.chart3].forEach(function (chart) {
                chart.axisX.min = min;
                chart.axisX.max = max;
                chart.invalidate();
            });
        }
        
        markerPositionChanged(chart, marker, point) {
            this.pt = point;
            this.changeMarker(chart, marker);
        }

        changeMarker(curChart, marker) {
            if (!this.isViewInitialized) {
                return;
            }
            let curHost = curChart.hostElement,
                vline = curHost.querySelector('.wj-chart-linemarker-vline');
            
            [this.chart1, this.chart2, this.chart3].forEach(chart => {
                if (chart) {
                    var ele = <any>chart.hostElement.querySelector('.wj-chart-linemarker');
                    if (chart === curChart) {
                        ele.style.display = 'block';
                    } else {
                        ele.style.display = 'none';
                    }
                }
            });

            vline.style.height = 326 + 'px';
        }

        getMarkercontent(pt) {
            if (!this.chart1 || !this.chart1.itemsSource) {
                return;
            }
            var chart = this.chart1,
                ht = chart.series[0].hitTest(pt),
                item = chart.itemsSource[ht.pointIndex],
                content = '',
                len = this.props.length;

            for (var i = 0; i < chart.series.length; i++) {
                var series = chart.series[i];
                // find series lines to get its color
                var polyline = series.hostElement.querySelector('polyline');

                // add series info to the marker content
                if (ht.x && ht.y !== null) {
                    if (i == 0) {
                        content += wijmo.Globalize.formatDate(ht.x, 'dd-MMM');
                    }
                    content += '<div style="color:' + polyline.getAttribute('stroke') + '">' + series.name + ' = ' + item[series.name].toFixed() + '</div>';
                }

            }
            for (var i = 0; i < len; i++) {
                content += '<div>' + this.props[i] + ' = ' + item[this.props[i]].toFixed() + '</div>';
            }
            return content;
        }
    }
}

enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(WeatherChart.AppCmp, [
    provide(Http, { useClass: Http }),
    HTTP_BINDINGS,
    DataSvc
]);

