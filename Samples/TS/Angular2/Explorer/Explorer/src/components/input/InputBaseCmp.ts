'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSvc } from '../../services/DataSvc';

// Base class for all components demonstrating wijmo.input controls.
@Component({
    selector: '',
    templateUrl: ''
})

export abstract class InputBaseCmp {
    private _culture: string;

    protected dataSvc: DataSvc;
    i18n: any;
    countries: string[];
    items: wijmo.collections.CollectionView;
    htmlItems: string[];
    palettes: wijmo.collections.CollectionView;
    musicians: any[];

    // DataSvc will be passed by derived classes
    constructor(dataSvc: DataSvc) {
        this.dataSvc = dataSvc;

        this.culture = 'en';

        this.countries = dataSvc.getAllCountries();
        var items = [];
        for (let i = 0; i < this.countries.length; i++) {
            let c = this.countries[i];
            items.push({ id: i, country: c, length: c.length, selected: i < 10 && (i % 3 == 0) });
        }
        this.items = new wijmo.collections.CollectionView(items);
        this.items.moveCurrentToPosition(-1);

        this.htmlItems = [];
        for (let i = 0; i < 100; i++) {
            this.htmlItems.push('item <b>' + (i + 1) + '</b> of 100');
        }

        this.palettes = new wijmo.collections.CollectionView(dataSvc.getPalettes());

        var musicianNames = dataSvc.getMusicians();
        this.musicians = [];
        for (let i = 0; i < musicianNames.length; i++) {
            let item = {
                id: i,
                name: musicianNames[i],
                photo: '|Paul|John|George|Ringo|'
                    .indexOf('|' + musicianNames[i] + '|') >= 0
                    ? 'resources/' + musicianNames[i] + '.png'
                    : null
            };
            this.musicians.push(item);
        }
    }

    get culture(): string {
        return this._culture;
    }
    set culture(value: string) {
        if (this._culture != value) {
            this._culture = value;
            this._loadCultureInfo();
        }
    }

    private _loadCultureInfo() {
        var self = this;
        $.ajax({
            url: 'scripts/vendor/wijmo.culture.' + self.culture + '.js',
            dataType: 'script',
            success: function (data) {

                // culture applied, now load translations
                $.ajax({
                    url: 'translations/strings.' + self.culture + '.js',
                    dataType: 'json',
                    async: false,
                    success: function (data) {
                        self.i18n = data;
                        // update controls to reflect changes
                        wijmo.Control.invalidateAll();
                    }
                });
            },
        });
    }
}


