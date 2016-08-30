///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, provide, Input, Inject, enableProdMode } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';
import * as wjNg2Hierarchical from 'wijmo/wijmo.angular2.chart.hierarchical';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import { AppTab, AppTabPane } from './components/AppTab';
import { DataSvc } from './services/DataSvc';

    'use strict';

    // The Explorer application root component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html',
        directives: [CORE_DIRECTIVES, AppTab, AppTabPane,
            wjNg2Hierarchical.WjSunburst, wjNg2Chart.WjFlexPieDataLabel, wjNg2Chart.WjFlexChartLegend,
            wjNg2Input.WjInputNumber,wjNg2Input.WjMenu, wjNg2Input.WjMenuItem]
    })


    export class AppCmp {
        // generate some random data
        protected dataSvc: DataSvc;
        data: any[];
        hierarchicalData: any[];
        themingData: any[];
        header = 'Sales';
        footer = 'GrapeCity, inc.';
        legendPosition = 'Right';
        innerRadius = 0;
        offset = 0;
        startAngle = 0;
        reversed = false;
        palette = 'standard';
        palettes = ['standard', 'cocoa', 'coral', 'dark', 'highcontrast', 'light', 'midnight', 'minimal', 'modern', 'organic', 'slate'];
        bindingName = ['year', 'quarter', 'month'];
        childItemsPath = 'items';
        selectedPosition = 'Top';
        selectedOffset = 0;
        isAnimated = true;
        chartPalette: wijmo.chart.Palettes;

        constructor( @Inject(DataSvc) dataSvc: DataSvc) {
            this.dataSvc = dataSvc;
            this.data = this.dataSvc.getData();
            this.hierarchicalData = this.dataSvc.getHierarchicalData();
            this.themingData = this.dataSvc.getThemingData();
        }

        paletteChanged = (sender: wijmo.input.Menu) => {
            var p = this.palettes[sender.selectedIndex];
            this.palette = p;
            this.chartPalette = wijmo.chart.Palettes[p];
        };

        innerRadiusChanged = (sender: wijmo.input.InputNumber) => {
            if (sender.value < sender.min || sender.value > sender.max) {
                return;
            }
            this.innerRadius = sender.value;
        };

        offsetChanged = (sender: wijmo.input.InputNumber) => {
            if (sender.value < sender.min || sender.value > sender.max) {
                return;
            }
            this.offset = sender.value;
        };

        startAngleChanged = (sender: wijmo.input.InputNumber) => {
            if (sender.value < sender.min || sender.value > sender.max) {
                return;
            }
            this.startAngle = sender.value;
        };

        selectedOffsetChanged = (sender: wijmo.input.InputNumber) => {
            if (sender.value < sender.min || sender.value > sender.max) {
                return;
            }
            this.selectedOffset = sender.value;
        };
}


enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(AppCmp, [
    DataSvc
]);