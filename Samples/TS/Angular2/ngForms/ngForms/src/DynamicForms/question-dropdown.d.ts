import { QuestionBase } from './question-base';
export declare class DropdownQuestion extends QuestionBase<string> {
    controlType: string;
    options: {
        key: string;
        value: string;
    }[];
    constructor(options?: {});
}
