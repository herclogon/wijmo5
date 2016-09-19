'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FrmBaseCmp } from './FrmBaseCmp';

@Component({
    selector: 'frm-edit-account-cmp',
    templateUrl: 'src/components/includes/frmEditAccountCmp.html'
})
export class FrmEditAccountCmp extends FrmBaseCmp {
    constructor() {
        super();
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: FrmEditAccountCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [FrmEditAccountCmp],
})
export class FrmEditAccountModule {
}
