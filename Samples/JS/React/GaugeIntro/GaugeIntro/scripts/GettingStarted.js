var GettingStarted = React.createClass({
    // initialize state
    getInitialState: function () {
        return {
            value: 50,
            min: 0,
            max: 100,
            format: 'n0',
            step: 10
        };
    },
    // Wijmo event handler
    valueChanged: function (s, e) {
        this.setState({ value: s.value });
    },
    // render the component
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Getting Started"), React.createElement("p", null, "Steps for getting started with Gauge controls in React applications:"), React.createElement("ol", null, React.createElement("li", null, "Add references to React, Wijmo, and the Wijmo/React interop module."), React.createElement("li", null, "Add wijmo controls to your React components using regular JSX markup."), React.createElement("li", null, "(Optional) Use CSS to customize the appearance of the controls.")), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("div", null, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#gsJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#gsJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "gsJsx"}, '<Wj.LinearGauge\n', '    value={ this.state.value }\n', '    min={ this.state.min }\n', '    max= { this.state.max }\n', '    format={ this.state.format} />\n', '<Wj.RadialGauge\n', '    value={ this.state.value }\n', '    min={ this.state.min }\n', '    max= { this.state.max }\n', '    format={ this.state.format} />\n', '<div className="app-input-group">\n', '    <label>value</label>\n', '    <Wj.InputNumber\n', '        value={ this.state.value }\n', '        valueChanged={ this.valueChanged }\n', '        min={ this.state.min }\n', '        max= { this.state.max }\n', '        step= { this.state.step }\n', '        format={ this.state.format} />\n', '</div>'), React.createElement("div", {className: "tab-pane pane-content", id: "gsJs"}, 'getInitialState: function () {\n', '    return {\n', '        value: 50,\n', '        min: 0,\n', '        max: 100,\n', '        format: \'n0\',\n', '        step: 10\n', '    }\n', '},\n', '\n', '// Wijmo event handler\n', 'valueChanged: function (s, e) {\n', '    this.setState({ value: s.value });\n', '}')))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live): "), React.createElement(Wj.LinearGauge, {value: this.state.value, min: this.state.min, max: this.state.max, format: this.state.format}), React.createElement(Wj.RadialGauge, {value: this.state.value, min: this.state.min, max: this.state.max, format: this.state.format}), React.createElement("div", {className: "app-input-group"}, React.createElement("label", null, "value"), React.createElement(Wj.InputNumber, {value: this.state.value, valueChanged: this.valueChanged, min: this.state.min, max: this.state.max, step: this.state.step, format: this.state.format})))));
    }
});
//# sourceMappingURL=GettingStarted.js.map