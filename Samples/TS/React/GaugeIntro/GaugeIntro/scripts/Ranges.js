var Ranges = React.createClass({
    // initialize state
    getInitialState: function () {
        return {
            value: 50,
            min: 0,
            max: 100,
            format: 'n0',
            step: 10,
            pointerThickness: 0.5,
            showRanges: true,
            ranges: [
                { min: 0, max: 33, color: 'rgba(255,100,100,.5)' },
                { min: 33, max: 66, color: 'rgba(255,255,100,.5)' },
                { min: 66, max: 100, color: 'rgba(100,255,100,.5)' }
            ]
        };
    },
    // event handlers
    valueChanged: function (s, e) {
        this.setState({ value: s.value });
    },
    showRangesChanged: function (e) {
        this.setState({ showRanges: e.target.checked });
    },
    // render the component
    render: function () {
        return React.createElement("div", null, React.createElement("h2", {id: "Ranges"}, "Using Ranges"), React.createElement("p", null, "All Wijmo gauges have a ", React.createElement("b", null, "ranges"), " property that contains an array of ", React.createElement("b", null, "Range"), " objects." + ' ' + "By default, ranges are displayed on the face of gauge to indicate zones of interest; however," + ' ' + "you can use the ", React.createElement("b", null, "showRanges"), " property to hide the ranges. In this case, the gauge determines" + ' ' + "which range contains the current value and applies that range's color to the gauge pointer."), React.createElement("p", null, "You can customize each Range object using the ", React.createElement("b", null, "min"), ", ", React.createElement("b", null, "max"), ", and ", React.createElement("b", null, "color"), " properties."), React.createElement("p", null, "The following example demonstrates how to use ranges with the LinearGauge and RadialGauge controls."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("div", null, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#rngJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#rngJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "rngJsx"}, '<Wj.LinearGauge\n', '    value={ this.state.value }\n', '    valueChanged={ this.valueChanged }\n', '    min={ this.state.min }\n', '    max={ this.state.max }\n', '    format={ this.state.format }\n', '    showRanges={ this.state.showRanges }\n', '    pointer={{ thickness: this.state.pointerThickness }}\n', '    ranges={ this.state.ranges } />\n', '<Wj.RadialGauge\n', '    value={ this.state.value }\n', '    valueChanged={ this.valueChanged }\n', '    min={ this.state.min }\n', '    max={ this.state.max }\n', '    format={ this.state.format }\n', '    showRanges={ this.state.showRanges }\n', '    pointer={{ thickness: this.state.pointerThickness }}\n', '    ranges={ this.state.ranges } />\n', '\n', '<div className="app-input-group">\n', '    <label>value</label>\n', '    <Wj.InputNumber\n', '        value={ this.state.value }\n', '        valueChanged={ this.valueChanged }\n', '        min={ this.state.min }\n', '        max={ this.state.max }\n', '        step={ this.state.step }\n', '        format={ this.state.format } />\n', '</div>\n', '<label>\n', '    showRanges\n', '    <input type="checkbox" checked={ this.state.showRanges} onChange={ this.showRangesChanged } />\n', '</label>'), React.createElement("div", {className: "tab-pane pane-content", id: "rngJs"}, 'getInitialState: function () {\n', '    return {\n', '        value: 50,\n', '        min: 0,\n', '        max: 100,\n', '        format: \'n0\',\n', '        step: 10,\n', '        pointerThickness: 0.5,\n', '        showRanges: true,\n', '        ranges: [\n', '            { min: 0, max: 33, color: \'rgba(255,100,100,.5)\' },\n', '            { min: 33, max: 66, color: \'rgba(255,255,100,.5)\' },\n', '            { min: 66, max: 100, color: \'rgba(100,255,100,.5)\' }\n', '        ]\n', '    }\n', '},\n', '\n', '// event handlers\n', 'valueChanged: function (s, e) {\n', '    this.setState({ value: s.value });\n', '},\n', 'showRangesChanged: function(e) {\n', '    this.setState({ showRanges: e.target.checked });\n', '}')))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live): "), React.createElement(Wj.LinearGauge, {value: this.state.value, valueChanged: this.valueChanged, min: this.state.min, max: this.state.max, format: this.state.format, showRanges: this.state.showRanges, pointer: { thickness: this.state.pointerThickness }, ranges: this.state.ranges}), React.createElement(Wj.RadialGauge, {value: this.state.value, valueChanged: this.valueChanged, min: this.state.min, max: this.state.max, format: this.state.format, showRanges: this.state.showRanges, pointer: { thickness: this.state.pointerThickness }, ranges: this.state.ranges}), React.createElement("div", {className: "app-input-group"}, React.createElement("label", null, "value"), React.createElement(Wj.InputNumber, {value: this.state.value, valueChanged: this.valueChanged, min: this.state.min, max: this.state.max, step: this.state.step, format: this.state.format})), React.createElement("label", null, "showRanges", ' ', React.createElement("input", {type: "checkbox", checked: this.state.showRanges, onChange: this.showRangesChanged})))));
    }
});
//# sourceMappingURL=Ranges.js.map