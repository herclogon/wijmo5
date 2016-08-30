///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, provide, Input, Inject, enableProdMode } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// Services
import { MenuSvc } from './services/MenuSvc';
import { DataSvc } from './services/DataSvc';
import { SparkSvc } from './services/SparkSvc';
// Wijmo Input components 
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

// Sample components
// Infrastructure
import { IntroCmp } from './components/infra/IntroCmp';
import { GlobalizationCmp } from './components/infra/GlobalizationCmp';
import { DataCmp } from './components/infra/DataCmp';
import { TrackChangesCmp } from './components/infra/TrackChangesCmp';
import { ODataCmp } from './components/infra/ODataCmp';
import { ControlsCmp } from './components/infra/ControlsCmp';
import { EventsCmp } from './components/infra/EventsCmp';
import { ThemesCmp } from './components/infra/ThemesCmp';
import { TooltipsCmp } from './components/infra/TooltipsCmp';
import { TemplatesCmp } from './components/infra/TemplatesCmp';
// Input
import { ComboBoxCmp } from './components/input/ComboBoxCmp';
import { ListBoxCmp } from './components/input/ListBoxCmp';
import { MenuCmp } from './components/input/MenuCmp';
import { AutoCompleteCmp } from './components/input/AutoCompleteCmp';
import { MultiSelectCmp } from './components/input/MultiSelectCmp';
import { DateTimeCmp } from './components/input/DateTimeCmp';
import { NumbersCmp } from './components/input/NumbersCmp';
import { ColorsCmp } from './components/input/ColorsCmp';
import { MaskedInputCmp } from './components/input/MaskedInputCmp';
import { PopupCmp } from './components/input/PopupCmp';
import { InputIntroCmp } from './components/input/InputIntroCmp';
// Grid
import { GridIntroCmp } from './components/grid/GridIntroCmp';
import { GridGroupingCmp } from './components/grid/GridGroupingCmp';
import { GridPagingCmp } from './components/grid/GridPagingCmp';
import { GridTemplatesCmp } from './components/grid/GridTemplatesCmp';
import { GridDynamicColumnsCmp } from './components/grid/GridDynamicColumnsCmp';
import { GridCellEditTemplatesCmp } from './components/grid/GridCellEditTemplatesCmp';
import { GridStarSizingCmp } from './components/grid/GridStarSizingCmp';
import { GridColumnLayoutCmp } from './components/grid/GridColumnLayoutCmp';
import { GridTreeCmp } from './components/grid/GridTreeCmp';
import { GridMergingCmp } from './components/grid/GridMergingCmp';
import { GridUnboundCmp } from './components/grid/GridUnboundCmp';
import { GridCustomCellsCmp } from './components/grid/GridCustomCellsCmp';
import { GridODataCmp } from './components/grid/GridODataCmp';
import { GridEditingCmp } from './components/grid/GridEditingCmp';
import { GridFrozenCmp } from './components/grid/GridFrozenCmp';
import { GridRtlCmp } from './components/grid/GridRtlCmp';
import { GridNoDctvCmp } from './components/grid/GridNoDctvCmp';
// Chart
import { ChartIntroCmp } from './components/chart/ChartIntroCmp';
import { ChartAxesCmp } from './components/chart/ChartAxesCmp';
import { ChartBindingCmp } from './components/chart/ChartBindingCmp';
import { ChartSeriesBindingCmp } from './components/chart/ChartSeriesBindingCmp';
import { ChartHeaderFooterCmp } from './components/chart/ChartHeaderFooterCmp';
import { ChartHitTestCmp } from './components/chart/ChartHitTestCmp';
import { ChartSelectionCmp } from './components/chart/ChartSelectionCmp';
import { ChartLabelsCmp } from './components/chart/ChartLabelsCmp';
import { ChartItemFormatterCmp } from './components/chart/ChartItemFormatterCmp';
import { ChartZoomCmp } from './components/chart/ChartZoomCmp';
import { ChartBubbleCmp } from './components/chart/ChartBubbleCmp';
import { ChartFinanceCmp } from './components/chart/ChartFinanceCmp';
import { ChartMarkerCmp } from './components/chart/ChartMarkerCmp';
import { ChartZonesCmp } from './components/chart/ChartZonesCmp';
import { ChartPlotAreasCmp } from './components/chart/ChartPlotAreasCmp';
// Pie
import { PieChartIntroCmp } from './components/piechart/PieChartIntroCmp';
import { PieChartSelectionCmp } from './components/piechart/PieChartSelectionCmp';
import { PieChartItemFormatterCmp } from './components/piechart/PieChartItemFormatterCmp';
// Gauge
import { GuageIntroCmp } from './components/gauge/GuageIntroCmp';
import { LinearGaugeCmp } from './components/gauge/LinearGaugeCmp';
import { RadialGaugeCmp } from './components/gauge/RadialGaugeCmp';
import { BulletGaugeCmp } from './components/gauge/BulletGaugeCmp';


export module explorer {
    'use strict';

    // The Explorer application root component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html',
        directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem,
            wjNg2Input.WjMenuSeparator]
    })
    @RouteConfig([
        { path: '/', redirectTo: ['InfraIntro'] },
        // Infra
        { path: '/infra/intro', component: IntroCmp, name: 'InfraIntro' },
        { path: '/infra/globalization', component: GlobalizationCmp, name: 'Globalization' },
        { path: '/infra/data', component: DataCmp, name: 'Data' },
        { path: '/infra/trackChanges', component: TrackChangesCmp, name: 'TrackChanges' },
        { path: '/infra/odata', component: ODataCmp, name: 'OData' },
        { path: '/infra/controls', component: ControlsCmp, name: 'Controls' },
        { path: '/infra/events', component: EventsCmp, name: 'Events' },
        { path: '/infra/themes', component: ThemesCmp, name: 'Themes' },
        { path: '/infra/templates', component: TemplatesCmp, name: 'Templates' },
        { path: '/infra/tooltips', component: TooltipsCmp, name: 'Tooltips' },
        // Input
        { path: '/input/listbox', component: ListBoxCmp, name: 'InputListBox' },
        { path: '/input/combo', component: ComboBoxCmp, name: 'InputCombo' },
        { path: '/input/menu', component: MenuCmp, name: 'InputMenu' },
        { path: '/input/autocomplete', component: AutoCompleteCmp, name: 'InputAutoComplete' },
        { path: '/input/multiselect', component: MultiSelectCmp, name: 'InputMultiSelect' },
        { path: '/input/datetime', component: DateTimeCmp, name: 'InputDateTime' },
        { path: '/input/number', component: NumbersCmp, name: 'InputNumber' },
        { path: '/input/color', component: ColorsCmp, name: 'InputColor' },
        { path: '/input/mask', component: MaskedInputCmp, name: 'InputMask' },
        { path: '/input/popup', component: PopupCmp, name: 'InputPopup' },
        { path: '/input/inputintro', component: InputIntroCmp, name: 'InputIntro' },
        // Grid 
        { path: '/grid/intro', component: GridIntroCmp, name: 'GridIntro' },
        { path: '/grid/grouping', component: GridGroupingCmp, name: 'GridGrouping' },
        { path: '/grid/paging', component: GridPagingCmp, name: 'GridPaging' },
        { path: '/grid/star', component: GridStarSizingCmp, name: 'GridStarSizing' },
        { path: '/grid/templates', component: GridTemplatesCmp, name: 'GridTemplates' },
        { path: '/grid/dynacols', component: GridDynamicColumnsCmp, name: 'GridDynaCols' },
        { path: '/grid/celledittempl', component: GridCellEditTemplatesCmp, name: 'GridCellEditTempl' },
        { path: '/grid/columnlayout', component: GridColumnLayoutCmp, name: 'GridColumnLayout' },
        { path: '/grid/tree', component: GridTreeCmp, name: 'GridTree' },
        { path: '/grid/merging', component: GridMergingCmp, name: 'GridMerging' },
        { path: '/grid/unbound', component: GridUnboundCmp, name: 'GridUnbound' },
        { path: '/grid/ccells', component: GridCustomCellsCmp, name: 'GridCustomCells' },
        { path: '/grid/odata', component: GridODataCmp, name: 'GridOData' },
        { path: '/grid/editing', component: GridEditingCmp, name: 'GridEditing' },
        { path: '/grid/frozen', component: GridFrozenCmp, name: 'GridFrozen' },
        { path: '/grid/rtl', component: GridRtlCmp, name: 'GridRtl' },
        { path: '/grid/nodctv', component: GridNoDctvCmp, name: 'GridNoDctv' },
        // Chart
        { path: '/chart/intro', component: ChartIntroCmp, name: 'ChartIntro' },
        { path: '/chart/axes', component: ChartAxesCmp, name: 'ChartAxes' },
        { path: '/chart/binding', component: ChartBindingCmp, name: 'ChartBinding' },
        { path: '/chart/seriesBinding', component: ChartSeriesBindingCmp, name: 'ChartSeriesBinding' },
        { path: '/chart/headerFooter', component: ChartHeaderFooterCmp, name: 'ChartHeaderFooter' },
        { path: '/chart/hitTest', component: ChartHitTestCmp, name: 'ChartHitTest' },
        { path: '/chart/selection', component: ChartSelectionCmp, name: 'ChartSelection' },
        { path: '/chart/labels', component: ChartLabelsCmp, name: 'ChartLabels' },
        { path: '/chart/itemFormatter', component: ChartItemFormatterCmp, name: 'ChartItemFormatter' },
        { path: '/chart/zoom', component: ChartZoomCmp, name: 'ChartZoom' },
        { path: '/chart/bubble', component: ChartBubbleCmp, name: 'ChartBubble' },
        { path: '/chart/finance', component: ChartFinanceCmp, name: 'ChartFinance' },
        { path: '/chart/marker', component: ChartMarkerCmp, name: 'ChartMarker' },
        { path: '/chart/zones', component: ChartZonesCmp, name: 'ChartZones' },
        { path: '/chart/plotAreas', component: ChartPlotAreasCmp, name: 'ChartPlotAreas' },
        // Pie
        { path: '/piechart/intro', component: PieChartIntroCmp, name: 'PieChartIntro' },
        { path: '/piechart/selection', component: PieChartSelectionCmp, name: 'PieChartSelection' },
        { path: '/piechart/itemFormatter', component: PieChartItemFormatterCmp, name: 'PieChartItemFormatter' },
        // Gauge
        { path: '/gauge/intro', component: GuageIntroCmp, name: 'GaugeIntro' },
        { path: '/gauge/linear', component: LinearGaugeCmp, name: 'GaugeLinear' },
        { path: '/gauge/radial', component: RadialGaugeCmp, name: 'GaugeRadial' },
        { path: '/gauge/bullet', component: BulletGaugeCmp, name: 'GaugeBullet' },
    ])

    export class AppCmp {
        private _activeTheme = '';

        @Input() menuData;
        @Input() navCollapsed = true;

        constructor(@Inject(MenuSvc) menuSvc: MenuSvc) {
            this.menuData = menuSvc.getMenu();
        }

        get activeTheme(): string {
            return this._activeTheme;
        }
        set activeTheme(value: string) {
            if (this._activeTheme != value) {
                this._activeTheme = value;
                let themeLink = <HTMLLinkElement>document.getElementById('activeThemeLink');
                if (themeLink) {
                    themeLink.href = value;
                }
            }
        }
    }
}

enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(explorer.AppCmp, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    MenuSvc,
    DataSvc,
    SparkSvc
]);