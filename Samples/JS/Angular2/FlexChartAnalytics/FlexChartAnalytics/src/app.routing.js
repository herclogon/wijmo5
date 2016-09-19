"use strict";
var router_1 = require('@angular/router');
// Application route tree. "data.caption" defines captions for navigation links in markup.
exports.routeTree = [
    {
        section: "Analytics",
        routes: [
            { path: '', redirectTo: 'trendLine', pathMatch: 'full' },
            { path: 'trendLine', data: { caption: 'TrendLine' }, loadChildren: 'src/components/TrendLineCmp#TrendLineModule' },
            { path: 'movingAverage', data: { caption: 'MovingAverage' }, loadChildren: 'src/components/MovingAverageCmp#MovingAverageModule' },
            { path: 'yFunctionSeries', data: { caption: 'YFunctionSeries' }, loadChildren: 'src/components/YFunctionSeriesCmp#YFunctionSeriesModule' },
            { path: 'parametricFunctionSeries', data: { caption: 'Parametric FunctionSeries' }, loadChildren: 'src/components/ParametricFunctionSeriesCmp#ParametricFunctionSeriesModule' },
            { path: 'waterfall', data: { caption: 'Waterfall' }, loadChildren: 'src/components/WaterfallCmp#WaterfallModule' },
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