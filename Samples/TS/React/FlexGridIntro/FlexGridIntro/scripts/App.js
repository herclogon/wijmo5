// make components available through the "Wj" prefix, so users can write
// "Wj.FlexGrid" instead of "wijmo.react.FlexGrid":
var Wj = wijmo.react;
var App = React.createClass({
    render: function () {
        return React.createElement("div", null, React.createElement("div", {className: "header"}, React.createElement("div", {className: "container"}, React.createElement("img", {src: "resources/wijmo5.png"}), React.createElement("h1", null, "FlexGrid 101 (React)"), React.createElement("p", null, "This page shows how to get started with Wijmo's FlexGrid control."))), React.createElement("div", {className: "container"}, React.createElement(GettingStarted, null), React.createElement(ColumnDefinitions, null), React.createElement(SelectionModes, null), React.createElement(CellFreezing, null), React.createElement(Editing, null), React.createElement(Grouping, null), React.createElement(Filtering, null), React.createElement(Paging, null), React.createElement(MasterDetail, null), React.createElement(CustomCells, null), React.createElement(ConditionalStyling, null), React.createElement(Themes, null), React.createElement(Trees, null), React.createElement(SortingTrees, null), React.createElement(NullValues, null)));
    }
});
//# sourceMappingURL=App.js.map