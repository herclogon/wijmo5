var Editing = React.createClass({
    // initialize state
    getInitialState: function () {
        return {
            value: 50,
            min: 0,
            max: 100,
            format: 'n0',
            step: 10,
            showTicks: false,
            isReadOnly: false
        };
    },
    // event handlers
    valueChanged: function (s, e) {
        this.setState({ value: s.value });
    },
    isReadOnlyChanged: function (e) {
        this.setState({ isReadOnly: e.target.checked });
    },
    showTicksChanged: function (e) {
        this.setState({ showTicks: e.target.checked });
    },
    // render the component
    render: function () {
        return React.createElement("div", null, React.createElement("h2", {id: "Editing"}, "Editing (Gauges as Sliders)"), React.createElement("p", null, "In addition to displaying information graphically, gauges can be used as input controls" + ' ' + "(in this case they are also known as \"sliders\")."), React.createElement("p", null, "To use gauge controls for input, set the ", React.createElement("b", null, "isReadOnly"), " property to false. This will" + ' ' + "allow users to change the gauge's current value simply by clicking or tapping the gauge."), React.createElement("p", null, "When using gauges as input controls, remember to set the ", React.createElement("b", null, "step"), " property to define" + ' ' + "the precision of the changes applied by clicking or tapping, as well as the magnitude of" + ' ' + "changes applied by spinning the mouse wheel."), React.createElement("p", null, "You can also use the ", React.createElement("b", null, "showTicks"), " property to display tickmarks on the gauge." + ' ' + "The ", React.createElement("b", null, "step"), " property determines the spacing between tickmarks."), React.createElement("p", null, "The example below demonstrates how to use the ", React.createElement("b", null, "isReadOnly"), ", ", React.createElement("b", null, "step"), ", and", React.createElement("b", null, "showTicks"), " properties with the LinearGauge and RadialGauge controls."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("div", null, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#edJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#edJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "edJsx"}, '<Wj.LinearGauge\n', '    value={ this.state.value }\n', '    valueChanged={ this.valueChanged }\n', '    min={ this.state.min }\n', '    max={ this.state.max }\n', '    format={ this.state.format }\n', '    step={ this.state.step }\n', '    showTicks={ this.state.showTicks }\n', '    isReadOnly={ this.state.isReadOnly} />\n', '<Wj.RadialGauge\n', '    value={ this.state.value }\n', '    valueChanged={ this.valueChanged }\n', '    min={ this.state.min }\n', '    max={ this.state.max }\n', '    format={ this.state.format }\n', '    step={ this.state.step }\n', '    showTicks={ this.state.showTicks }\n', '    isReadOnly={ this.state.isReadOnly} />\n', '<label>\n', '    isReadOnly\n', '    <input type="checkbox" checked={ this.state.isReadOnly} onChange={ this.isReadOnlyChanged } />\n', '</label>\n', '<br/>\n', '<label>\n', '    showTicks\n', '    <input type="checkbox" checked={ this.state.showTicks} onChange={ this.showTicksChanged } />\n', '</label>'), React.createElement("div", {className: "tab-pane pane-content", id: "edJs"}, 'getInitialState: function () {\n', '    return {\n', '        value: 50,\n', '        min: 0,\n', '        max: 100,\n', '        format: \'n0\',\n', '        step: 10,\n', '        showTicks: false,\n', '        isReadOnly: false\n', '    }\n', '},\n', '\n', '// event handlers\n', 'valueChanged: function (s, e) {\n', '    this.setState({ value: s.value });\n', '},\n', 'isReadOnlyChanged: function(e) {\n', '    this.isReadOnly({ value: e.target.checked });\n', '},\n', 'showTicksChanged: function(e) {\n', '    this.showTicks({ value: e.target.checked });\n', '}')))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live): "), React.createElement(Wj.LinearGauge, {value: this.state.value, valueChanged: this.valueChanged, min: this.state.min, max: this.state.max, format: this.state.format, step: this.state.step, showTicks: this.state.showTicks, isReadOnly: this.state.isReadOnly}), React.createElement(Wj.RadialGauge, {value: this.state.value, valueChanged: this.valueChanged, min: this.state.min, max: this.state.max, format: this.state.format, step: this.state.step, showTicks: this.state.showTicks, isReadOnly: this.state.isReadOnly}), React.createElement("label", null, "isReadOnly", ' ', React.createElement("input", {type: "checkbox", checked: this.state.isReadOnly, onChange: this.isReadOnlyChanged})), React.createElement("br", null), React.createElement("label", null, "showTicks", ' ', React.createElement("input", {type: "checkbox", checked: this.state.showTicks, onChange: this.showTicksChanged})))));
    }
});
//# sourceMappingURL=Editing.js.map