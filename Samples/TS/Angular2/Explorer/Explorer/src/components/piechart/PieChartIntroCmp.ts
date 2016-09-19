'use strict';

import { Component, EventEmitter, Inject, ViewChild, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataSvc } from '../../services/DataSvc';
import { PieChartBaseCmp } from './PieChartBaseCmp'
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// PieChart Introduction sample component.
@Component({
    selector: 'pie-chart-intro-cmp',
    templateUrl: 'src/components/piechart/pieChartIntroCmp.html'
})
export class PieChartIntroCmp extends PieChartBaseCmp {
    pal = 0;
    palettes = ['standard', 'cocoa', 'coral', 'dark', 'highcontrast', 'light', 'midnight', 'minimal', 'modern', 'organic', 'slate'];
    labels = 0;
    lblBorder = false;
    // references FlexPie named 'chart' in the view
    @ViewChild('chart') chart: wijmo.chart.FlexPie;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }

    getPalette(palIdx: number): string[] {
        return wijmo.chart.Palettes[this.palettes[palIdx]];
    }

    hasLabels() {
        var chart = this.chart;
        return chart && chart.dataLabel.position != 0;
    };
}
const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: PieChartIntroCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjChartModule, WjInputModule],
    declarations: [PieChartIntroCmp],
})
export class PieChartIntroModule {
}
