///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, provide, Input, Inject, enableProdMode } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import { AppTab, AppTabPane } from './components/AppTab';
import { DataSvc } from './services/DataSvc';

    'use strict';

    // The Explorer application root component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html',
        directives: [CORE_DIRECTIVES, AppTab, AppTabPane,
            wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartAxis, wjNg2Chart.WjFlexChartLegend,
            wjNg2Chart.WjFlexChartDataLabel, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartLineMarker,
            wjNg2Input.WjMenu, wjNg2Input.WjMenuItem]
    })


    export class AppCmp {
        // generate some random data
        countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');
        data: { country: string, downloads: number, sales: number, expenses: number }[];

        //chart properties
        chartType = 'Column';
        stacking = 'None';
        legendPosition = 'Right';
        rotated = false;
        header = 'Sample Chart';
        footer= 'copyright (c) ComponentOne';
        titleX= 'country';
        titleY = 'amount';
        tooltipContent = '<img src="resources/{x}.png" /> <b>{seriesName} </b><br/ > {y}';
        selectionMode = 'Series';
        trafficData: wijmo.collections.ObservableArray;
        series1Visible = wijmo.chart.SeriesVisibility.Visible;
        series2Visible = wijmo.chart.SeriesVisibility.Visible;
        series3Visible = wijmo.chart.SeriesVisibility.Visible;

        //help
        _toAddData = null;
        _interval = null;

        protected dataSvc: DataSvc;

        constructor(@Inject(DataSvc) dataSvc: DataSvc) {
            this.dataSvc = dataSvc;
            this.data = this.dataSvc.getData(this.countries);
            this.trafficData = new wijmo.collections.ObservableArray();
            this.setInterval(500);
        }

        setInterval = (interval) => {
            if (this._toAddData) {
                clearTimeout(this._toAddData);
                this._toAddData = null;
            }
            this._interval = interval;
            if (interval) {
                this._toAddData = setTimeout(this._addTrafficItem);
            }
        }

        seriesVisible = (idx, checked) => {
            if (idx === 0) {
                this.series1Visible = checked ?
                    wijmo.chart.SeriesVisibility.Visible : wijmo.chart.SeriesVisibility.Hidden;
            } else if (idx === 1) {
                this.series2Visible = checked ?
                    wijmo.chart.SeriesVisibility.Visible : wijmo.chart.SeriesVisibility.Hidden;
            } else if (idx === 2) {
                this.series3Visible = checked ?
                    wijmo.chart.SeriesVisibility.Visible : wijmo.chart.SeriesVisibility.Hidden;
            }
        }

        private _addTrafficItem = () => {
            var len = this.trafficData.length,
                last = len ? this.trafficData[len - 1] : null,
                trucks = last ? last.trucks : 0,
                ships = last ? last.ships : 0,
                planes = last ? last.planes : 0;
            trucks = Math.max(0, trucks + Math.round(Math.random() * 50 - 25));
            ships = Math.max(0, ships + Math.round(Math.random() * 10 - 5));
            planes = Math.max(0, planes + Math.round(Math.random() * 10 - 5));

            // add random data, limit array length
            this.trafficData.push({ time: new Date(), trucks: trucks, ships: ships, planes: planes });
            if (this.trafficData.length > 200) {
                this.trafficData.splice(0, 1);
            }

            // keep adding
            if (this._interval) {
                this._toAddData = setTimeout(this._addTrafficItem, this._interval);
            }
        }
}


enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(AppCmp, [
    DataSvc
]);