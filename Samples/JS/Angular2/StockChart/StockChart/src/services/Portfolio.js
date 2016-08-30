"use strict";
var Company_1 = require('./Company');
var PortfolioItem_1 = require('./PortfolioItem');
/**
 * Represents the period to be shown in the chart.
 */
(function (ChartPeriod) {
    ChartPeriod[ChartPeriod["d1"] = 0] = "d1";
    ChartPeriod[ChartPeriod["w1"] = 1] = "w1";
    ChartPeriod[ChartPeriod["m1"] = 2] = "m1";
    ChartPeriod[ChartPeriod["m3"] = 3] = "m3";
    ChartPeriod[ChartPeriod["m6"] = 4] = "m6";
    ChartPeriod[ChartPeriod["YTD"] = 5] = "YTD";
    ChartPeriod[ChartPeriod["y1"] = 6] = "y1";
    ChartPeriod[ChartPeriod["y2"] = 7] = "y2";
    ChartPeriod[ChartPeriod["y3"] = 8] = "y3";
    ChartPeriod[ChartPeriod["All"] = 9] = "All";
    ChartPeriod[ChartPeriod["Unknown"] = 10] = "Unknown"; /** unknown the period. */
})(exports.ChartPeriod || (exports.ChartPeriod = {}));
var ChartPeriod = exports.ChartPeriod;
/**
 * Represents a portfolio composed of items.
 * Each item corresponds to a company and includes the quote information.
 */
var Portfolio = (function () {
    function Portfolio(dataSvc) {
        var _this = this;
        this._chartPeriod = ChartPeriod.m6;
        this._mainQuoteUpdated = true;
        // raise event when items change 
        // (on a timeout to avoid too many updates)
        this.itemsChanged = new wijmo.Event();
        this._dataSvc = dataSvc;
        // initialize items collection/view
        this._items = new wijmo.collections.ObservableArray();
        this._cv = new wijmo.collections.CollectionView(this._items);
        this._cv.collectionChanged.addHandler(this.viewChanged.bind(this));
        // load the portfolio from storage
        this.loadItems();
        this._requestNum = 0;
        // if we have no items, add a few now
        if (this._items.length == 0) {
            //The NASDAQ item: used for range selector chart.
            this.addItem('^IXIC');
            this.addItem('MSFT', true, true);
        }
        // save portfolio when unloading
        window.addEventListener('unload', function () {
            _this.saveItems();
        });
    }
    Portfolio.prototype.viewChanged = function () {
        var _this = this;
        if (this._requestNum > 0) {
            return;
        }
        if (!this._updating) {
            this._updating = true;
            if (this._toChange) {
                clearTimeout(this._toChange);
            }
            this._toChange = setTimeout(function () {
                _this.updateChartData();
                _this.itemsChanged.raise(_this);
                _this._cv.refresh();
                _this._updating = false;
            }, 250);
        }
    };
    Object.defineProperty(Portfolio.prototype, "view", {
        // gets the view with the portfolio items
        get: function () {
            return this._cv;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Portfolio.prototype, "chartPeriod", {
        // gets or sets the chart period
        get: function () {
            return this._chartPeriod;
        },
        set: function (value) {
            if (!value) {
                return;
            }
            this._chartPeriod = value;
            this._startDate = this.getChartStartDate();
            this._endDate = new Date();
            this.updateChartData();
            this.viewChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Portfolio.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        set: function (value) {
            this._startDate = value;
            this.viewChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Portfolio.prototype, "endDate", {
        get: function () {
            return this._endDate;
        },
        set: function (value) {
            this._endDate = value;
            this.viewChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Portfolio.prototype, "displayChartSeriesNum", {
        //get the chart displayed series number
        get: function () {
            var num = 0;
            for (var i = 1; i < this._items.length; i++) {
                if (this._items[i].chart) {
                    num++;
                }
            }
            return num++;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Portfolio.prototype, "requestNum", {
        get: function () {
            return this._requestNum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Portfolio.prototype, "mainQuoteUpdated", {
        // the main quote changed or not
        get: function () {
            return this._mainQuoteUpdated;
        },
        set: function (value) {
            this._mainQuoteUpdated = value;
        },
        enumerable: true,
        configurable: true
    });
    // gets the chart start date based on the current date and chart period
    Portfolio.prototype.getChartStartDate = function () {
        var dt = new Date();
        switch (this.chartPeriod) {
            case ChartPeriod.m1:
                dt.setMonth(dt.getMonth() - 1);
                return dt;
            case ChartPeriod.m3:
                dt.setMonth(dt.getMonth() - 3);
                return dt;
            case ChartPeriod.m6:
                dt.setMonth(dt.getMonth() - 6);
                return dt;
            case ChartPeriod.YTD:
                return new Date(dt.getFullYear(), 0, 1);
            case ChartPeriod.m6:
                dt.setMonth(dt.getMonth() - 6);
                return dt;
            case ChartPeriod.y1:
                dt.setFullYear(dt.getFullYear() - 1);
                return dt;
            case ChartPeriod.y2:
                dt.setFullYear(dt.getFullYear() - 2);
                return dt;
            case ChartPeriod.y3:
                dt.setFullYear(dt.getFullYear() - 3);
                return dt;
            case ChartPeriod.All:
                return new Date(2005, 0, 1);
        }
        // unknown period, use the last 12 months
        dt.setFullYear(dt.getFullYear() - 1);
        return dt;
    };
    // add main item
    Portfolio.prototype.addMainQuote = function () {
        if (this.mainItemSymbol != null) {
            this.reset();
            this.addSecondItem(this.mainItemSymbol);
            this.mainQuoteUpdated = true;
            this.mainItemSymbol = null;
        }
    };
    // add new item
    Portfolio.prototype.addNewItem = function () {
        if (this.newItemSymbol != null) {
            this.addItem(this.newItemSymbol);
            this.newItemSymbol = null;
        }
    };
    Portfolio.prototype.canAddNewItem = function () {
        return this.newItemSymbol && this.indexOf(this.newItemSymbol) < 0;
    };
    Object.defineProperty(Portfolio.prototype, "newItemSymbol", {
        get: function () {
            return this._newItemSymbol;
        },
        set: function (value) {
            this._newItemSymbol = value;
        },
        enumerable: true,
        configurable: true
    });
    //add main item
    Portfolio.prototype.canAddMainItem = function () {
        return this.mainItemSymbol && this.indexOf(this.mainItemSymbol) < 0;
    };
    Object.defineProperty(Portfolio.prototype, "mainItemSymbol", {
        get: function () {
            return this._mainItemSymbol;
        },
        set: function (value) {
            this._mainItemSymbol = value;
        },
        enumerable: true,
        configurable: true
    });
    // load items from local storage
    Portfolio.prototype.loadItems = function () {
        try {
            var data = localStorage != null ? localStorage[Portfolio.STGKEY] : null;
            if (data != null && JSON != null) {
                data = JSON.parse(data);
                this.chartPeriod = data.chartPeriod;
                for (var i = 0; i < data.items.length; i++) {
                    var item = data.items[i];
                    if (i === 1) {
                        this.addItem(item.symbol, item.chart, true);
                    }
                    else {
                        this.addItem(item.symbol, item.chart);
                    }
                }
                if (data.sort) {
                    var sd = new wijmo.collections.SortDescription(data.sort.property, data.sort.ascending);
                    this.view.sortDescriptions.push(sd);
                }
            }
        }
        catch (err) { }
    };
    // save items to local storage
    Portfolio.prototype.saveItems = function () {
        try {
            if (localStorage != null && JSON != null) {
                var data = {
                    chartPeriod: this.chartPeriod,
                    sort: null,
                    items: [],
                };
                if (this.view.sortDescriptions.length > 0) {
                    var sd = this.view.sortDescriptions[0];
                    data.sort = { property: sd.property, ascending: sd.ascending };
                }
                for (var i = 0; i < this._cv.items.length; i++) {
                    var item = this._cv.items[i];
                    var newItem = {
                        symbol: item.symbol,
                        chart: item.chart
                    };
                    data.items.push(newItem);
                }
                localStorage[Portfolio.STGKEY] = JSON.stringify(data);
            }
        }
        catch (err) { }
    };
    // add an item to the portfolio
    Portfolio.prototype.addItem = function (symbol, chart, withEvents) {
        if (chart === void 0) { chart = true; }
        if (symbol) {
            var index = this.indexOf(symbol);
            if (index < 0) {
                var item = new PortfolioItem_1.PortfolioItem(this, symbol, chart, withEvents);
                // remove the first compare item when the compared items are more than five.
                if (this._items.length > 6) {
                    this._items.removeAt(2);
                }
                this._items.push(item);
            }
        }
    };
    Portfolio.prototype.addSecondItem = function (symbol, chart) {
        if (chart === void 0) { chart = true; }
        if (symbol) {
            var item = new PortfolioItem_1.PortfolioItem(this, symbol, chart, true);
            this._items[1] = item;
        }
    };
    // remove an item from the portfolio
    Portfolio.prototype.removeItem = function (symbol) {
        var index = this.indexOf(symbol);
        if (index > -1) {
            this._items.splice(index, 1);
        }
    };
    // gets the index of an item in the portfolio given a symbol
    Portfolio.prototype.indexOf = function (symbol) {
        if (symbol) {
            symbol = symbol.toUpperCase();
            for (var i = 0; i < this._items.length; i++) {
                if (this._items[i].symbol == symbol) {
                    return i;
                }
            }
        }
        return -1;
    };
    //reset the items, only keep ^IXIC
    Portfolio.prototype.reset = function () {
        var items = this._items;
        if (items && items.length > 1) {
            items.splice(2, items.length - 1);
        }
    };
    // get a company from the global cache or load it if necessary
    Portfolio.prototype.getCompany = function (symbol, withEvents) {
        var _this = this;
        var _withEvents = withEvents, c = Portfolio._companyCache[symbol], dataSvc = this._dataSvc;
        // company not in cache? create now
        if (c == null) {
            // create and store in cache
            c = new Company_1.Company(symbol);
            Portfolio._companyCache[symbol] = c;
            // get company name
            dataSvc.getStockInfoByName(symbol).subscribe(function (result) {
                c.name = result;
                _this.viewChanged();
                _this._requestNum++;
                // get company prices
                dataSvc.getStockInfoByPrices(symbol).subscribe(function (result) {
                    // store prices
                    var lines = result.split('\\r');
                    for (var i = 0; i < lines.length; i++) {
                        var items = lines[i].split('\\t');
                        if (items.length == 2) {
                            var date = new Date(items[0].trim().replace(/-/g, '/')), prices = _this.parseTradeInfos(items[1]);
                            c.prices.push({
                                date: date, volume: prices[0], open: prices[1],
                                high: prices[2], low: prices[3], close: prices[4]
                            });
                        }
                    }
                    //get company events
                    if (_withEvents && result.length > 0) {
                        dataSvc.getStockInfoByEvents(symbol).subscribe(function (result) {
                            c.events.length = 0;
                            if (!result || result.length === 0) {
                                return;
                            }
                            var events = JSON.parse(result);
                            var eveDate, fmtDate, hasNotAdded;
                            for (var i = 0; i < events.length; i++) {
                                hasNotAdded = true;
                                eveDate = new Date(events[i].date);
                                fmtDate = new Date(eveDate.getFullYear(), eveDate.getMonth(), eveDate.getDate(), 0, 0, 0);
                                // if has some news on same day, will don't push
                                for (var j = 0; j < c.events.length; j++) {
                                    if (fmtDate.getTime() === c.events[j].date.getTime()) {
                                        hasNotAdded = false;
                                        break;
                                    }
                                }
                                if (hasNotAdded) {
                                    c.events.push({
                                        title: events[i].title,
                                        date: fmtDate
                                    });
                                }
                            }
                            _this._requestNum--;
                            _this.viewChanged();
                        });
                    }
                    else {
                        _this._requestNum--;
                        _this.viewChanged();
                    }
                });
            });
        }
        return c;
    };
    Portfolio.prototype.parseTradeInfos = function (prices) {
        var items = [], temp = [], infos = prices;
        ['\\o', '\\h', '\\l', '\\c'].forEach(function (item) {
            temp = infos.split(item);
            items.push(parseFloat(temp[0]));
            infos = temp[1];
        });
        items.push(parseFloat(infos));
        return items;
    };
    // updates the chart data for all items
    Portfolio.prototype.updateChartData = function () {
        for (var i = 0; i < this._items.length; i++) {
            this._items[i].updateChartData();
        }
    };
    Portfolio.STGKEY = 'stockItems';
    Portfolio._companyCache = {};
    return Portfolio;
}());
exports.Portfolio = Portfolio;
//# sourceMappingURL=Portfolio.js.map