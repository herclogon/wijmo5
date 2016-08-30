import { Company } from './Company';
import { Portfolio } from './Portfolio';

/**
 * Represents a portfolio item.
 * Each item corresponds to a company and includes quote infotmation.
 */
export class PortfolioItem {
    _portfolio: Portfolio;
    _company: Company;
    _chart: boolean;
    _chartData = [];
    _fullChartData = [];
    _analysisData = [];
    _maData = [];

    constructor(portfolio: Portfolio, symbol: string, chart: boolean, withEvent?: boolean) {
        this._portfolio = portfolio;
        this._chart = chart;
        this._company = portfolio.getCompany(symbol, withEvent);
    }

    get symbol(): string {
        return this._company.symbol;
    }
    get name(): string {
        return this._company.name;
    }
    get color(): string {
        return this._company.color;
    }
    get chart(): boolean {
        return this._chart;
    }
    set chart(value: boolean) {
        if (this._chart != value) {
            this._chart = value;
            this._portfolio.viewChanged();
        }
    }
    get events(): any {
        return this._company.events;
    }
    get chartData(): any[] {
        return this._chartData;
    }

    get fullChartData(): any[] {
        return this._fullChartData;
    }
    get analysisData(): any[] {
        return this._analysisData;
    }

    getMAData(period) {
        var anaLen = this._analysisData.length,
            chartLen = this._chartData.length,
            i = 0, idx = 0, data = [];

        i = anaLen - chartLen - period + 1 >= 0 ? anaLen - chartLen - period + 1 : 0;
        if (this._maData.length !== anaLen - i || this._maData[0] !== this.analysisData[i]) {
            for (; i < anaLen; i++ , idx++) {
                data[idx] = this.analysisData[i];
            }
            this._maData = data;
        }
        return this._maData;
    }


    // updates the data to be shown on the chart
    updateChartData() {
        var
            firstValue = null,
            preLoadAnalysisData = false,
            chartData = [], analysisData = [],
            prices = this._company.prices,
            startDate = this._portfolio.startDate,
            endDate = this._portfolio.endDate;

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
    }
}