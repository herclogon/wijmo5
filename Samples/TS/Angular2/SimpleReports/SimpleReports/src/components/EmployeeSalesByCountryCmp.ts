'use strict';

import { Component, EventEmitter, Inject, AfterViewInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DataSvc } from '../services/DataSvc';

@Component({
    selector: 'employee-sales-by-country-cmp',
    templateUrl: 'src/components/employeeSalesByCountryCmp.html',
    directives: [CORE_DIRECTIVES]
})

export class EmployeeSalesByCountryCmp {

    invoices: wijmo.odata.ODataCollectionView;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.invoices = dataSvc.invoices;
    }

}


