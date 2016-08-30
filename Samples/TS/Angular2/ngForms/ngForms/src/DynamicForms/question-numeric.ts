//Added by GrapeCity

import { QuestionBase } from './question-base';

export class NumericQuestion extends QuestionBase<number> {
    controlType = 'numeric';

    constructor(options: {} = {}) {
        super(options);
    }
}


