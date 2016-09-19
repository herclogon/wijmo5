'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GridBaseCmp } from './GridBaseCmp';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { AppPipesModule } from '../../pipes/appPipes';
import { DataSvc } from '../../services/DataSvc';

// FlexGrid Introduction sample component.
@Component({
    selector: 'grid-intro-cmp',
    templateUrl: 'src/components/grid/gridIntroCmp.html'
})

export class GridIntroCmp extends GridBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);

    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: GridIntroCmp }
]);

@NgModule({
    imports: [CommonModule, routing, FormsModule, WjGridModule, WjInputModule, AppPipesModule],
    declarations: [GridIntroCmp],
})
export class GridIntroModule {
}
