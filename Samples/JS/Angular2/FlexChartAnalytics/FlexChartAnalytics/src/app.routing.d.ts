import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';
export declare type RouteTree = {
    section: string;
    routes: Routes;
}[];
export declare const routeTree: RouteTree;
export declare const routing: ModuleWithProviders;
