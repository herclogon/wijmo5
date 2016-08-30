/// <reference path="../typings/globals/core-js/index.d.ts" />
import { AfterViewInit } from '@angular/core';
import { DataSvc } from './services/DataSvc';
import { CountryGroupHeaderTemplate } from './CellTemplates/CountryGroupHeaderTemplate';
import { StatGroupTemplate } from './CellTemplates/StatGroupTemplate';
import { StatHeaderTemplate } from './CellTemplates/StatHeaderTemplate';
export declare class AppCmp implements AfterViewInit {
    countries: string[];
    data1: wijmo.collections.CollectionView;
    data2: wijmo.collections.CollectionView;
    data3: wijmo.collections.CollectionView;
    customTopLeft: boolean;
    customRowHeader: boolean;
    customRowHeaderEdit: boolean;
    customCell: boolean;
    customCellEdit: boolean;
    customColumnHeader: boolean;
    customGroupHeader: boolean;
    customGroup: boolean;
    statisticsColumns: {
        binding: string;
        header: string;
        width: number;
        align: string;
        format: string;
        columnHeaderTemplate: typeof StatHeaderTemplate;
        groupTemplate: typeof StatGroupTemplate;
        reportType: string;
        isAvailable: boolean;
    }[];
    uiCtx: {
        highlightDownloads: boolean;
        reportType: string;
    };
    countryGroupHeaderTemplate: typeof CountryGroupHeaderTemplate;
    protected dataSvc: DataSvc;
    flex2: wijmo.grid.FlexGrid;
    flex3: wijmo.grid.FlexGrid;
    constructor(dataSvc: DataSvc);
    ngAfterViewInit(): void;
    private _dynaColumnsFlexInit(flex);
}
