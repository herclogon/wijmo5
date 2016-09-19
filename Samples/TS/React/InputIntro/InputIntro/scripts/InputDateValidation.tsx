declare var React: any;

var InputDateValidation = React.createClass({
    getInitialState: function () {
        var today = new Date();
        return {
            theDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30)
        }
    },

    // Wijmo event handlers and callbacks
    dateChanged: function (s, e) {
        this.setState({ theDate: s.value });
    },
    itemFormatter: function (date, element) {
        var weekday = date.getDay(),
            holiday = Util.getHoliday(date);
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
        return <div>
            <h2>
                InputDate and Validation
            </h2>
            <p>
                The InputDate control automatically parses dates typed in by the user using the format specified
                by the <b>format</b> property. Invalid dates are ignored and the original value is preserved.
                The InputDate control also checks the range and ensures that date values are between the values
                specified by the <b>min</b> and <b>max</b> properties.</p>
            <p>
                But in many cases, not all dates between the <b>min</b> and <b>max</b> properties are valid. For
                example, you may be creating an appointment scheduler application and want to ensure that users
                don't schedule appointments for weekends, holidays, or dates that already have a certain number
                of appointments scheduled.</p>
            <p>
                To handle these situations, the InputDate (and the Calendar) have an <b>itemValidator</b> property.
                This property represents a function that takes a date as a parameter and returns true if the date
                is valid for selection, or false otherwise. Invalid dates will automatically be disabled and users
                will not be able to select them in the calendar or to enter them by typing.</p>
            <p>
                The example below demonstrates this with an InputDate that has an <b>itemValidator</b> function
                that returns false for weekends and US federal holidays. The example also uses an <b>itemFormatter</b>
                function to add some special formatting and a tooltip with the name of the holidays.</p>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#idJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#idJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="idJsx">
                                {'<div className="app-input-group">\n'}
                                {'    <label>Select a date that is not a weekend or a holiday:</label>\n'}
                                {'    <Wj.InputDate\n'}
                                {'        value={ this.state.theDate }\n'}
                                {'        valueChanged={ this.dateChanged }\n'}
                                {'        itemFormatter={ this.itemFormatter }\n'}
                                {'        itemValidator={ this.itemValidator }/>\n'}
                                {'</div>\n'}
                                {'<p>\n'}
                                {'    <b>Selected Date: { Util.format(this.state.theDate, \'D\') }</b>\n'}
                                {'</p>'}
                            </div>
                            <div className="tab-pane pane-content" id="idJs">
                                {'getInitialState: function () {\n'}
                                {'    var today = new Date();\n'}
                                {'    return {\n'}
                                {'        theDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30)\n'}
                                {'    }\n'}
                                {'},\n'}
                                {'\n'}
                                {'// Wijmo event handlers and callbacks\n'}
                                {'dateChanged: function (s, e) {\n'}
                                {'    this.setState({ theDate: s.value });\n'}
                                {'},\n'}
                                {'itemFormatter: function (date, element) {\n'}
                                {'    var weekday = date.getDay(),\n'}
                                {'        holiday = Util.getHoliday(date);\n'}
                                {'    wijmo.toggleClass(element, \'date-weekend\', weekday == 0 || weekday == 6);\n'}
                                {'    wijmo.toggleClass(element, \'date-holiday\', !!holiday);\n'}
                                {'    element.title = holiday;\n'}
                                {'},\n'}
                                {'itemValidator: function (date) {\n'}
                                {'    switch (date.getDay()) {\n'}
                                {'        case 0:\n'}
                                {'        case 6:\n'}
                                {'            return false; // no appointments on weekends\n'}
                                {'    }\n'}
                                {'    return Util.getHoliday(date) ? false : true;\n'}
                                {'}\n'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <div className="app-input-group">
                        <label>Select a date that is not a weekend or a holiday:</label>
                        <Wj.InputDate
                            value={ this.state.theDate }
                            valueChanged={ this.dateChanged }
                            itemFormatter={ this.itemFormatter }
                            itemValidator={ this.itemValidator }/>
                    </div>
                    <p>
                        <b>Selected Date: { Util.format(this.state.theDate, 'D') }</b>
                    </p>
                </div>
            </div>
        </div>;
    }
});
