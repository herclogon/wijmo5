///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, Input, Inject, enableProdMode, AfterViewInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { DataSvc } from './services/DataSvc';

    'use strict';

    // The Explorer application root component.
    @Component({
        selector: 'expence-report-export-cmp',
        templateUrl: 'src/expenseReportExportCmp.html'
    })
    export class ExpenseReportExportCmp {
        protected dataSvc: DataSvc;

        constructor( @Inject(DataSvc) dataSvc: DataSvc) {
            this.dataSvc = dataSvc;
        }

        saveExpenses() {
            var workbook = <wijmo.xlsx.Workbook>XlsxExport.exportExpenseReport(this.dataSvc.getEmployeesWithExpences());
            //var xlsx = wijmo.xlsx.XlsxConverter.exportToFile(workbook, 'ExpenseReport.xlsx');
            workbook.save('ExpenseReport.xlsx');
        }
    }


    @NgModule({
        imports: [BrowserModule],
        declarations: [ExpenseReportExportCmp],
        providers: [DataSvc],
        bootstrap: [ExpenseReportExportCmp]
    })
    export class AppModule {
    }


    enableProdMode();
    // Bootstrap application with hash style navigation and global services.
    platformBrowserDynamic().bootstrapModule(AppModule);