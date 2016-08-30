///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, Inject, enableProdMode, ViewChild } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import { DataSvc } from './services/DataSvc';

'use strict';

// The application root component.
@Component({
    selector: 'app-cmp',
    templateUrl: 'src/app.html',
    directives: [CORE_DIRECTIVES, wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Input.WjListBox]
})

export class AppCmp {
    data: wijmo.collections.CollectionView;
    columnsAvailable: wijmo.collections.CollectionView;
    columns: wijmo.collections.CollectionView;

    @ViewChild('flex') flex: wijmo.grid.FlexGrid;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        var data = dataSvc.getData(10000);
        this.data = new wijmo.collections.CollectionView(data);

        // build list of columns available
        var item = data[0];
        var fields = new wijmo.collections.ObservableArray();
        for (var key in item) {
            fields.push(key);
        }
        this.columnsAvailable = new wijmo.collections.CollectionView(fields);

        this.columns = new wijmo.collections.CollectionView();
        for (var i = 0; i < 3; i++) {
            this.columnsAvailable.moveCurrentToFirst();
            this.addColumn();
        }
    }


    // move item from columnsAvailable to columns
     addColumn() {
        var item = this.columnsAvailable.currentItem,
            index = this.columns.currentPosition;
        if (item) {
            this.columnsAvailable.remove(item);
            this.columns.sourceCollection.splice(Math.max(0, index), 0, item);
            this.columns.moveCurrentTo(item);
        }
}

    // move item from columns to columnsAvailable
     removeColumn() {
        var item = this.columns.currentItem,
            index = this.columnsAvailable.currentPosition;
        if (item) {
            this.columns.remove(item);
            this.columnsAvailable.sourceCollection.splice(Math.max(0, index), 0, item);
            this.columnsAvailable.moveCurrentTo(item);
        }
    }

    // move a column within the columns collection
     moveColumn(offset) {
        var item = this.columns.currentItem;
        if (item) {
            var arr = this.columns.sourceCollection,
                index = arr.indexOf(item),
                newIndex = index + offset;
            if (index > -1 && newIndex > -1) {
                arr.splice(index, 1);
                arr.splice(newIndex, 0, item);
                this.columns.moveCurrentTo(item);
            }
        }
     }

     // update columns array if the user moves a column
     // (the ng-repeat directive cannot do this)
     draggedColumn(s: wijmo.grid.FlexGrid) {
         var columns = new wijmo.collections.ObservableArray();
         for (var i = 0; i < s.columns.length; i++) {
             columns.push(s.columns[i].binding);
         }
         this.columns.sourceCollection = columns;
     }
     
}

enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(AppCmp, [
    DataSvc
]);