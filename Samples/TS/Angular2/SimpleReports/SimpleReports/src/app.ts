///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, provide, Input, Inject, ViewChild, enableProdMode, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import { DataSvc } from './services/DataSvc';
import { AlphabeticalListOfProductsCmp } from './components/AlphabeticalListOfProductsCmp';
import { CustomerLabelsCmp } from './components/CustomerLabelsCmp';
import { EmployeesCmp } from './components/EmployeesCmp';
import { ProductCatalogCmp } from './components/ProductCatalogCmp';
import { ProductsByCategoryCmp } from './components/ProductsByCategoryCmp';
import { SalesByCategoryCmp } from './components/SalesByCategoryCmp';
import { SalesChartCmp } from './components/SalesChartCmp';
import { EmployeeSalesByCountryCmp } from './components/EmployeeSalesByCountryCmp';

'use strict';

// The application root component.
@Component({
    selector: 'app-cmp',
    templateUrl: 'src/app.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, wjNg2Input.WjComboBox]
})

@RouteConfig([
   // { path: '/', redirectTo: ['AlphabeticalListOfProducts'] },
    { path: '/alphabeticalListOfProducts', component: AlphabeticalListOfProductsCmp, name: 'AalphabeticalListOfProducts', useAsDefault: true },
    { path: '/customerLabels', component: CustomerLabelsCmp, name: 'CustomerLabels' },
    { path: '/employees', component: EmployeesCmp, name: 'Employees' },
    { path: '/productCatalog', component: ProductCatalogCmp, name: 'ProductCatalog' },
    { path: '/productsByCategory', component: ProductsByCategoryCmp, name: 'ProductsByCategory' },
    { path: '/salesByCategory', component: SalesByCategoryCmp, name: 'SalesByCategory' },
    { path: '/salesChart', component: SalesChartCmp, name: 'SalesChart' },
    { path: '/employeeSalesByCountry', component: EmployeeSalesByCountryCmp, name: 'EmployeeSalesByCountry' },
])

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
            { header: 'Alphabetical List of Products', name: 'AalphabeticalListOfProducts' },
            { header: 'Customer Labels', name: 'CustomerLabels' },
            { header: 'Employees', name: 'Employees' },
            { header: 'Product Catalog', name: 'ProductCatalog' },
            { header: 'Products by Category', name: 'ProductsByCategory' },
            { header: 'Sales by Category', name: 'SalesByCategory' },
            { header: 'Sales Chart', name: 'SalesChart' },
            { header: 'Employee Sales By Country', name: 'EmployeeSalesByCountry' }
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

enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(AppCmp, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    DataSvc
]);