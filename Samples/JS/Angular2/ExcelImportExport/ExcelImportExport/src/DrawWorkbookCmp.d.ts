/// <reference path="../typings/globals/core-js/index.d.ts" />
import { AfterViewInit } from '@angular/core';
export declare class DrawWorkBookCmp implements AfterViewInit {
    workbook: wijmo.xlsx.Workbook;
    sheetIndex: number;
    ngAfterViewInit(): void;
    drawSheet(sheetIndex: any): void;
    private _loadWorkbook();
}
