///<reference path="../typings/globals/core-js/index.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Angular
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_2 = require('@angular/common');
// Services
var MenuSvc_1 = require('./services/MenuSvc');
var DataSvc_1 = require('./services/DataSvc');
var SparkSvc_1 = require('./services/SparkSvc');
// Wijmo Input components 
var wjNg2Input = require('wijmo/wijmo.angular2.input');
// Sample components
// Infrastructure
var IntroCmp_1 = require('./components/infra/IntroCmp');
var GlobalizationCmp_1 = require('./components/infra/GlobalizationCmp');
var DataCmp_1 = require('./components/infra/DataCmp');
var TrackChangesCmp_1 = require('./components/infra/TrackChangesCmp');
var ODataCmp_1 = require('./components/infra/ODataCmp');
var ControlsCmp_1 = require('./components/infra/ControlsCmp');
var EventsCmp_1 = require('./components/infra/EventsCmp');
var ThemesCmp_1 = require('./components/infra/ThemesCmp');
var TooltipsCmp_1 = require('./components/infra/TooltipsCmp');
var TemplatesCmp_1 = require('./components/infra/TemplatesCmp');
// Input
var ComboBoxCmp_1 = require('./components/input/ComboBoxCmp');
var ListBoxCmp_1 = require('./components/input/ListBoxCmp');
var MenuCmp_1 = require('./components/input/MenuCmp');
var AutoCompleteCmp_1 = require('./components/input/AutoCompleteCmp');
var MultiSelectCmp_1 = require('./components/input/MultiSelectCmp');
var DateTimeCmp_1 = require('./components/input/DateTimeCmp');
var NumbersCmp_1 = require('./components/input/NumbersCmp');
var ColorsCmp_1 = require('./components/input/ColorsCmp');
var MaskedInputCmp_1 = require('./components/input/MaskedInputCmp');
var PopupCmp_1 = require('./components/input/PopupCmp');
var InputIntroCmp_1 = require('./components/input/InputIntroCmp');
// Grid
var GridIntroCmp_1 = require('./components/grid/GridIntroCmp');
var GridGroupingCmp_1 = require('./components/grid/GridGroupingCmp');
var GridPagingCmp_1 = require('./components/grid/GridPagingCmp');
var GridTemplatesCmp_1 = require('./components/grid/GridTemplatesCmp');
var GridDynamicColumnsCmp_1 = require('./components/grid/GridDynamicColumnsCmp');
var GridCellEditTemplatesCmp_1 = require('./components/grid/GridCellEditTemplatesCmp');
var GridStarSizingCmp_1 = require('./components/grid/GridStarSizingCmp');
var GridColumnLayoutCmp_1 = require('./components/grid/GridColumnLayoutCmp');
var GridTreeCmp_1 = require('./components/grid/GridTreeCmp');
var GridMergingCmp_1 = require('./components/grid/GridMergingCmp');
var GridUnboundCmp_1 = require('./components/grid/GridUnboundCmp');
var GridCustomCellsCmp_1 = require('./components/grid/GridCustomCellsCmp');
var GridODataCmp_1 = require('./components/grid/GridODataCmp');
var GridEditingCmp_1 = require('./components/grid/GridEditingCmp');
var GridFrozenCmp_1 = require('./components/grid/GridFrozenCmp');
var GridRtlCmp_1 = require('./components/grid/GridRtlCmp');
var GridNoDctvCmp_1 = require('./components/grid/GridNoDctvCmp');
// Chart
var ChartIntroCmp_1 = require('./components/chart/ChartIntroCmp');
var ChartAxesCmp_1 = require('./components/chart/ChartAxesCmp');
var ChartBindingCmp_1 = require('./components/chart/ChartBindingCmp');
var ChartSeriesBindingCmp_1 = require('./components/chart/ChartSeriesBindingCmp');
var ChartHeaderFooterCmp_1 = require('./components/chart/ChartHeaderFooterCmp');
var ChartHitTestCmp_1 = require('./components/chart/ChartHitTestCmp');
var ChartSelectionCmp_1 = require('./components/chart/ChartSelectionCmp');
var ChartLabelsCmp_1 = require('./components/chart/ChartLabelsCmp');
var ChartItemFormatterCmp_1 = require('./components/chart/ChartItemFormatterCmp');
var ChartZoomCmp_1 = require('./components/chart/ChartZoomCmp');
var ChartBubbleCmp_1 = require('./components/chart/ChartBubbleCmp');
var ChartFinanceCmp_1 = require('./components/chart/ChartFinanceCmp');
var ChartMarkerCmp_1 = require('./components/chart/ChartMarkerCmp');
var ChartZonesCmp_1 = require('./components/chart/ChartZonesCmp');
var ChartPlotAreasCmp_1 = require('./components/chart/ChartPlotAreasCmp');
// Pie
var PieChartIntroCmp_1 = require('./components/piechart/PieChartIntroCmp');
var PieChartSelectionCmp_1 = require('./components/piechart/PieChartSelectionCmp');
var PieChartItemFormatterCmp_1 = require('./components/piechart/PieChartItemFormatterCmp');
// Gauge
var GuageIntroCmp_1 = require('./components/gauge/GuageIntroCmp');
var LinearGaugeCmp_1 = require('./components/gauge/LinearGaugeCmp');
var RadialGaugeCmp_1 = require('./components/gauge/RadialGaugeCmp');
var BulletGaugeCmp_1 = require('./components/gauge/BulletGaugeCmp');
var explorer;
(function (explorer) {
    'use strict';
    // The Explorer application root component.
    var AppCmp = (function () {
        function AppCmp(menuSvc) {
            this._activeTheme = '';
            this.navCollapsed = true;
            this.menuData = menuSvc.getMenu();
        }
        Object.defineProperty(AppCmp.prototype, "activeTheme", {
            get: function () {
                return this._activeTheme;
            },
            set: function (value) {
                if (this._activeTheme != value) {
                    this._activeTheme = value;
                    var themeLink = document.getElementById('activeThemeLink');
                    if (themeLink) {
                        themeLink.href = value;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            core_1.Input()
        ], AppCmp.prototype, "menuData", void 0);
        __decorate([
            core_1.Input()
        ], AppCmp.prototype, "navCollapsed", void 0);
        AppCmp = __decorate([
            core_1.Component({
                selector: 'app-cmp',
                templateUrl: 'src/app.html',
                directives: [common_1.CORE_DIRECTIVES, router_deprecated_1.ROUTER_DIRECTIVES, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem,
                    wjNg2Input.WjMenuSeparator]
            }),
            router_deprecated_1.RouteConfig([
                { path: '/', redirectTo: ['InfraIntro'] },
                // Infra
                { path: '/infra/intro', component: IntroCmp_1.IntroCmp, name: 'InfraIntro' },
                { path: '/infra/globalization', component: GlobalizationCmp_1.GlobalizationCmp, name: 'Globalization' },
                { path: '/infra/data', component: DataCmp_1.DataCmp, name: 'Data' },
                { path: '/infra/trackChanges', component: TrackChangesCmp_1.TrackChangesCmp, name: 'TrackChanges' },
                { path: '/infra/odata', component: ODataCmp_1.ODataCmp, name: 'OData' },
                { path: '/infra/controls', component: ControlsCmp_1.ControlsCmp, name: 'Controls' },
                { path: '/infra/events', component: EventsCmp_1.EventsCmp, name: 'Events' },
                { path: '/infra/themes', component: ThemesCmp_1.ThemesCmp, name: 'Themes' },
                { path: '/infra/templates', component: TemplatesCmp_1.TemplatesCmp, name: 'Templates' },
                { path: '/infra/tooltips', component: TooltipsCmp_1.TooltipsCmp, name: 'Tooltips' },
                // Input
                { path: '/input/listbox', component: ListBoxCmp_1.ListBoxCmp, name: 'InputListBox' },
                { path: '/input/combo', component: ComboBoxCmp_1.ComboBoxCmp, name: 'InputCombo' },
                { path: '/input/menu', component: MenuCmp_1.MenuCmp, name: 'InputMenu' },
                { path: '/input/autocomplete', component: AutoCompleteCmp_1.AutoCompleteCmp, name: 'InputAutoComplete' },
                { path: '/input/multiselect', component: MultiSelectCmp_1.MultiSelectCmp, name: 'InputMultiSelect' },
                { path: '/input/datetime', component: DateTimeCmp_1.DateTimeCmp, name: 'InputDateTime' },
                { path: '/input/number', component: NumbersCmp_1.NumbersCmp, name: 'InputNumber' },
                { path: '/input/color', component: ColorsCmp_1.ColorsCmp, name: 'InputColor' },
                { path: '/input/mask', component: MaskedInputCmp_1.MaskedInputCmp, name: 'InputMask' },
                { path: '/input/popup', component: PopupCmp_1.PopupCmp, name: 'InputPopup' },
                { path: '/input/inputintro', component: InputIntroCmp_1.InputIntroCmp, name: 'InputIntro' },
                // Grid 
                { path: '/grid/intro', component: GridIntroCmp_1.GridIntroCmp, name: 'GridIntro' },
                { path: '/grid/grouping', component: GridGroupingCmp_1.GridGroupingCmp, name: 'GridGrouping' },
                { path: '/grid/paging', component: GridPagingCmp_1.GridPagingCmp, name: 'GridPaging' },
                { path: '/grid/star', component: GridStarSizingCmp_1.GridStarSizingCmp, name: 'GridStarSizing' },
                { path: '/grid/templates', component: GridTemplatesCmp_1.GridTemplatesCmp, name: 'GridTemplates' },
                { path: '/grid/dynacols', component: GridDynamicColumnsCmp_1.GridDynamicColumnsCmp, name: 'GridDynaCols' },
                { path: '/grid/celledittempl', component: GridCellEditTemplatesCmp_1.GridCellEditTemplatesCmp, name: 'GridCellEditTempl' },
                { path: '/grid/columnlayout', component: GridColumnLayoutCmp_1.GridColumnLayoutCmp, name: 'GridColumnLayout' },
                { path: '/grid/tree', component: GridTreeCmp_1.GridTreeCmp, name: 'GridTree' },
                { path: '/grid/merging', component: GridMergingCmp_1.GridMergingCmp, name: 'GridMerging' },
                { path: '/grid/unbound', component: GridUnboundCmp_1.GridUnboundCmp, name: 'GridUnbound' },
                { path: '/grid/ccells', component: GridCustomCellsCmp_1.GridCustomCellsCmp, name: 'GridCustomCells' },
                { path: '/grid/odata', component: GridODataCmp_1.GridODataCmp, name: 'GridOData' },
                { path: '/grid/editing', component: GridEditingCmp_1.GridEditingCmp, name: 'GridEditing' },
                { path: '/grid/frozen', component: GridFrozenCmp_1.GridFrozenCmp, name: 'GridFrozen' },
                { path: '/grid/rtl', component: GridRtlCmp_1.GridRtlCmp, name: 'GridRtl' },
                { path: '/grid/nodctv', component: GridNoDctvCmp_1.GridNoDctvCmp, name: 'GridNoDctv' },
                // Chart
                { path: '/chart/intro', component: ChartIntroCmp_1.ChartIntroCmp, name: 'ChartIntro' },
                { path: '/chart/axes', component: ChartAxesCmp_1.ChartAxesCmp, name: 'ChartAxes' },
                { path: '/chart/binding', component: ChartBindingCmp_1.ChartBindingCmp, name: 'ChartBinding' },
                { path: '/chart/seriesBinding', component: ChartSeriesBindingCmp_1.ChartSeriesBindingCmp, name: 'ChartSeriesBinding' },
                { path: '/chart/headerFooter', component: ChartHeaderFooterCmp_1.ChartHeaderFooterCmp, name: 'ChartHeaderFooter' },
                { path: '/chart/hitTest', component: ChartHitTestCmp_1.ChartHitTestCmp, name: 'ChartHitTest' },
                { path: '/chart/selection', component: ChartSelectionCmp_1.ChartSelectionCmp, name: 'ChartSelection' },
                { path: '/chart/labels', component: ChartLabelsCmp_1.ChartLabelsCmp, name: 'ChartLabels' },
                { path: '/chart/itemFormatter', component: ChartItemFormatterCmp_1.ChartItemFormatterCmp, name: 'ChartItemFormatter' },
                { path: '/chart/zoom', component: ChartZoomCmp_1.ChartZoomCmp, name: 'ChartZoom' },
                { path: '/chart/bubble', component: ChartBubbleCmp_1.ChartBubbleCmp, name: 'ChartBubble' },
                { path: '/chart/finance', component: ChartFinanceCmp_1.ChartFinanceCmp, name: 'ChartFinance' },
                { path: '/chart/marker', component: ChartMarkerCmp_1.ChartMarkerCmp, name: 'ChartMarker' },
                { path: '/chart/zones', component: ChartZonesCmp_1.ChartZonesCmp, name: 'ChartZones' },
                { path: '/chart/plotAreas', component: ChartPlotAreasCmp_1.ChartPlotAreasCmp, name: 'ChartPlotAreas' },
                // Pie
                { path: '/piechart/intro', component: PieChartIntroCmp_1.PieChartIntroCmp, name: 'PieChartIntro' },
                { path: '/piechart/selection', component: PieChartSelectionCmp_1.PieChartSelectionCmp, name: 'PieChartSelection' },
                { path: '/piechart/itemFormatter', component: PieChartItemFormatterCmp_1.PieChartItemFormatterCmp, name: 'PieChartItemFormatter' },
                // Gauge
                { path: '/gauge/intro', component: GuageIntroCmp_1.GuageIntroCmp, name: 'GaugeIntro' },
                { path: '/gauge/linear', component: LinearGaugeCmp_1.LinearGaugeCmp, name: 'GaugeLinear' },
                { path: '/gauge/radial', component: RadialGaugeCmp_1.RadialGaugeCmp, name: 'GaugeRadial' },
                { path: '/gauge/bullet', component: BulletGaugeCmp_1.BulletGaugeCmp, name: 'GaugeBullet' },
            ]),
            __param(0, core_1.Inject(MenuSvc_1.MenuSvc))
        ], AppCmp);
        return AppCmp;
    }());
    explorer.AppCmp = AppCmp;
})(explorer = exports.explorer || (exports.explorer = {}));
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.bootstrap(explorer.AppCmp, [
    router_deprecated_1.ROUTER_PROVIDERS,
    core_1.provide(common_2.LocationStrategy, { useClass: common_2.HashLocationStrategy }),
    MenuSvc_1.MenuSvc,
    DataSvc_1.DataSvc,
    SparkSvc_1.SparkSvc
]);
//# sourceMappingURL=app.js.map