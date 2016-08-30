///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, Inject, enableProdMode } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { DataSvc } from './services/DataSvc';

    'use strict';

    // The Explorer application root component.
    @Component({
        selector: 'expence-report-export-cmp',
        templateUrl: 'src/expenseReportExportCmp.html',
        directives: [CORE_DIRECTIVES]
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

enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(ExpenseReportExportCmp, [
    DataSvc
]);