"use strict";
/**
 * Represents a portfolio item.
 * Each item corresponds to a company and includes quote infotmation.
 */
var PortfolioItem = (function () {
    function PortfolioItem(portfolio, symbol, chart, withEvent) {
        this._chartData = [];
        this._fullChartData = [];
        this._analysisData = [];
        this._maData = [];
        this._portfolio = portfolio;
        this._chart = chart;
        this._company = portfolio.getCompany(symbol, withEvent);
    }
    Object.defineProperty(PortfolioItem.prototype, "symbol", {
        get: function () {
            return this._company.symbol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortfolioItem.prototype, "name", {
        get: function () {
            return this._company.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortfolioItem.prototype, "color", {
        get: function () {
            return this._company.color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortfolioItem.prototype, "chart", {
        get: function () {
            return this._chart;
        },
        set: function (value) {
            if (this._chart != value) {
                this._chart = value;
                this._portfolio.viewChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortfolioItem.prototype, "events", {
        get: function () {
            return this._company.events;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortfolioItem.prototype, "chartData", {
        get: function () {
            return this._chartData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortfolioItem.prototype, "fullChartData", {
        get: function () {
            return this._fullChartData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortfolioItem.prototype, "analysisData", {
        get: function () {
            return this._analysisData;
        },
        enumerable: true,
        configurable: true
    });
    PortfolioItem.prototype.getMAData = function (period) {
        var anaLen = this._analysisData.length, chartLen = this._chartData.length, i = 0, idx = 0, data = [];
        i = anaLen - chartLen - period + 1 >= 0 ? anaLen - chartLen - period + 1 : 0;
        if (this._maData.length !== anaLen - i || this._maData[0] !== this.analysisData[i]) {
            for (; i < anaLen; i++, idx++) {
                data[idx] = this.analysisData[i];
            }
            this._maData = data;
        }
        return this._maData;
    };
    // updates the data to be shown on the chart
    PortfolioItem.prototype.updateChartData = function () {
        var firstValue = null, preLoadAnalysisData = false, chartData = [], analysisData = [], prices = this._company.prices, startDate = this._portfolio.startDate, endDate = this._portfolio.endDate;
        // calculate prices as variation relative to the first value
        // note: prices array starts with the current date
        for (var i = prices.length - 1; i >= 0; i--) {
            var p = prices[i];
            //when it's NASDAQ item, need to get all chart data.
            if (this.symbol === '^IXIC' && this._fullChartData.length < prices.length) {
                this._fullChartData.push({ date: p.date, price: p.price, close: p.close });
            }
            // skip entries that are not within the period
            if (p.date < startDate || p.date > endDate) {
                continue;
            }
            // set price
            if (firstValue == null) {
                firstValue = prices[i].close;
            }
            //retrieve the analysis data
            if (!preLoadAnalysisData) {
                var idx;
                for (var j = 200; j > 0; j--) {
                    idx = i + j;
                    if (idx < prices.length) {
                        analysisData.push({ date: prices[idx].date, close: prices[idx].close, closeChg: (prices[idx].close - firstValue) / firstValue });
                    }
                }
                preLoadAnalysisData = true;
            }
            analysisData.push({ date: p.date, close: p.close, closeChg: (p.close - firstValue) / firstValue });
            chartData.push({
                date: p.date, volume: p.volume,
                high: p.high, low: p.low, open: p.open, close: p.close,
                highChg: (p.high - firstValue) / firstValue,
                lowChg: (p.low - firstValue) / firstValue,
                openChg: (p.open - firstValue) / firstValue,
                closeChg: (p.close - firstValue) / firstValue
            });
        }
        // save chart data
        this._chartData = chartData;
        this._analysisData = analysisData;
    };
    return PortfolioItem;
}());
exports.PortfolioItem = PortfolioItem;
//# sourceMappingURL=PortfolioItem.js.map