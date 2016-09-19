///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, Input, Inject, enableProdMode, AfterViewInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

'use strict';

// The Explorer application root component.
@Component({
    selector: 'draw-workbook-cmp',
    templateUrl: 'src/drawWorkbookCmp.html'
})
export class DrawWorkBookCmp implements AfterViewInit {
    workbook: wijmo.xlsx.Workbook;
    sheetIndex: number;

    ngAfterViewInit() {
        var self = this;
        document.getElementById('importFile').addEventListener('change', () => {
            self._loadWorkbook();
        });
    }

    drawSheet (sheetIndex) {
        var drawRoot = document.getElementById('tableHost');
        drawRoot.textContent = '';
        this.sheetIndex = sheetIndex;
        xlsxImport.drawWorksheet(this.workbook, sheetIndex, drawRoot, 200, 100);
    }

    private _loadWorkbook() {
        var reader = new FileReader(),
            fileData;

        reader.onload = (e) => {
            var workbook = new wijmo.xlsx.Workbook();
            workbook.load(reader.result);
            this.workbook = workbook;
            this.drawSheet(this.workbook.activeWorksheet || 0);
        };
        var file = (<HTMLInputElement>document.getElementById('importFile')).files[0];
        if (file) {
            reader.readAsDataURL(file);
        }
    }
}

@NgModule({
    imports: [ BrowserModule],
    declarations: [DrawWorkBookCmp],
    bootstrap: [DrawWorkBookCmp]
})
export class AppModule {
}


enableProdMode();
// Bootstrap application with hash style navigation and global services.
platformBrowserDynamic().bootstrapModule(AppModule);