'use strict';

import { Component, Inject } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import { FrmCreateAccountCmp } from '../includes/FrmCreateAccountCmp';
import { FrmEditAccountCmp } from '../includes/FrmEditAccountCmp';
import { FrmLogInCmp } from '../includes/FrmLogInCmp';

@Component({
    selector: 'popup-cmp',
    templateUrl: 'src/components/input/popupCmp.html',
    directives: [wjNg2Input.WjPopup, CORE_DIRECTIVES, FORM_DIRECTIVES,
        FrmCreateAccountCmp, FrmEditAccountCmp, FrmLogInCmp],
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


