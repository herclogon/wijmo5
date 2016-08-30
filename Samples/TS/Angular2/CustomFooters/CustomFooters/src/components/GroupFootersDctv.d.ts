import { ElementRef } from '@angular/core';
import { Injector } from '@angular/core';
import * as ngCore from '@angular/core';
import * as WjFlexGrid from 'wijmo/wijmo.angular2.grid';
export declare class GroupFooters implements ngCore.OnInit, ngCore.OnDestroy {
    private _flex;
    elRef: ElementRef;
    static ROW_FOOTER_CLASS: string;
    constructor(_flex: WjFlexGrid.WjFlexGrid, elRef: ElementRef, injector: Injector);
    ngOnInit(): void;
    private _addGroupFooters();
    private _findFooterIndex(r);
    ngOnDestroy(): void;
}
