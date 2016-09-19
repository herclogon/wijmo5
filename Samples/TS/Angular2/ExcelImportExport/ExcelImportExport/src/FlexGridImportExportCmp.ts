///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, Input, Inject, enableProdMode, ViewChild, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { TabsModule } from './components/AppTab';
import { DataSvc } from './services/DataSvc';

    'use strict';

    // The Explorer application root component.
    @Component({
        selector: 'flex-grid-import-export-cmp',
        templateUrl: 'src/flexGridImportExportCmp.html'
    })
    export class FlexGridImportExportCmp {
        protected dataSvc: DataSvc;
        data: any[];
        includeColumnHeader = true;

        constructor( @Inject(DataSvc) dataSvc: DataSvc) {
            this.dataSvc = dataSvc;
            this.data = dataSvc.getProductOrders(1500);
        }

        // references FlexSheet named 'flexSheetIntro' in the view
        @ViewChild('flexGrid') flexGrid: wijmo.grid.FlexGrid;

        exportExcel() {
            wijmo.grid.xlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: this.includeColumnHeader, includeCellStyles: false }, 'FlexGrid.xlsx');
        }

        importExcel() {
            var fileInput = <HTMLInputElement>document.getElementById('importFile');
            if (fileInput.files[0]) {
                wijmo.grid.xlsx.FlexGridXlsxConverter.load(this.flexGrid, fileInput.files[0], { includeColumnHeaders: this.includeColumnHeader });
            }
        }

        updateGroup(flex: wijmo.grid.FlexGrid) {
            var groupNames = ['Product', 'Country', 'Amount'],
                cv,
                propName,
                groupDesc;

            if (flex) {
                // get the collection view, start update
                cv = flex.collectionView;
                cv.beginUpdate();

                // clear existing groups
                cv.groupDescriptions.clear();

                // add new groups
                for (var i = 0; i < groupNames.length; i++) {
                    propName = groupNames[i].toLowerCase();
                    if (propName == 'amount') {

                        // group amounts in ranges
                        // (could use the mapping function to group countries into continents, 
                        // names into initials, etc)
                        groupDesc = new wijmo.collections.PropertyGroupDescription(propName, function (item, prop) {
                            var value = item[prop];
                            if (value > 1000) return 'Large Amounts';
                            if (value > 100) return 'Medium Amounts';
                            if (value > 0) return 'Small Amounts';
                            return 'Negative';
                        });
                        cv.groupDescriptions.push(groupDesc);
                    } else if (propName) {

                        // group other properties by their specific values
                        groupDesc = new wijmo.collections.PropertyGroupDescription(propName);
                        cv.groupDescriptions.push(groupDesc);
                    }
                }

                // done updating
                cv.endUpdate();
            }
        }

    }


    @NgModule({
        imports: [ WjGridModule, BrowserModule, FormsModule, TabsModule],
        declarations: [FlexGridImportExportCmp],
        providers: [DataSvc],
        bootstrap: [FlexGridImportExportCmp]
    })
    export class AppModule {
    }


    enableProdMode();
    // Bootstrap application with hash style navigation and global services.
    platformBrowserDynamic().bootstrapModule(AppModule);