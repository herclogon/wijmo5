'use strict';

import { Component, EventEmitter, Inject, ViewChild, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataSvc } from '../../services/DataSvc';
import { PieChartBaseCmp } from './PieChartBaseCmp'
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';

// PieChart Introduction sample component.
@Component({
    selector: 'pie-item-formatter-cmp',
    templateUrl: 'src/components/piechart/pieChartItemFormatterCmp.html'
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
const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: PieChartItemFormatterCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjChartModule],
    declarations: [PieChartItemFormatterCmp],
})
export class PieChartItemFormatterModule {
}