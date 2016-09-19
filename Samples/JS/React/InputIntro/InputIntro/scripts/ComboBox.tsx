declare var React: any;

var ComboBox = React.createClass({
    getInitialState: function () {
        var countries = Util.getCountries();
        return {
            countries: countries
        }
    },

    render: function () {
        return <div>
            <h2>
                ComboBox
            </h2>
            <p>
                The ComboBox control is very similar to the AutoComplete control, but rather than
                providing a list of suggestions as you type, the ComboBox will automatically complete
                and select the entry as you type.
            </p>
            <p>
                Like the AutoComplete control, you must minimally set the ComboBox's <b>itemsSource</b>
                property to an array of data in order to populate its item list. You may also want to
                specify whether the ComboBox is editable via the <b>isEditable</b> property. The
                <b>isEditable</b> property determines whether or not a user can enter values that do
                not appear in the ComboBox's item list.
            </p>
            <p>
                The example below uses two ComboBoxes bound to the same data source as the AutoComplete
                control above. The first ComboBox's <b>isEditable</b> property is set to false, while the
                second ComboBox's <b>isEditable</b> property is set to true.
            </p>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#cbJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#cbJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="cbJsx">
                                {'<div className="app-input-group">\n'}
                                {'    <label htmlFor="cmb1">Non-Editable: </label>\n'}
                                {'    <Wj.ComboBox id="cmb1"\n'}
                                {'        itemsSource={ this.state.countries }\n'}
                                {'        isRequired={ false } />\n'}
                                {'</div>\n'}
                                {'<div className="app-input-group">\n'}
                                {'    <label htmlFor="cmb2">Editable: </label>\n'}
                                {'    <Wj.ComboBox id="cmb2"\n'}
                                {'        itemsSource={ this.state.countries }\n'}
                                {'        isRequired={ true } />\n'}
                                {'</div>'}
                            </div>
                            <div className="tab-pane pane-content" id="cbJs">
                                {'getInitialState: function () {\n'}
                                {'    var countries = Util.getCountries();\n'}
                                {'    return {\n'}
                                {'        countries: countries\n'}
                                {'    }\n'}
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live): </h4>
                    <div className="app-input-group">
                        <label htmlFor="cmb1">Non-Editable: </label>
                        <Wj.ComboBox id="cmb1"
                            itemsSource={ this.state.countries }
                            isEditable={ false } />
                    </div>
                    <div className="app-input-group">
                        <label htmlFor="cmb2">Editable: </label>
                        <Wj.ComboBox id="cmb2"
                            itemsSource={ this.state.countries }
                            isEditable={ true }  />
                    </div>
                </div>
            </div>
        </div>;
    }
});
