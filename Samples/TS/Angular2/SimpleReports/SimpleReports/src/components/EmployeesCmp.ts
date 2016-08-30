'use strict';

import { Component, EventEmitter, Inject, AfterViewInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DataSvc } from '../services/DataSvc';

@Component({
    selector: 'employees-cmp',
    templateUrl: 'src/components/employeesCmp.html',
    directives: [CORE_DIRECTIVES]
})

export class EmployeesCmp {

    employees: wijmo.odata.ODataCollectionView;
    images = [
    'burns/512448cb3.gif',
    'agnes/0c8adf467.png',
    'skinner/58d3283e7.png',
    'bob/5d7451cde.png',
    'flanders/db01ccc49.jpg',
    'lovejoy/5ec99ea6a.jpg',
    'apu/41fa40f90.png',
    'barney/f3b7b1de2.png',
    'luann/81d97cbd4.png',
    'troy/d5aa8e02c.jpg',
    'edna/2bade433d.jpg',
    'chalmers/89d0c32c6.jpg',
    'frink/7833a6b34.jpg',
    'hibbert/f68f3f3c9.gif',
    'sea/0e8a8aa69.gif',
    'stu/a9c5e72a7.png',
    'nick/3b85ac6a0.jpg',
    'duff/e3246663c.jpg',
    'sarc/c61411e1a.png'
];
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.employees = dataSvc.employees;
    }


}


