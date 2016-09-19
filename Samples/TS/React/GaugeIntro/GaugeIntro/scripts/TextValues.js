var TextValues = React.createClass({
    // initialize state
    getInitialState: function () {
        return {
            value: 50
        };
    },
    // getText callback used to convert values into strings
    getText: function (gauge, part, value, text) {
        switch (part) {
            case 'value':
                if (value <= 10)
                    return 'Empty!';
                if (value <= 25)
                    return 'Low...';
                if (value <= 95)
                    return 'Good';
                return 'Full';
            case 'min':
                return 'EMPTY';
            case 'max':
                return 'FULL';
        }
        return text;
    },
    // event handlers
    valueChanged: function (s, e) {
        this.setState({ value: s.value });
    },
    // render the component
    render: function () {
        return React.createElement("div", null, React.createElement("h2", {id: "Text"}, "Displaying Text Values"), React.createElement("p", null, "The gauge controls have three properties that affect text display:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("b", null, "showText"), ": Determines whether the gauge should show min, max," + ' ' + "and/or current values as text elements,"), React.createElement("li", null, React.createElement("b", null, "format"), ": Sets the format string used to convert numeric values" + ' ' + "into strings, and"), React.createElement("li", null, React.createElement("b", null, "getText"), ": An optional callback function used to provide customized" + ' ' + "strings to display for each type of value.")), React.createElement("p", null, "The example below shows how to use the ", React.createElement("b", null, "getText"), " callback to provide" + ' ' + "custom strings for the gauge value. Click the gauge to change its value" + ' ' + "and notice how the value displayed changes between \"Empty\", \"Low\", \"Good\"," + ' ' + "and \"Full\"."), React.createElement("p", null, "The example also changes the font color and weight using CSS."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("div", null, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#tvJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#tvJs", role: "tab", "data-toggle": "tab"}, "JS")), React.createElement("li", null, React.createElement("a", {href: "#tvCss", role: "tab", "data-toggle": "tab"}, "CSS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "tvJsx"}, '<Wj.RadialGauge\n', '    className="text-gauge"\n', '    value={ this.state.value }\n', '    valueChanged={ this.valueChanged }\n', '    isReadOnly={ false }\n', '    showRanges={ false }\n', '    getText={ this.getText }\n', '    ranges={[\n', '        { min: 0, max: 10, color: \'red\' },\n', '        { min: 10, max: 25, color: \'yellow\' },\n', '        { min: 25, max: 100, color: \'green\' }\n', '    ]} />'), React.createElement("div", {className: "tab-pane pane-content", id: "tvJs"}, 'getInitialState: function () {\n', '    return {\n', '        value: 50\n', '    }\n', '},\n', '\n', '// getText callback used to convert values into strings\n', 'getText: function (gauge, part, value, text) {\n', '    switch (part) {\n', '        case \'value\':\n', '            if (value <= 10) return \'Empty!\';\n', '            if (value <= 25) return \'Low...\';\n', '            if (value <= 95) return \'Good\';\n', '            return \'Full\';\n', '        case \'min\':\n', '            return \'EMPTY\';\n', '        case \'max\':\n', '            return \'FULL\';\n', '    }\n', '    return text;\n', '},\n', '\n', '// event handlers\n', 'valueChanged: function (s, e) {\n', '    this.setState({ value: s.value });\n', '}'), React.createElement("div", {className: "tab-pane pane-content", id: "tvCss"}, '.text-gauge.wj-gauge text {\n', '    fill: #7c7cff;\n', '    font-weight: bold;\n', '}')))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live): "), React.createElement(Wj.RadialGauge, {className: "text-gauge", value: this.state.value, valueChanged: this.valueChanged, isReadOnly: false, showRanges: false, getText: this.getText, ranges: [
            { min: 0, max: 10, color: 'red' },
            { min: 10, max: 25, color: 'yellow' },
            { min: 25, max: 100, color: 'green' }
        ]}))));
    }
});
//# sourceMappingURL=TextValues.js.map