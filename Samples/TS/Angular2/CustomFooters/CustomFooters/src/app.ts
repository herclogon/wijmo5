///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, Input, Inject, enableProdMode, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjGridFilterModule } from 'wijmo/wijmo.angular2.grid.filter';
import { GroupFooters } from './components/GroupFootersDctv';
import { DataSvc } from './services/DataSvc';

'use strict';

// The application root component.
@Component({
    selector: 'app-cmp',
    templateUrl: 'src/app.html'
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

    // add a footer row to the grid
    initGrid(s: wijmo.grid.FlexGrid) {

        // create a GroupRow to show aggregates automatically
        var row = new wijmo.grid.GroupRow();

        // add the new GroupRow to the grid's 'columnFooters' panel
        s.columnFooters.rows.push(row);

        // add a sigma to the header to show that this is a summary row
        s.bottomLeftCells.setCellData(0, 0, '\u03A3');
    }
}

@NgModule({
    imports: [WjInputModule, WjGridModule, WjGridFilterModule, BrowserModule, FormsModule],
    declarations: [GroupFooters,AppCmp],
    providers: [DataSvc],
    bootstrap: [AppCmp]
})
export class AppModule {
}


enableProdMode();
// Bootstrap application with hash style navigation and global services.
platformBrowserDynamic().bootstrapModule(AppModule);