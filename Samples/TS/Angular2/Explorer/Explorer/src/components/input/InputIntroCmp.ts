'use strict';

import { Component, EventEmitter, NgModule} from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Intro sample component.
@Component({
    selector: 'input-intro-cmp',
    templateUrl: 'src/components/input/inputIntroCmp.html'
})

export class InputIntroCmp {
    constructor() {
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: InputIntroCmp }
]);

@NgModule({
    imports: [CommonModule, routing],
    declarations: [InputIntroCmp],
})
export class InputIntroModule {
}