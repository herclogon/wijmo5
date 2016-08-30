'use strict';

import { Component, Inject } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { FrmBaseCmp } from './FrmBaseCmp';

@Component({
    selector: 'frm-create-account-cmp',
    templateUrl: 'src/components/includes/frmCreateAccountCmp.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
})
export class FrmCreateAccountCmp extends FrmBaseCmp {
    constructor() {
        super();
    }
}


