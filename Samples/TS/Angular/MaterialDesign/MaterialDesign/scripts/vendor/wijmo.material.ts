namespace wijmo.material {

    // bootstrap Wijmo's MDL support when the document loads
    document.addEventListener('DOMContentLoaded', function () {
        bootstrap();
    });

    /**
     * Add Wijmo support for MDL's tabs and text input containers.
     */
    export function bootstrap() {
        _bootstrapTabs();
        _bootstrapTextFields(true);
    }

    // invalidate Wijmo controls when the user switches tabs
    // so they will be laid our to fit the containing tab pane
    function _bootstrapTabs() {
        var tabs = document.querySelectorAll('.mdl-tabs__tab-bar');
        for (var i = 0; i < tabs.length; i++) {
            var tab = tabs[i];
            tab.addEventListener('click', function (e) {
                if (wijmo.contains(tab, e.target)) {
                    wijmo.Control.invalidateAll(tab.parentElement);
                    _bootstrapTextFields(false);
                }
            });
        }
    }

    // add event handlers to 
    // update the state of mdl-textfield elements containing Wijmo Input controls
    function _bootstrapTextFields(addHandlers) {
        var controls = document.querySelectorAll('.mdl-textfield>.wj-control');
        for (var i = 0; i < controls.length; i++) {
            var ctl = <any>wijmo.Control.getControl(controls[i]);
            if (ctl) {
                _updateTextFieldState(ctl);
                if (addHandlers) {
                    if (ctl.placeholder) {
                        ctl.placeholder = '';
                    }
                    //ctl.hostElement.style.width = '100%';
                    ctl.gotFocus.addHandler(_updateTextFieldState);
                    ctl.lostFocus.addHandler(_updateTextFieldState);
                    if (ctl.textChanged) {
                        ctl.textChanged.addHandler(_updateTextFieldState);
                    }
                    if (ctl.valueChanged) {
                        ctl.valueChanged.addHandler(_updateTextFieldState);
                    }
                    if (ctl.isDroppedDownChanged) {
                        ctl.isDroppedDownChanged.addHandler(_updateTextFieldState);
                    }
                }
            }
        }
    }

    // update the state of mdl-textfield elements containing Wijmo Input controls
    function _updateTextFieldState(s) {
        var container = <HTMLElement>wijmo.closest(s.hostElement, '.mdl-textfield'),
            input = s.hostElement.querySelector('input');
        if (container && input) {
            wijmo.toggleClass(input, 'md-input', true);
            wijmo.toggleClass(container, 'is-dirty', input.value.length > 0);
            wijmo.toggleClass(container, 'is-focused', s.containsFocus());
            wijmo.toggleClass(container, 'is-invalid', !input.validity.valid);
        }
    }
}