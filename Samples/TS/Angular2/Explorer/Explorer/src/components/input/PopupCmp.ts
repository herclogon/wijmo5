'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { FrmCreateAccountCmp } from '../includes/FrmCreateAccountCmp';
import { FrmEditAccountCmp } from '../includes/FrmEditAccountCmp';
import { FrmLogInCmp } from '../includes/FrmLogInCmp';

@Component({
    selector: 'popup-cmp',
    templateUrl: 'src/components/input/popupCmp.html'
})
export class PopupCmp extends InputBaseCmp {
    modal = true;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }

    showDialog(dlg: wijmo.input.Popup) {
        if (dlg) {
            var inputs = <NodeListOf<HTMLInputElement>>dlg.hostElement.querySelectorAll('input');
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].type != 'checkbox') {
                    inputs[i].value = '';
                }
            }
            dlg.modal = this.modal;
            dlg.hideTrigger = dlg.modal ? wijmo.input.PopupTrigger.None : wijmo.input.PopupTrigger.Blur;
            dlg.show();
        }
    };

}
const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: PopupCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjInputModule],
    declarations: [PopupCmp, FrmCreateAccountCmp, FrmEditAccountCmp, FrmLogInCmp],
})
export class PopupModule {
}

