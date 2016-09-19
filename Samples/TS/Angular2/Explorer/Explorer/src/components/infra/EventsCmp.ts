'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Wijmo Events component.
@Component({
    selector: 'grid-events-cmp',
    templateUrl: 'src/components/infra/eventsCmp.html'
})

export class EventsCmp {

    constructor( ) {
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: EventsCmp }
]);

@NgModule({
    imports: [CommonModule, routing],
    declarations: [EventsCmp],
})
export class EventsModule {
}
