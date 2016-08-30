'use strict';

import { Component} from '@angular/core';
import * as wjNg2Core from 'wijmo/wijmo.angular2.core';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';

@Component({
    selector: 'expence-cell-edit-cmp',
    templateUrl: 'src/CellTemplates/statGroupTemplate.html',
    directives: [wjNg2Grid.WjFlexGrid, wjNg2Chart.WjFlexPie, wjNg2Grid.WjFlexGridColumn,
        wjNg2Chart.WjFlexChartLegend, wjNg2Chart.WjFlexPieDataLabel]
})
export class StatGroupTemplate {
    cell: any;
    colDef: any;

    constructor() {
    }
}
