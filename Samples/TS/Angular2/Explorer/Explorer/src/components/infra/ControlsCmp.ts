'use strict';

import { Component, EventEmitter, Inject, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataSvc } from '../../services/DataSvc';
import { InputBaseCmp } from '../input/InputBaseCmp';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// Wijmo Controls component.
@Component({
    selector: 'grid-controls-cmp',
    templateUrl: 'src/components/infra/controlsCmp.html'
})

export class ControlsCmp extends InputBaseCmp {

    passengers = 1;
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ControlsCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjGridModule, WjInputModule],
    declarations: [ControlsCmp],
})
export class ControlsModule {
}
