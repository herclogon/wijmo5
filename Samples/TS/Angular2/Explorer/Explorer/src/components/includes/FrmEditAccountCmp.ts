'use strict';

import { Component, Inject } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { FrmBaseCmp } from './FrmBaseCmp';

@Component({
    selector: 'frm-edit-account-cmp',
    templateUrl: 'src/components/includes/frmEditAccountCmp.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
})
export class FrmEditAccountCmp extends FrmBaseCmp {
    constructor() {
        super();
    }
}


