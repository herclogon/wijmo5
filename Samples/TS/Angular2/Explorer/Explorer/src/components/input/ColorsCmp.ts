'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// Colors sample component.
@Component({
    selector: 'colors-cmp',
    templateUrl: 'src/components/input/colorsCmp.html'
})

export class ColorsCmp extends InputBaseCmp {
    theColor = 'white';

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}
const routing: ModuleWithProviders = RouterModule.forChild([
        { path: '', component: ColorsCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjInputModule],
    declarations: [ColorsCmp],
})
export class ColorsModule {
}