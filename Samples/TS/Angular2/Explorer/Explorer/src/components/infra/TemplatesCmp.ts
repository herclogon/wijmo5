'use strict';

import { Component, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { InputBaseCmp } from '../input/InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Core from 'wijmo/wijmo.angular2.core';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';


// Wijmo template component.
@Component({
    selector: 'grid-templates-cmp',
    templateUrl: 'src/components/infra/templatesCmp.html',
    directives: [wjNg2Input.WjInputDate, wjNg2Input.WjInputTime, wjNg2Input.WjCalendar, wjNg2Input.WjInputNumber, wjNg2Input.WjComboBox]
})

export class TemplatesCmp extends InputBaseCmp implements OnDestroy {

    someNumber = 123;
    someSize = 'large';
    sizes = [
        'tiny',
        'extra-small',
        'small',
        'medium',
        'large',
        'extra-large',
        'humongous'
    ];

    private _tplInputNumber: string;
    private _tplComboBox: string;
    private _tplCalendar: string;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {

        super(dataSvc);

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
            '</div>'; wijmo.input.ComboBox.controlTemplate = '<div style="position:relative;background-color:inherit;">' +
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

    ngOnDestroy() {
        wjNg2Input.WjInputNumber.controlTemplate = this._tplInputNumber;
        wjNg2Input.WjComboBox.controlTemplate = this._tplComboBox;
        wjNg2Input.WjCalendar.controlTemplate = this._tplCalendar;
    } 
}
