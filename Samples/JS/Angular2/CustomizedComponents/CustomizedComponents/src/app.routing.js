"use strict";
var router_1 = require('@angular/router');
// Application route tree. "data.caption" defines captions for navigation links in markup.
exports.routes = [
    { path: '', redirectTo: 'inheritedGridView', pathMatch: 'full' },
    {
        path: 'inheritedGridView',
        loadChildren: 'src/views/InheritedGridView#InheritedGridViewModule'
    },
    {
        path: 'aggregatedGridView',
        loadChildren: 'src/views/AggregatedGridView#AggregatedGridViewModule'
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map