'use strict';

import { Component, Inject } from '@angular/core';
import { DataSvc } from '../services/DataSvc';
import { BindingFlexSheetBaseCmp } from './BindingFlexSheetBaseCmp';
import * as wjFlexSheet from 'wijmo/wijmo.angular2.grid.sheet';

@Component({
    selector: 'sorting-cmp',
    templateUrl: 'src/components/sortingCmp.html',
    directives: [wjFlexSheet.WjFlexSheet, wjFlexSheet.WjSheet]
})
export class SortingCmp extends BindingFlexSheetBaseCmp {

    sortManager: wijmo.grid.sheet.SortManager;
    columns: string[];

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }

    flexSheetInit(flexSheet: wijmo.grid.sheet.FlexSheet) {
        var self = this;

        super.flexSheetInit(flexSheet);

        if (flexSheet) {
            self.columns = self._getColumns();
            self.sortManager = flexSheet.sortManager;

            flexSheet.selectedSheetChanged.addHandler((sender, args) => {
                self.columns = self._getColumns();
                if (!self.sortManager) {
                    self.sortManager = flexSheet.sortManager;
                }
            });

            flexSheet.columns.collectionChanged.addHandler(() => {
                self.columns = self._getColumns();
            });

            flexSheet.loaded.addHandler(() => {
                self.columns = self._getColumns();
            });
        }
    }

    // commit the sorts
    commitSort() {
        this.sortManager.commitSort();
    };

    // cancel the sorts
    cancelSort() {
        this.sortManager.cancelSort();
    };

    // add new sort level
    addSortLevel() {
        this.sortManager.addSortLevel();
    };

    // delete current sort level
    deleteSortLevel() {
        this.sortManager.deleteSortLevel();
    };

    // copy a new sort level by current sort level setting.
    copySortLevel() {
        this.sortManager.copySortLevel();
    };

    // move the sort level
    moveSortLevel(offset) {
        this.sortManager.moveSortLevel(offset);
    };

    // apply column index property for sort item
    applySortColumnIndex(e, sortItem) {
        sortItem.columnIndex = +e.target.value;
    }

    // apply asceding property for sort item
    applySortAscending(e, sortItem) {
        if (e.target.value === 'true') {
            sortItem.ascending = true;
        } else {
            sortItem.ascending = false;
        }
    }

    private _getColumns(): string[] {
        var columns = [],
            i = 0;
        if (this.flexSheet) {
            for (; i < this.flexSheet.columns.length; i++) {
                columns.push('Column ' + wijmo.grid.sheet.FlexSheet.convertNumberToAlpha(i));
            }
        }
        return columns;
    }
}