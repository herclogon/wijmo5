///<reference path="../typings/globals/core-js/index.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
'use strict';
// The Explorer application root component.
var DrawWorkBookCmp = (function () {
    function DrawWorkBookCmp() {
    }
    DrawWorkBookCmp.prototype.ngAfterViewInit = function () {
        var self = this;
        document.getElementById('importFile').addEventListener('change', function () {
            self._loadWorkbook();
        });
    };
    DrawWorkBookCmp.prototype.drawSheet = function (sheetIndex) {
        var drawRoot = document.getElementById('tableHost');
        drawRoot.textContent = '';
        this.sheetIndex = sheetIndex;
        xlsxImport.drawWorksheet(this.workbook, sheetIndex, drawRoot, 200, 100);
    };
    DrawWorkBookCmp.prototype._loadWorkbook = function () {
        var _this = this;
        var reader = new FileReader(), fileData;
        reader.onload = function (e) {
            var workbook = new wijmo.xlsx.Workbook();
            workbook.load(reader.result);
            _this.workbook = workbook;
            _this.drawSheet(_this.workbook.activeWorksheet || 0);
        };
        var file = document.getElementById('importFile').files[0];
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    DrawWorkBookCmp = __decorate([
        core_1.Component({
            selector: 'draw-workbook-cmp',
            templateUrl: 'src/drawWorkbookCmp.html',
            directives: [common_1.CORE_DIRECTIVES]
        })
    ], DrawWorkBookCmp);
    return DrawWorkBookCmp;
}());
exports.DrawWorkBookCmp = DrawWorkBookCmp;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.bootstrap(DrawWorkBookCmp, []);
//# sourceMappingURL=DrawWorkbookCmp.js.map