declare var React: any;

var InputMask = React.createClass({
    getInitialState: function () {
        return {
            customMask: null,
            theDateTime: new Date()
        }
    },

    // Wijmo event handlers
    customMaskChanged: function (s, e) {
        this.setState({ customMask: s.value });
    },
    theDateTimeChanged: function(s, e) {
        this.setState({ theDateTime: s.value });
    },

    render: function () {
        return <div>
            <h2>
                InputMask
            </h2>
            <p>
                The InputMask control allows you to validate and format user input as it is entered, preventing
                invalid data.  The InputMask control can be used without specifying any of its properties; however,
                you will typically set its <b>value</b> and <b>mask</b> properties.  Like the other Wijmo input
                controls, the <b>value</b> property specifies the value for the InputMask control.
                The <b>mask</b> property specifies the control's mask and supports a combination of the following 
                characters:
            </p>
            <dl className="dl-horizontal">
                <dt>0</dt>
                <dd>Digit.</dd>
                <dt>9</dt>
                <dd>Digit or space.</dd>
                <dt>#</dt>
                <dd>Digit, sign, or space.</dd>
                <dt>L</dt>
                <dd>Letter.</dd>
                <dt>l</dt>
                <dd>Letter or space.</dd>
                <dt>A</dt>
                <dd>Alphanumeric.</dd>
                <dt>a</dt>
                <dd>Alphanumeric or space.</dd>
                <dt>.</dt>
                <dd>Localized decimal point.</dd>
                <dt>,</dt>
                <dd>Localized thousand separator.</dd>
                <dt>:</dt>
                <dd>Localized time separator.</dd>
                <dt>/</dt>
                <dd>Localized date separator.</dd>
                <dt>$</dt>
                <dd>Localized currency symbol.</dd>
                <dt>&lt;</dt>
                <dd>Converts characters that follow to lowercase.</dd>
                <dt>&gt;</dt>
                <dd>Converts characters that follow to uppercase.</dd>
                <dt>|</dt>
                <dd>Disables case conversion.</dd>
                <dt>\</dt>
                <dd>Escapes any character, turning it into a literal.</dd>
                <dt>All others</dt>
                <dd>Literals.</dd>
            </dl>
            <p>
                The examples below demonstrates how to use the <b>value</b> and <b>mask</b> properties with the
                InputMask, InputDate, and InputTime controls.
            </p>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#imJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#imJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="imJsx">
                                {'<div className="app-input-group">\n'}
                                {'    <label>Social Security Number</label>\n'}
                                {'    <Wj.InputMask\n'}
                                {'        mask="000-00-0000"\n'}
                                {'        title="Mask: 000-00-0000"/>\n'}
                                {'</div>\n'}
                                {'<div className="app-input-group">\n'}
                                {'    <label>Phone Number</label>\n'}
                                {'    <Wj.InputMask\n'}
                                {'        mask="(999) 000-0000"\n'}
                                {'        title="Mask: (999) 000-0000"/>\n'}
                                {'</div>\n'}
                                {'<div className="app-input-group">\n'}
                                {'    <label>Try your own</label>\n'}
                                {'    <Wj.InputMask\n'}
                                {'        value={ this.state.customMask }\n'}
                                {'        valueChanged={ this.customMaskChanged }\n'}
                                {'        isRequired={ false }\n'}
                                {'        placeholder="Enter an input mask..."/>\n'}
                                {'    <Wj.InputMask\n'}
                                {'        mask={ this.state.customMask }\n'}
                                {'        title="Mask: {{ customMask || \'N/A\' }}"/>\n'}
                                {'</div>\n'}
                                {'<div className="app-input-group">\n'}
                                {'    <label>InputDate with mask</label>\n'}
                                {'    <Wj.InputDate\n'}
                                {'        format="MM/dd/yyyy"\n'}
                                {'        mask="99/99/9999"\n'}
                                {'        title="Mask: 99/99/9999"\n'}
                                {'        value={ this.state.theDateTime }\n'}
                                {'        valueChanged={ this.theDateTimeChanged }/>\n'}
                                {'</div>\n'}
                                {'<div className="app-input-group">\n'}
                                {'    <label>InputTime with mask</label>\n'}
                                {'    <Wj.InputTime\n'}
                                {'        format="hh:mm tt"\n'}
                                {'        isEditable={ true }\n'}
                                {'        step={ 15 }\n'}
                                {'        mask="00:00 >LL"\n'}
                                {'        title="Mask: 00:00 >LL"\n'}
                                {'        value={ this.state.theDateTime }\n'}
                                {'        valueChanged={ this.theDateTimeChanged }/>\n'}
                                {'</div>'}
                            </div>
                            <div className="tab-pane pane-content" id="imJs">
                                {'getInitialState: function () {\n'}
                                {'    return {\n'}
                                {'        customMask: null,\n'}
                                {'        theDateTime: new Date()\n'}
                                {'    }\n'}
                                {'},\n'}
                                {'\n'}
                                {'// Wijmo event handlers\n'}
                                {'customMaskChanged: function(s, e) {\n'}
                                {'    this.setState({ customMask: s.value });\n'}
                                {'},\n'}
                                {'theDateTimeChanged: function(s, e) {\n'}
                                {'    this.setState({ theDateTime: s.value });\n'}
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <div className="app-input-group">
                        <label>Social Security Number</label>
                        <Wj.InputMask
                            mask="000-00-0000"
                            title="Mask: 000-00-0000"/>
                    </div>
                    <div className="app-input-group">
                        <label>Phone Number</label>
                        <Wj.InputMask
                            mask="(999) 000-0000"
                            title="Mask: (999) 000-0000"/>
                    </div>
                    <div className="app-input-group">
                        <label>Try your own</label>
                        <Wj.InputMask
                            value={ this.state.customMask }
                            valueChanged={ this.customMaskChanged }
                            isRequired={ false }
                            placeholder="Enter an input mask..."/>
                        <Wj.InputMask
                            mask={ this.state.customMask }
                            title="Mask: {{ customMask || 'N/A' }}"/>
                    </div>
                    <div className="app-input-group">
                        <label>InputDate with mask</label>
                        <Wj.InputDate
                            format="MM/dd/yyyy"
                            mask="99/99/9999"
                            title="Mask: 99/99/9999"
                            value={ this.state.theDateTime }
                            valueChanged={ this.theDateTimeChanged }/>
                    </div>
                    <div className="app-input-group">
                        <label>InputTime with mask</label>
                        <Wj.InputTime
                            format="hh:mm tt"
                            isEditable={ true }
                            step={ 15 }
                            mask="00:00 >LL"
                            title="Mask: 00:00 >LL"
                            value={ this.state.theDateTime }
                            valueChanged={ this.theDateTimeChanged }/>
                    </div>
                </div>
            </div>
        </div>;
    }
});
