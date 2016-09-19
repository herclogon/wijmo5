declare var React: any;

var GettingStarted = React.createClass({

    // initialize state
    getInitialState: function () {
        return {
            value: 50,
            min: 0,
            max: 100,
            format: 'n0',
            step: 10
        }
    },

    // Wijmo event handler
    valueChanged: function (s, e) {
        this.setState({ value: s.value });
    },

    // render the component
    render: function () {
        return <div>
            <h2>
                Getting Started
            </h2>
            <p>
                Steps for getting started with Gauge controls in React applications:
            </p>
            <ol>
                <li>Add references to React, Wijmo, and the Wijmo/React interop module.</li>
                <li>Add wijmo controls to your React components using regular JSX markup.</li>
                <li>(Optional) Use CSS to customize the appearance of the controls.</li>
            </ol>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#gsJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#gsJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="gsJsx">
                                {'<Wj.LinearGauge\n'}
                                {'    value={ this.state.value }\n'}
                                {'    min={ this.state.min }\n'}
                                {'    max= { this.state.max }\n'}
                                {'    format={ this.state.format} />\n'}
                                {'<Wj.RadialGauge\n'}
                                {'    value={ this.state.value }\n'}
                                {'    min={ this.state.min }\n'}
                                {'    max= { this.state.max }\n'}
                                {'    format={ this.state.format} />\n'}
                                {'<div className="app-input-group">\n'}
                                {'    <label>value</label>\n'}
                                {'    <Wj.InputNumber\n'}
                                {'        value={ this.state.value }\n'}
                                {'        valueChanged={ this.valueChanged }\n'}
                                {'        min={ this.state.min }\n'}
                                {'        max= { this.state.max }\n'}
                                {'        step= { this.state.step }\n'}
                                {'        format={ this.state.format} />\n'}
                                {'</div>'}
                            </div>
                            <div className="tab-pane pane-content" id="gsJs">
                                {'getInitialState: function () {\n'}
                                {'    return {\n'}
                                {'        value: 50,\n'}
                                {'        min: 0,\n'}
                                {'        max: 100,\n'}
                                {'        format: \'n0\',\n'}
                                {'        step: 10\n'}
                                {'    }\n'}
                                {'},\n'}
                                {'\n'}
                                {'// Wijmo event handler\n'}
                                {'valueChanged: function (s, e) {\n'}
                                {'    this.setState({ value: s.value });\n'}
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live): </h4>
                    <Wj.LinearGauge
                        value={ this.state.value }
                        min={ this.state.min }
                        max= { this.state.max }
                        format={ this.state.format} />
                    <Wj.RadialGauge
                        value={ this.state.value }
                        min={ this.state.min }
                        max= { this.state.max }
                        format={ this.state.format} />
                    <div className="app-input-group">
                        <label>value</label>
                        <Wj.InputNumber
                            value={ this.state.value }
                            valueChanged={ this.valueChanged }
                            min={ this.state.min }
                            max= { this.state.max }
                            step= { this.state.step }
                            format={ this.state.format} />
                    </div>
                </div>
            </div>
        </div>;
    }
});
