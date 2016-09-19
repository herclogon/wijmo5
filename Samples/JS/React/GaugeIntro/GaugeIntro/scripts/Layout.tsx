declare var React: any;

var Layout = React.createClass({

    // initialize state
    getInitialState: function () {
        return {
            value: 50,
            min: 0,
            max: 100,
            format: 'n0',
            step: 10,
            isReadOnly: false,
            thumbSize: null,
            showText: 'All',
            direction: 'Right',
            hasShadow: true,
            isAnimated: false,
            autoScale: true,
            startAngle: 0,
            sweepAngle: 180,
            showTextValues: 'All,None,Value,MinMax'.split(','),
            directionValues: 'Up,Down,Left,Right'.split(','),
        }
    },

    // event handlers
    valueChanged: function (s, e) {
        this.setState({ value: s.value });
    },
    showTextChanged: function(s, e) {
        this.setState({ showText: s.text });
    },
    directionChanged: function(s, e) {
        this.setState({ direction: s.text });
    },
    thumbSizeChanged: function(s, e) {
        this.setState({ thumbSize: s.value });
    },
    startAngleChanged: function(s, e) {
        this.setState({ startAngle: s.value });
    },
    sweepAngleChanged: function(s, e) {
        this.setState({ sweepAngle: s.value });
    },
    isReadOnlyChanged: function(e) {
        this.setState({ isReadOnly: e.target.checked });
    },
    isAnimatedChanged: function(e) {
        this.setState({ isAnimated: e.target.checked });
    },
    hasShadowChanged: function(e) {
        this.setState({ hasShadow: e.target.checked });
    },
    autoScaleChanged: function(e) {
        this.setState({ autoScale: e.target.checked });
    },

    // render the component
    render: function () {
        return <div>
            <h2 id="Layout">Layout and Appearance Properties</h2>
            <p>
                The gauge controls are designed to be styled mostly with CSS, but they do
                have several properties that affect their layout and appearance:</p>
            <ul>
                <li>
                    <b>thumbSize</b>: Determines the size of the thumb element used to
                    display the current value.</li>
                <li>
                    <b>showText</b>: Determines whether the gauge should show min, max,
                    and/or current values as text elements.</li>
                <li>
                    <b>hasShadow</b>: Determines whether the gauge should add a shadow
                    effect to the face and value ranges.</li>
                <li>
                    <b>isAnimated</b>: Determines whether the gauge should use animation
                    when updating the current value.</li>
                <li>
                    <b>autoScale</b>: Determines whether radial gauges should be scaled
                    automatically to fill the control.</li>
                <li>
                    <b>startAngle, sweepAngle</b>: Determine the start and sweeping angles
                    for radial gauges. Angles are measured in degrees, clockwise, starting
                    from the 9 o'clock position.</li>
                <li>
                    <b>direction</b>: Determines the direction in which linear gauges are filled.</li>
            </ul>
            <p>
                The example below shows the effect of these properties on linear and radial gauges:</p>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#loJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#loJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="loJsx">
                                {'<h5>Common Properties</h5>\n'}
                                {'<dl className="dl-horizontal">\n'}
                                {'    <dt>hasShadow</dt>\n'}
                                {'    <dd>\n'}
                                {'        <input type="checkbox" checked={ this.state.hasShadow} onChange={ this.hasShadowChanged } />\n'}
                                {'    </dd>\n'}
                                {'    <dt>isAnimated</dt>\n'}
                                {'    <dd>\n'}
                                {'        <input type="checkbox" checked={ this.state.isAnimated} onChange={ this.isAnimatedChanged } />\n'}
                                {'    </dd>\n'}
                                {'    <dt>showText</dt>\n'}
                                {'    <dd>\n'}
                                {'        <Wj.ComboBox\n'}
                                {'            text={ this.state.showText }\n'}
                                {'            textChanged={ this.showTextChanged }\n'}
                                {'            itemsSource={ this.state.showTextValues } />\n'}
                                {'    </dd>\n'}
                                {'    <dt>thumbSize</dt>\n'}
                                {'    <dd>\n'}
                                {'        <Wj.InputNumber\n'}
                                {'            isRequired={ false }\n'}
                                {'            min={ 0 } max={ 50} step={ 5 }\n'}
                                {'            placeholder="(auto)" \n'}
                                {'            value={ this.state.thumbSize }\n'}
                                {'            valueChanged={ this.thumbSizeChanged } />\n'}
                                {'    </dd>\n'}
                                {'    <dt>Gauge Value</dt>\n'}
                                {'    <dd>\n'}
                                {'        <Wj.InputNumber\n'}
                                {'            min={ this.state.min }\n'}
                                {'            max={ this.state.max }\n'}
                                {'            step={ this.state.step }\n'}
                                {'            format={ this.state.format } \n'}
                                {'            value={ this.state.value }\n'}
                                {'            valueChanged={ this.valueChanged } />\n'}
                                {'    </dd>\n'}
                                {'</dl>\n'}
                                {'\n'}
                                {'<h5>LinearGauge Properties</h5>\n'}
                                {'<dl className="dl-horizontal">\n'}
                                {'    <dt>Direction</dt>\n'}
                                {'    <dd>\n'}
                                {'        <Wj.ComboBox\n'}
                                {'            itemsSource={ this.state.directionValues }\n'}
                                {'            text={ this.state.direction }\n'}
                                {'            textChanged={ this.directionChanged } />\n'}
                                {'    </dd>\n'}
                                {'</dl>\n'}
                                {'<Wj.LinearGauge\n'}
                                {'    style={ \n'}
                                {'        this.state.direction.match(/Up|Down/)\n'}
                                {'            ? { width: \'2em\', height: \'200px\', margin: \'auto\' }\n'}
                                {'            : { width: \'80%\', height: \'\', margin: \'auto\' }\n'}
                                {'    }\n'}
                                {'    value={ this.state.value }\n'}
                                {'    valueChanged={ this.valueChanged }\n'}
                                {'    isReadOnly={ false }\n'}
                                {'    min={ this.state.min }\n'}
                                {'    max={ this.state.max }\n'}
                                {'    step={ this.state.step }\n'}
                                {'    format={ this.state.format }\n'}
                                {'    thumbSize={ this.state.thumbSize }\n'}
                                {'    showText={ this.state.showText }\n'}
                                {'    hasShadow={ this.state.hasShadow }\n'}
                                {'    isAnimated={ this.state.isAnimated }\n'}
                                {'    direction={ this.state.direction } />\n'}
                                {'\n'}
                                {'<h5>RadialGauge Properties</h5>\n'}
                                {'<dl className="dl-horizontal">\n'}
                                {'    <dt>autoScale</dt>\n'}
                                {'    <dd>\n'}
                                {'        <input type="checkbox" checked={ this.state.autoScale} onChange={ this.autoScaleChanged } />\n'}
                                {'    </dd>\n'}
                                {'    <dt>startAngle</dt>\n'}
                                {'    <dd>\n'}
                                {'        <Wj.InputNumber\n'}
                                {'            min={ -360 } max={ 360 } step={ 45 }\n'}
                                {'            value={ this.state.startAngle }\n'}
                                {'            valueChanged={ this.startAngleChanged } />\n'}
                                {'    </dd>\n'}
                                {'    <dt>sweepAngle</dt>\n'}
                                {'    <dd>\n'}
                                {'        <Wj.InputNumber\n'}
                                {'            min={ 0 } max={ 360 } step={ 45 }\n'}
                                {'            value={ this.state.sweepAngle }\n'}
                                {'            valueChanged={ this.sweepAngleChanged } />\n'}
                                {'    </dd>\n'}
                                {'</dl>\n'}
                                {'<Wj.RadialGauge\n'}
                                {'    value={ this.state.value }\n'}
                                {'    valueChanged={ this.valueChanged }\n'}
                                {'    isReadOnly={ false }\n'}
                                {'    min={ this.state.min }\n'}
                                {'    max={ this.state.max }\n'}
                                {'    step={ this.state.step }\n'}
                                {'    format={ this.state.format }\n'}
                                {'    thumbSize={ this.state.thumbSize }\n'}
                                {'    showText={ this.state.showText }\n'}
                                {'    hasShadow={ this.state.hasShadow }\n'}
                                {'    isAnimated={ this.state.isAnimated }\n'}
                                {'    autoScale={ this.state.autoScale }\n'}
                                {'    startAngle={ this.state.startAngle }\n'}
                                {'    sweepAngle={ this.state.sweepAngle } />\n'}
                            </div>
                            <div className="tab-pane pane-content" id="loJs">
                                {'getInitialState: function () {\n'}
                                {'    return {\n'}
                                {'        value: 50,\n'}
                                {'        min: 0,\n'}
                                {'        max: 100,\n'}
                                {'        format: \'n0\',\n'}
                                {'        step: 10,\n'}
                                {'        isReadOnly: false,\n'}
                                {'        thumbSize: null,\n'}
                                {'        showText: \'All\',\n'}
                                {'        direction: \'Right\',\n'}
                                {'        hasShadow: true,\n'}
                                {'        isAnimated: false,\n'}
                                {'        autoScale: true,\n'}
                                {'        startAngle: 0,\n'}
                                {'        sweepAngle: 180,\n'}
                                {'        showTextValues: \'All,None,Value,MinMax\'.split(\',\'),\n'}
                                {'        directionValues: \'Up,Down,Left,Right\'.split(\',\'),\n'}
                                {'    }\n'}
                                {'},\n'}
                                {'\n'}
                                {'// event handlers\n'}
                                {'valueChanged: function (s, e) {\n'}
                                {'    this.setState({ value: s.value });\n'}
                                {'},\n'}
                                {'showTextChanged: function(s, e) {\n'}
                                {'    this.setState({ showText: s.text });\n'}
                                {'},\n'}
                                {'directionChanged: function(s, e) {\n'}
                                {'    this.setState({ direction: s.text });\n'}
                                {'},\n'}
                                {'thumbSizeChanged: function(s, e) {\n'}
                                {'    this.setState({ thumbSize: s.value });\n'}
                                {'},\n'}
                                {'startAngleChanged: function(s, e) {\n'}
                                {'    this.setState({ startAngle: s.value });\n'}
                                {'},\n'}
                                {'sweepAngleChanged: function(s, e) {\n'}
                                {'    this.setState({ sweepAngle: s.value });\n'}
                                {'},\n'}
                                {'isReadOnlyChanged: function(e) {\n'}
                                {'    this.setState({ isReadOnly: e.target.checked });\n'}
                                {'},\n'}
                                {'isAnimatedChanged: function(e) {\n'}
                                {'    this.setState({ isAnimated: e.target.checked });\n'}
                                {'},\n'}
                                {'hasShadowChanged: function(e) {\n'}
                                {'    this.setState({ hasShadow: e.target.checked });\n'}
                                {'},\n'}
                                {'autoScaleChanged: function(e) {\n'}
                                {'    this.setState({ autoScale: e.target.checked });\n'}
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>

                    <h5>Common Properties</h5>
                    <dl className="dl-horizontal">
                        <dt>hasShadow</dt>
                        <dd>
                            <input type="checkbox" checked={ this.state.hasShadow} onChange={ this.hasShadowChanged } />
                        </dd>
                        <dt>isAnimated</dt>
                        <dd>
                            <input type="checkbox" checked={ this.state.isAnimated} onChange={ this.isAnimatedChanged } />
                        </dd>
                        <dt>showText</dt>
                        <dd>
                            <Wj.ComboBox
                                text={ this.state.showText }
                                textChanged={ this.showTextChanged }
                                itemsSource={ this.state.showTextValues } />
                        </dd>
                        <dt>thumbSize</dt>
                        <dd>
                            <Wj.InputNumber
                                isRequired={ false }
                                min={ 0 }
                                max={ 50} 
                                step={ 5 }
                                placeholder="(auto)" 
                                value={ this.state.thumbSize }
                                valueChanged={ this.thumbSizeChanged } />
                        </dd>
                        <dt>Gauge Value</dt>
                        <dd>
                            <Wj.InputNumber
                                min={ this.state.min }
                                max={ this.state.max }
                                step={ this.state.step }
                                format={ this.state.format } 
                                value={ this.state.value }
                                valueChanged={ this.valueChanged } />
                        </dd>
                    </dl>

                    <h5>LinearGauge Properties</h5>
                    <dl className="dl-horizontal">
                        <dt>Direction</dt>
                        <dd>
                            <Wj.ComboBox
                                itemsSource={ this.state.directionValues }
                                text={ this.state.direction }
                                textChanged={ this.directionChanged } />
                        </dd>
                    </dl>
                    <Wj.LinearGauge
                        style={ 
                            this.state.direction.match(/Up|Down/)
                                ? { width: '2em', height: '200px', margin: 'auto' }
                                : { width: '80%', height: '', margin: 'auto' }
                        }
                        value={ this.state.value }
                        valueChanged={ this.valueChanged }
                        isReadOnly={ false }
                        min={ this.state.min }
                        max={ this.state.max }
                        step={ this.state.step }
                        format={ this.state.format }
                        thumbSize={ this.state.thumbSize }
                        showText={ this.state.showText }
                        hasShadow={ this.state.hasShadow }
                        isAnimated={ this.state.isAnimated }
                        direction={ this.state.direction } />

                    <h5>RadialGauge Properties</h5>
                    <dl className="dl-horizontal">
                        <dt>autoScale</dt>
                        <dd>
                            <input type="checkbox" checked={ this.state.autoScale} onChange={ this.autoScaleChanged } />
                        </dd>
                        <dt>startAngle</dt>
                        <dd>
                            <Wj.InputNumber
                                min={ -360 }
                                max={ 360 }
                                step={ 45 } 
                                value={ this.state.startAngle }
                                valueChanged={ this.startAngleChanged } />
                        </dd>
                        <dt>sweepAngle</dt>
                        <dd>
                            <Wj.InputNumber
                                min={ 0 }
                                max={ 360 }
                                step={ 45 } 
                                value={ this.state.sweepAngle }
                                valueChanged={ this.sweepAngleChanged } />
                        </dd>
                    </dl>
                    <Wj.RadialGauge
                        value={ this.state.value }
                        valueChanged={ this.valueChanged }
                        isReadOnly={ false }
                        min={ this.state.min }
                        max={ this.state.max }
                        step={ this.state.step }
                        format={ this.state.format }
                        thumbSize={ this.state.thumbSize }
                        showText={ this.state.showText }
                        hasShadow={ this.state.hasShadow }
                        isAnimated={ this.state.isAnimated }
                        autoScale={ this.state.autoScale }
                        startAngle={ this.state.startAngle }
                        sweepAngle={ this.state.sweepAngle } />
                </div>
            </div>
        </div>;
    }
});
