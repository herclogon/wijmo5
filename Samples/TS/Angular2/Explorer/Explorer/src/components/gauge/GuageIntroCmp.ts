'use strict';

//import { Component } from '@angular/core';

import { Component, EventEmitter, Inject, Input, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


// Radial gauge sample component.
@Component({
    selector: 'guage-intro-cmp',
    templateUrl: 'src/components/gauge/guageIntroCmp.html'
})

export class GuageIntroCmp {

    constructor() {
    }
}
const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: GuageIntroCmp }
]);
@NgModule({
    imports: [CommonModule, routing],
    declarations: [GuageIntroCmp],
})
export class GuageIntroModule {
}

