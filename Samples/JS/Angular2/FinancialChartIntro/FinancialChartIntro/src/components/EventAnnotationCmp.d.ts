import { DataSvc } from './../services/DataSvc';
export declare class EventAnnotationCmp {
    dataSvc: DataSvc;
    data: any[];
    header: string;
    constructor(dataSvc: DataSvc);
    private setDataSource();
}
