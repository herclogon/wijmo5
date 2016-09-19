'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FrmBaseCmp } from './FrmBaseCmp';

@Component({
    selector: 'frm-create-account-cmp',
    templateUrl: 'src/components/includes/frmCreateAccountCmp.html'
})
export class FrmCreateAccountCmp extends FrmBaseCmp {
    constructor() {
        super();
    }
}


const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: FrmCreateAccountCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [FrmCreateAccountCmp],
})
export class FrmCreateAccountModule {
}