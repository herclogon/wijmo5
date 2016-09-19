"use strict";
var router_1 = require('@angular/router');
// Application route tree. "data.caption" defines captions for navigation links in markup.
exports.routes = [
    { path: '', redirectTo: 'flexChartAnimation', pathMatch: 'full' },
    {
        path: 'flexChartAnimation', data: { caption: 'FlexChart' },
        loadChildren: 'src/components/FlexChartAnimationCmp#FlexChartAnimationModule'
    },
    {
        path: 'flexPieAnimation', data: { caption: 'FlexPie' },
        loadChildren: 'src/components/FlexPieAnimationCmp#FlexPieAnimationModule'
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map