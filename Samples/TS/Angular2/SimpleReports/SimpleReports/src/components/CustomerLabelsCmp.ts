'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DataSvc } from '../services/DataSvc';

@Component({
    selector: 'customer-labels-cmp',
    templateUrl: 'src/components/customerLabelsCmp.html',
    directives: [CORE_DIRECTIVES]
})

export class CustomerLabelsCmp {

    customers: wijmo.odata.ODataCollectionView;
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.customers = dataSvc.customers;
    }
}


