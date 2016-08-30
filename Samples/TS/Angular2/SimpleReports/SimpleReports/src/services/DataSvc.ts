'use strict';

import { Injectable } from '@angular/core';

// Common data service
@Injectable()
export class DataSvc {
    products: wijmo.odata.ODataCollectionView;
    categories: wijmo.odata.ODataCollectionView;
    employees: wijmo.odata.ODataCollectionView;
    customers: wijmo.odata.ODataCollectionView;
    productSales: wijmo.odata.ODataCollectionView;
    invoices: wijmo.odata.ODataCollectionView;
    reports: wijmo.collections.CollectionView;
    minInvoiceAmount = 2000;
    viewsLoaded: number;
    viewsLoadedFun: Function;

    initData() {
        var url = 'http://services.odata.org/V4/Northwind/Northwind.svc';

        this.products = new wijmo.odata.ODataCollectionView(url, 'Products', {
            groupDescriptions: [
                new wijmo.collections.PropertyGroupDescription('ProductName',
                    (item, propName) => {
                        var value = item[propName];
                        return value[0].toUpperCase();
                    }
                )
            ],
            sortDescriptions: ['ProductName'],
            loaded: (s, e) => {
                this.viewLoaded();
            }
        });
        this.categories = new wijmo.odata.ODataCollectionView(url, 'Categories', {
            fields: ['CategoryID', 'CategoryName', 'Description'],
            sortDescriptions: ['CategoryName'],
            loaded: (s, e) => {
                this.viewLoaded();
            }
        });
        this.customers = new wijmo.odata.ODataCollectionView(url, 'Customers', {
            sortDescriptions: ['CompanyName'],
            loaded: (s, e) => {
                this.viewLoaded();
            }
        });
        this.minInvoiceAmount = 2000;
        this.invoices = new wijmo.odata.ODataCollectionView(url, 'Invoices', {
            groupDescriptions: ['Country', 'Salesperson'],
            sortDescriptions: [
                new wijmo.collections.SortDescription('Country', true),
                new wijmo.collections.SortDescription('Salesperson', true),
                new wijmo.collections.SortDescription('ExtendedPrice', false)
            ],
            filterDefinition: 'ExtendedPrice ge ' + this.minInvoiceAmount,
            loaded: (s, e) => {
                this.viewLoaded();
            }
        });
        this.employees = new wijmo.odata.ODataCollectionView(url, 'Employees', {
            fields: ['EmployeeID', 'LastName', 'FirstName', 'Title', 'TitleOfCourtesy', 'BirthDate', 'HireDate', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'HomePhone', 'Extension', 'Notes', 'ReportsTo'],
            groupDescriptions: ['Country', 'City'],
            sortDescriptions: ['Country', 'City'],
            loaded: (s, e) => {
                this.viewLoaded();
            }
        });
        this.productSales = new wijmo.odata.ODataCollectionView(url, 'Product_Sales_for_1997', {
            groupDescriptions: ['CategoryName'],
            sortDescriptions: ['CategoryName', 'ProductName'],
            loaded: (s, e) => {
                this.viewLoaded();
            }
        });
    }

    // update scope after loading each view
    viewLoaded() {
        this.viewsLoaded = (this.viewsLoaded || 0) + 1;
        this.viewsLoadedFun();
    }
}