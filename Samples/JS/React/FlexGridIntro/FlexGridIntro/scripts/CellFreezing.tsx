declare var React: any;

var CellFreezing = React.createClass({
    getInitialState: function () {
        return {
            frozen: true
        }
    },

    // Wijmo event handlers
    toggleFreeze: function () {
        this.setState({ frozen: !this.state.frozen });
    },

    render: function () {
        return <div>
            <h2>
                Cell Freezing
            </h2>
            <p>
                The FlexGrid allows you to freeze rows and columns so they remain in view as the 
                user scrolls the grid. Frozen cells can be edited and selected as regular cells, 
                exactly as in Excel.</p>
            <p>
                This example allows you to toggle whether the first two rows and columns should
                be frozen.</p>

            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active"><a href="#cfJsx" role="tab" data-toggle="tab">JSX</a></li>
                        <li><a href="#cfJs" role="tab" data-toggle="tab">JS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active pane-content" id="cfJsx">
                            {'<Wj.FlexGrid\n'}
                            {'    itemsSource={ Util.getData() }\n'}
                            {'    frozenRows={ this.state.frozen ? 2 : 0 }\n'}
                            {'    frozenColumns={ this.state.frozen ? 2 : 0 } />\n'}
                            {'<button className="btn" onClick={ this.toggleFreeze }>\n'}
                            {'    { this.state.frozen ? \'Unfreeze\' : \'Freeze\' }\n'}
                            {'</button>'}
                        </div>
                        <div className="tab-pane pane-content" id="cfJs">
                            {'getInitialState: function () {\n'}
                            {'    return {\n'}
                            {'        frozen: true\n'}
                            {'    }\n'}
                            {'},\n'}
                            {'\n'}
                            {'// Wijmo event handlers\n'}
                            {'toggleFreeze: function() {\n'}
                            {'    this.setState({ frozen: !this.state.frozen });\n'}
                            {'}'}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <Wj.FlexGrid 
                        itemsSource={ Util.getData() }
                        frozenRows={ this.state.frozen ? 2 : 0 }
                        frozenColumns={ this.state.frozen ? 2 : 0 } />
                    <button className="btn" onClick={ this.toggleFreeze }>
                        { this.state.frozen ? 'Unfreeze' : 'Freeze' }
                    </button>
                </div>
            </div>
        </div>;
    }
});
