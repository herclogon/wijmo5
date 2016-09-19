'use strict';

import { Component, EventEmitter, Inject, Output, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

// Base class for all form components.
@Component({
    selector: '',
    templateUrl: ''
})
export abstract class FrmBaseCmp {
    @Output() submit = new EventEmitter();

    // Triggers the 'submit' event and shows the specified message.
    onSubmit(message: string) {
        this.submit.next(null);
        if (message) {
            alert(message);
        }
    }
}


