/// <reference path="../typings/globals/core-js/index.d.ts" />
import { AfterViewInit } from '@angular/core';
import { DataSvc } from './services/DataSvc';
export declare class AppCmp implements AfterViewInit {
    data: any[];
    flex: wijmo.grid.FlexGrid;
    constructor(dataSvc: DataSvc);
    ngAfterViewInit(): void;
    private _initializeFlyout(s);
}
export declare class AppModule {
}
