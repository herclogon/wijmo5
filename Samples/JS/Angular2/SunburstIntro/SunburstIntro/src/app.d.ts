/// <reference path="../typings/globals/core-js/index.d.ts" />
import { DataSvc } from './services/DataSvc';
export declare class AppCmp {
    protected dataSvc: DataSvc;
    data: any[];
    hierarchicalData: any[];
    themingData: any[];
    header: string;
    footer: string;
    legendPosition: string;
    innerRadius: number;
    offset: number;
    startAngle: number;
    reversed: boolean;
    palette: string;
    palettes: string[];
    bindingName: string[];
    childItemsPath: string;
    selectedPosition: string;
    selectedOffset: number;
    isAnimated: boolean;
    chartPalette: wijmo.chart.Palettes;
    constructor(dataSvc: DataSvc);
    paletteChanged: (sender: wijmo.input.Menu) => void;
    innerRadiusChanged: (sender: wijmo.input.InputNumber) => void;
    offsetChanged: (sender: wijmo.input.InputNumber) => void;
    startAngleChanged: (sender: wijmo.input.InputNumber) => void;
    selectedOffsetChanged: (sender: wijmo.input.InputNumber) => void;
}
export declare class AppModule {
}
