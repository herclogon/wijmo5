'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GridBaseCmp } from '../grid/GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjCoreModule } from 'wijmo/wijmo.angular2.core';

// Wijmo Tooltip component.
@Component({
    selector: 'grid-tooltips-cmp',
    templateUrl: 'src/components/infra/tooltipsCmp.html'
})

export class TooltipsCmp extends GridBaseCmp {

    
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
        this.data = this.dataSvc.getData(500);
    }

    ngAfterViewInit() {
        if (this.flex) {
            // store reference to grid
            var flex = this.flex;

            // create tooltip
            var tip = new wijmo.Tooltip(),
                rng = null;

            // monitor the mouse over the grid
            flex.hostElement.addEventListener('mousemove', function (evt) {
                var ht = flex.hitTest(evt);
                if (!ht.range.equals(rng)) {

                    // new cell selected, show tooltip
                    if (ht.cellType == wijmo.grid.CellType.Cell) {
                        rng = ht.range;
                        var cellElement = document.elementFromPoint(evt.clientX, evt.clientY),
                            cellBounds = flex.getCellBoundingRect(ht.row, ht.col),
                            data = wijmo.escapeHtml(flex.getCellData(rng.row, rng.col, true)),
                            tipContent = 'cell (' + rng.row + ' ' + rng.col + ') contains "<b>' + data + '</b>"';
                        if (cellElement.className.indexOf('wj-cell') > -1) {
                            tip.show(flex.hostElement, tipContent, cellBounds);
                        } else {
                            tip.hide(); // cell must be behind scroll bar...
                        }
                    }
                }
            });
            flex.hostElement.addEventListener('mouseout', function () {
                tip.hide();
                rng = null;
            });
        }
    }

}
const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: TooltipsCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjGridModule, WjCoreModule],
    declarations: [TooltipsCmp],
})
export class TooltipsModule {
}

