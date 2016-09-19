(function (wijmo) {
    'use strict';

    var socialSecurity = new wijmo.input.InputMask('#imSocial'),
        phoneNumber = new wijmo.input.InputMask('#imPhone'),
        customMaskInput = new wijmo.input.InputMask('#imCustomInput'),
        customMaskTrial = new wijmo.input.InputMask('#imCustomTrial'),
        inputDate = new wijmo.input.InputDate('#imInputDate'),
        inputTime = new wijmo.input.InputTime('#imInputTime'),
        today = new Date();

    socialSecurity.mask = '000-00-0000';
    phoneNumber.mask = '(999) 000-0000';

    // valueChanged event handler
    customMaskInput.valueChanged.addHandler(function(sender) {
        customMaskTrial.mask = sender.value;
        customMaskTrial.hostElement.title = 'Mask: ' + (sender.value || 'N/A');
    });
    customMaskInput.isRequired = false;
    customMaskInput.placeholder = 'Enter an input mask...';
    customMaskInput.value = null;

    customMaskTrial.isRequired = false;
    customMaskTrial.placeholder = 'Try your input mask...';

    inputDate.value = today;
    inputDate.format = 'd';
    inputDate.mask = '99/99/9999';

    inputTime.value = today;
    inputTime.format = 't';
    inputTime.step = 15;
    inputTime.isEditable = true;
    inputTime.mask = '00:00 >LL';

})(wijmo);