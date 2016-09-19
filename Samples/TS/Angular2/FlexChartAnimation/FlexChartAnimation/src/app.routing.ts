import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Application route tree. "data.caption" defines captions for navigation links in markup.
export const routes: Routes = [
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

export const routing: ModuleWithProviders =
    RouterModule.forRoot(routes, { useHash: true });