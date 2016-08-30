'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Application tooltip service.
var TooltipSvc = (function () {
    function TooltipSvc() {
    }
    TooltipSvc.prototype.getTooltip = function (ht) {
        var date = ht.item && ht.item.date ? ht.item.date : null, content = '';
        if (wijmo.isDate(date)) {
            date = wijmo.Globalize.formatDate(date, 'MM/dd/yy');
        }
        if (ht && ht.item) {
            content =
                '<b>' + ht.name + '</b><br/>' +
                    'Date: ' + date + '<br/>' +
                    'Y: ' + wijmo.Globalize.format(ht.y, 'n2');
        }
        if (ht && ht.item && ht.item.volume) {
            content +=
                '<br/>' +
                    'Volume: ' + wijmo.Globalize.format(ht.item.volume, 'n0');
        }
        return content;
    };
    TooltipSvc.prototype.getFinancialTooltip = function (ht) {
        var date = ht.item && ht.item.date ? ht.item.date : null, content = '';
        if (wijmo.isDate(date)) {
            date = wijmo.Globalize.formatDate(date, 'MM/dd/yy');
        }
        if (ht && ht.item) {
            content =
                '<b>' + ht.name + '</b><br/>' +
                    'Date: ' + date + '<br/>' +
                    'Open: ' + wijmo.Globalize.format(ht.item.open, 'n2') + '<br/>' +
                    'High: ' + wijmo.Globalize.format(ht.item.high, 'n2') + '<br/>' +
                    'Low: ' + wijmo.Globalize.format(ht.item.low, 'n2') + '<br/>' +
                    'Close: ' + wijmo.Globalize.format(ht.item.close, 'n2') + '<br/>' +
                    'Volume: ' + wijmo.Globalize.format(ht.item.volume, 'n0');
        }
        return content;
    };
    TooltipSvc = __decorate([
        core_1.Injectable()
    ], TooltipSvc);
    return TooltipSvc;
}());
exports.TooltipSvc = TooltipSvc;
//# sourceMappingURL=TooltipSvc.js.map