"use strict";
var router_1 = require('@angular/router');
// Application route tree. "data.caption" defines captions for navigation links in markup.
exports.routeTree = [
    {
        section: "Infrastructure",
        routes: [
            { path: '', redirectTo: 'infra/intro', pathMatch: 'full' },
            {
                path: 'infra/intro', data: { caption: 'Introduction' },
                loadChildren: 'src/components/infra/IntroCmp#IntroModule'
            },
            {
                path: 'infra/globalization', data: { caption: 'Globalization' },
                loadChildren: 'src/components/infra/GlobalizationCmp#GlobalizationModule'
            },
            {
                path: 'infra/data', data: { caption: 'CollectionView' },
                loadChildren: 'src/components/infra/DataCmp#DataModule'
            },
            {
                path: 'infra/trackChanges', data: { caption: 'Tracking Changes' },
                loadChildren: 'src/components/infra/TrackChangesCmp#TrackChangesModule'
            },
            {
                path: 'infra/odata', data: { caption: 'OData' },
                loadChildren: 'src/components/infra/ODataCmp#ODataModule'
            },
            {
                path: 'infra/controls', data: { caption: 'Controls' },
                loadChildren: 'src/components/infra/ControlsCmp#ControlsModule'
            },
            {
                path: 'infra/templates', data: { caption: 'Control Templates' },
                loadChildren: 'src/components/infra/TemplatesCmp#TemplatesModule'
            },
            {
                path: 'infra/events', data: { caption: 'Events' },
                loadChildren: 'src/components/infra/EventsCmp#EventsModule'
            },
            {
                path: 'infra/themes', data: { caption: 'Themes' },
                loadChildren: 'src/components/infra/ThemesCmp#ThemesModule'
            },
            {
                path: 'infra/tooltips', data: { caption: 'Tooltips' },
                loadChildren: 'src/components/infra/TooltipsCmp#TooltipsModule'
            },
        ]
    },
    {
        section: "Input",
        routes: [
            {
                path: 'input/inputintro', data: { caption: 'Introduction' },
                loadChildren: 'src/components/input/InputIntroCmp#InputIntroModule'
            },
            {
                path: 'input/listbox', data: { caption: 'ListBox' },
                loadChildren: 'src/components/input/ListBoxCmp#ListBoxModule'
            },
            {
                path: 'input/combo', data: { caption: 'ComboBox' },
                loadChildren: 'src/components/input/ComboBoxCmp#ComboBoxModule'
            },
            {
                path: 'input/autocomplete', data: { caption: 'AutoComplete' },
                loadChildren: 'src/components/input/AutoCompleteCmp#AutoCompleteModule'
            },
            {
                path: 'input/multiselect', data: { caption: 'MultiSelect' },
                loadChildren: 'src/components/input/MultiSelectCmp#MultiSelectModule'
            },
            {
                path: 'input/menu', data: { caption: 'Menu' },
                loadChildren: 'src/components/input/MenuCmp#MenuModule'
            },
            {
                path: 'input/datetime', data: { caption: 'Date, Time' },
                loadChildren: 'src/components/input/DateTimeCmp#DateTimeModule'
            },
            {
                path: 'input/number', data: { caption: 'Numbers' },
                loadChildren: 'src/components/input/NumbersCmp#NumbersModule'
            },
            {
                path: 'input/color', data: { caption: 'Colors' },
                loadChildren: 'src/components/input/ColorsCmp#ColorsModule'
            },
            {
                path: 'input/mask', data: { caption: 'Masked Input' },
                loadChildren: 'src/components/input/MaskedInputCmp#MaskedInputModule'
            },
            {
                path: 'input/popup', data: { caption: 'Popup' },
                loadChildren: 'src/components/input/PopupCmp#PopupModule'
            },
        ]
    },
    {
        section: "FlexGrid",
        routes: [
            {
                path: 'grid/intro', data: { caption: 'Introduction' },
                loadChildren: 'src/components/grid/GridIntroCmp#GridIntroModule'
            },
            {
                path: 'grid/grouping', data: { caption: 'Grouping' },
                loadChildren: 'src/components/grid/GridGroupingCmp#GridGroupingModule'
            },
            {
                path: 'grid/paging', data: { caption: 'Paging' },
                loadChildren: 'src/components/grid/GridPagingCmp#GridPagingModule'
            },
            {
                path: 'grid/star', data: { caption: 'Star Sizing' },
                loadChildren: 'src/components/grid/GridStarSizingCmp#GridStarSizingModule'
            },
            {
                path: 'grid/columnLayout', data: { caption: 'Column Layout' },
                loadChildren: 'src/components/grid/GridColumnLayoutCmp#GridColumnLayoutModule'
            },
            {
                path: 'grid/tree', data: { caption: 'Tree View' },
                loadChildren: 'src/components/grid/GridTreeCmp#GridTreeModule'
            },
            {
                path: 'grid/merging', data: { caption: 'Cell Merging' },
                loadChildren: 'src/components/grid/GridMergingCmp#GridMergingModule'
            },
            {
                path: 'grid/unbound', data: { caption: 'Unbound Grid' },
                loadChildren: 'src/components/grid/GridUnboundCmp#GridUnboundModule'
            },
            {
                path: 'grid/ccells', data: { caption: 'Custom Cells' },
                loadChildren: 'src/components/grid/GridCustomCellsCmp#GridCustomCellsModule'
            },
            {
                path: 'grid/odata', data: { caption: 'OData' },
                loadChildren: 'src/components/grid/GridODataCmp#GridODataModule'
            },
            {
                path: 'grid/editing', data: { caption: 'Editing' },
                loadChildren: 'src/components/grid/GridEditingCmp#GridEditingModule'
            },
            {
                path: 'grid/frozen', data: { caption: 'Frozen Cells' },
                loadChildren: 'src/components/grid/GridFrozenCmp#GridFrozenModule'
            },
            {
                path: 'grid/columnfooter', data: { caption: 'Column Footers' },
                loadChildren: 'src/components/grid/GridColumnFooterCmp#GridColumnFooterModule'
            },
            {
                path: 'grid/rtl', data: { caption: 'Right To Left' },
                loadChildren: 'src/components/grid/GridRtlCmp#GridRtlModule'
            },
            {
                path: 'grid/templates', data: { caption: 'Templates' },
                loadChildren: 'src/components/grid/GridTemplatesCmp#GridTemplatesModule'
            },
            {
                path: 'grid/dynacols', data: { caption: 'Dynamic Columns' },
                loadChildren: 'src/components/grid/GridDynamicColumnsCmp#GridDynamicColumnsModule'
            },
            {
                path: 'grid/celledittempl', data: { caption: 'Cell Edit Templates' },
                loadChildren: 'src/components/grid/GridCellEditTemplatesCmp#GridCellEditTemplatesModule'
            },
            {
                path: 'grid/nodctv', data: { caption: 'No Directive' },
                loadChildren: 'src/components/grid/GridNoDctvCmp#GridNoDctvModule'
            },
            {
                path: 'grid/filter', data: { caption: 'Filter' },
                loadChildren: 'src/components/grid/GridFilterCmp#GridFilterModule'
            },
            {
                path: 'grid/grouppanel', data: { caption: 'Group Panel' },
                loadChildren: 'src/components/grid/GridGroupPanelCmp#GridGroupPanelModule'
            },
            {
                path: 'grid/rowdetails', data: { caption: 'Row Details' },
                loadChildren: 'src/components/grid/GridRowDetailsCmp#GridRowDetailsModule'
            },
            {
                path: 'grid/excelimportexport', data: { caption: 'Excel Import/Export' },
                loadChildren: 'src/components/grid/GridExcelImportExportCmp#GridExcelImportExportModule'
            },
            {
                path: 'grid/pdfexport', data: { caption: 'Pdf Export' },
                loadChildren: 'src/components/grid/GridPdfExportCmp#GridPdfExportModule'
            },
        ]
    },
    {
        section: "FlexChart",
        routes: [
            {
                path: 'chart/intro', data: { caption: 'Introduction' },
                loadChildren: 'src/components/chart/ChartIntroCmp#ChartIntroModule'
            },
            {
                path: 'chart/binding', data: { caption: 'Binding' },
                loadChildren: 'src/components/chart/ChartBindingCmp#ChartBindingModule'
            },
            {
                path: 'chart/seriesBinding', data: { caption: 'Series Binding' },
                loadChildren: 'src/components/chart/ChartSeriesBindingCmp#ChartSeriesBindingModule'
            },
            {
                path: 'chart/headerFooter', data: { caption: 'Header and Footer' },
                loadChildren: 'src/components/chart/ChartHeaderFooterCmp#ChartHeaderFooterModule'
            },
            {
                path: 'chart/hitTest', data: { caption: 'Hit Test' },
                loadChildren: 'src/components/chart/ChartHitTestCmp#ChartHitTestModule'
            },
            {
                path: 'chart/selection', data: { caption: 'Selection' },
                loadChildren: 'src/components/chart/ChartSelectionCmp#ChartSelectionModule'
            },
            {
                path: 'chart/labels', data: { caption: 'Labels' },
                loadChildren: 'src/components/chart/ChartLabelsCmp#ChartLabelsModule'
            },
            {
                path: 'chart/itemFormatter', data: { caption: 'Item Formatter' },
                loadChildren: 'src/components/chart/ChartItemFormatterCmp#ChartItemFormatterModule'
            },
            {
                path: 'chart/zoom', data: { caption: 'Zoom' },
                loadChildren: 'src/components/chart/ChartZoomCmp#ChartZoomModule'
            },
            {
                path: 'chart/bubble', data: { caption: 'Bubble' },
                loadChildren: 'src/components/chart/ChartBubbleCmp#ChartBubbleModule'
            },
            {
                path: 'chart/finance', data: { caption: 'Financial Chart' },
                loadChildren: 'src/components/chart/ChartFinanceCmp#ChartFinanceModule'
            },
            {
                path: 'chart/marker', data: { caption: 'LineMarker' },
                loadChildren: 'src/components/chart/ChartMarkerCmp#ChartMarkerModule'
            },
            {
                path: 'chart/zones', data: { caption: 'Zones' },
                loadChildren: 'src/components/chart/ChartZonesCmp#ChartZonesModule'
            },
            {
                path: 'chart/axes', data: { caption: 'Axes' },
                loadChildren: 'src/components/chart/ChartAxesCmp#ChartAxesModule'
            },
            {
                path: 'chart/plotAreas', data: { caption: 'Plot areas' },
                loadChildren: 'src/components/chart/ChartPlotAreasCmp#ChartPlotAreasModule'
            },
            {
                path: 'chart/animation', data: { caption: 'Animation' },
                loadChildren: 'src/components/chart/ChartAnimationCmp#ChartAnimationModule'
            },
            {
                path: 'chart/annotation', data: { caption: 'Annotations' },
                loadChildren: 'src/components/chart/ChartAnnotationCmp#ChartAnnotationModule'
            },
            {
                path: 'chart/rangeSelector', data: { caption: 'Range Selector' },
                loadChildren: 'src/components/chart/ChartRangeSelectorCmp#ChartRangeSelectorModule'
            },
            {
                path: 'chart/waterfall', data: { caption: 'Waterfall' },
                loadChildren: 'src/components/chart/ChartWaterfallCmp#ChartWaterfallModule'
            },
            {
                path: 'chart/trendLines', data: { caption: 'Trendline' },
                loadChildren: 'src/components/chart/ChartTrendLinesCmp#ChartTrendLinesModule'
            },
            {
                path: 'chart/sunburst', data: { caption: 'Sunburst' },
                loadChildren: 'src/components/chart/ChartSunburstCmp#ChartSunburstModule'
            },
        ]
    },
    {
        section: "FlexPie",
        routes: [
            {
                path: 'piechart/intro', data: { caption: 'Introduction' },
                loadChildren: 'src/components/piechart/PieChartIntroCmp#PieChartIntroModule'
            },
            {
                path: 'piechart/selection', data: { caption: 'Selection' },
                loadChildren: 'src/components/piechart/PieChartSelectionCmp#PieChartSelectionModule'
            },
            {
                path: 'piechart/itemFormatter', data: { caption: 'ItemFormatter' },
                loadChildren: 'src/components/piechart/PieChartItemFormatterCmp#PieChartItemFormatterModule'
            },
            {
                path: 'piechart/animation', data: { caption: 'Animation' },
                loadChildren: 'src/components/piechart/PieChartAnimationCmp#PieChartAnimationModule'
            },
        ]
    },
    {
        section: "Gauges",
        routes: [
            {
                path: 'gauge/intro', data: { caption: 'Introduction' },
                loadChildren: 'src/components/gauge/GuageIntroCmp#GuageIntroModule'
            },
            {
                path: 'gauge/linear', data: { caption: 'LinearGauge' },
                loadChildren: 'src/components/gauge/LinearGaugeCmp#LinearGaugeModule'
            },
            {
                path: 'gauge/radial', data: { caption: 'RadialGauge' },
                loadChildren: 'src/components/gauge/RadialGaugeCmp#RadialGaugeModule'
            },
            {
                path: 'gauge/bullet', data: { caption: 'BulletGraph' },
                loadChildren: 'src/components/gauge/BulletGaugeCmp#BulletGaugeModule'
            },
        ]
    },
];
// Flattens RouteTree to an array of Route(s).
function getRoutes(routeTree) {
    return routeTree.reduce(function (prev, cur, idx) {
        return prev.concat(cur.routes);
    }, []);
}
exports.routing = router_1.RouterModule.forRoot(getRoutes(exports.routeTree), { useHash: true });
//# sourceMappingURL=app.routing.js.map