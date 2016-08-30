import { FormGroup } from '@angular/forms';
import { QuestionBase } from './question-base';
export declare class QuestionControlService {
    constructor();
    toFormGroup(questions: QuestionBase<any>[]): FormGroup;
}
