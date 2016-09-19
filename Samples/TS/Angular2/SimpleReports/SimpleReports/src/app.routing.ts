import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Application Routes. "data.caption" defines captions for navigation links in markup.
export const routes: Routes = [
    { path: '', redirectTo: 'alphabeticalListOfProducts', pathMatch: 'full' },
    { path: 'alphabeticalListOfProducts', data: { caption: 'AalphabeticalListOfProducts' }, loadChildren: 'src/components/AlphabeticalListOfProductsCmp#AlphabeticalListOfProductsModule' },
    { path: 'customerLabels', data: { caption: 'CustomerLabels' }, loadChildren: 'src/components/CustomerLabelsCmp#CustomerLabelsModule' },
    { path: 'employees', data: { caption: 'Employees' }, loadChildren: 'src/components/EmployeesCmp#EmployeesModule' },
    { path: 'productCatalog', data: { caption: 'ProductCatalog' }, loadChildren: 'src/components/ProductCatalogCmp#ProductCatalogModule' },
    { path: 'productsByCategory', data: { caption: 'ProductsByCategoryCmp' }, loadChildren: 'src/components/ProductsByCategoryCmp#ProductsByCategoryModule' },
    { path: 'salesByCategory', data: { caption: 'SalesByCategory' }, loadChildren: 'src/components/SalesByCategoryCmp#SalesByCategoryModule' },
    { path: 'salesChart', data: { caption: 'SalesChartCmp' }, loadChildren: 'src/components/SalesChartCmp#SalesChartModule' },
    { path: 'employeeSalesByCountry', data: { caption: 'EmployeeSalesByCountryCmp' }, loadChildren: 'src/components/EmployeeSalesByCountryCmp#EmployeeSalesByCountryModule' }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
