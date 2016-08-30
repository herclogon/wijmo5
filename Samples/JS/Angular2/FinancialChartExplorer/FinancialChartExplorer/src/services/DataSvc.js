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
    // get data by symbol
    DataSvc.prototype.getData = function (symbol, strings) {
        if (strings === void 0) { strings = true; }
        var data;
        if (!strings) {
            //// transform string dates to real dates
            //return $http({
            //    url: 'data/' + symbol + '.json',
            //    method: 'GET',
            //    transformResponse: function (value) {
            //        return JSON.parse(value, function (key, value) {
            //            if (key === 'date' && value !== null && !wijmo.isUndefined(value)) {
            //                return new Date(value);
            //            } else {
            //                return value;
            //            }
            //        });
            //    }
            //});
            return [];
        }
        else {
            //data = this.http.get('data/' + symbol + '.json').map(res => res.json());
            data = map_1.map.call(this.http.get('data/' + symbol + '.json'), function (res) { return res.json(); });
        }
        return data;
    };
    DataSvc.prototype.getDataList = function () {
        return [
            { name: "Box Inc", symbol: "box" },
            { name: "Wix.Com Ltd", symbol: "wix" },
            { name: "Facebook Inc", symbol: "fb" },
            { name: "Google Inc", symbol: "goog" },
            { name: "Twitter Inc", symbol: "twtr" },
            { name: "Zendesk Inc", symbol: "zen" }
        ];
    };
    DataSvc.prototype.getIndicatorList = function () {
        return [
            { name: 'Average True Range', abbreviation: 'atr' },
            { name: 'Relative Strength Index', abbreviation: 'rsi' },
            { name: 'Commodity Channel Index', abbreviation: 'cci' },
            { name: 'Williams %R', abbreviation: 'williamsR' },
            { name: 'MACD', abbreviation: 'macd' },
            { name: 'Stochastic', abbreviation: 'stoch' }
        ];
    };
    DataSvc.prototype.getOverlayList = function () {
        return [
            { name: 'Bollinger Bands', abbreviation: 'bollinger' },
            { name: 'Envelopes', abbreviation: 'envelopes' }
        ];
    };
    // helper method to calculate (upper) percentage of total range
    // the default will show the top 20% of the available range
    DataSvc.prototype.findApproxRange = function (min, max, percent) {
        var pctToShow = wijmo.isNumber(percent) && 0 < percent && percent < 1 ? percent : 0.2, range = {
            min: NaN,
            max: NaN
        };
        if (wijmo.isDate(min) && wijmo.isDate(max)) {
            range.max = max.valueOf();
            range.min = (max.valueOf() - min.valueOf()) * (1 - pctToShow) + min.valueOf();
        }
        else if (wijmo.isNumber(min) && wijmo.isNumber(max)) {
            range.max = max;
            range.min = (max - min) * (1 - pctToShow) + min;
        }
        return range;
    };
    // assumes High, Low, Open, Close, and Volume data
    // also assumes category axis
    DataSvc.prototype.findRenderedYRange = function (data, xmin, xmax) {
        var item, i, ymin = null, ymax = null;
        for (i = 0; i < data.length; i++) {
            item = data[i];
            if (xmin > i || i > xmax) {
                continue;
            }
            if (ymax === null || item.high > ymax) {
                ymax = item.high;
            }
            if (ymin === null || item.low < ymin) {
                ymin = item.low;
            }
        }
        return {
            min: ymin,
            max: ymax
        };
    };
    DataSvc = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http))
    ], DataSvc);
    return DataSvc;
}());
exports.DataSvc = DataSvc;
//# sourceMappingURL=DataSvc.js.map