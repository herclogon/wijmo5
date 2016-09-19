var MasterDetail = React.createClass({
    getInitialState: function () {
        var _this = this;
        var view = new wijmo.collections.CollectionView(Util.getData(), {
            onCurrentChanged: function (s, e) {
                _this.forceUpdate(); // update detail view when the current item changes
            }
        });
        return {
            view: view,
        };
    },
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Master Detail"), React.createElement("p", null, "The ", React.createElement("b", null, "ICollectionView"), " interface has built-in support for currency, which enables you to" + ' ' + "implement master-detail scenarios with FlexGrid. You can refer to the ", React.createElement("b", null, "currentItem"), " and" + ' ' + "use it as a binding source for any elements on the page."), React.createElement("p", null, "Note that you have to update the details view when the current item changes." + ' ' + "To do that, attach a handler to the ", React.createElement("b", null, "ICollectionView.currentChanged"), " event and" + ' ' + "update the details view as needed."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#mdJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#mdJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "mdJsx"}, '<Wj.FlexGrid\n', '    autoGenerateColumns={ false }\n', '    columns={[\n', '        { header: \'Country\', binding: \'country\', width: \'*\' },\n', '        { header: \'Date\', binding: \'date\' },\n', '    ]}\n', '    itemsSource={ this.state.view }/>\n', '<DetailView item={ this.state.view.currentItem } />'), React.createElement("div", {className: "tab-pane pane-content", id: "mdJs"}, 'getInitialState: function () {\n', '    var view = new wijmo.collections.CollectionView(Util.getData(), {\n', '        onCurrentChanged: (s, e) => {\n', '            this.forceUpdate(); // update detail view when the current item changes\n', '        }\n', '    });\n', '    return {\n', '        view: view,\n', '    }\n', '}'))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement(Wj.FlexGrid, {autoGenerateColumns: false, columns: [
            { header: 'Country', binding: 'country', width: '*' },
            { header: 'Date', binding: 'date' },
        ], itemsSource: this.state.view}), React.createElement(DetailView, {item: this.state.view.currentItem}))));
    }
});
var DetailView = React.createClass({
    render: function () {
        return React.createElement("div", null, React.createElement("dl", {className: "dl-horizontal"}, React.createElement("dt", null, "ID"), React.createElement("dd", null, this.props.item.id), React.createElement("dt", null, "Country"), React.createElement("dd", null, this.props.item.country), React.createElement("dt", null, "Date"), React.createElement("dd", null, Util.format(this.props.item.date, 'D')), React.createElement("dt", null, "Revenue"), React.createElement("dd", null, Util.format(this.props.item.amount, 'c'))));
    }
});
//# sourceMappingURL=MasterDetail.js.map