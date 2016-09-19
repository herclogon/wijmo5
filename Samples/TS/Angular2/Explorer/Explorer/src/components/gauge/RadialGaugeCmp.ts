'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeBaseCmp } from './GaugeBaseCmp';
import { RouterModule } from '@angular/router';
import { WjGaugeModule } from 'wijmo/wijmo.angular2.gauge';

// Radial gauge sample component.
@Component({
    selector: 'radial-gauge-cmp',
    templateUrl: 'src/components/gauge/radialGaugeCmp.html'
})

export class RadialGaugeCmp extends GaugeBaseCmp {

    constructor() {
        super();
    }
}
const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: RadialGaugeCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjGaugeModule],
    declarations: [RadialGaugeCmp],
})
export class RadialGaugeModule {
}

