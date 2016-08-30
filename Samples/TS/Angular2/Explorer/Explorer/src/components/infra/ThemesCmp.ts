'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { InputBaseCmp } from '../input/InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';
import { ToDatePipe } from '../../pipes/appPipes';

// Wijmo Themes component.
@Component({
    selector: 'grid-themes-cmp',
    templateUrl: 'src/components/infra/themesCmp.html',
    directives: [wjNg2Input.WjInputDate, wjNg2Input.WjInputTime, wjNg2Input.WjCalendar, wjNg2Grid.WjFlexGrid, CORE_DIRECTIVES],
    pipes: [ToDatePipe]
})

export class ThemesCmp extends InputBaseCmp {

    departureDate = new Date();

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);

        // get custome theme
        $.get('src/styles/wijmo-custom-theme.css', function (css) {
            $('<style type="text/css"></style>')
                .html(css)
                .appendTo(".custometheme");
        });
    }
}


