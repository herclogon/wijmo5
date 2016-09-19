///<reference path="../typings/globals/core-js/index.d.ts"/>

import { Component, EventEmitter, Input, Inject, enableProdMode, AfterViewInit, NgModule, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { WjCoreModule } from 'wijmo/wijmo.angular2.core';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { TabsModule } from './components/AppTab';
import { DataSvc } from './services/DataSvc';
import { CountryGroupHeaderTemplate } from './CellTemplates/CountryGroupHeaderTemplate';
import { StatGroupTemplate } from './CellTemplates/StatGroupTemplate';
import { StatHeaderTemplate } from './CellTemplates/StatHeaderTemplate';

'use strict';

// The application root component.
@Component({
    selector: 'app-cmp',
    templateUrl: 'src/app.html'
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
    customColumnFooter = true;
    customBottomLeft = true;
    
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

    @ViewChild('flex1') flex1: wijmo.grid.FlexGrid;
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
        if (this.flex1) {
            this.flex1.columnFooters.rows.push(new wijmo.grid.GroupRow());
        }
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

@NgModule({
    imports: [WjCoreModule, WjInputModule, WjGridModule, WjChartModule, BrowserModule, FormsModule, TabsModule],
    declarations: [CountryGroupHeaderTemplate, StatGroupTemplate, StatHeaderTemplate, AppCmp],
    entryComponents: [CountryGroupHeaderTemplate, StatGroupTemplate, StatHeaderTemplate],
    providers: [DataSvc],
    bootstrap: [AppCmp]
})
export class AppModule {
}


enableProdMode();
// Bootstrap application with hash style navigation and global services.
platformBrowserDynamic().bootstrapModule(AppModule);