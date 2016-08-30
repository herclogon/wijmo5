/// <reference path="../typings/globals/core-js/index.d.ts" />
import { AfterViewInit } from '@angular/core';
import { DataSvc } from './services/DataSvc';
export declare class AppCmp implements AfterViewInit {
    protected dataSvc: DataSvc;
    orders: any[];
    groupedOrders: wijmo.collections.CollectionView;
    pagedOrders: wijmo.collections.CollectionView;
    addNewOrders: wijmo.collections.CollectionView;
    layoutDefs: wijmo.collections.CollectionView;
    ldOneLine: any[];
    ldTwoLines: any[];
    ldThreeLines: any[];
    frozenGrid: wijmo.grid.FlexGrid;
    filterGrid: wijmo.grid.FlexGrid;
    constructor(dataSvc: DataSvc);
    toggleFreeze(rows: number, cols: number): void;
    ngAfterViewInit(): void;
}
