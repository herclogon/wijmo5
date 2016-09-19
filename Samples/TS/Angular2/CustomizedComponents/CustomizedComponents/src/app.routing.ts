import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Application route tree. "data.caption" defines captions for navigation links in markup.
export const routes: Routes = [
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

export const routing: ModuleWithProviders =
    RouterModule.forRoot(routes, { useHash: true });