'use strict';


import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, forwardRef, Type, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { RouterModule } from '@angular/router';
import { WjCoreModule } from 'wijmo/wijmo.angular2.core';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// FlexGrid Editing component.
@Component({
    selector: 'grid-editing-cmp',
    templateUrl: 'src/components/grid/gridEditingCmp.html'
})


export class GridEditingCmp extends GridBaseCmp {
    
    products: string[];
    colors: string[];
    countries: string[];

    alwaysEdit = false;
    editIndex: number;

    private _start = new Date();
    private _colorId = 0;
    private _productId = 0;
    private _countryId = 0;
    private _amount = 0;
    private _amount2 = 0;

    @ViewChild('flex') flex: wijmo.grid.FlexGrid;
    @ViewChild('flexInline') flexInline: wijmo.grid.FlexGrid;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
        //this.products = this.dataSvc.getProducts();
        this.products = this.dataSvc.getProducts();
        this.colors = this.dataSvc.getColors();
        this.countries = this.dataSvc.getSomeCountries();
        this._applyFilter();
    }

    selectionChangedHandler = ()=> {
        var flex = this.flex;
        this._updateView();
        // keep the control in edit mode
        if (this.alwaysEdit == true && flex.containsFocus()) {
            setTimeout(function () {
                flex.startEditing(false);
            }, 50);
        }
    }

    ngAfterViewInit() {
        var self = this;

        super.ngAfterViewInit();
        this._updateView();

        $('#dlgDetail').on('shown.bs.modal', function (e) {
            (<wijmo.collections.CollectionView>self.flex.collectionView).editItem(self.flex.collectionView.currentItem);
        });
        if (this.flexInline) {
            var flex = this.flexInline;
            if (flex) {

                // prevent default editing
                flex.isReadOnly = true;

                // make rows taller to accommodate edit buttons and input controls
                flex.rows.defaultSize = 44;

                // use formatter to create buttons and custom editors
                //flex.itemFormatter = this.itemFormatter;

                // commit row changes when scrolling the grid
                flex.scrollPositionChanged.addHandler(()=> {
                    if (this.editIndex > -1) {
                        this.commitRow(this.editIndex);
                    }
                });
            }
        }
    }

    get start(): Date {
        return this._start;
        
    }
    set start(value: Date) {
        if (this._start != value) {
            this._start = value;
            this.flex.collectionView.currentItem.start = value;
        }
    }

    get colorId(): number {
        return this._colorId;
    }
    set colorId(value: number) {
        if (this._colorId != value) {
            this._colorId = value;
            this.flex.collectionView.currentItem.colorId = value;
        }
    }

    get productId(): number {
        return this._productId;
    }
    set productId(value: number) {
        if (this._productId != value) {
            this._productId = value;
            this.flex.collectionView.currentItem.productId = value;
        }
    }

    get countryId(): number {
        return this._countryId;
    }
    set countryId(value: number) {
        if (this._countryId != value) {
            this._countryId = value;
            this.flex.collectionView.currentItem.countryId = value;
        }
    }

    get amount(): number {
        return this._amount;
    }
    set amount(value: number) {
        if (this._amount != value) {
            this._amount = value;
            this.flex.collectionView.currentItem.amount = value;
        }
    }

    get amount2(): number {
        return this._amount2;
    }
    set amount2(value: number) {
        if (this._amount2 != value) {
            this._amount2 = value;
            this.flex.collectionView.currentItem.amount2 = value;
        }
    }

    editRow(rowIdx: number) {
        this.editIndex = rowIdx;
        this.flexInline.invalidate();
    }

    deleteRow(rowIdx:number) {
        var ecv = <wijmo.collections.CollectionView>this.flexInline.collectionView;
        ecv.removeAt(rowIdx);
    }

    commitRow(rowIdx: number) {
        // save changes
        var flex = this.flexInline;
        flex.setCellData(rowIdx, 'start', $("#theDate").val());
        flex.setCellData(rowIdx, 'product', $("#theProduct").val());

        // done editing
        this.cancelRow(rowIdx);
    }

    cancelRow(rowIdx: number) {
        this.editIndex = -1;
        this.flexInline.invalidate();
    }   

    private _updateView() {
        if (!this.flex.collectionView.currentItem) {
            return;
        }
        this._start = this.flex.collectionView.currentItem.start;
        this._colorId = this.flex.collectionView.currentItem.colorId;
        this._productId = this.flex.collectionView.currentItem.productId;
        this._countryId = this.flex.collectionView.currentItem.countryId;
        this._amount = this.flex.collectionView.currentItem.amount;
        this._amount2 = this.flex.collectionView.currentItem.amount2;
    }
}
const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: GridEditingCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjCoreModule, WjGridModule, WjInputModule],
    declarations: [GridEditingCmp],
})
export class GridEditingModule {
}