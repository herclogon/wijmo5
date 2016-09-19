declare var React: any;

var Thumb = React.createClass({

    // initialize state
    getInitialState: function () {
        return {
            value: 50,
            min: 0,
            max: 100,
            format: 'n0',
            step: 10,
            isReadOnly: false
        }
    },

    // event handlers
    valueChanged: function (s, e) {
        this.setState({ value: s.value });
    },

    // render the component
    render: function () {
        return <div>
            <h2 id="Thumb">Showing the Thumb</h2>
            <p>
                By default, gauges indicate the current value by filling the control with color.
                You can use the <b>thumbSize</b> property to add a visual element that highlights
                the current value.</p>
            <p>
                The example below demonstrates how to use the <b>thumbSize</b> property.
                The example also reduces the <b>thickness</b> property of the gauge's <b>face</b>
                and <b>pointer</b> ranges so the thumb becomes more visible.</p>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#thJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#thJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="thJsx">
                                {'<Wj.LinearGauge\n'}
                                {'    value={ this.state.value }\n'}
                                {'    valueChanged={ this.valueChanged }\n'}
                                {'    min={ this.state.min }\n'}
                                {'    max={ this.state.max }\n'}
                                {'    step={ this.state.step }\n'}
                                {'    format={ this.state.format }\n'}
                                {'    isReadOnly={ false }\n'}
                                {'    isAnimated={ false }\n'}
                                {'    thumbSize={ 10 }\n'}
                                {'    face={{ thickness:0.25 }}\n'}
                                {'    pointer={{ thickness:0.25 }} />\n'}
                                {'<Wj.RadialGauge\n'}
                                {'    value={ this.state.value }\n'}
                                {'    valueChanged={ this.valueChanged }\n'}
                                {'    min={ this.state.min }\n'}
                                {'    max={ this.state.max }\n'}
                                {'    step={ this.state.step }\n'}
                                {'    format={ this.state.format }\n'}
                                {'    isReadOnly={ false }\n'}
                                {'    isAnimated={ false }\n'}
                                {'    thumbSize={ 10 }\n'}
                                {'    face={{ thickness:0.08 }}\n'}
                                {'    pointer={{ thickness:0.08 }} />\n'}
                                {'<div className="app-input-group">\n'}
                                {'    <label>value</label>\n'}
                                {'    <Wj.InputNumber\n'}
                                {'        value={ this.state.value }\n'}
                                {'        valueChanged={ this.valueChanged }\n'}
                                {'        min={ this.state.min }\n'}
                                {'        max={ this.state.max }\n'}
                                {'        step={ this.state.step }\n'}
                                {'        format={ this.state.format } />\n'}
                                {'</div>'}
                            </div>
                            <div className="tab-pane pane-content" id="thJs">
                                {'getInitialState: function () {\n'}
                                {'    return {\n'}
                                {'        value: 50,\n'}
                                {'        min: 0,\n'}
                                {'        max: 100,\n'}
                                {'        format: \'n0\',\n'}
                                {'        step: 10,\n'}
                                {'        isReadOnly: false\n'}
                                {'    }\n'}
                                {'},\n'}
                                {'\n'}
                                {'// event handlers\n'}
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
                        valueChanged={ this.valueChanged }
                        min={ this.state.min }
                        max={ this.state.max }
                        step={ this.state.step }
                        format={ this.state.format }
                        isReadOnly={ false }
                        isAnimated={ false }
                        thumbSize={ 10 }
                        face={{ thickness:0.25 }}
                        pointer={{ thickness:0.25 }} />
                    <Wj.RadialGauge
                        value={ this.state.value }
                        valueChanged={ this.valueChanged }
                        min={ this.state.min }
                        max={ this.state.max }
                        step={ this.state.step }
                        format={ this.state.format }
                        isReadOnly={ false }
                        isAnimated={ false }
                        thumbSize={ 10 }
                        face={{ thickness:0.08 }}
                        pointer={{ thickness:0.08 }} />
                    <div className="app-input-group">
                        <label>value</label>
                        <Wj.InputNumber
                            value={ this.state.value }
                            valueChanged={ this.valueChanged }
                            min={ this.state.min }
                            max={ this.state.max }
                            step={ this.state.step }
                            format={ this.state.format } />
                    </div>
                </div>
            </div>
        </div>;
    }
});
