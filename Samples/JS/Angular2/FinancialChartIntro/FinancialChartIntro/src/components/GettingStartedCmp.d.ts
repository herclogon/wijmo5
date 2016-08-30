import { DataSvc } from './../services/DataSvc';
export declare class GettingStartedCmp {
    dataSvc: DataSvc;
    data: any[];
    header: string;
    constructor(dataSvc: DataSvc);
    private setDataSource();
}
