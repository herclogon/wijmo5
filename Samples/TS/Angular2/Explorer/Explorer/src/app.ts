///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, Input, Inject, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { routeTree, routing} from './app.routing';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
// Services
import { MenuSvc } from './services/MenuSvc';
import { DataSvc } from './services/DataSvc';
import { SparkSvc } from './services/SparkSvc';
//import { AppPipeModule } from './pipes/appPipes';


// Wijmo Input components 
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';


export module explorer {
    'use strict';

    // The Explorer application root component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html'
    })


    export class AppCmp {
        private _activeTheme = '';

        @Input() navCollapsed = true;
        // Used to show navigation links and section headers in markup.
        private routTree = routeTree;

        get activeTheme(): string {
            return this._activeTheme;
        }
        set activeTheme(value: string) {
            if (this._activeTheme != value) {
                this._activeTheme = value;
                let themeLink = <HTMLLinkElement>document.getElementById('activeThemeLink');
                if (themeLink) {
                    themeLink.href = value;
                }
            }
        }
    }
}

@NgModule({
    imports: [BrowserModule, routing, HttpModule, WjInputModule],
    declarations: [explorer.AppCmp],
    providers: [DataSvc, MenuSvc, SparkSvc],
    bootstrap: [explorer.AppCmp]
})
export class AppModule {
}


enableProdMode();
// Bootstrap application 
platformBrowserDynamic().bootstrapModule(AppModule);