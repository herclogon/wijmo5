'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var wjFlexSheet = require('wijmo/wijmo.angular2.grid.sheet');
var DragDropCmp = (function () {
    function DragDropCmp() {
    }
    DragDropCmp.prototype.flexSheetInit = function (flexSheet) {
        var self = this;
        if (flexSheet) {
            flexSheet.deferUpdate(function () {
                var colIdx, rowIdx;
                for (colIdx = 0; colIdx < flexSheet.columns.length; colIdx++) {
                    for (rowIdx = 0; rowIdx < flexSheet.rows.length; rowIdx++) {
                        flexSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                    }
                }
                flexSheet.applyCellsStyle({ fontWeight: 'bold' }, [new wijmo.grid.CellRange(0, 0, 9, 0),
                    new wijmo.grid.CellRange(10, 1, 19, 1)]);
                flexSheet.applyCellsStyle({ textDecoration: 'underline' }, [new wijmo.grid.CellRange(0, 2, 9, 2),
                    new wijmo.grid.CellRange(10, 3, 19, 3)]);
                flexSheet.applyCellsStyle({ fontStyle: 'italic' }, [new wijmo.grid.CellRange(0, 4, 9, 4),
                    new wijmo.grid.CellRange(10, 5, 19, 5)]);
                flexSheet.applyCellsStyle({ format: 'c2' }, [new wijmo.grid.CellRange(0, 0, 9, 7)]);
                flexSheet.applyCellsStyle({ backgroundColor: '#4488CC' }, [new wijmo.grid.CellRange(0, 0, 19, 0),
                    new wijmo.grid.CellRange(0, 2, 19, 2), new wijmo.grid.CellRange(0, 4, 19, 4)]);
                flexSheet.applyCellsStyle({ color: '#CC8844' }, [new wijmo.grid.CellRange(0, 1, 19, 1),
                    new wijmo.grid.CellRange(0, 3, 19, 3), new wijmo.grid.CellRange(0, 5, 19, 5)]);
                flexSheet.applyCellsStyle({ color: '#336699' }, [new wijmo.grid.CellRange(0, 6, 9, 7)]);
                flexSheet.applyCellsStyle({ backgroundColor: '#996633' }, [new wijmo.grid.CellRange(10, 6, 19, 7)]);
            });
        }
    };
    __decorate([
        core_1.ViewChild('flexSheet')
    ], DragDropCmp.prototype, "flexSheet", void 0);
    DragDropCmp = __decorate([
        core_1.Component({
            selector: 'drag-drop-cmp',
            templateUrl: 'src/components/dragDropCmp.html',
            directives: [wjFlexSheet.WjFlexSheet, wjFlexSheet.WjSheet]
        })
    ], DragDropCmp);
    return DragDropCmp;
}());
exports.DragDropCmp = DragDropCmp;
//# sourceMappingURL=DragDropCmp.js.map