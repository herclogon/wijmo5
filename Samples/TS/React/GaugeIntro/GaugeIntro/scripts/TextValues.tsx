declare var React: any;

var TextValues = React.createClass({

    // initialize state
    getInitialState: function () {
        return {
            value: 50
        }
    },

    // getText callback used to convert values into strings
    getText: function (gauge, part, value, text) {
        switch (part) {
            case 'value':
                if (value <= 10) return 'Empty!';
                if (value <= 25) return 'Low...';
                if (value <= 95) return 'Good';
                return 'Full';
            case 'min':
                return 'EMPTY';
            case 'max':
                return 'FULL';
        }
        return text;
    },

    // event handlers
    valueChanged: function (s, e) {
        this.setState({ value: s.value });
    },

    // render the component
    render: function () {
        return <div>
            <h2 id="Text">Displaying Text Values</h2>
            <p>
                The gauge controls have three properties that affect text display:</p>
            <ul>
                <li>
                    <b>showText</b>: Determines whether the gauge should show min, max,
                    and/or current values as text elements,</li>
                <li>
                    <b>format</b>: Sets the format string used to convert numeric values
                    into strings, and</li>
                <li>
                    <b>getText</b>: An optional callback function used to provide customized
                    strings to display for each type of value.</li>
                </ul>
            <p>
                The example below shows how to use the <b>getText</b> callback to provide 
                custom strings for the gauge value. Click the gauge to change its value 
                and notice how the value displayed changes between "Empty", "Low", "Good",
                and "Full".</p>
            <p>
                The example also changes the font color and weight using CSS.</p>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#tvJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#tvJs" role="tab" data-toggle="tab">JS</a></li>
                            <li><a href="#tvCss" role="tab" data-toggle="tab">CSS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="tvJsx">
                                {'<Wj.RadialGauge\n'}
                                {'    className="text-gauge"\n'}
                                {'    value={ this.state.value }\n'}
                                {'    valueChanged={ this.valueChanged }\n'}
                                {'    isReadOnly={ false }\n'}
                                {'    showRanges={ false }\n'}
                                {'    getText={ this.getText }\n'}
                                {'    ranges={[\n'}
                                {'        { min: 0, max: 10, color: \'red\' },\n'}
                                {'        { min: 10, max: 25, color: \'yellow\' },\n'}
                                {'        { min: 25, max: 100, color: \'green\' }\n'}
                                {'    ]} />'}
                            </div>
                            <div className="tab-pane pane-content" id="tvJs">
                                {'getInitialState: function () {\n'}
                                {'    return {\n'}
                                {'        value: 50\n'}
                                {'    }\n'}
                                {'},\n'}
                                {'\n'}
                                {'// getText callback used to convert values into strings\n'}
                                {'getText: function (gauge, part, value, text) {\n'}
                                {'    switch (part) {\n'}
                                {'        case \'value\':\n'}
                                {'            if (value <= 10) return \'Empty!\';\n'}
                                {'            if (value <= 25) return \'Low...\';\n'}
                                {'            if (value <= 95) return \'Good\';\n'}
                                {'            return \'Full\';\n'}
                                {'        case \'min\':\n'}
                                {'            return \'EMPTY\';\n'}
                                {'        case \'max\':\n'}
                                {'            return \'FULL\';\n'}
                                {'    }\n'}
                                {'    return text;\n'}
                                {'},\n'}
                                {'\n'}
                                {'// event handlers\n'}
                                {'valueChanged: function (s, e) {\n'}
                                {'    this.setState({ value: s.value });\n'}
                                {'}'}
                            </div>
                            <div className="tab-pane pane-content" id="tvCss">
                                {'.text-gauge.wj-gauge text {\n'}
                                {'    fill: #7c7cff;\n'}
                                {'    font-weight: bold;\n'}
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live): </h4>
                    <Wj.RadialGauge
                        className="text-gauge"
                        value={ this.state.value }
                        valueChanged={ this.valueChanged }
                        isReadOnly={ false }
                        showRanges={ false }
                        getText={ this.getText }
                        ranges={[
                            { min: 0, max: 10, color: 'red' },
                            { min: 10, max: 25, color: 'yellow' },
                            { min: 25, max: 100, color: 'green' }
                        ]} />
                </div>
            </div>
        </div>;
    }
});
