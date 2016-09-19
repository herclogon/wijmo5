'use strict';

import { Component, EventEmitter, Inject, ViewChild, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputBaseCmp } from '../input/InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { AppPipesModule } from '../../pipes/appPipes';


// Wijmo Themes component.
@Component({
    selector: 'grid-themes-cmp',
    templateUrl: 'src/components/infra/themesCmp.html'
})

export class ThemesCmp extends InputBaseCmp {

    departureDate = new Date();

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);

        // get custome theme
        $.get('src/styles/wijmo-custom-theme.css', function (css) {
            $('<style type="text/css"></style>')
                .html(css)
                .appendTo(".custometheme");
        });
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ThemesCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjGridModule, WjInputModule, AppPipesModule],
    declarations: [ThemesCmp],
})
export class ThemesModule {
}

