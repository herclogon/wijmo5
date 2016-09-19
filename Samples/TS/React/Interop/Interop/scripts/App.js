var names = 'Abraham,Andrew,Carter,Charles,Daniel,David,Edward,Gunning,Jacob,John,Josiah,Pierce,Richard,Samuel,Simon,Thomas,William'.split(','), count = 20, startDate = wijmo.DateTime.addDays(new Date(), -count), data = [];
for (var i = 0; i < 20; i++) {
    data.push({
        id: i,
        name: names[i % names.length],
        sales: Math.random() * 1000,
        expenses: Math.random() * 500,
        downloads: Math.random() * 2000,
        active: i % 2 == 0,
        date: wijmo.DateTime.addDays(startDate, i)
    });
}
var App = React.createClass({
    // initialize model: 
    // declare view and current item, update state when current item changes
    getInitialState: function () {
        var _this = this;
        return {
            names: names,
            view: new wijmo.collections.CollectionView(data, {
                currentChanged: function () {
                    _this.forceUpdate();
                }
            })
        };
    },
    // two-way bindings
    salesChanged: function (s, e) {
        this.state.view.currentItem.sales = s.value;
        this.forceUpdate();
        this.state.view.refresh();
    },
    expensesChanged: function (s, e) {
        this.state.view.currentItem.expenses = s.value;
        this.forceUpdate();
        this.state.view.refresh();
    },
    dateChanged: function (s, e) {
        this.state.view.currentItem.date = s.value;
        this.forceUpdate();
        this.state.view.refresh();
    },
    nameChanged: function (s, e) {
        this.state.view.currentItem.name = s.text;
        this.forceUpdate();
        this.state.view.refresh();
    },
    // store a reference to the grid after it's initialized
    initGrid: function (s, e) {
        this.setState({ theGrid: s });
    },
    // store a reference to the editor after it's initialized
    initEditor: function (s, e) {
        this.setState({ theEditor: s });
    },
    editCurrentItem: function () {
        var _this = this;
        var view = this.state.view;
        view.editItem(view.currentItem);
        this.state.theEditor.show(true, function (e) {
            if (e.dialogResult == 'wj-hide-ok') {
                view.commitEdit();
            }
            else {
                view.cancelEdit();
            }
            _this.forceUpdate(); // update after applying or cancelling changes
        });
    },
    // render the view
    render: function () {
        return React.createElement("div", null, React.createElement("div", {className: "header"}, React.createElement("div", {className: "container"}, React.createElement("img", {src: "resources/wj-react.png", alt: "Wijmo React logo"}), React.createElement("h1", null, "Wijmo and React"))), React.createElement("div", {className: "container"}, React.createElement("p", null, "This sample was designed to show advanced data-binding scenarios using Wijmo" + ' ' + "and different application frameworks."), React.createElement("p", null, "This version of the sample uses React and the ", React.createElement("b", null, "wijmo.react.js"), " interop" + ' ' + "module. Other versions use ", React.createElement("b", null, "Angular"), " and ", React.createElement("b", null, "VueJS"), "."), React.createElement("p", null, "Together, the samples demonstrate the differences between popular" + ' ' + "application  frameworks and Wijmo's framework-agnostic nature."), React.createElement("h3", null, "FlexGrid"), React.createElement("p", null, "Let's begin by showing some data on an editable ", React.createElement("b", null, "FlexGrid"), " control:"), React.createElement(Wj.FlexGrid, {autoGenerateColumns: false, columns: [
            { binding: 'name', header: 'Name' },
            { binding: 'sales', header: 'Sales', format: 'c0' },
            { binding: 'expenses', header: 'Expenses', format: 'c0' },
            { binding: 'active', header: 'Active' },
            { binding: 'date', header: 'Date' }
        ], itemsSource: this.state.view, initialized: this.initGrid}), React.createElement("p", null, "All Wijmo React components expose an \"initialized\" pseudo-event that" + ' ' + "allows you to add the control to your component state. This way you" + ' ' + "can use the control in your markup. For example, the grid above" + ' ' + "has ", React.createElement("b", null, this.state.theGrid ? this.state.theGrid.rows.length : 0), " rows."), React.createElement("h3", null, "FlexChart"), React.createElement("p", null, "Next, let's show the same data as a chart using the ", React.createElement("b", null, "FlexChart"), " control:"), React.createElement(Wj.FlexChart, {itemsSource: this.state.view, bindingX: "name", series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads', chartType: 'LineSymbols' }
        ]}), React.createElement("p", null, "The chart is bound to the same ", React.createElement("b", null, "CollectionView"), " as the grid, so if you" + ' ' + "edit or sort the data on the grid, the changes are automatically reflected" + ' ' + "on the chart."), React.createElement("h3", null, "Gauges"), React.createElement("p", null, "Here's two gauges bound to the current customer's sales." + ' ' + "You can use the gauges to see and also to edit the sales amount."), React.createElement(Wj.LinearGauge, {min: 0, max: 1000, step: 50, format: "c0", thumbSize: 20, isReadOnly: false, showRanges: false, value: this.state.view.currentItem.sales, valueChanged: this.salesChanged, face: { thickness: 0.5 }, pointer: { thickness: 0.5 }, ranges: [
            { min: 0, max: 333, color: 'red' },
            { min: 333, max: 666, color: 'gold' },
            { min: 666, max: 1000, color: 'green' }
        ]}), React.createElement(Wj.RadialGauge, {min: 0, max: 1000, step: 50, format: "c0", showText: "Value", thumbSize: 12, isReadOnly: false, showRanges: false, value: this.state.view.currentItem.sales, valueChanged: this.salesChanged, face: { thickness: 0.08 }, pointer: { thickness: 0.08 }, ranges: [
            { min: 0, max: 333, color: 'red' },
            { min: 333, max: 666, color: 'gold' },
            { min: 666, max: 1000, color: 'green' }
        ]}), React.createElement("h3", null, "Input Controls"), React.createElement("p", null, "This section shows several input controls bound to the current item's properties:"), React.createElement("table", {className: "table table-condensed"}, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("label", {htmlFor: "c"}, "Name:")), React.createElement("td", null, React.createElement(Wj.ComboBox, {id: "c", text: this.state.view.currentItem.name, textChanged: this.nameChanged, itemsSource: this.state.names, isEditable: true, isRequired: false, placeholder: "Name"}))), React.createElement("tr", null, React.createElement("td", null, React.createElement("label", {htmlFor: "n"}, "Sales:")), React.createElement("td", null, React.createElement(Wj.InputNumber, {id: "n", value: this.state.view.currentItem.sales, valueChanged: this.salesChanged, isRequired: false, step: 100, format: "c", plceholder: "Sales"}))), React.createElement("tr", null, React.createElement("td", null, React.createElement("label", {htmlFor: "d"}, "Date/Time:")), React.createElement("td", null, React.createElement(Wj.InputDate, {id: "d", value: this.state.view.currentItem.date, valueChanged: this.dateChanged, isRequired: false, format: "MMM dd, yyyy", placeholder: "Date"}), React.createElement(Wj.InputTime, {value: this.state.view.currentItem.date, valueChanged: this.dateChanged, isRequired: false, placeholder: "Time"}))), React.createElement("tr", null, React.createElement("td", null, React.createElement("label", {htmlFor: "dt"}, "DateTime:")), React.createElement("td", null, React.createElement(Wj.InputDateTime, {id: "dt", value: this.state.view.currentItem.date, valueChanged: this.dateChanged, isRequired: false, placeholder: "Date and Time"}))))), React.createElement("h3", null, "Modal Popups and Labeled Inputs"), React.createElement("p", null, "This section shows a modal popup containing input controls with" + ' ' + "floating labels (inspired by the", React.createElement("a", {href: "https://getmdl.io/"}, "Material Design Lite"), " CSS library):"), React.createElement("button", {className: "btn btn-primary", onClick: this.editCurrentItem}, "Edit Current Item"), React.createElement(Wj.Popup, {className: "modal-content", initialized: this.initEditor, dialogResultEnter: "wj-hide-ok"}, React.createElement("div", {className: "modal-header"}, React.createElement("button", {type: "button", tabindex: "-1", className: "close wj-hide"}, React.createElement("span", null, "× ")), React.createElement("h4", {className: "modal-title"}, "Edit Item")), React.createElement("div", {className: "modal-body"}, React.createElement("div", {className: "wj-labeled-input"}, React.createElement(Wj.ComboBox, {text: this.state.view.currentItem.name, textChanged: this.nameChanged, itemsSource: this.state.names, isEditable: true, isRequired: false, id: "cmbName"}), React.createElement("label", {htmlFor: "cmbName"}, "Name")), React.createElement("div", {className: "wj-labeled-input"}, React.createElement(Wj.InputDate, {value: this.state.view.currentItem.date, valueChanged: this.dateChanged, isRequired: false, format: "MMM dd, yyyy", id: "idDate"}), React.createElement("label", {htmlFor: "idDate"}, "Date")), React.createElement("br", null), React.createElement("div", {className: "wj-labeled-input"}, React.createElement(Wj.InputNumber, {value: this.state.view.currentItem.sales, valueChanged: this.salesChanged, isRequired: false, step: 100, format: "c", id: "inSales"}), React.createElement("label", {htmlFor: "inSales"}, "Sales")), React.createElement("div", {className: "wj-labeled-input"}, React.createElement(Wj.InputNumber, {value: this.state.view.currentItem.expenses, valueChanged: this.expensesChanged, isRequired: false, step: 100, format: "c", id: "inExpenses"}), React.createElement("label", {htmlFor: "inExpenses"}, "Expenses"))), React.createElement("div", {className: "modal-footer"}, React.createElement("button", {type: "button", className: "btn btn-primary wj-hide-ok"}, "OK"), React.createElement("button", {type: "button", className: "btn btn-default wj-hide"}, "Cancel")))));
    }
});
//# sourceMappingURL=App.js.map