﻿'use strict';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// Application navigation menu service.
@Injectable()
export class MenuSvc {
    _http: Http;

    //constructor(http: Http) {
    //    this._http = http;
    //}

    getMenu(): any[] {
        var ret =
        [
            {
                "section": "Infrastructure",
                "links": [
                    { "text": "Introduction", "url": "/infra/intro", "alias": "InfraIntro" },
                    { "text": "Globalization", "url": "/infra/globalization", "alias": "Globalization" },
                    { "text": "CollectionView", "url": "/infra/data", "alias": "Data" },
                    { "text": "Tracking Changes", "url": "/infra/trackChanges", "alias": "TrackChanges" },
                    { "text": "OData", "url": "/infra/odata", "alias": "OData" },
                    { "text": "Controls", "url": "/infra/controls", "alias": "Controls" },
                    { "text": "Control Templates", "url": "/infra/templates", "alias": "Templates" },
                    { "text": "Events", "url": "/infra/events", "alias": "Events" },
                    { "text": "Themes", "url": "/infra/themes", "alias": "Themes" },
                    { "text": "Tooltips", "url": "/infra/tooltips", "alias": "Tooltips" }
                ]
            },
            {
                "section": "Input",
                "links": [
                    { "text": "Introduction", "url": "/input/inputintro", "alias": "InputIntro"},
                    { "text": "ListBox", "url": "/input/listbox", "alias": "InputListBox" },
                    { "text": "ComboBox", "url": "/input/combo", "alias": "InputCombo" },
                    { "text": "AutoComplete", "url": "/input/autocomplete", "alias": "InputAutoComplete" },
                    { "text": "MultiSelect", "url": "/input/multiselect", "alias": "InputMultiSelect" },
                    { "text": "Menu", "url": "/input/menu", "alias": "InputMenu" },
                    { "text": "Date, Time", "url": "/input/datetime", "alias": "InputDateTime" },
                    { "text": "Numbers", "url": "/input/number", "alias": "InputNumber" },
                    { "text": "Colors", "url": "/input/color", "alias": "InputColor" },
                    { "text": "Masked Input", "url": "/input/mask", "alias": "InputMask" },
                    { "text": "Popup", "url": "/input/popup", "alias": "InputPopup" }
                ]
            },
            {
                "section": "FlexGrid",
                "links": [
                    { "text": "Introduction", "url": "/grid/intro", "alias": "GridIntro" },
                    { "text": "Grouping", "url": "/grid/grouping", "alias": "GridGrouping" },
                    { "text": "Paging", "url": "/grid/paging", "alias": "GridPaging" },
                    { "text": "Star Sizing", "url": "/grid/star", "alias": "GridStarSizing" },
                    { "text": "Column Layout", "url": "/grid/columnLayout", "alias": "GridColumnLayout" },
                    { "text": "Tree View", "url": "/grid/tree", "alias": "GridTree"  },
                    { "text": "Cell Merging", "url": "/grid/merging", "alias": "GridMerging" },
                    { "text": "Unbound Grid", "url": "/grid/unbound", "alias": "GridUnbound"},
                    { "text": "Custom Cells", "url": "/grid/ccells", "alias": "GridCustomCells" },
                    { "text": "OData", "url": "/grid/odata", "alias": "GridOData" },
                    { "text": "Editing", "url": "/grid/editing", "alias": "GridEditing" },
                    { "text": "Frozen Cells", "url": "/grid/frozen", "alias": "GridFrozen"  },
                    { "text": "Right To Left", "url": "/grid/rtl", "alias": "GridRtl" },
                    { "text": "Templates", "url": "/grid/templates", "alias": "GridTemplates" },
                    { "text": "Dynamic Columns", "url": "/grid/dynacols", "alias": "GridDynaCols" },
                    { "text": "Cell Edit Templates", "url": "/grid/celledittempl", "alias": "GridCellEditTempl" },
                    { "text": "No Directive", "url": "/grid/nodctv", "alias": "GridNoDctv" },
                ]
            },
            {
                "section": "FlexChart",
                "links": [
                    { "text": "Introduction", "url": "/chart/intro", "alias": "ChartIntro" },
                    { "text": "Binding", "url": "/chart/binding", "alias": "ChartBinding" },
                    { "text": "Series Binding", "url": "/chart/seriesBinding", "alias": "ChartSeriesBinding"},
                    { "text": "Header and Footer", "url": "/chart/headerFooter", "alias": "ChartHeaderFooter" },
                    { "text": "Hit Test", "url": "/chart/hitTest", "alias": "ChartHitTest" },
                    { "text": "Selection", "url": "/chart/selection", "alias": "ChartSelection" },
                    { "text": "Labels", "url": "/chart/labels", "alias": "ChartLabels" },
                    { "text": "Item Formatter", "url": "/chart/itemFormatter", "alias": "ChartItemFormatter"},
                    { "text": "Zoom", "url": "/chart/zoom", "alias": "ChartZoom" },
                    { "text": "Bubble", "url": "/chart/bubble", "alias": "ChartBubble" },
                    { "text": "Financial Chart", "url": "/chart/finance", "alias": "ChartFinance"},
                    { "text": "LineMarker", "url": "/chart/marker", "alias": "ChartMarker" },
                    { "text": "Zones", "url": "/chart/zones", "alias": "ChartZones"  },
                    { "text": "Axes", "url": "/chart/axes", "alias": "ChartAxes" },
                    { "text": "Plot areas", "url": "/chart/plotAreas", "alias": "ChartPlotAreas" }
                ]
            },
            {
                "section": "FlexPie",
                "links": [
                    { "text": "Introduction", "url": "/piechart/intro", "alias": "PieChartIntro" },
                    { "text": "Selection", "url": "/piechart/selection", "alias": "PieChartSelection" },
                    { "text": "ItemFormatter", "url": "/piechart/itemFormatter", "alias": "PieChartItemFormatter" }
                ]
            },
            {
                "section": "Gauges",
                "links": [
                    { "text": "Introduction", "url": "/gauge/intro", "alias": "GaugeIntro" },
                    { "text": "LinearGauge", "url": "/gauge/linear", "alias": "GaugeLinear" },
                    { "text": "RadialGauge", "url": "/gauge/radial", "alias": "GaugeRadial" },
                    { "text": "BulletGraph", "url": "/gauge/bullet", "alias": "GaugeBullet" }
                ]
            }
            ];

        return ret;

        //return this._http.get('data/menu.json').

        //return $http.get('data/menu.json')
        //    .then(function (result) {
        //        return result.data;
        //    });
    }

}