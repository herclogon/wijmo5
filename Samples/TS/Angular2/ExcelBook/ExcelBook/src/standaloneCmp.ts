///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, Input, Inject, enableProdMode, ViewChild, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { WjGridSheetModule } from 'wijmo/wijmo.angular2.grid.sheet';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { DataSvc } from './services/DataSvc';

'use strict';

    // The Standalone application root component.
    @Component({
        selector: 'standalone-cmp',
        templateUrl: 'src/standaloneCmp.html'
    })

    export class StandaloneCmp {
        protected dataSvc: DataSvc;
        data: any[];
        sheets: any[] = [];
        selectedSheetIndex: number = 0;

        // references FlexSheet named 'flexSheet' in the view
        @ViewChild('flexSheet') flexSheet: wijmo.grid.sheet.FlexSheet;

        constructor( @Inject(DataSvc) dataSvc: DataSvc) {
            this.dataSvc = dataSvc;
            this.data = dataSvc.getData(50);
        }

        flexInitialized(flexSheet: wijmo.grid.sheet.FlexSheet) {
            var self = this;

            if (flexSheet) {
                flexSheet.deferUpdate(() => {
                    for (var i = 0; i < flexSheet.sheets.length; i++) {
                        flexSheet.sheets.selectedIndex = i;
                        switch (flexSheet.sheets[i].name) {
                            case 'Country':
                                flexSheet.selectedSheet.itemsSource = self.data;
                                self._initDataMapForBindingSheet(flexSheet);
                                break;
                        }
                        self.sheets.push(flexSheet.sheets[i].name);
                    }
                    flexSheet.selectedSheetIndex = 0;
                });

                flexSheet.loaded.addHandler(() => {
                    var sheetIndex = 0;
                    self.sheets.length = 0;
                    for (; sheetIndex < flexSheet.sheets.length; sheetIndex++) {
                        self.sheets.push(flexSheet.sheets[sheetIndex].name);
                    }
                    self.selectedSheetIndex = flexSheet.selectedSheetIndex;
                });
            }
        }

        // export 
        save() {
            if (this.flexSheet) {
                this.flexSheet.save('StandaloneFlexSheet.xlsx');
            }
        }

        // import
        load() {
            var fileEle = <HTMLInputElement>$('#importFile')[0];
            if (this.flexSheet && fileEle.files[0]) {
                this.flexSheet.load(fileEle.files[0]);
            }
        }

        //  Change the selected sheet for the flexsheet control
        changeSelectedSheet(e) {
            if (this.flexSheet) {
                this.flexSheet.selectedSheetIndex = +e.target.value;
            }
        }

        // initialize the dataMap for the bound sheet.
        private _initDataMapForBindingSheet(flexSheet) {
            var column;

            if (flexSheet) {
                column = flexSheet.columns.getColumn('countryId');
                if (column && !column.dataMap) {
                    column.dataMap = this._buildDataMap(this.dataSvc.countries);
                }
                column = flexSheet.columns.getColumn('productId');
                if (column && !column.dataMap) {
                    column.width = 100;
                    column.dataMap = this._buildDataMap(this.dataSvc.products);
                }
            }
        }

        // build a data map from a string array using the indices as keys
        private _buildDataMap(items) {
            var map = [];
            for (var i = 0; i < items.length; i++) {
                map.push({ key: i, value: items[i] });
            }
            return new wijmo.grid.DataMap(map, 'key', 'value');
        }
    }


    @NgModule({
        imports: [WjInputModule, WjGridSheetModule, BrowserModule, FormsModule],
        declarations: [StandaloneCmp],
        providers: [DataSvc],
        bootstrap: [StandaloneCmp]
    })
    export class AppModule {
    }


    enableProdMode();
    // Bootstrap application with hash style navigation and global services.
    platformBrowserDynamic().bootstrapModule(AppModule);