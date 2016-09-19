declare var React: any;

var Filtering = React.createClass({
    getInitialState: function () {

        // create view with a filter function
        var view = new wijmo.collections.CollectionView(Util.getData(), {
            filter: function (item) {
                var rx = this.state ? this.state.filterRx : null;
                return rx == null || rx.test(item.country);
            }.bind(this)
        });
        return {
            view: view,
            filterRx: null
        }
    },

    // apply the new filter with some debouncing so user can type a little
    toFilter: null,
    filterChanged: function(e) {
        clearTimeout(this.toFilter);
        var filterText = e.target.value;
        this.setState({ filterRx: filterText ? new RegExp(filterText, 'i') : null });
        this.toFilter = setTimeout(() => {
            this.state.view.refresh();
        }, 500);
    },

    render: function () {
        return <div>
            <h2>
                Filtering
            </h2>
            <p>
                The FlexGrid supports filtering through the <b>ICollectionView</b> interface, which is identical to the
                one in .NET. To enable filtering, set the <b>CollectionView.filter</b> property to a function that
                determines which objects to include in the view.
            </p>
            <p>
                In this example, we create a filter for the country, and get the filter value from the input control.
            </p>

            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active"><a href="#flJsx" role="tab" data-toggle="tab">JSX</a></li>
                        <li><a href="#flJs" role="tab" data-toggle="tab">JS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active pane-content" id="flJsx">
                            {'<Wj.FlexGrid itemsSource={ this.state.view }/>\n'}
                            {'<div className="input-group">\n'}
                            {'    <span className="input-group-addon">\n'}
                            {'        <span className="glyphicon glyphicon-filter"></span>\n'}
                            {'    </span>\n'}
                            {'    <input type="text" className="form-control" placeholder="filter"\n'}
                            {'        onChange={ this.filterChanged } />\n'}
                            {'</div>'}
                        </div>
                        <div className="tab-pane pane-content" id="flJs">
                            {'getInitialState: function () {\n'}
                            {'\n'}
                            {'    // create view with a filter function\n'}
                            {'    var view = new wijmo.collections.CollectionView(Util.getData(), {\n'}
                            {'        filter: function (item) {\n'}
                            {'            var rx = this.state ? this.state.filterRx : null;\n'}
                            {'            return rx == null || rx.test(item.country);\n'}
                            {'        }.bind(this)\n'}
                            {'    });\n'}
                            {'    return {\n'}
                            {'        view: view,\n'}
                            {'        filterRx: null\n'}
                            {'    }\n'}
                            {'},\n'}
                            {'\n'}
                            {'// apply the new filter with some debouncing so user can type a little\n'}
                            {'toFilter: null,\n'}
                            {'filterChanged: function(e) {\n'}
                            {'    clearTimeout(this.toFilter);\n'}
                            {'    var filterText = e.target.value;\n'}
                            {'    this.setState({ filterRx: filterText ? new RegExp(filterText, \'i\') : null });\n'}
                            {'    this.toFilter = setTimeout(() => {\n'}
                            {'        this.state.view.refresh();\n'}
                            {'    }, 500);\n'}
                            {'}'}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <Wj.FlexGrid itemsSource={ this.state.view }/>
                    <div className="input-group">
                        <span className="input-group-addon">
                            <span className="glyphicon glyphicon-filter"></span>
                        </span>
                        <input type="text" className="form-control" placeholder="filter" onChange={ this.filterChanged } />
                    </div>
                </div>
            </div>

            <p>
                The <b>FlexGridFilter</b> extension provides per-column filtering for the <b>FlexGrid</b>. It adds 
                filter buttons to the column headers. When users click the filter buttons, a popup shows an Excel-style
                UI with filtering options that include by-value and by-condition filters. 
                The <b>FlexGridFilter</b> extension is packaged as a separate module (<b>wijmo.grid.filter</b>) and 
                requires the <b>wijmo.input</b> module.
            </p>
            <p>
                The example below demonstrates this option:
            </p>

            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active"><a href="#ftJsx" role="tab" data-toggle="tab">JSX</a></li>
                        <li><a href="#ftJs" role="tab" data-toggle="tab">JS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active pane-content" id="ftJsx">
                            {'<Wj.FlexGrid\n'}
                            {'    itemsSource={ Util.getData() }\n'}
                            {'    initialized={ function(s, e) { // when the grid is initialized\n'}
                            {'        new wijmo.grid.filter.FlexGridFilter(s); // add a FlexGridFilter to it\n'}
                            {'    }}/>\n'}
                        </div>
                        <div className="tab-pane pane-content" id="ftJs">
                            // no code required
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <Wj.FlexGrid 
                        itemsSource={ Util.getData() }
                        initialized={ function(s, e) { // when the grid is initialized
                            new wijmo.grid.filter.FlexGridFilter(s); // add a FlexGridFilter to it
                        }}/>
                </div>
            </div>
        </div>;
    }
});
