'use strict';

import { Component, EventEmitter, Inject} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';
import { DataSvc } from '../../services/DataSvc';
import { PieChartBaseCmp } from './PieChartBaseCmp'

// PieChart Introduction sample component.
@Component({
    selector: 'pie-chart-selection-cmp',
    templateUrl: 'src/components/piechart/pieChartSelectionCmp.html',
    directives: [wjNg2Chart.WjFlexPie, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, CORE_DIRECTIVES]
})

export class PieChartSelectionCmp extends PieChartBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}
