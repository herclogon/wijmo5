var ConditionalStyling = React.createClass({
    // Wijmo event handler
    formatItem: function (s, e) {
        // format cells in the "cells" panel only (not in headers)
        if (e.panel == s.cells) {
            // start with default color
            var color = '';
            // customize color based on amount
            if (s.columns[e.col].binding == 'amount') {
                var amount = s.rows[e.row].dataItem.amount;
                color = amount < 500 ? 'darkred' :
                    amount < 2500 ? 'black' :
                        'darkgreen';
            }
            // always set the color, since cells are recycled
            e.cell.style.color = color;
        }
    },
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Conditional Styling"), React.createElement("p", null, "The ", React.createElement("b", null, "formatItem"), " event can also be used to provide conditional formatting for" + ' ' + "cells."), React.createElement("p", null, "This example has a ", React.createElement("b", null, "formatItem"), " event handler that changes the foreground color" + ' ' + "of the cell element depending on the amount it contains."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#csJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#csJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "csJsx"}, '<Wj.FlexGrid\n', '    itemsSource={ Util.getData() }\n', '    formatItem={ this.formatItem } />\n'), React.createElement("div", {className: "tab-pane pane-content", id: "csJs"}, 'formatItem: function(s, e) {\n', '\n', '    // format cells in the "cells" panel only (not in headers)\n', '    if (e.panel == s.cells) {\n', '\n', '        // start with default color\n', '        var color = \'\';\n', '\n', '        // customize color based on amount\n', '        if (s.columns[e.col].binding == \'amount\') {\n', '            var amount = s.rows[e.row].dataItem.amount;\n', '            color = amount < 500 ? \'darkred\' :\n', '                amount < 2500? \'black\' :\n', '                \'darkgreen\';\n', '        }\n', '\n', '        // always set the color, since cells are recycled\n', '        e.cell.style.color = color;\n', '    }\n', '}'))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement(Wj.FlexGrid, {itemsSource: Util.getData(), formatItem: this.formatItem}))));
    }
});
//# sourceMappingURL=ConditionalStyling.js.map