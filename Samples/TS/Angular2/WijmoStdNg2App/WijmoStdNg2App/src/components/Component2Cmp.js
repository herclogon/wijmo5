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
//import { Component, Inject } from '@angular/core';
//import { CORE_DIRECTIVES } from '@angular/common';
//import { DataSvc } from '../services/DataSvc';
//import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
var core_1 = require('@angular/core');
var DataSvc_1 = require('../services/DataSvc');
//Component2.
var Component2Cmp = (function () {
    function Component2Cmp(dataSvc) {
    }
    Component2Cmp = __decorate([
        core_1.Component({
            selector: 'component2-cmp',
            templateUrl: 'src/components/component2.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], Component2Cmp);
    return Component2Cmp;
}());
exports.Component2Cmp = Component2Cmp;
//# sourceMappingURL=Component2Cmp.js.map