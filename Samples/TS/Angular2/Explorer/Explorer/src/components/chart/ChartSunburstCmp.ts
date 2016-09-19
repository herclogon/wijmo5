'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjChartHierarchicalModule } from 'wijmo/wijmo.angular2.chart.hierarchical';
import { DataSvc } from '../../services/DataSvc';

// Chart Sunburst component
@Component({
    selector: 'chart-sunburst-cmp',
    templateUrl: 'src/components/chart/chartSunburstCmp.html'
})

export class ChartSunburstCmp  {

    // generate some random data
    protected dataSvc: DataSvc;
    data: any[];
    hierarchicalData: any[];
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
        this.hierarchicalData = this.dataSvc.getHierarchicalData();
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

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ChartSunburstCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjChartModule, WjInputModule, WjChartHierarchicalModule],
    declarations: [ChartSunburstCmp],
})
export class ChartSunburstModule {
}