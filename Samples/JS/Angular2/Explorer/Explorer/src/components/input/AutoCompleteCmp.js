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
var router_1 = require('@angular/router');
var InputBaseCmp_1 = require('./InputBaseCmp');
var DataSvc_1 = require('../../services/DataSvc');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
// AutoComplete sample component.
var AutoCompleteCmp = (function (_super) {
    __extends(AutoCompleteCmp, _super);
    function AutoCompleteCmp(dataSvc) {
        _super.call(this, dataSvc);
        // function to retrieve companies using web service
        this._cache = {};
        this.getCompanies = this.getCompaniesFunc.bind(this);
        // start service so there's no delay when the user starts typing
        var params = { query: 'start', max: 0 };
        $.getJSON('companycatalog.ashx', params);
    }
    AutoCompleteCmp.prototype.getCompaniesFunc = function (query, max, callback) {
        // try getting the result from the cache
        var self = this, result = self._cache[query];
        if (result) {
            callback(result);
            return;
        }
        // not in cache, get from server
        var params = { query: query, max: max };
        $.getJSON('companycatalog.ashx', params, function (response) {
            // add 'SymbolName' property to result
            var items = [];
            for (var i = 0; i < response.length; i++) {
                var c = response[i];
                c.SymbolName = c.Symbol + ': ' + c.Name;
            }
            // store result in cache
            self._cache[query] = response;
            // and return the result
            callback(response);
        })
            .fail(function (error) {
            console.log('error: ' + error.responseText);
            self._cache[query] = null; // << no point in trying this query again
            callback(null);
        });
    };
    AutoCompleteCmp = __decorate([
        core_1.Component({
            selector: 'auto-complete-cmp',
            templateUrl: 'src/components/input/autoCompleteCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], AutoCompleteCmp);
    return AutoCompleteCmp;
}(InputBaseCmp_1.InputBaseCmp));
exports.AutoCompleteCmp = AutoCompleteCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: AutoCompleteCmp }
]);
var AutoCompleteModule = (function () {
    function AutoCompleteModule() {
    }
    AutoCompleteModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_input_1.WjInputModule],
            declarations: [AutoCompleteCmp],
        })
    ], AutoCompleteModule);
    return AutoCompleteModule;
}());
exports.AutoCompleteModule = AutoCompleteModule;
//# sourceMappingURL=AutoCompleteCmp.js.map