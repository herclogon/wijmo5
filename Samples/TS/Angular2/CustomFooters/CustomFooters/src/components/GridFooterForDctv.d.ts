import { ElementRef, ViewContainerRef } from '@angular/core';
import { Injector } from '@angular/core';
import * as ngCore from '@angular/core';
import * as WjFlexGrid from 'wijmo/wijmo.angular2.grid';
export declare class GridFooterFor implements ngCore.OnInit, ngCore.OnDestroy {
    private _flex;
    viewContainerRef: ViewContainerRef;
    elRef: ElementRef;
    gridFooterFor: wijmo.grid.FlexGrid;
    static GRID_FOOTER_CLASS: string;
    constructor(_flex: WjFlexGrid.WjFlexGrid, viewContainerRef: ViewContainerRef, elRef: ElementRef, injector: Injector);
    ngOnInit(): void;
    _syncCols(): void;
    ngOnDestroy(): void;
}
