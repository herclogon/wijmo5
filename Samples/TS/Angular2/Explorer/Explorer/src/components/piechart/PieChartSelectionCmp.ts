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
    selector: 'pie-chart-selection-cmp',
    templateUrl: 'src/components/piechart/pieChartSelectionCmp.html'
})

export class PieChartSelectionCmp extends PieChartBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}
const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: PieChartSelectionCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjChartModule, WjInputModule],
    declarations: [PieChartSelectionCmp],
})
export class PieChartSelectionModule {
}