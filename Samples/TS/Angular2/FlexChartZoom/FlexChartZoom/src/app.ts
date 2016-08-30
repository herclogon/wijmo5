///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, provide, Input, Inject, ViewChild, enableProdMode } from '@angular/core';
import { Http, HTTP_BINDINGS } from '@angular/http';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2FlexChart from 'wijmo/wijmo.angular2.chart';
import * as wjNg2Interaction from 'wijmo/wijmo.angular2.chart.interaction';

// Services
import { DataSvc } from './services/DataSvc';

export module FlexChartZoom {
    'use strict';

    // The FlexChartZoom application root component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html',
        directives: [wjNg2FlexChart.WjFlexChart, wjNg2FlexChart.WjFlexChartSeries, wjNg2Interaction.WjFlexChartGestures,
            wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2FlexChart.WjFlexChartAxis, wjNg2FlexChart.WjFlexChartLegend,
             CORE_DIRECTIVES, FORM_DIRECTIVES]
    })
    export class AppCmp {
        data: any[];
        mouseAction: string;
        interactiveAxes: string;
        disabled: boolean;
        isTouch: boolean;
        // references control in the view
        @ViewChild('zoomChart') zoomChart: wijmo.chart.FlexChart;
        @ViewChild('chartGestures') chartGestures: wijmo.chart.interaction.ChartGestures;

        constructor( @Inject(DataSvc) dataSvc: DataSvc) {
            dataSvc.getData().subscribe(data => {
                this.data = data;
                setTimeout(()=> {
                    this.chartGestures.posX = 0.1;
                    this.chartGestures.posY = 0.1;
                    this.chartGestures.scaleX = 0.5;
                    this.chartGestures.scaleY = 0.5;
                }, 100);
            });
            this.mouseAction = 'Zoom';
            this.interactiveAxes = 'X';
            this.isTouch = navigator.userAgent.match(/iPad/i) != null || /Android/i.test(navigator.userAgent);
            this.disabled = true;
        }

        resetAxes() {
            if (this.chartGestures) {
                this.chartGestures.reset();
            }
            window.setTimeout(() => {
                this.disabled = true;
            }, 20);
        }

        rangeChanged() {
            this.disabled = false;
        }
        
    }
}

enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(FlexChartZoom.AppCmp, [
    provide(Http, { useClass: Http }),
    HTTP_BINDINGS,
    DataSvc
]);