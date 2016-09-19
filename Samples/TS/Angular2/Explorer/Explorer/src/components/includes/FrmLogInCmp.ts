'use strict';

import { Component, EventEmitter, Inject, Output, Optional, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FrmBaseCmp } from './FrmBaseCmp';

@Component({
    selector: 'frm-log-in-cmp',
    templateUrl: 'src/components/includes/frmLogInCmp.html'
})
export class FrmLogInCmp extends FrmBaseCmp {
    @Output() createAccount = new EventEmitter();

    constructor( @Inject(wijmo.input.Popup) @Optional() private popup: wijmo.input.Popup) {
        super();
    }

    hide(message: string) {
        if (this.popup) {
            this.popup.hide();
        }
        if (message) {
            alert(message);
        }
    }

    onCreateAccount() {
        this.createAccount.next(null);
    }

}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: FrmLogInCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [FrmLogInCmp],
})
export class FrmLogInModule {
}
