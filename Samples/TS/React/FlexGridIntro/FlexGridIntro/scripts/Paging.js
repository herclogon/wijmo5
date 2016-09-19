var Paging = React.createClass({
    getInitialState: function () {
        var view = new wijmo.collections.CollectionView(Util.getData(), {
            pageSize: 10
        });
        return {
            view: view
        };
    },
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Paging"), React.createElement("p", null, "The FlexGrid supports paging through the ", React.createElement("b", null, "IPagedCollectionView"), " interface," + ' ' + "which is nearly identical to the one in .NET. To enable paging, set" + ' ' + "the ", React.createElement("b", null, "IPagedCollectionView.pageSize"), " property to the number" + ' ' + "of items you want on each page, and provide a UI for navigating the pages."), React.createElement("p", null, "In this example, we use JavaScript to show 10 items per page. We add navigation buttons," + ' ' + "and call IPagedCollectionView methods when a button is clicked. Note that we use" + ' ' + "the ", React.createElement("strong", null, "pageIndex"), " and ", React.createElement("strong", null, "pageCount"), " properties to show the" + ' ' + "current page and total number of pages."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#pgJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#pgJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "pgJsx"}, '<Wj.FlexGrid\n', '    style={{ height: \'auto\' }} // size grid to its content\n', '    itemsSource={ this.state.view } />\n', '<Paginator view={ this.state.view } />\n'), React.createElement("div", {className: "tab-pane pane-content", id: "pgJs"}, 'getInitialState: function () {\n', '    var view = new wijmo.collections.CollectionView(Util.getData(), {\n', '        pageSize: 10\n', '    });\n', '    return {\n', '        view: view\n', '    }\n', '}'))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement(Wj.FlexGrid, {style: { height: 'auto' }, itemsSource: this.state.view}), React.createElement(Paginator, {view: this.state.view}))));
    }
});
// CollectionView paginator component
var Paginator = React.createClass({
    moveFirst: function () {
        this.props.view.moveToFirstPage();
        this.forceUpdate();
    },
    movePrev: function () {
        this.props.view.moveToPreviousPage();
        this.forceUpdate();
    },
    moveNext: function () {
        this.props.view.moveToNextPage();
        this.forceUpdate();
    },
    moveLast: function () {
        this.props.view.moveToLastPage();
        this.forceUpdate();
    },
    render: function () {
        return React.createElement("div", {className: "btn-group"}, React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.moveFirst, disabled: this.props.view.pageIndex <= 0}, React.createElement("span", {className: "glyphicon glyphicon-fast-backward"})), React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.movePrev, disabled: this.props.view.pageIndex <= 0}, React.createElement("span", {className: "glyphicon glyphicon-step-backward"})), React.createElement("button", {type: "button", className: "btn btn-default", disabled: true, style: { width: '100px' }}, this.props.view.pageIndex + 1, " / ", this.props.view.pageCount), React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.moveNext, disabled: this.props.view.pageIndex >= this.props.view.pageCount - 1}, React.createElement("span", {className: "glyphicon glyphicon-step-forward"})), React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.moveLast, disabled: this.props.view.pageIndex >= this.props.view.pageCount - 1}, React.createElement("span", {className: "glyphicon glyphicon-fast-forward"})));
    }
});
//# sourceMappingURL=Paging.js.map