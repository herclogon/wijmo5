declare var React: any;

var Editing = React.createClass({

    // initialize state
    getInitialState: function () {
        return {
            value: 50,
            min: 0,
            max: 100,
            format: 'n0',
            step: 10,
            showTicks: false,
            isReadOnly: false
        }
    },

    // event handlers
    valueChanged: function (s, e) {
        this.setState({ value: s.value });
    },
    isReadOnlyChanged: function (e) {
        this.setState({ isReadOnly: e.target.checked });
    },
    showTicksChanged: function (e) {
        this.setState({ showTicks: e.target.checked });
    },

    // render the component
    render: function () {
        return <div>
            <h2 id="Editing">Editing (Gauges as Sliders)</h2>
            <p>
                In addition to displaying information graphically, gauges can be used as input controls
                (in this case they are also known as "sliders").</p>
            <p>
                To use gauge controls for input, set the <b>isReadOnly</b> property to false. This will
                allow users to change the gauge's current value simply by clicking or tapping the gauge.</p>
            <p>
                When using gauges as input controls, remember to set the <b>step</b> property to define
                the precision of the changes applied by clicking or tapping, as well as the magnitude of
                changes applied by spinning the mouse wheel.</p>
            <p>
                You can also use the <b>showTicks</b> property to display tickmarks on the gauge.
                The <b>step</b> property determines the spacing between tickmarks.</p>
            <p>
                The example below demonstrates how to use the <b>isReadOnly</b>, <b>step</b>, and
                <b>showTicks</b> properties with the LinearGauge and RadialGauge controls.</p>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#edJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#edJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="edJsx">
                                {'<Wj.LinearGauge\n'}
                                {'    value={ this.state.value }\n'}
                                {'    valueChanged={ this.valueChanged }\n'}
                                {'    min={ this.state.min }\n'}
                                {'    max={ this.state.max }\n'}
                                {'    format={ this.state.format }\n'}
                                {'    step={ this.state.step }\n'}
                                {'    showTicks={ this.state.showTicks }\n'}
                                {'    isReadOnly={ this.state.isReadOnly} />\n'}
                                {'<Wj.RadialGauge\n'}
                                {'    value={ this.state.value }\n'}
                                {'    valueChanged={ this.valueChanged }\n'}
                                {'    min={ this.state.min }\n'}
                                {'    max={ this.state.max }\n'}
                                {'    format={ this.state.format }\n'}
                                {'    step={ this.state.step }\n'}
                                {'    showTicks={ this.state.showTicks }\n'}
                                {'    isReadOnly={ this.state.isReadOnly} />\n'}
                                {'<label>\n'}
                                {'    isReadOnly\n'}
                                {'    <input type="checkbox" checked={ this.state.isReadOnly} onChange={ this.isReadOnlyChanged } />\n'}
                                {'</label>\n'}
                                {'<br/>\n'}
                                {'<label>\n'}
                                {'    showTicks\n'}
                                {'    <input type="checkbox" checked={ this.state.showTicks} onChange={ this.showTicksChanged } />\n'}
                                {'</label>'}
                            </div>
                            <div className="tab-pane pane-content" id="edJs">
                                {'getInitialState: function () {\n'}
                                {'    return {\n'}
                                {'        value: 50,\n'}
                                {'        min: 0,\n'}
                                {'        max: 100,\n'}
                                {'        format: \'n0\',\n'}
                                {'        step: 10,\n'}
                                {'        showTicks: false,\n'}
                                {'        isReadOnly: false\n'}
                                {'    }\n'}
                                {'},\n'}
                                {'\n'}
                                {'// event handlers\n'}
                                {'valueChanged: function (s, e) {\n'}
                                {'    this.setState({ value: s.value });\n'}
                                {'},\n'}
                                {'isReadOnlyChanged: function(e) {\n'}
                                {'    this.isReadOnly({ value: e.target.checked });\n'}
                                {'},\n'}
                                {'showTicksChanged: function(e) {\n'}
                                {'    this.showTicks({ value: e.target.checked });\n'}
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live): </h4>
                    <Wj.LinearGauge
                        value={ this.state.value }
                        valueChanged={ this.valueChanged }
                        min={ this.state.min }
                        max={ this.state.max }
                        format={ this.state.format }
                        step={ this.state.step }
                        showTicks={ this.state.showTicks }
                        isReadOnly={ this.state.isReadOnly} />
                    <Wj.RadialGauge
                        value={ this.state.value }
                        valueChanged={ this.valueChanged }
                        min={ this.state.min }
                        max={ this.state.max }
                        format={ this.state.format }
                        step={ this.state.step }
                        showTicks={ this.state.showTicks }
                        isReadOnly={ this.state.isReadOnly} />
                    <label>
                        isReadOnly{' '}
                        <input type="checkbox" checked={ this.state.isReadOnly} onChange={ this.isReadOnlyChanged } />
                    </label>
                    <br/>
                    <label>
                        showTicks{' '}
                        <input type="checkbox" checked={ this.state.showTicks} onChange={ this.showTicksChanged } />
                    </label>
                </div>
            </div>
        </div>;
    }
});
