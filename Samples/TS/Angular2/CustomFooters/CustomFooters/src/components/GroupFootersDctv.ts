'use strict';

import { ElementRef, Directive, Self } from '@angular/core';
import { Input, Inject, OnInit, Injector} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import * as ngCore from '@angular/core';
import * as WjFlexGrid from 'wijmo/wijmo.angular2.grid';

@Directive({
    selector: '[groupFooters]',
    inputs: ['groupFooters']
})
export class GroupFooters implements ngCore.OnInit, ngCore.OnDestroy {

    static ROW_FOOTER_CLASS = 'wj-footer';
    constructor( @Self() @Inject(WjFlexGrid.WjFlexGrid) private _flex: WjFlexGrid.WjFlexGrid,
        @Inject(ElementRef) public elRef: ElementRef,
        @Inject(Injector) injector: Injector) {
    }

    ngOnInit() {
        var flex = this._flex;
        // add group footers after loading rows
        flex.loadedRows.addHandler(()=>{
            if (flex.collectionView.groupDescriptions.length) {
                this._addGroupFooters();
            }
        });
    }    

   // add group footers
    private _addGroupFooters() {
        var flex = this._flex;
        flex.beginUpdate();
        for (var r = 0; r < flex.rows.length; r++) {
            var row = flex.rows[r];
            if (row instanceof wijmo.grid.GroupRow && row.cssClass != GroupFooters.ROW_FOOTER_CLASS) {

                // create footer row to match this group row
                var newRow = new wijmo.grid.GroupRow();
                newRow.level = row.level;
                newRow.cssClass = GroupFooters.ROW_FOOTER_CLASS;

                // add footer row to the grid
                var index = this._findFooterIndex(r);
                flex.rows.insert(index, newRow);

                // add some content to footer row
                var group = row.dataItem;
                flex.setCellData(index, 0, 'f(' + group.name + ')', false);
            }
        }
        flex.endUpdate();
    }

      // find the index where the group footer should be inserted
      private _findFooterIndex(r:number) {
          var flex = this._flex;
          var level = flex.rows[r].level;
          for (var i = r + 1; i < flex.rows.length; i++) {
              var row = flex.rows[i];
              if (row instanceof wijmo.grid.GroupRow) {

                  // if this is *not* a footer and the level is <=, insert here
                  if (row.cssClass != GroupFooters.ROW_FOOTER_CLASS && row.level <= level) {
                      return i;
                  }

                  // if this *is* a footer and the level is <, insert here
                  if (row.cssClass == GroupFooters.ROW_FOOTER_CLASS && row.level < level) {
                      return i;
                  }
              }
          }

          // insert at the bottom
          return flex.rows.length;
      }

    ngOnDestroy() {
        this._flex.invalidate();
    }
}