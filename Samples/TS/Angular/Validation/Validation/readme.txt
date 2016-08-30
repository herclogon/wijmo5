Validation
---------------------------------------------------------------------
Shows how to implement HTML5 and AngularJS form validation using the wjValidationError directive.

The wjValidationError directive can be used in regular HTML5 forms and
also in AngularJS forms to provide validation based on JavaScript expressions.

Standard HTML and AngularJS validation rules are enough to express rules that 
depend only on the value of a single field. For example, 'required', 'minlength', 
or 'pattern'.

But in some cases the validity of a field may depend on the value of other fields.
For example, you may want to make sure the password is different from the user name,
or the "check password" field contains the same value as the "password" field, or
that a date selected does not fall on a weekend or holiday.

The "wjValidationError" directive allows you to use JavaScript to define validation
conditions. These may be a single line of code or a call to methods in your controller.

The sample shows how the "wjValidationError" directive can be used in plain HTML5 as 
well as in AngularJS form validation scenarios.

To learn more about the HTML5 validation API, see

https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation

To learn more about AngularJS Forms Validation, see

https://docs.angularjs.org/guide/forms

