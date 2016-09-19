import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WjCoreModule } from 'wijmo/wijmo.angular2.core';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';

import {InheritedGrid} from './InheritedGrid';
import {AggregatedGrid, AggregatedGridColumn} from './AggregatedGrid';

import {EditableDateRenderer} from '../cellTemplates/EditableDateRenderer';
import {EditableSelectionRenderer} from '../cellTemplates/EditableSelectionRenderer';
import {EditableStringRenderer} from '../cellTemplates/EditableStringRenderer';

const components = [
    InheritedGrid,
    AggregatedGrid,
    AggregatedGridColumn,
    EditableDateRenderer,
    EditableSelectionRenderer,
    EditableStringRenderer
];

@NgModule({
    imports: [CommonModule, FormsModule, WjCoreModule, WjInputModule, WjGridModule],
    declarations: [...components],
    exports: [...components],
})
export class CustomComponentsModule {
}