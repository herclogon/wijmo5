var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * A Custom Control that extends the wijmo.Control class.
 */
var MyControl = (function (_super) {
    __extends(MyControl, _super);
    /**
     * Initializes a new instance of a @see:MtControl.
     *
     * @param element The DOM element that will host the control, or a jQuery-style selector (e.g. '#theCtrl').
     * @param options JavaScript object containing initialization data for the control.
     */
    function MyControl(element, options) {
        _super.call(this, element);
        /**
         * Occurs when the button is clicked.
         */
        this.buttonClicked = new wijmo.Event();
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
    Object.defineProperty(MyControl.prototype, "caption", {
        /**
         * Gets or sets the text shown above the button.
         */
        get: function () {
            return this._lbl.textContent;
        },
        set: function (value) {
            // use asString to ensure type is correct
            this._lbl.textContent = wijmo.asString(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Raises the @see:buttonClicked event.
     */
    MyControl.prototype.onButtonClicked = function (e) {
        this.buttonClicked.raise(this, e);
    };
    /**
     * Gets the template used to instantiate @see:MyControl controls.
     */
    MyControl.controlTemplate = '<div style="cursor:default">' +
        '<p>This is <b>MyControl</b></p>' +
        '<p wj-part="lbl"></p>' +
        '<button wj-part="btn">The button!</button>' +
        '</div>';
    return MyControl;
}(wijmo.Control));
//# sourceMappingURL=MyControl.js.map