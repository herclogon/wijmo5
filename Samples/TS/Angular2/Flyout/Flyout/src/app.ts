///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, Input, Inject, enableProdMode, AfterViewInit, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { DataSvc } from './services/DataSvc';

'use strict';

// The application root component.
@Component({
    selector: 'app-cmp',
    templateUrl: 'src/app.html'
})

export class AppCmp implements AfterViewInit{
    data: any[];
    @ViewChild('flex') flex: wijmo.grid.FlexGrid;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.data = dataSvc.getData();
    }

    ngAfterViewInit() {
        this._initializeFlyout(this.flex);
    }

    private _initializeFlyout(s: wijmo.grid.FlexGrid) {

        // create the FlexGridFlyout
        var f = new wijmo.grid.FlexGridFlyout(s);

        // add some content to the flyout element
        f.flyout.innerHTML =
            '<span id="fo-size"    title="Auto Size Column" class="glyphicon glyphicon-resize-horizontal"></span>' +
            '<span id="fo-sorta"   title="Sort Ascending"   class="glyphicon glyphicon glyphicon-sort-by-attributes"></span>' +
            '<span id="fo-sortd"   title="Sort Descending"  class="glyphicon glyphicon glyphicon-sort-by-attributes-alt"></span>' +
            '<span id="fo-refresh" title="Refresh Data"     class="glyphicon glyphicon glyphicon-refresh"></span>' +
            '<span id="fo-comment" title="Show Comment"     class="glyphicon glyphicon glyphicon-comment"></span>';

        // handle clicks on the flyout element
        s.addEventListener(f.flyout, 'click', function (e) {
            switch (e.target.id) {
                case 'fo-size':
                    s.autoSizeColumn(f.column.index);
                    break;
                case 'fo-sorta':
                case 'fo-sortd':
                    var sd = s.collectionView.sortDescriptions;
                    sd.clear();
                    sd.push(new wijmo.collections.SortDescription(f.column.binding, e.target.id == 'fo-sorta'));
                    break;
                case 'fo-refresh':
                    s.collectionView.refresh();
                    break;
                case 'fo-comment':
                    alert('Showing detail for column ' + f.column.header + '...');
                    break;
            }
            wijmo.hidePopup(f.flyout);
        })
    };
    
}

@NgModule({
    imports: [WjGridModule, BrowserModule],
    declarations: [AppCmp],
    providers: [DataSvc],
    bootstrap: [AppCmp]
})
export class AppModule {
}


enableProdMode();
// Bootstrap application with hash style navigation and global services.
platformBrowserDynamic().bootstrapModule(AppModule);