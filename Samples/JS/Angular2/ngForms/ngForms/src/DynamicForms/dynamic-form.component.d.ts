import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';
export declare class DynamicFormComponent implements OnInit {
    private qcs;
    questions: QuestionBase<any>[];
    form: FormGroup;
    payLoad: string;
    constructor(qcs: QuestionControlService);
    ngOnInit(): void;
    onSubmit(): void;
}
