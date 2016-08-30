(function () {
    'use strict';

    angular
        .module('app')
        .factory('DataSvc', function ($http, $window) {
            var svc = {
                getData: getData,
                getDataList: getDataList,
                getIndicatorList: getIndicatorList,
                getOverlayList: getOverlayList,
                findRange: findApproxRange,
                isTouch: isTouch,
                findYRange: findRenderedYRange
            };

            return svc;

            // get list of available data
            function getDataList() {
                return [
                    { name: "Box Inc", symbol: "box" },
                    { name: "Wix.Com Ltd", symbol: "wix" },
                    { name: "Facebook Inc", symbol: "fb" },
                    { name: "Google Inc", symbol: "goog" },
                    { name: "Twitter Inc", symbol: "twtr" },
                    { name: "Zendesk Inc", symbol: "zen" }
                ];
            }

            function getIndicatorList() {
                return [
                    { name: 'Average True Range', abbreviation: 'atr' },
                    { name: 'Relative Strength Index', abbreviation: 'rsi' },
                    { name: 'Commodity Channel Index', abbreviation: 'cci' },
                    { name: 'Williams %R', abbreviation: 'williamsR' },
                    { name: 'MACD', abbreviation: 'macd' },
                    { name: 'Stochastic', abbreviation: 'stoch' }
                ];
            }

            function getOverlayList() {
                return [
                    { name: 'Bollinger Bands', abbreviation: 'bollinger' },
                    { name: 'Envelopes', abbreviation: 'envelopes' }
                ];
            }

            // get data by symbol
            function getData(symbol, strings) {
                if (wijmo.isUndefined(strings)) {
                    strings = true;
                }

                if (!strings) {
                    // transform string dates to real dates
                    return $http({
                        url: 'data/' + symbol + '.json',
                        method: 'GET',
                        transformResponse: function (value) {
                            return JSON.parse(value, function (key, value) {
                                if (key === 'date' && value !== null && !wijmo.isUndefined(value)) {
                                    return new Date(value);
                                } else {
                                    return value;
                                }
                            });
                        }
                    });
                } else {
                    return $http.get('data/' + symbol + '.json');
                }
            }

            // helper method to calculate (upper) percentage of total range
            // the default will show the top 20% of the available range
            function findApproxRange(min, max, percent) {
                var pctToShow = wijmo.isNumber(percent) && 0 < percent && percent < 1 ? percent : 0.2,
                    range = {
                        min: NaN,
                        max: NaN
                    };

                if (wijmo.isDate(min) && wijmo.isDate(max)) {
                    range.max = max.valueOf();
                    range.min = (max.valueOf() - min.valueOf()) * (1 - pctToShow) + min.valueOf();
                } else if (wijmo.isNumber(min) && wijmo.isNumber(max)) {
                    range.max = max;
                    range.min = (max - min) * (1 - pctToShow) + min;
                }

                return range;
            }

            function isTouch() {
                return 'ontouchstart' in $window;
            }

            // assumes High, Low, Open, Close, and Volume data
            // also assumes category axis
            function findRenderedYRange(data, xmin, xmax) {
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
            }

        });
})();