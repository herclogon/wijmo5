var CellFreezing = React.createClass({
    getInitialState: function () {
        return {
            frozen: true
        };
    },
    // Wijmo event handlers
    toggleFreeze: function () {
        this.setState({ frozen: !this.state.frozen });
    },
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Cell Freezing"), React.createElement("p", null, "The FlexGrid allows you to freeze rows and columns so they remain in view as the" + ' ' + "user scrolls the grid. Frozen cells can be edited and selected as regular cells," + ' ' + "exactly as in Excel."), React.createElement("p", null, "This example allows you to toggle whether the first two rows and columns should" + ' ' + "be frozen."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#cfJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#cfJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "cfJsx"}, '<Wj.FlexGrid\n', '    itemsSource={ Util.getData() }\n', '    frozenRows={ this.state.frozen ? 2 : 0 }\n', '    frozenColumns={ this.state.frozen ? 2 : 0 } />\n', '<button className="btn" onClick={ this.toggleFreeze }>\n', '    { this.state.frozen ? \'Unfreeze\' : \'Freeze\' }\n', '</button>'), React.createElement("div", {className: "tab-pane pane-content", id: "cfJs"}, 'getInitialState: function () {\n', '    return {\n', '        frozen: true\n', '    }\n', '},\n', '\n', '// Wijmo event handlers\n', 'toggleFreeze: function() {\n', '    this.setState({ frozen: !this.state.frozen });\n', '}'))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement(Wj.FlexGrid, {itemsSource: Util.getData(), frozenRows: this.state.frozen ? 2 : 0, frozenColumns: this.state.frozen ? 2 : 0}), React.createElement("button", {className: "btn", onClick: this.toggleFreeze}, this.state.frozen ? 'Unfreeze' : 'Freeze'))));
    }
});
//# sourceMappingURL=CellFreezing.js.map