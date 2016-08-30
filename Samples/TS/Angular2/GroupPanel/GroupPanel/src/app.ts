///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, provide, Input, Inject, ViewChild, enableProdMode } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2GridGroupPanel from 'wijmo/wijmo.angular2.grid.grouppanel';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import { DataSvc } from './services/DataSvc';

'use strict';

// The application root component.
@Component({
    selector: 'app-cmp',
    templateUrl: 'src/app.html',
    directives: [CORE_DIRECTIVES, 
        wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate, 
        wjNg2GridGroupPanel.WjGroupPanel]
})

export class AppCmp {    
    data: wijmo.collections.CollectionView;
    protected dataSvc: DataSvc;

    @ViewChild('flex') flex: wijmo.grid.FlexGrid;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.dataSvc = dataSvc;
        this.data = new wijmo.collections.CollectionView(this.dataSvc.getData());
        this.data.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('name'));
        this.data.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('checked'));
    }
}

enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(AppCmp, [
    DataSvc
]);