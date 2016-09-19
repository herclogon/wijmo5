import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export type RouteTree = { section: string, routes: Routes }[];
// Application route tree. "data.caption" defines captions for navigation links in markup.
export const routeTree: RouteTree = [
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
function getRoutes(routeTree: RouteTree): Routes {
    return routeTree.reduce((prev, cur, idx) => {
        return prev.concat(cur.routes);
    }, <Routes>[]);
}

export const routing: ModuleWithProviders =
    RouterModule.forRoot(getRoutes(routeTree), { useHash: true });

