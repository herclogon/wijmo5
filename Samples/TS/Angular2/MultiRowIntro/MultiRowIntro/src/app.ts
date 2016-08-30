///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, provide, Input, Inject, enableProdMode, ViewChild, AfterViewInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import * as wjMultiRow from 'wijmo/wijmo.angular2.grid.multirow';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import { AppTab, AppTabPane } from './components/AppTab';
import { DataSvc } from './services/DataSvc';

    'use strict';

    // The Explorer application root component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html',
        directives: [CORE_DIRECTIVES, AppTab, AppTabPane,
            wjMultiRow.WjMultiRow, wjNg2Input.WjComboBox]
    })


    export class AppCmp implements AfterViewInit{
        // generate some random data
        protected dataSvc: DataSvc;
        orders: any[];
        groupedOrders: wijmo.collections.CollectionView;
        pagedOrders: wijmo.collections.CollectionView;
        addNewOrders: wijmo.collections.CollectionView;
        layoutDefs: wijmo.collections.CollectionView;
        ldOneLine: any[];
        ldTwoLines: any[];
        ldThreeLines: any[];

        @ViewChild('frozenGrid') frozenGrid: wijmo.grid.FlexGrid;
        @ViewChild('filterGrid') filterGrid: wijmo.grid.FlexGrid;

        constructor( @Inject(DataSvc) dataSvc: DataSvc) {
            this.dataSvc = dataSvc;
            this.orders = dataSvc.orders;
            this.groupedOrders = dataSvc.groupedOrders;
            this.pagedOrders = dataSvc.pagedOrders;

            // create 'addNewOrders' collection, start with last item selected
            this.addNewOrders = dataSvc.addNewOrders;
            this.addNewOrders.moveCurrentToLast();


            // sample layout definitions
            this.ldOneLine = [
                { cells: [{ binding: 'id', header: 'ID', cssClass: 'id' }] },
                { cells: [{ binding: 'date', header: 'Ordered' }] },
                { cells: [{ binding: 'shippedDate', header: 'Shipped' }] },
                { cells: [{ binding: 'amount', header: 'Amount', format: 'c', cssClass: 'amount' }] },
                { cells: [{ binding: 'customer.name', header: 'Customer' }] },
                { cells: [{ binding: 'customer.address', header: 'Address' }] },
                { cells: [{ binding: 'customer.city', header: 'City', dataMap: dataSvc.cityMap }] },
                { cells: [{ binding: 'customer.state', header: 'State', width: 45 }] },
                { cells: [{ binding: 'customer.zip', header: 'Zip' }] },
                { cells: [{ binding: 'customer.email', header: 'Customer Email', cssClass: 'email' }] },
                { cells: [{ binding: 'customer.phone', header: 'Customer Phone' }] },
                { cells: [{ binding: 'shipper.name', header: 'Shipper' }] },
                { cells: [{ binding: 'shipper.email', header: 'Shipper Email', cssClass: 'email' }] },
                { cells: [{ binding: 'shipper.phone', header: 'Shipper Phone' }] },
                { cells: [{ binding: 'shipper.express', header: 'Express' }] }
            ];
            this.ldTwoLines = [
                {
                    header: 'Order', colspan: 2, cells: [
                        { binding: 'id', header: 'ID', cssClass: 'id' },
                        { binding: 'date', header: 'Ordered' },
                        { binding: 'amount', header: 'Amount', format: 'c', cssClass: 'amount' },
                        { binding: 'shippedDate', header: 'Shipped' }
                    ]
                },
                {
                    header: 'Customer', colspan: 3, cells: [
                        { binding: 'customer.name', header: 'Name' },
                        { binding: 'customer.email', header: 'EMail', colspan: 2, cssClass: 'email' },
                        { binding: 'customer.address', header: 'Address' },
                        { binding: 'customer.city', header: 'City', dataMap: dataSvc.cityMap },
                        { binding: 'customer.state', header: 'State', width: 45 }
                    ]
                },
                {
                    header: 'Shipper', cells: [
                        { binding: 'shipper.name', header: 'Shipper', colspan: 2 },
                        { binding: 'shipper.email', header: 'EMail', cssClass: 'email' },
                        { binding: 'shipper.express', header: 'Express' }
                    ]
                }
            ];
            this.ldThreeLines = [
                {
                    header: 'Order', colspan: 2, cells: [
                        { binding: 'id', header: 'ID', colspan: 2, cssClass: 'id' },
                        { binding: 'amount', header: 'Amount', format: 'c', colspan: 2, cssClass: 'amount' },
                        { binding: 'date', header: 'Ordered' },
                        { binding: 'shippedDate', header: 'Shipped' }
                    ]
                },
                {
                    header: 'Customer', colspan: 3, cells: [
                        { binding: 'customer.name', header: 'Name' },
                        { binding: 'customer.email', header: 'EMail', colspan: 2, cssClass: 'email' },
                        { binding: 'customer.address', header: 'Address', colspan: 2 },
                        { binding: 'customer.phone', header: 'Phone' },
                        { binding: 'customer.city', header: 'City', dataMap: dataSvc.cityMap },
                        { binding: 'customer.state', header: 'State', width: 45 },
                        { binding: 'customer.zip', header: 'Zip' },
                    ]
                },
                {
                    header: 'Shipper', cells: [
                        { binding: 'shipper.name', header: 'Shipper' },
                        { binding: 'shipper.email', header: 'EMail', cssClass: 'email' },
                        { binding: 'shipper.express', header: 'Express' }
                    ]
                }
            ]
            this.layoutDefs = new wijmo.collections.CollectionView([
                {
                    name: 'Traditional',
                    description: 'Traditional grid view, with one row per record. The user must scroll horizontally to see the whole record.',
                    def: this.ldOneLine
                },
                {
                    name: 'Compact',
                    description: 'This view uses two rows per record. The layout is divided into three groups: order, customer, and shipper',
                    def: this.ldTwoLines
                },
                {
                    name: 'Detailed',
                    description: 'This view uses three rows per record. The layout is divided into three groups: order, customer, and shipper',
                    def: this.ldThreeLines
                }
            ]);

        }

        // toggle frozen rows/columns
        toggleFreeze(rows: number, cols: number) {
            var flex = this.frozenGrid;
            if (flex) {
                flex.frozenColumns = flex.frozenColumns ? 0 : cols;
                flex.frozenRows = flex.frozenRows ? 0 : rows;
            }
        }

       ngAfterViewInit() {
           var filter = new wijmo.grid.filter.FlexGridFilter(this.filterGrid);
       }
}


enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(AppCmp, [
DataSvc
]);