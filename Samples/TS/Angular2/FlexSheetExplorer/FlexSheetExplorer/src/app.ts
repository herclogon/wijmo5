///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, provide, Inject, enableProdMode } from '@angular/core';
import { CORE_DIRECTIVES, LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DataSvc } from './services/DataSvc';

// Sample components
import { IntroCmp } from './components/IntroCmp';
import { DataBindingCmp } from './components/DataBindingCmp';
import { SortingCmp } from './components/SortingCmp';
import { FilteringCmp } from './components/FilteringCmp';
import { FormatCellsCmp } from './components/FormatCellsCmp';
import { MultipleHeadersCmp } from './components/MultipleHeadersCmp';
import { CellMergingCmp } from './components/CellMergingCmp';
import { DragDropCmp } from './components/DragDropCmp';
import { FrozenCellsCmp } from './components/FrozenCellsCmp';
import { FormulasCmp } from './components/FormulasCmp';
import { CustomFunctionCmp } from './components/CustomFunctionCmp';
import { ExcelIOCmp } from './components/ExcelIOCmp';

    'use strict';

    // The Explorer application root component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html',
        directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
    })
    @RouteConfig([
        { path: '/', redirectTo: ['Intro'] },
        { path: '/intro', component: IntroCmp, name: 'Intro' },
        { path: '/dataBinding', component: DataBindingCmp },
        { path: '/sorting', component: SortingCmp },
        { path: '/filtering', component: FilteringCmp },
        { path: '/formatCells', component: FormatCellsCmp },
        { path: '/multipleHeaders', component: MultipleHeadersCmp },
        { path: '/cellMerging', component: CellMergingCmp },
        { path: '/dragDrop', component: DragDropCmp },
        { path: '/frozenCells', component: FrozenCellsCmp },
        { path: '/formulas', component: FormulasCmp },
        { path: '/customFunction', component: CustomFunctionCmp },
        { path: '/excelIO', component: ExcelIOCmp }])
        
    export class AppCmp {
        protected dataSvc: DataSvc;

        constructor(@Inject(DataSvc) dataSvc: DataSvc) {
            this.dataSvc = dataSvc;
        }

    }


enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(AppCmp, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    DataSvc
]);