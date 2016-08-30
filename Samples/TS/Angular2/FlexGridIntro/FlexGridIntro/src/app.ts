///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, provide, Input, Inject, enableProdMode } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import { AppTab, AppTabPane } from './components/AppTab';
import { DataSvc } from './services/DataSvc';

'use strict';

// The application root component.
@Component({
    selector: 'app-cmp',
    templateUrl: 'src/app.html',
    directives: [CORE_DIRECTIVES, AppTab, AppTabPane,
        wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate, 
        wjNg2Input.WjInputNumber, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem]
})

export class AppCmp {
    protected dataSvc: DataSvc;
    data: wijmo.collections.CollectionView;
    cvGroup: wijmo.collections.CollectionView;
    cvFilter: wijmo.collections.CollectionView;
    cvPaging: wijmo.collections.CollectionView;
    cvMaster: wijmo.collections.CollectionView;
    selectionMode = 'CellRange';
    treeData: [{}];

    //private
    private _groupBy = '';
    private _filter = '';
    private _toFilter: any;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.dataSvc = dataSvc;
        this.data = new wijmo.collections.CollectionView(this.dataSvc.getData(100));
        this.cvGroup = new wijmo.collections.CollectionView(this.dataSvc.getData(100));
        this.cvFilter = new wijmo.collections.CollectionView(this.dataSvc.getData(100));
        this.cvFilter.filter = this._filterFunction.bind(this);
        this.cvMaster = new wijmo.collections.CollectionView(this.dataSvc.getData(100));
        this.cvPaging = new wijmo.collections.CollectionView(this.dataSvc.getData(100));
        this.cvPaging.pageSize = 10;
        this.treeData = this.dataSvc.getTreeData();
    }

    get groupBy(): string {
        return this._groupBy;
    }
    set groupBy(value: string) {
        if (this._groupBy != value) {
            this._groupBy = value;
            this._applyGroupBy();
        }
    }

    get filter(): string {
        return this._filter;
    }
    set filter(value: string) {
        if (this._filter != value) {
            this._filter = value;
            if (this._toFilter) {
                clearTimeout(this._toFilter);
            }
            var self = this;
            this._toFilter = setTimeout(function () {
                self.cvFilter.refresh();
            }, 500);
        }
    }

    toggleFreeze(flex: wijmo.grid.FlexGrid) {
        if (flex) {
            var frozenCount = flex.frozenRows == 0 ? 2 : 0;
            flex.frozenRows = frozenCount;
            flex.frozenColumns = frozenCount;
        }
    }

    getAmountColor(amount: number) {
        if (amount < 500) return 'darkred';
        if (amount < 2500) return 'black';
        return 'darkgreen';
    }

    sortedColumn(flex: wijmo.grid.FlexGrid) {
        if (!flex) {
            return;
        }
        var view = flex.collectionView;
        if (view && flex.childItemsPath) {
            for (var i = 0; i < view.items.length; i++) {
                this._sortItem(view.items[i], <wijmo.collections.CollectionView>view, flex.childItemsPath);
            }
            view.refresh();
        }
    }

    private _applyGroupBy() {
        var cv = this.cvGroup;
        cv.beginUpdate();
        cv.groupDescriptions.clear();
        if (this.groupBy) {
            var groupNames = this.groupBy.split(',');
            for (var i = 0; i < groupNames.length; i++) {
                var groupName = groupNames[i];
                if (groupName == 'date') { // group dates by year
                    var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName, function (item, prop) {
                        return item.date.getFullYear();
                    });
                    cv.groupDescriptions.push(groupDesc);
                } else if (groupName == 'amount') { // group amounts in ranges
                    var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName, function (item, prop) {
                        return item.amount >= 5000 ? '> 5,000' : item.amount >= 500 ? '500 to 5,000' : '< 500';
                    });
                    cv.groupDescriptions.push(groupDesc);
                } else { // group everything else by value
                    var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName);
                    cv.groupDescriptions.push(groupDesc);
                }
            }
            cv.refresh();
        }
        cv.endUpdate();
    }

    private _filterFunction(item: any) {
        if (this._filter) {
            return item.country.toLowerCase().indexOf(this._filter.toLowerCase()) > -1;
        }
        return true;
    }

    private _sortItem(item: any, view: wijmo.collections.CollectionView, childItemsPath: any) {
        var children = item[childItemsPath];
        if (children && wijmo.isArray(children)) {
            children.sort(view._compareItems());
            for (var i = 0; i < children.length; i++) {
                this._sortItem(children[i], view, childItemsPath);
            }
        }
    }
}

enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(AppCmp, [
    DataSvc
]);