'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Base class for all components demonstrating wijmo.input controls.
var InputBaseCmp = (function () {
    // DataSvc will be passed by derived classes
    function InputBaseCmp(dataSvc) {
        this.dataSvc = dataSvc;
        this.culture = 'en';
        this.countries = dataSvc.getAllCountries();
        var items = [];
        for (var i = 0; i < this.countries.length; i++) {
            var c = this.countries[i];
            items.push({ id: i, country: c, length: c.length, selected: i < 10 && (i % 3 == 0) });
        }
        this.items = new wijmo.collections.CollectionView(items);
        this.items.moveCurrentToPosition(-1);
        this.htmlItems = [];
        for (var i = 0; i < 100; i++) {
            this.htmlItems.push('item <b>' + (i + 1) + '</b> of 100');
        }
        this.palettes = new wijmo.collections.CollectionView(dataSvc.getPalettes());
        var musicianNames = dataSvc.getMusicians();
        this.musicians = [];
        for (var i = 0; i < musicianNames.length; i++) {
            var item = {
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
    Object.defineProperty(InputBaseCmp.prototype, "culture", {
        get: function () {
            return this._culture;
        },
        set: function (value) {
            if (this._culture != value) {
                this._culture = value;
                this._loadCultureInfo();
            }
        },
        enumerable: true,
        configurable: true
    });
    InputBaseCmp.prototype._loadCultureInfo = function () {
        var self = this;
        $.ajax({
            url: 'bin/Devel/sources/cultures/wijmo.culture.' + self.culture + '.js',
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
    };
    InputBaseCmp = __decorate([
        core_1.Component({
            selector: '',
            templateUrl: ''
        })
    ], InputBaseCmp);
    return InputBaseCmp;
}());
exports.InputBaseCmp = InputBaseCmp;
//# sourceMappingURL=InputBaseCmp.js.map