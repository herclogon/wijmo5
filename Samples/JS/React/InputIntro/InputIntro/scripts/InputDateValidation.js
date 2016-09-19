var InputDateValidation = React.createClass({
    getInitialState: function () {
        var today = new Date();
        return {
            theDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30)
        };
    },
    // Wijmo event handlers and callbacks
    dateChanged: function (s, e) {
        this.setState({ theDate: s.value });
    },
    itemFormatter: function (date, element) {
        var weekday = date.getDay(), holiday = Util.getHoliday(date);
        wijmo.toggleClass(element, 'date-weekend', weekday == 0 || weekday == 6);
        wijmo.toggleClass(element, 'date-holiday', !!holiday);
        element.title = holiday;
    },
    itemValidator: function (date) {
        switch (date.getDay()) {
            case 0:
            case 6:
                return false; // no appointments on weekends
        }
        return Util.getHoliday(date) ? false : true;
    },
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "InputDate and Validation"), React.createElement("p", null, "The InputDate control automatically parses dates typed in by the user using the format specified" + ' ' + "by the ", React.createElement("b", null, "format"), " property. Invalid dates are ignored and the original value is preserved." + ' ' + "The InputDate control also checks the range and ensures that date values are between the values" + ' ' + "specified by the ", React.createElement("b", null, "min"), " and ", React.createElement("b", null, "max"), " properties."), React.createElement("p", null, "But in many cases, not all dates between the ", React.createElement("b", null, "min"), " and ", React.createElement("b", null, "max"), " properties are valid. For" + ' ' + "example, you may be creating an appointment scheduler application and want to ensure that users" + ' ' + "don't schedule appointments for weekends, holidays, or dates that already have a certain number" + ' ' + "of appointments scheduled."), React.createElement("p", null, "To handle these situations, the InputDate (and the Calendar) have an ", React.createElement("b", null, "itemValidator"), " property." + ' ' + "This property represents a function that takes a date as a parameter and returns true if the date" + ' ' + "is valid for selection, or false otherwise. Invalid dates will automatically be disabled and users" + ' ' + "will not be able to select them in the calendar or to enter them by typing."), React.createElement("p", null, "The example below demonstrates this with an InputDate that has an ", React.createElement("b", null, "itemValidator"), " function" + ' ' + "that returns false for weekends and US federal holidays. The example also uses an ", React.createElement("b", null, "itemFormatter"), "function to add some special formatting and a tooltip with the name of the holidays."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("div", null, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#idJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#idJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "idJsx"}, '<div className="app-input-group">\n', '    <label>Select a date that is not a weekend or a holiday:</label>\n', '    <Wj.InputDate\n', '        value={ this.state.theDate }\n', '        valueChanged={ this.dateChanged }\n', '        itemFormatter={ this.itemFormatter }\n', '        itemValidator={ this.itemValidator }/>\n', '</div>\n', '<p>\n', '    <b>Selected Date: { Util.format(this.state.theDate, \'D\') }</b>\n', '</p>'), React.createElement("div", {className: "tab-pane pane-content", id: "idJs"}, 'getInitialState: function () {\n', '    var today = new Date();\n', '    return {\n', '        theDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30)\n', '    }\n', '},\n', '\n', '// Wijmo event handlers and callbacks\n', 'dateChanged: function (s, e) {\n', '    this.setState({ theDate: s.value });\n', '},\n', 'itemFormatter: function (date, element) {\n', '    var weekday = date.getDay(),\n', '        holiday = Util.getHoliday(date);\n', '    wijmo.toggleClass(element, \'date-weekend\', weekday == 0 || weekday == 6);\n', '    wijmo.toggleClass(element, \'date-holiday\', !!holiday);\n', '    element.title = holiday;\n', '},\n', 'itemValidator: function (date) {\n', '    switch (date.getDay()) {\n', '        case 0:\n', '        case 6:\n', '            return false; // no appointments on weekends\n', '    }\n', '    return Util.getHoliday(date) ? false : true;\n', '}\n')))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement("div", {className: "app-input-group"}, React.createElement("label", null, "Select a date that is not a weekend or a holiday:"), React.createElement(Wj.InputDate, {value: this.state.theDate, valueChanged: this.dateChanged, itemFormatter: this.itemFormatter, itemValidator: this.itemValidator})), React.createElement("p", null, React.createElement("b", null, "Selected Date: ", Util.format(this.state.theDate, 'D'))))));
    }
});
//# sourceMappingURL=InputDateValidation.js.map