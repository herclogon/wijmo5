declare var React: any;

var AutoComplete = React.createClass({
    getInitialState: function () {
        var countries = Util.getCountries();
        return {
            countries: countries,
            country: countries[0]
        }
    },

    // Wijmo event handlers
    countryChanged: function (s, e) {
        this.setState({ country: s.text });
    },

    render: function () {
        return <div>
            <h2>
                AutoComplete
            </h2>
            <p>
                The AutoComplete control is an auto-complete control that allows you to filter its
                item list as you type, as well as select a value directly from its drop-down list.
            </p>
            <p>
                To use the AutoComplete control, you must minimally set the <b>itemsSource</b> property
                to an array of data in order to populate its item list. The AutoComplete
                control also offers several other properties to alter its behavior, such as
                the <b>cssMatch</b> property.The <b>cssMatch</b> property allows you to specify the
                CSS class that is used to highlight parts of the content that match your search terms.
            </p>
            <p>
                The example below uses an array of strings to populate the AutoComplete control's
                item list using the <b>itemsSource</b> property.To see a list of suggestions,
                type <b>"ab"</b> or <b>"za"</b> in the AutoComplete controls below.
            </p>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#acJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#acJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="acJsx">
                                {'<div className="app-input-group">\n'}
                                {'    <label htmlFor="ac1">itemsSource Only: </label>\n'}
                                {'    <Wj.AutoComplete id="ac1"\n'}
                                {'        itemsSource={ this.state.countries }\n'}
                                {'        text={ this.state.country }\n'}
                                {'        textChanged={ this.countryChanged }/>\n'}
                                {'</div>\n'}
                                {'<div className="app-input-group">\n'}
                                {'    <label htmlFor="ac2">itemsSource &amp; cssMatch: </label>\n'}
                                {'    <Wj.AutoComplete id="ac2"\n'}
                                {'        itemsSource={ this.state.countries }\n'}
                                {'        cssMatch="highlight"\n'}
                                {'        text={ this.state.country }\n'}
                                {'        textChanged={ this.countryChanged }/>\n'}
                                {'</div>\n'}
                                {'<p>\n'}
                                {'    <b>Selected Country: { this.state.country }</b>\n'}
                                {'</p>'}
                            </div>
                            <div className="tab-pane pane-content" id="acJs">
                                {'getInitialState: function () {\n'}
                                {'    var countries = Util.getCountries();\n'}
                                {'    return {\n'}
                                {'        countries: countries,\n'}
                                {'        country: countries[0]\n'}
                                {'    }\n'}
                                {'},\n'}
                                {'\n'}
                                {'// Wijmo event handlers\n'}
                                {'countryChanged: function (s, e) {\n'}
                                {'    this.setState({ country: s.text });\n'}
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <div className="app-input-group">
                        <label htmlFor="ac1">itemsSource Only: </label>
                        <Wj.AutoComplete id="ac1"
                            itemsSource={ this.state.countries }
                            text={ this.state.country }
                            textChanged={ this.countryChanged }/>
                    </div>
                    <div className="app-input-group">
                        <label htmlFor="ac2">itemsSource &amp; cssMatch: </label>
                        <Wj.AutoComplete id="ac2"
                            itemsSource={ this.state.countries }
                            cssMatch="highlight"
                            text={ this.state.country }
                            textChanged={ this.countryChanged }/>
                    </div>
                    <p>
                        <b>Selected Country: { this.state.country }</b>
                    </p>
                </div>
            </div>
        </div>;
    }
});
