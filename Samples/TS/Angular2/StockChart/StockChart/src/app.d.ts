/// <reference path="../typings/globals/core-js/index.d.ts" />
import { DataSvc } from './services/DataSvc';
import { Portfolio } from './services/Portfolio';
export declare class AppCmp {
    protected dataSvc: DataSvc;
    showMovingAverage: boolean;
    showLineMarker: boolean;
    showAnnotation: boolean;
    movingAveragePeriod: number;
    movingAverageType: string;
    searchCompany: Function;
    portfolio: Portfolio;
    private cache;
    private chartPeriodClicked;
    private pOffset;
    private _changeXContentFunc;
    private _changeYContentFunc;
    private increColor;
    private decreColor;
    private _chartRendered;
    chartType: string;
    dateRange: string;
    volSeriesIsVisible: boolean;
    volYAxis: wijmo.chart.Axis;
    markerVisible: boolean;
    details: string;
    hasData: boolean;
    mainquote: any;
    rsChart: wijmo.chart.FlexChart;
    stChart: wijmo.chart.FlexChart;
    rangeSelector: wijmo.chart.interaction.RangeSelector;
    volSeries: wijmo.chart.Series;
    al: wijmo.chart.annotation.AnnotationLayer;
    constructor(dataSvc: DataSvc);
    _init(): void;
    itemsChanged(): void;
    stChartRendered(): void;
    setQuotesDetailInfo(e: any): void;
    private _getCurPointQuoteInfo(syml, info, symlColor);
    rsChartRendered(): void;
    chartPeriodChange(period: any): void;
    private _resetRangeSelector();
    rangeChanged(event: any): void;
    private _updateStChartRange(min, max);
    changeYContent(): Function;
    private _changeYContent(hitTest, pt);
    changeXContent(): Function;
    private _changeXContent(hitTest, pt);
    private _getMarkerContents(pt);
    private _getAxixYValue(y);
    getPointIndex(xVal: any): any;
    exportImage(exportMenu: any): void;
    periodChanged: (input: wijmo.input.InputNumber) => void;
}
export declare class AppModule {
}
