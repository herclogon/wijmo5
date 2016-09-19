'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeBaseCmp } from './GaugeBaseCmp';
import { RouterModule } from '@angular/router';
import { WjGaugeModule } from 'wijmo/wijmo.angular2.gauge';

// Linear gauge sample component.
@Component({
    selector: 'linear-gauge-cmp',
    templateUrl: 'src/components/gauge/linearGaugeCmp.html'
})

export class LinearGaugeCmp extends GaugeBaseCmp {

    constructor() {
        super();
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: LinearGaugeCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjGaugeModule],
    declarations: [LinearGaugeCmp],
})
export class LinearGaugeModule {
}

