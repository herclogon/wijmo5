///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, provide, Input, Inject, enableProdMode } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2GridFilter from 'wijmo/wijmo.angular2.grid.filter';
import { DataSvc } from './services/DataSvc';
import { GridFooterFor } from './components/GridFooterForDctv';
import { GroupFooters } from './components/GroupFootersDctv';

'use strict';

// The application root component.
@Component({
    selector: 'app-cmp',
    templateUrl: 'src/app.html',
    directives: [CORE_DIRECTIVES, wjNg2Input.WjComboBox, GridFooterFor, GroupFooters,        
        wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2GridFilter.WjFlexGridFilter]
})

export class AppCmp {
    protected dataSvc: DataSvc;
    data: wijmo.collections.CollectionView;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.dataSvc = dataSvc;
        this.data = new wijmo.collections.CollectionView(this.dataSvc.getData(10));
    }

    groupBy(groupBy: string) {
        this.data.groupDescriptions.clear();
        var groups = groupBy ? groupBy.split(',') : [];
        for (var i = 0; i < groups.length; i++) {
            this.data.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription(groups[i]));
        }
    }
}

enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(AppCmp, [
    DataSvc
]);