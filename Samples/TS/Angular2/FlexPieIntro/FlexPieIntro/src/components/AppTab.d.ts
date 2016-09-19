import { QueryList, AfterContentInit } from '@angular/core';
export declare class AppTab implements AfterContentInit {
    panes: QueryList<AppTabPane>;
    constructor();
    select(pane: AppTabPane): void;
    ngAfterContentInit(): void;
}
export declare class AppTabPane {
    title: string;
    selected: boolean;
}
export declare class TabsModule {
}
