'use strict';

import { Injectable } from '@angular/core';

// Application tooltip service.
@Injectable()
export class TooltipSvc {

    getTooltip(ht) {
        var date = ht.item && ht.item.date ? ht.item.date : null,
            content = '';
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
    }

    getFinancialTooltip(ht) {
        var date = ht.item && ht.item.date ? ht.item.date : null,
            content = '';

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
    }
    
}