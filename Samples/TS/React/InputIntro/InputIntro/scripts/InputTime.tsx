declare var React: any;

var InputTime = React.createClass({
    getInitialState: function () {
        var today = new Date();
        return {
            theDateTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30),
            minDate: new Date(today.getFullYear(), 0, 1),
            maxDate: new Date(today.getFullYear(), 11, 31),
            minTime: new Date(today.getFullYear(), 0, 1, 7, 0),
            maxTime: new Date(today.getFullYear(), 11, 31, 17, 0)
        }
    },

    // Wijmo event handlers
    dateTimeChanged: function (s, e) {
        this.setState({ theDateTime: s.value });
    },

    render: function () {
        return <div>
            <h2>
                InputDate, InputTime and InputDateTime Controls
            </h2>
            <p>
                Similar to the InputDate control, the InputTime control allows you to modify the time portion of
                a JavaScript date. The InputTime control shares many of the same properties as the InputDate control,
                including <b>format</b>, <b>min</b>, <b>max</b>, and <b>value</b>. The InputTime control also offers a
                <b>step</b> property that allows you to specify the number of minutes between entries in its drop-down
                list.</p>
            <p>
                The InputDateTime control combines the InputDate and InputTime controls, allowing you to set the date 
                and time portions of a JavaScript date. The InputDateTime control has two drop-downs: a Calendar
                for picking dates, and a list for picking times.</p>
            <p>
                The example below illustrates how to use the InputTime control in conjunction with the InputDate
                control. Notice that these controls work together to edit the same JavaScript <b>Date</b> object
                and only update the part of the DateTime that they are responsible for.</p>
            <p>
                The example also shows an InputDateTime that updates both the date and time parts of the 
                JavaScript <b>Date</b> object.</p>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#itJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#itJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="itJsx">
                                {'<div className="app-input-group">\n'}
                                {'    <label>Bound InputDate with min, max, format: </label>\n'}
                                {'    <Wj.InputDate\n'}
                                {'        value={ this.state.theDateTime }\n'}
                                {'        min={ this.state.minDate }\n'}
                                {'        max={ this.state.maxDate }\n'}
                                {'        format="MMM dd, yyyy" \n'}
                                {'        valueChanged={ this.dateTimeChanged }/>\n'}
                                {'</div>\n'}
                                {'<div className="app-input-group">\n'}
                                {'    <label>Bound InputTime with min, max, step: </label>\n'}
                                {'    <Wj.InputTime\n'}
                                {'        value={ this.state.theDateTime }\n'}
                                {'        step={ 30 }\n'}
                                {'        min={ this.state.minTime }\n'}
                                {'        max={ this.state.maxTime }\n'}
                                {'        valueChanged={ this.dateTimeChanged }/>\n'}
                                {'</div>\n'}
                                {'<div class="app-input-group">\n'}
                                {'    <label>Bound InputDateTime with min, max, format, and step: </label>\n'}
                                {'    <Wj.InputDateTime \n'}
                                {'        value={ this.state.theDateTime }\n'}
                                {'        format="MMM dd, yyyy hh:mm tt"\n'}
                                {'        min={ this.state.minDate }\n'}
                                {'        max={ this.state.maxDate }\n'}
                                {'        timeStep={ 30 }\n'}
                                {'        timeMin={ this.state.minTime }\n'}
                                {'        timeMax={ this.state.maxTime }\n'}
                                {'        valueChanged={ this.dateTimeChanged }/>\n'}
                                {'</div>\n'}
                                {'<p>\n'}
                                {'    Selected Date/Time: <b> { Util.format(this.state.theDateTime, \'f\') }</b>\n'}
                                {'</p>'}
                            </div>
                            <div className="tab-pane pane-content" id="itJs">
                                {'getInitialState: function () {\n'}
                                {'    var today = new Date();\n'}
                                {'    return {\n'}
                                {'        theDateTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30),\n'}
                                {'        minDate: new Date(today.getFullYear(), 0, 1),\n'}
                                {'        maxDate: new Date(today.getFullYear(), 11, 31),\n'}
                                {'        minTime: new Date(today.getFullYear(), 0, 1, 7, 0),\n'}
                                {'        maxTime: new Date(today.getFullYear(), 11, 31, 17, 0)\n'}
                                {'    }\n'}
                                {'},\n'}
                                {'\n'}
                                {'// Wijmo event handlers\n'}
                                {'dateTimeChanged: function (s, e) {\n'}
                                {'    this.setState({ theDateTime: s.value });\n'}
                                {'}\n'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <div className="app-input-group">
                        <label>Bound InputDate with min, max, format: </label>
                        <Wj.InputDate
                            value={ this.state.theDateTime }
                            min={ this.state.minDate }
                            max={ this.state.maxDate }
                            format="MMM dd, yyyy" 
                            valueChanged={ this.dateTimeChanged }/>
                    </div>
                    <div className="app-input-group">
                        <label>Bound InputTime with min, max, step: </label>
                        <Wj.InputTime
                            value={ this.state.theDateTime }
                            step={ 30 }
                            min={ this.state.minTime }
                            max={ this.state.maxTime }
                            valueChanged={ this.dateTimeChanged }/>
                    </div>
                    <div class="app-input-group">
                        <label>Bound InputDateTime with min, max, format, and step: </label>
                        <Wj.InputDateTime 
                            value={ this.state.theDateTime }
                            format="MMM dd, yyyy hh:mm tt"
                            min={ this.state.minDate }
                            max={ this.state.maxDate }
                            timeStep={ 30 }
                            timeMin={ this.state.minTime }
                            timeMax={ this.state.maxTime }
                            valueChanged={ this.dateTimeChanged }/>
                    </div>
                    <p>
                        Selected Date/Time: <b> { Util.format(this.state.theDateTime, 'f') }</b>
                    </p>
                </div>
            </div>
        </div>;
    }
});
