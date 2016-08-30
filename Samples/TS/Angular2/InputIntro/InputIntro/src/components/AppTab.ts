'use strict';

import { Component, Input, ContentChildren, QueryList, forwardRef, HostBinding, AfterContentInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

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
    directives: [CORE_DIRECTIVES, forwardRef(() => AppTabPane)],
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
    directives: [CORE_DIRECTIVES],
    host: { '[class.tab-pane]': 'true' }
})
export class AppTabPane {
    @Input() title = '';
    @HostBinding('class.active') selected = false;
}


