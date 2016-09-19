declare var React: any;

var ListBox = React.createClass({
    getInitialState: function () {
        var countries = Util.getCountries();
        return {
            countries: countries,
            selectedIndex: 0,
            selectedValue: countries[0]
        }
    },

    // Wijmo event handlers
    selChanged: function (s, e) {
        this.setState({
            selectedIndex: s.selectedIndex,
            selectedValue: s.selectedValue
        });
    },

    render: function () {
        return <div>
            <h2>
                ListBox
            </h2>
            <p>
                The ListBox control displays a list of items and allows you to select items using your
                mouse and keyboard. Like the AutoComplete and ComboBox controls, you must specify the
                ListBox's <b>itemsSource</b> property in order to use the control.
            </p>
            <p>
                The example below allows you to select an item within the ListBox control, and also displays
                the control's <b>selectedIndex</b> and <b>selectedValue</b> properties.
            </p>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#lbJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#lbJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="lbJsx">
                                {'<div className="app-input-group">\n'}
                                {'    <Wj.ListBox\n'}
                                {'        style={{ width: \'250px\', height: \'150px\' }}\n'}
                                {'        itemsSource={ this.state.countries }\n'}
                                {'        selectedIndexChanged={ this.selChanged }/>\n'}
                                {'    <p>\n'}
                                {'        <b>selectedIndex: { this.state.selectedIndex }</b>\n'}
                                {'    </p>\n'}
                                {'    <p>\n'}
                                {'        <b>selectedValue: { this.state.selectedValue }</b>\n'}
                                {'    </p>\n'}
                                {'</div>'}
                            </div>
                            <div className="tab-pane pane-content" id="lbJs">
                                {'getInitialState: function () {\n'}
                                {'    var countries = Util.getCountries();\n'}
                                {'    return {\n'}
                                {'        countries: countries,\n'}
                                {'        selectedIndex: 0,\n'}
                                {'        selectedValue: countries[0]\n'}
                                {'    }\n'}
                                {'},\n'}
                                {'\n'}
                                {'// Wijmo event handlers\n'}
                                {'selChanged: function(s, e) {\n'}
                                {'    this.setState({\n'}
                                {'        selectedIndex: s.selectedIndex,\n'}
                                {'        selectedValue: s.selectedValue\n'}
                                {'    });\n'}
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <div className="app-input-group">
                        <Wj.ListBox
                            style={{ width: '250px', height: '150px' }}
                            itemsSource={ this.state.countries }
                            selectedIndexChanged={ this.selChanged }/>
                        <p>
                            <b>selectedIndex: { this.state.selectedIndex }</b>
                        </p>
                        <p>
                            <b>selectedValue: { this.state.selectedValue }</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>;
    }
});
