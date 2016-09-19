declare var React: any;

var InputNumber = React.createClass({
    getInitialState: function () {
        return {
            value: 4,
            nullableValue: null
        }
    },

    // Wijmo event handlers
    valueChanged: function(s, e) {
        this.setState({ value: s.value });
    },
    nullableValueChanged: function(s, e) {
        this.setState({ nullableValue: s.value });
    },

    render: function () {
        return <div>
            <h2>
                InputNumber
            </h2>
            <p>
                The InputNumber control allows you to edit numbers, preventing you from entering invalid
                data and optionally formatting the numeric value as it is edited. The InputNumber can be
                used without specifying any of its properties; however, you'll typically want to bind it
                to some data using the <b>value</b> property.
            </p>
            <p>
                In addition to the <b>value</b> property, the InputNumber control offers several other
                properties that can be used to alter its behavior, such as:
            </p>
            <ul>
                <li>
                    <b>min</b>: Specifies the minimum numeric value that can be entered.
                </li>
                <li>
                    <b>max</b>: Specifies the maximum numeric value that can be entered.
                </li>
                <li>
                    <b>step</b>: Specifies the amount to add or subtract from the current
                    value when the spinner buttons are clicked.
                </li>
                <li>
                    <b>format</b>: Specifies the numeric format used to display the number being
                    edited. The format property uses a .NET-style
                    <a href="http://msdn.microsoft.com/en-us/library/dwhawy9k(v=vs.110).aspx" target="_blank">numeric format string</a>.
                </li>
            </ul>
            <p>
                The example below demonstrates how to use all of these properties.
            </p>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#inJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#inJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="inJsx">
                                {'<div className="app-input-group">\n'}
                                {'    <label>Unbound with format: </label>\n'}
                                {'    <Wj.InputNumber\n'}
                                {'        value={ Math.PI }\n'}
                                {'        step={ 1 }\n'}
                                {'        format="n"/>\n'}
                                {'</div>\n'}
                                {'<div className="app-input-group">\n'}
                                {'    <label>Bound with min, max, step, and format: </label>\n'}
                                {'    <Wj.InputNumber\n'}
                                {'        format="c2"\n'}
                                {'        min={ 0 } max={ 10 } step={ .5 }\n'}
                                {'        value={ this.state.value }\n'}
                                {'        valueChanged={ this.valueChanged }/>\n'}
                                {'    <p>\n'}
                                {'        <b>Value: { Util.format(this.state.value, \'c2\') }</b>\n'}
                                {'    </p>\n'}
                                {'</div>\n'}
                                {'<div className="app-input-group">\n'}
                                {'    <label>, not required: </label>\n'}
                                {'    <Wj.InputNumber\n'}
                                {'        placeholder="Enter a number..."\n'}
                                {'        isRequired={ false }\n'}
                                {'        format="c2"\n'}
                                {'        min={ 0 } max={ 10 } step={ .5 }\n'}
                                {'        value={ this.state.nullableValue }\n'}
                                {'        valueChanged={ this.nullableValueChanged }/>\n'}
                                {'    <p>\n'}
                                {'        <b>Value: { Util.format(this.state.nullableValue, \'c2\') }</b>\n'}
                                {'    </p>\n'}
                                {'</div>'}
                            </div>
                            <div className="tab-pane pane-content" id="inJs">
                                {'getInitialState: function () {\n'}
                                {'    return {\n'}
                                {'        value: 4,\n'}
                                {'        nullableValue: null\n'}
                                {'    }\n'}
                                {'},\n'}
                                {'\n'}
                                {'// Wijmo event handlers\n'}
                                {'valueChanged: function(s, e) {\n'}
                                {'    this.setState({ value: s.value });\n'}
                                {'},\n'}
                                {'nullableValueChanged: function(s, e) {\n'}
                                {'    this.setState({ nullableValue: s.value });\n'}
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <div className="app-input-group">
                        <label>Unbound with format: </label>
                        <Wj.InputNumber
                            value={ Math.PI }
                            step={ 1 }
                            format="n"/>
                    </div>
                    <div className="app-input-group">
                        <label>Bound with min, max, step, and format: </label>
                        <Wj.InputNumber
                            format="c2"
                            min={ 0 } max={ 10 } step={ .5 }
                            value={ this.state.value }
                            valueChanged={ this.valueChanged }/>
                        <p>
                            <b>Value: { Util.format(this.state.value, 'c2') }</b>
                        </p>
                    </div>
                    <div className="app-input-group">
                        <label>Bound, not required: </label>
                        <Wj.InputNumber
                            placeholder="Enter a number..."
                            isRequired={ false }
                            format="c2"
                            min={ 0 } max={ 10 } step={ .5 }
                            value={ this.state.nullableValue }
                            valueChanged={ this.nullableValueChanged }/>
                        <p>
                            <b>Value: { Util.format(this.state.nullableValue, 'c2') }</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>;
    }
});
