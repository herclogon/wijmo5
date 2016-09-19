'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjGridDetailModule } from 'wijmo/wijmo.angular2.grid.detail';


// FlexGrid row details component.
@Component({
    selector: 'grid-row-details-cmp',
    templateUrl: 'src/components/grid/gridRowDetailsCmp.html'
})

export class GridRowDetailsCmp extends GridBaseCmp {
    private _productsCache = {};
    detailMode = wijmo.grid.detail.DetailVisibilityMode[wijmo.grid.detail.DetailVisibilityMode.ExpandSingle];
    categories = new wijmo.collections.CollectionView();
    products = new wijmo.collections.CollectionView();
    // references FlexGrid named 'flex1' in the view
    @ViewChild('flex1') flex1: wijmo.grid.FlexGrid;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
        this.getData(this.categories, 'Categories');
        this.getData(this.products, 'Products');
    }

    ngAfterViewInit() {
        if (this.flex1) {
            this._initDetailProvider(this.flex1);
        }
    }

    private _initDetailProvider(grid: wijmo.grid.FlexGrid) {
        var dp = new wijmo.grid.detail.FlexGridDetailProvider(grid);
        dp.maxHeight = 250;

        // create detail cells for a given row
        dp.createDetailCell = (row) => {
            var cell = document.createElement('div');
            grid.hostElement.appendChild(cell);
            var detailGrid = new wijmo.grid.FlexGrid(cell, {
                headersVisibility: wijmo.grid.HeadersVisibility.Column,
                autoGenerateColumns: false,
                itemsSource: this.getProducts(row.dataItem.CategoryID),
                columns: [
                    { header: 'ID', binding: 'ProductID' },
                    { header: 'Name', binding: 'ProductName' },
                    { header: 'Qty/Unit', binding: 'QuantityPerUnit' },
                    { header: 'Unit Price', binding: 'UnitPrice' },
                    { header: 'Discontinued', binding: 'Discontinued' }
                ]
            });
            cell.parentElement.removeChild(cell);
            return cell;
        };

        // remove details from items with odd CategoryID
        dp.rowHasDetail = function (row) {
            return row.dataItem.CategoryID % 2 == 0;
        };
    }

    // function to fill a CollectionView with data from an OData source
    getData(view: wijmo.collections.CollectionView, url: string) {

        // build request url
        var serviceBase = 'http://services.odata.org/Northwind/Northwind.svc/';
        url = serviceBase + url;
        url += (url.indexOf('?') < 0) ? '?' : '&' + '$format=json';

        // TBD: achieve this via Ng2 http
        // submit request
        //this._http.get(url).subscribe((res: Response) => {
        //this._http.get(url).map((res: Response) => res.json()).subscribe(something => {
        //this._http.get(url).subscribe(something => {
        $.getJSON(url, null, (data) => {

            // handle this batch
            var items = data.value;
            for (var i = 0; i < items.length; i++) {
                view.sourceCollection.push(items[i]);
            }

            // and go fetch more...
            var next = <string>data['odata.nextLink'];
            if (next) {
                this.getData(view, next);
            }

        });
    }

    getProducts(categoryID: any) {
        var view = this._productsCache[categoryID];
        if (!view) {
            view = new wijmo.collections.CollectionView(this.products.sourceCollection);
            view.filter = function (item) {
                return item.CategoryID == categoryID;
            }
            this._productsCache[categoryID] = view;
        }
        return view;
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: GridRowDetailsCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, HttpModule, WjGridModule, WjInputModule, WjGridDetailModule],
    declarations: [GridRowDetailsCmp],
})
export class GridRowDetailsModule {
}

