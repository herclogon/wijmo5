
/**
 * A Custom Control that extends the wijmo.Control class.
 */
class MyControl extends wijmo.Control {

    // references to inner elements
    _lbl: HTMLElement;
    _btn: HTMLButtonElement;

    /**
     * Gets the template used to instantiate @see:MyControl controls.
     */
    static controlTemplate = '<div style="cursor:default">' +
        '<p>This is <b>MyControl</b></p>' +
        '<p wj-part="lbl"></p>' +
        '<button wj-part="btn">The button!</button>' +
    '</div>';

    /**
     * Initializes a new instance of a @see:MtControl.
     *
     * @param element The DOM element that will host the control, or a jQuery-style selector (e.g. '#theCtrl').
     * @param options JavaScript object containing initialization data for the control.
     */
    constructor(element: any, options?) {
        super(element);

        // instantiate and apply template
        var tpl = this.getTemplate();
        this.applyTemplate('wj-control', tpl, {
            _btn: 'btn',
            _lbl: 'lbl'
        });

        // raise buttonClicked event when the button is clicked
        var self = this;
        this._btn.addEventListener('click', function () {
            self.onButtonClicked();
        });

        // initialize control
        this.caption = 'Hello Wijmo!';
        if (options) {
            this.initialize(options);
        }
    }

    /**
     * Gets or sets the text shown above the button.
     */
    get caption(): string {
        return this._lbl.textContent;
    }
    set caption(value: string) {
        // use asString to ensure type is correct
        this._lbl.textContent = wijmo.asString(value);
    }

    /**
     * Occurs when the button is clicked.
     */
    buttonClicked = new wijmo.Event();
    /**
     * Raises the @see:buttonClicked event.
     */
    onButtonClicked(e?: wijmo.EventArgs) {
        this.buttonClicked.raise(this, e);
    }
}