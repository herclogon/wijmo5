///<reference path="../typings/globals/core-js/index.d.ts"/>

import { Component, EventEmitter, provide, ViewChild, Inject, enableProdMode, AfterViewInit} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import * as wjNg2Core from 'wijmo/wijmo.angular2.core';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';
import { AppTab, AppTabPane } from './components/AppTab';
import { DataSvc } from './services/DataSvc';
import { CountryGroupHeaderTemplate } from './CellTemplates/CountryGroupHeaderTemplate';
import { StatGroupTemplate } from './CellTemplates/StatGroupTemplate';
import { StatHeaderTemplate } from './CellTemplates/StatHeaderTemplate';


'use strict';

// The application root component.
@Component({
    selector: 'app-cmp',
    templateUrl: 'src/app.html',
    directives: [CORE_DIRECTIVES, AppTab, AppTabPane,
        wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate, 
        wjNg2Core.WjComponentLoader, wjNg2Core.WjHtmlLoader,
        wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartLegend, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis,
        wjNg2Chart.WjFlexPie, wjNg2Chart.WjFlexPieDataLabel,
        wjNg2Input.WjComboBox, wjNg2Input.WjInputNumber, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjListBox]
})

export class AppCmp implements AfterViewInit {

    countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');
    data1: wijmo.collections.CollectionView;
    data2: wijmo.collections.CollectionView;
    data3: wijmo.collections.CollectionView;

    customTopLeft = true;
    customRowHeader = true;
    customRowHeaderEdit = true;
    customCell = true;
    customCellEdit = true;
    customColumnHeader = true;
    customGroupHeader = true;
    customGroup = true;
    
    statisticsColumns = [
        {
            binding: 'downloads',
            header: 'Downloads',
            width: 230,
            align: 'center',
            format: 'N0',
            columnHeaderTemplate: StatHeaderTemplate,
            groupTemplate: StatGroupTemplate,
            reportType: 'Chart',
            isAvailable: true
        },
        {
            binding: 'sales',
            header: 'Sales',
            width: 230,
            align: 'center',
            format: 'N2',
            columnHeaderTemplate: StatHeaderTemplate,
            groupTemplate: StatGroupTemplate,
            reportType: 'Chart',
            isAvailable: false
        },
        {
            binding: 'expenses',
            header: 'Expenses',
            width: 230,
            align: 'center',
            format: 'N2',
            columnHeaderTemplate: StatHeaderTemplate,
            groupTemplate: StatGroupTemplate,
            reportType: 'Table',
            isAvailable: true
        }];

    uiCtx = {
        highlightDownloads: true,
        reportType: 'Chart'
    };

    countryGroupHeaderTemplate = CountryGroupHeaderTemplate;

    protected dataSvc: DataSvc;

    @ViewChild('flex2') flex2: wijmo.grid.FlexGrid;
    @ViewChild('flex3') flex3: wijmo.grid.FlexGrid;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.dataSvc = dataSvc;
        var data = dataSvc.getData();
        this.data1 = dataSvc.getCv(data);
        this.data2 = dataSvc.getCv(data);
        this.data3 = dataSvc.getCv(data);
    }

    ngAfterViewInit() {
        if (this.flex2) {
            this.flex2.collapseGroupsToLevel(0);
        }
        if (this.flex3) {
            this._dynaColumnsFlexInit(this.flex3);
        }
    }

    private _dynaColumnsFlexInit(flex: wijmo.grid.FlexGrid) {
        flex.columnHeaders.rows.defaultSize = 36;
        flex.cells.rows.defaultSize = 156;
        flex.collapseGroupsToLevel(0);
    }   
}

enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(AppCmp, [
    DataSvc
]);