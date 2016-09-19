/// <reference path="../typings/globals/core-js/index.d.ts" />
import { AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataSvc } from './services/DataSvc';
export declare class AppCmp implements AfterViewInit {
    private _dataSvc;
    private _http;
    private _productsCache;
    detailMode: string;
    categories: wijmo.collections.CollectionView;
    products: wijmo.collections.CollectionView;
    flex1: wijmo.grid.FlexGrid;
    constructor(_dataSvc: DataSvc, _http: Http);
    ngAfterViewInit(): void;
    private _initDetailProvider(grid);
    getData(view: wijmo.collections.CollectionView, url: string): void;
    getProducts(categoryID: any): any;
}
export declare class AppModule {
}
