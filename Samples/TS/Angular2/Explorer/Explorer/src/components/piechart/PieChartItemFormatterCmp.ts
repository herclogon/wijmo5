'use strict';

import { Component, EventEmitter, Inject} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';
import { DataSvc } from '../../services/DataSvc';
import { PieChartBaseCmp } from './PieChartBaseCmp'

// PieChart Introduction sample component.
@Component({
    selector: 'pie-item-formatter-cmp',
    templateUrl: 'src/components/piechart/pieChartItemFormatterCmp.html',
    directives: [wjNg2Chart.WjFlexPie, CORE_DIRECTIVES]
})

export class PieChartItemFormatterCmp extends PieChartBaseCmp {
    itemFormatter: Function;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
        this.itemFormatter = this._itemFormatter.bind(this);
    }

    private _itemFormatter(engine: wijmo.chart.IRenderEngine, hitTestInfo: wijmo.chart.HitTestInfo, defaultFormatter: Function) {
        var fsz = engine.fontSize;
        engine.fontSize = '10';
        defaultFormatter();
        var point = hitTestInfo.point.clone();
        var text = hitTestInfo.name + '=' + hitTestInfo.value.toFixed(1);
        var sz = engine.measureString(text);
        var fill = engine.fill;
        engine.fill = 'white';
        engine.drawRect(point.x - 2 - sz.width / 2, point.y - sz.height - 2, sz.width + 4, sz.height + 4);
        engine.fill = fill;
        point.x -= sz.width / 2;
        engine.drawString(text, point);
        engine.fontSize = fsz;
    }
}
