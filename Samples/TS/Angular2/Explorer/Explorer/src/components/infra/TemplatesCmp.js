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
var InputBaseCmp_1 = require('../input/InputBaseCmp');
var DataSvc_1 = require('../../services/DataSvc');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
// Wijmo template component.
var TemplatesCmp = (function (_super) {
    __extends(TemplatesCmp, _super);
    function TemplatesCmp(dataSvc) {
        _super.call(this, dataSvc);
        this.someNumber = 123;
        this.someSize = 'large';
        this.sizes = [
            'tiny',
            'extra-small',
            'small',
            'medium',
            'large',
            'extra-large',
            'humongous'
        ];
        this._tplInputNumber = wjNg2Input.WjInputNumber.controlTemplate;
        wjNg2Input.WjInputNumber.controlTemplate = '<div style="position:relative;background-color:inherit">' +
            '<table style="width:100%;border-collapse:collapse;font:inherit;color:inherit;background-color:transparent;margin:0px;padding:0px">' +
            '<tr>' +
            '<td style="padding:0px;border:none">' +
            '<input style="width:100%;border:none;outline:none;margin:0px;padding:0px 4px;font:inherit;color:inherit;background-color:transparent;text-align:right" wj-part="input"/>' +
            '</td>' +
            '<td style ="padding:0px 4px;opacity:.5;cursor:default;text-align:center;border:none;font:inherit;color:inherit;font-size:50%;transform:scale(2,1);-webkit-transform:scale(2,1);-webkit-user-select:none;-ms-user-select:none;">' +
            '<span wj-part="btn-inc"> &#9650;</span><br>' +
            '<span wj-part="btn-dec"> &#9660;</span>' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>';
        this._tplComboBox = wjNg2Input.WjComboBox.controlTemplate;
        wjNg2Input.WjComboBox.controlTemplate = '<div style="position:relative;background-color:inherit;">' +
            '<table style="width:100%;border-collapse:collapse;font:inherit;color:inherit;background-color:transparent;margin:0px;padding:0px">' +
            '<tr>' +
            '<td style="padding:0px;border:none">' +
            '<input wj-part="input" style="width:100%;border:none;outline:none;margin:0px;padding:0px;font:inherit;color:inherit;background-color:transparent"/>' +
            '</td>' +
            '<td wj-part="btn" style="padding:0px 2px;opacity:.5;cursor:default;text-align:center;border:none;font:inherit;color:inherit;-webkit-user-select:none;-ms-user-select:none">' +
            '<span class="glyphicon glyphicon-circle-arrow-down"></span>' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '<div wj-part="dropdown" style="position:fixed;border-radius:4px;border:1px solid #e0e0e0;padding:2px;margin:4px 0px;z-index:100;background-color:inherit;display:none;box-shadow:0 6px 12px rgba(0, 0, 0, 0.175)"/>' +
            '</div>';
        wijmo.input.ComboBox.controlTemplate = '<div style="position:relative;background-color:inherit;">' +
            '<table style="width:100%;border-collapse:collapse;font:inherit;color:inherit;background-color:transparent;margin:0px;padding:0px">' +
            '<tr>' +
            '<td style="padding:0px;border:none">' +
            '<input wj-part="input" style="width:100%;border:none;outline:none;margin:0px;padding:0px;font:inherit;color:inherit;background-color:transparent"/>' +
            '</td>' +
            '<td wj-part="btn" style="padding:0px 2px;opacity:.5;cursor:default;text-align:center;border:none;font:inherit;color:inherit;-webkit-user-select:none;-ms-user-select:none">' +
            '<span class="glyphicon glyphicon-circle-arrow-down"></span>' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '<div wj-part="dropdown" style="position:fixed;border-radius:4px;border:1px solid #e0e0e0;padding:2px;margin:4px 0px;z-index:100;background-color:inherit;display:none;box-shadow:0 6px 12px rgba(0, 0, 0, 0.175)"/>' +
            '</div>';
        this._tplCalendar = wijmo.input.Calendar.controlTemplate;
        wjNg2Input.WjCalendar.controlTemplate = '<div style="cursor:default">' +
            '<table wj-part="tbl-header" style="border-collapse:collapse;font:inherit;width:100%;box-sizing:border-box">' +
            '<tr style="background-color:#eaeaea;cursor:pointer">' +
            '<td style="width:15%;border:none;text-align:center;padding:6px">' +
            '<div wj-part="btn-prev" class="glyphicon glyphicon-circle-arrow-left"></div>' +
            '</td>' +
            '<td wj-part="btn-month" style="width:70%;border:none;text-align:center;padding:6px">' +
            '<div wj-part="span-month"></div>' +
            '</td>' +
            '<td style="width:15%;border:none;text-align:center;padding:6px">' +
            '<div wj-part="btn-next" class="glyphicon glyphicon-circle-arrow-right"></div>' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '<table wj-part="tbl-month" style="border-collapse:collapse;font:inherit;width:100%;box-sizing:border-box"/>' +
            '<table wj-part="tbl-year" style="border-collapse:collapse;font:inherit;width:100%;box-sizing:border-box;display:none"/>' +
            '<button wj-part="btn-today" style="display:none"/>' +
            '</div>';
    }
    TemplatesCmp.prototype.ngOnDestroy = function () {
        wjNg2Input.WjInputNumber.controlTemplate = this._tplInputNumber;
        wjNg2Input.WjComboBox.controlTemplate = this._tplComboBox;
        wjNg2Input.WjCalendar.controlTemplate = this._tplCalendar;
    };
    TemplatesCmp = __decorate([
        core_1.Component({
            selector: 'grid-templates-cmp',
            templateUrl: 'src/components/infra/templatesCmp.html',
            directives: [wjNg2Input.WjInputDate, wjNg2Input.WjInputTime, wjNg2Input.WjCalendar, wjNg2Input.WjInputNumber, wjNg2Input.WjComboBox]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], TemplatesCmp);
    return TemplatesCmp;
}(InputBaseCmp_1.InputBaseCmp));
exports.TemplatesCmp = TemplatesCmp;
//# sourceMappingURL=TemplatesCmp.js.map