declare var React: any;

var InputDate = React.createClass({
    getInitialState: function () {
        var today = new Date();
        return {
            theDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30),
            minDate: new Date(today.getFullYear(), 0, 1),
            maxDate: new Date(today.getFullYear(), 11, 31)
        }
    },

    // Wijmo event handlers
    formatItem: function (s, e) {
        var weekday = e.data.getDay(),
            holiday = Util.getHoliday(e.data);
        wijmo.toggleClass(e.item, 'date-weekend', weekday == 0 || weekday == 6);
        wijmo.toggleClass(e.item, 'date-holiday', !!holiday);
        e.item.title = holiday;
    },
    dateChanged: function (s, e) {
        this.setState({ theDate: s.value });
    },

    render: function () {
        return <div>
            <h2>
                InputDate and Calendar
            </h2>
            <p>
                The InputDate control allows you to edit and select dates via a drop-down calendar,
                preventing you from entering an incorrect value. The InputDate's drop-down calendar
                was developed as a separate control and can be used be used independently
                from the InputDate control.
            </p>
            <p>
                Both InputDate and Calendar, specify several properties to alter the controls' behavior.
                The most commonly used properties include:
            </p>
            <ul>
                <li>
                    <b>value</b>: Specifies the date value for the control.
                </li>
                <li>
                    <b>min</b>: Specifies the minimum date value that can be entered in the control.
                </li>
                <li>
                    <b>max</b>: Specifies the maximum date value that can be entered in the control.
                </li>
            </ul>
            <p>
                The example below demonstrates how to use each of these properties.
            </p>
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
                                {'    <label>Bound InputDate with min & max: </label>\n'}
                                {'    <Wj.InputDate\n'}
                                {'        value={ this.state.theDate }\n'}
                                {'        min={ this.state.minDate }\n'}
                                {'        max={ this.state.maxDate }\n'}
                                {'        valueChanged={ this.dateChanged }/>\n'}
                                {'</div>\n'}
                                {'<div className="app-input-group">\n'}
                                {'    <label>Bound Calendar with min & max: </label>\n'}
                                {'    <Wj.Calendar\n'}
                                {'        style={{ width: \'300px\' }}\n'}
                                {'        value={ this.state.theDate }\n'}
                                {'        min={ this.state.minDate }\n'}
                                {'        max={ this.state.maxDate }\n'}
                                {'        formatItem={ this.formatItem }\n'}
                                {'        valueChanged={ this.dateChanged }/>\n'}
                                {'</div>\n'}
                                {'<p>\n'}
                                {'    Selected Date: <b>{Util.format(this.state.theDate, \'D\') }</b>\n'}
                                {'</p>\n'}
                                {'<p>\n'}
                                {'    <b>\n'}
                                {'        Valid Range:\n'}
                                {'        { Util.format(this.state.minDate, \'d\') } to\n'}
                                {'        { Util.format(this.state.maxDate, \'d\') }\n'}
                                {'    </b>\n'}
                                {'</p>\n'}
                            </div>
                            <div className="tab-pane pane-content" id="idJs">
                                {'getInitialState: function () {\n'}
                                {'    var today = new Date();\n'}
                                {'    return {\n'}
                                {'        theDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30),\n'}
                                {'        minDate: new Date(today.getFullYear(), 0, 1),\n'}
                                {'        maxDate: new Date(today.getFullYear(), 11, 31)\n'}
                                {'    }\n'}
                                {'},\n'}
                                {'\n'}
                                {'// Wijmo event handlers\n'}
                                {'formatItem: function (s, e) {\n'}
                                {'    var weekday = e.data.getDay(),\n'}
                                {'        holiday = Util.getHoliday(e.data);\n'}
                                {'    wijmo.toggleClass(e.item, \'date-weekend\', weekday == 0 || weekday == 6);\n'}
                                {'    wijmo.toggleClass(e.item, \'date-holiday\', !!holiday);\n'}
                                {'    e.item.title = holiday;\n'}
                                {'},\n'}
                                {'dateChanged: function (s, e) {\n'}
                                {'    this.setState({ theDate: s.value });\n'}
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live): </h4>
                    <div className="app-input-group">
                        <label>Bound InputDate with min &amp; max: </label>
                        <Wj.InputDate
                            value={ this.state.theDate }
                            min={ this.state.minDate }
                            max={ this.state.maxDate }
                            valueChanged={ this.dateChanged }/>
                    </div>
                    <div className="app-input-group">
                        <label>Bound Calendar with min &amp; max: </label>
                        <Wj.Calendar
                            style={{ width: '300px' }}
                            value={ this.state.theDate }
                            min={ this.state.minDate }
                            max={ this.state.maxDate }
                            formatItem={ this.formatItem }
                            valueChanged={ this.dateChanged }/>
                    </div>
                    <p>
                        Selected Date: <b>{ Util.format(this.state.theDate, 'D') }</b>
                    </p>
                    <p>
                        <b>
                            Valid Range: { ' ' }
                            { Util.format(this.state.minDate, 'd') } to{ ' ' }
                            { Util.format(this.state.maxDate, 'd') }
                        </b>
                    </p>
                </div>
            </div>
        </div>;
    }
});

