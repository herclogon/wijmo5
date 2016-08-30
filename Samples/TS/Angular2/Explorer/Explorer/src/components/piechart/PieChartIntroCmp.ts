'use strict';

import { Component, EventEmitter, Inject, ViewChild } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';
import { PieChartBaseCmp } from './PieChartBaseCmp'

// PieChart Introduction sample component.
@Component({
    selector: 'pie-chart-intro-cmp',
    templateUrl: 'src/components/piechart/pieChartIntroCmp.html',
    directives: [wjNg2Chart.WjFlexPie, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, CORE_DIRECTIVES]
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
