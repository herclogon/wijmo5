'use strict';

import { ElementRef, ViewContainerRef, Directive, Self } from '@angular/core';
import { Input, Inject, OnInit, Injector} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import * as ngCore from '@angular/core';
import * as WjFlexGrid from 'wijmo/wijmo.angular2.grid';

@Directive({
    selector: '[gridFooterFor]',
    inputs: ['gridFooterFor']
})
export class GridFooterFor implements ngCore.OnInit, ngCore.OnDestroy {

    gridFooterFor: wijmo.grid.FlexGrid;
    static GRID_FOOTER_CLASS = 'wj-footer';

    constructor( @Self() @Inject(WjFlexGrid.WjFlexGrid) private _flex: WjFlexGrid.WjFlexGrid,
        @Inject(ViewContainerRef) public viewContainerRef: ViewContainerRef,
        @Inject(ElementRef) public elRef: ElementRef,
        @Inject(Injector) injector: Injector) {
    }

    ngOnInit() {
        // configure footer grid
        this._flex.isReadOnly = true;
        this._flex.selectionMode = wijmo.grid.SelectionMode.None;
        this._flex.headersVisibility = this.gridFooterFor.headersVisibility;
        this._flex.columnHeaders.rows.clear();
        var row = new wijmo.grid.GroupRow();
        row.cssClass = GridFooterFor.GRID_FOOTER_CLASS;
        this._flex.rows.push(row);

        // remove scrollbars from footer grid
        var root = <HTMLElement>this._flex.hostElement.querySelector('[wj-part="root"]');
        root.style.overflow = 'hidden';

        // synchronize columns with master grid
        setTimeout(() => {
            this._syncCols();
        }, 100);
        this.gridFooterFor.draggedColumn.addHandler(this._syncCols, this);
        this.gridFooterFor.resizedColumn.addHandler(this._syncCols, this);
        this.gridFooterFor.loadedRows.addHandler(this._syncCols, this);
        this.gridFooterFor.cellEditEnded.addHandler(this._syncCols, this);

        // synchronize scroll position with master grid
        this.gridFooterFor.scrollPositionChanged.addHandler(()=> {
            this._flex.scrollPosition = this.gridFooterFor.scrollPosition;
        });
    }    

    _syncCols() {
        // copy columns/sizes etc
        if (!this._flex) {
            return;
        }
        this._flex.columnLayout = this.gridFooterFor.columnLayout;

        // set content of footer grid
        for (var i = 0; i < this.gridFooterFor.columns.length; i++) {
            var col = this.gridFooterFor.columns[i];
            var data = col.header ? col.header : col.binding;
            this._flex.setCellData(0, i, 'f(' + data + ')', false);
        }
    }

    ngOnDestroy() {
        this.viewContainerRef.clear();
        this.gridFooterFor.invalidate();
    }
}