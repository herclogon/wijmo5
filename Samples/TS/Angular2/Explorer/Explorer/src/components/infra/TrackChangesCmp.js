'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var DataSvc_1 = require('../../services/DataSvc');
var InputBaseCmp_1 = require('../input/InputBaseCmp');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var wjNg2Grid = require('wijmo/wijmo.angular2.grid');
// Wijmo TrackChanges component.
var TrackChangesCmp = (function (_super) {
    __extends(TrackChangesCmp, _super);
    function TrackChangesCmp(dataSvc) {
        _super.call(this, dataSvc);
        this._initData();
    }
    TrackChangesCmp.prototype._initData = function () {
        var items = this.dataSvc.getData(6);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.amount = item.amount.toFixed(2) * 1;
            item.start = new Date(item.start.getFullYear(), item.start.getMonth(), item.start.getDate());
        }
        // create CollectionView
        this.data = new wijmo.collections.CollectionView(items);
        // track changes
        this.data.trackChanges = true;
    };
    TrackChangesCmp = __decorate([
        core_1.Component({
            selector: 'grid-trackChanges-cmp',
            templateUrl: 'src/components/infra/trackChangesCmp.html',
            directives: [wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjMenuSeparator,
                wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn,
                wjNg2Input.WjCalendar, common_1.CORE_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], TrackChangesCmp);
    return TrackChangesCmp;
}(InputBaseCmp_1.InputBaseCmp));
exports.TrackChangesCmp = TrackChangesCmp;
//# sourceMappingURL=TrackChangesCmp.js.map