'use strict';

import { Component, Input, ContentChildren, QueryList, forwardRef, HostBinding, AfterContentInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Tab component
@Component({
    selector: 'app-tab',
    template:
    `
        <ul class="nav nav-tabs"> 
            <li *ngFor="let pane of panes" [ngClass]="{active:pane.selected}"> 
                <a [href]="''" (click)="select(pane)" onclick="return false;">{{pane.title}}</a>
            </li> 
        </ul> 
        <div class="tab-content"><ng-content></ng-content></div> 
    `,
    host: { '[class.tabbable]': 'true' }
})
export class AppTab implements AfterContentInit {
    // child panes array
    @ContentChildren(forwardRef(() => AppTabPane)) panes: QueryList<AppTabPane>;

    constructor() {
    }

    // selects the specified pane
    select(pane: AppTabPane) {
        for (let pane of this.panes.toArray()) {
            pane.selected = false;
        }
        pane.selected = true;
    }

    ngAfterContentInit() {
        // selects first pane after load
        if (this.panes.length) {
            this.select(this.panes.first);
        }
    }

}


// Tab Pane component
@Component({
    selector: 'app-tab-pane',
    template: `<ng-content></ng-content>`,
    host: { '[class.tab-pane]': 'true' }
})
export class AppTabPane {
    @Input() title = '';
    @HostBinding('class.active') selected = false;
}

@NgModule({
    imports: [CommonModule],
    declarations: [AppTab, AppTabPane],
    exports: [AppTab, AppTabPane]
})
export class TabsModule {
}

