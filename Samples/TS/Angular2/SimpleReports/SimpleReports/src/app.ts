///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, Inject, ViewChild, enableProdMode, Input, AfterViewInit, ElementRef, NgModule, NgZone } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, RouterModule } from '@angular/router';
import {routes, routing} from './app.routing';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { DataSvc } from './services/DataSvc';

'use strict';

// The application root component.
@Component({
    selector: 'app-cmp',
    templateUrl: 'src/app.html'
})

export class AppCmp implements AfterViewInit{
    reports: wijmo.collections.CollectionView;
    zoomLevels: wijmo.collections.CollectionView;
    viewsLoaded: number;
    private _dataSvc: DataSvc;
    @ViewChild('zoomEle') zoomEle: ElementRef;

    constructor( @Inject(Router) private router: Router, @Inject(DataSvc) dataSvc: DataSvc,
        @Inject(NgZone) private ngZone: NgZone) {

        this._dataSvc = dataSvc;
        dataSvc.initData();
        dataSvc.viewsLoadedFun = this._viewsLoadedChanged.bind(this);

        // report list
        this.reports = new wijmo.collections.CollectionView([
            { header: 'Alphabetical List of Products', name: 'alphabeticalListOfProducts' },
            { header: 'Customer Labels', name: 'customerLabels' },
            { header: 'Employees', name: 'employees' },
            { header: 'Product Catalog', name: 'productCatalog' },
            { header: 'Products by Category', name: 'productsByCategory' },
            { header: 'Sales by Category', name: 'salesByCategory' },
            { header: 'Sales Chart', name: 'salesChart' },
            { header: 'Employee Sales By Country', name: 'employeeSalesByCountry' }
        ], {
            currentChanged: (s, e) => {
                router.navigate([s.currentItem.name])
           }
        });

        // zoom levels
        this.zoomLevels = new wijmo.collections.CollectionView([
            { header: '25%', value: 0.25 },
            { header: '50%', value: 0.5 },
            { header: '75%', value: 0.75 },
            { header: '100%', value: 1 },
            { header: '125%', value: 1.25 }
        ], {
             currentChanged: (s, e)=> {
                 //var view = <HTMLElement>document.querySelector('.zoom');
                 var view = this.zoomEle.nativeElement;
                 if (view) {                     
                     view.style.zoom = s.currentItem.value;
                 }                 
              }
         });        
    }

    ngAfterViewInit() {
        this.zoomLevels.moveCurrentToPosition(2);
    }

    // commands
    print() {
        
        // create document
        var doc = new wijmo.PrintDocument({
            title: this.reports.currentItem.header
        });

        // add content to it
        //var view = <HTMLElement>document.querySelector('.zoom')
        var view = this.zoomEle.nativeElement;
        for (var i = 0; i < view.children.length; i++) {
            doc.append(view.children[i]);
        }
        // and print it
        doc.print();
        // work around the "More tasks executed then were scheduled." exception
        //this.ngZone.runOutsideAngular(() => doc.print());
    }

    _viewsLoadedChanged() {
        this.viewsLoaded = this._dataSvc.viewsLoaded;
    }

}

@NgModule({
    imports: [BrowserModule, routing, WjInputModule],
    declarations: [AppCmp],
    providers: [DataSvc],
    bootstrap: [AppCmp]
})
export class AppModule {
}


enableProdMode();
// Bootstrap application 
platformBrowserDynamic().bootstrapModule(AppModule);