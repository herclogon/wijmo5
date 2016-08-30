export declare class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    constructor(options?: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
    });
}
