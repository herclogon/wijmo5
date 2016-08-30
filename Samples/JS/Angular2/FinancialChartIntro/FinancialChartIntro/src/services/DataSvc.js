'use strict';
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
var http_1 = require('@angular/http');
//import 'rxjs/Rx';
var map_1 = require('rxjs/operator/map');
// Common data service
var DataSvc = (function () {
    function DataSvc(http) {
        this.http = http;
    }
    // get chart data
    DataSvc.prototype.getData = function () {
        var data;
        //data = this.http.get('data/fb.json').map(res => res.json());
        data = map_1.map.call(this.http.get('data/fb.json'), function (res) { return res.json(); });
        return data;
    };
    DataSvc = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http))
    ], DataSvc);
    return DataSvc;
}());
exports.DataSvc = DataSvc;
//# sourceMappingURL=DataSvc.js.map