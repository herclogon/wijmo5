declare var React: any;

var SelectionModes = React.createClass({
    getInitialState: function () {
        return {
            selModes: 'None,Cell,CellRange,Row,RowRange,ListBox'.split(','),
            selMode: 'CellRange'
        }
    },

    // Wijmo event handlers
    selModeChanged: function (s, e) {
        this.setState({ selMode: s.text });
    },

    render: function () {
        return <div>
            <h2>
                Selection Modes
            </h2>
            <p>
                By default, FlexGrid allows you to select a range of cells with the mouse or keyboard,
                just like Excel. The <b>selectionMode</b> property allows you to change that so that you
                can select a row, a range of rows, non-contiguous rows (like in a list-box), a single cell,
                or disable selection altogether.
            </p>
            <p>
                This example allows you to pick the <b>selectionMode</b> from a Wijmo Menu control.
            </p>

            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active"><a href="#smJsx" role="tab" data-toggle="tab">JSX</a></li>
                        <li><a href="#smJs" role="tab" data-toggle="tab">JS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active pane-content" id="smJsx">
                            {'<Wj.FlexGrid\n'}
                            {'    selectionMode={ this.state.selMode }\n'}
                            {'    itemsSource={ Util.getData() }/>\n'}
                            {'<label htmlFor="cmbSel">\n'}
                            {'    SelectionMode: &nbsp; </label>\n'}
                            {'<Wj.ComboBox\n'}
                            {'    id="cmbSel"\n'}
                            {'    itemsSource={ this.state.selModes }\n'}
                            {'    text={ this.state.selMode }\n'}
                            {'    textChanged={ this.selModeChanged }/>'}
                        </div>
                        <div className="tab-pane pane-content" id="smJs">
                            {'getInitialState: function () {\n'}
                            {'    return {\n'}
                            {'        selModes: \'None,Cell,CellRange,Row,RowRange,ListBox\'.split(\',\'),\n'}
                            {'        selMode: \'CellRange\'\n'}
                            {'    }\n'}
                            {'},\n'}
                            {'\n'}
                            {'// Wijmo event handlers\n'}
                            {'selModeChanged: function(s, e) {\n'}
                            {'    this.setState({ selMode: s.text });\n'}
                            {'}'}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <Wj.FlexGrid 
                        selectionMode={ this.state.selMode }
                        itemsSource={ Util.getData() }/>
                    <label htmlFor="cmbSel">
                        SelectionMode:&nbsp; </label>
                    <Wj.ComboBox
                        id="cmbSel"
                        itemsSource={ this.state.selModes }
                        text={ this.state.selMode }
                        textChanged={ this.selModeChanged }/>
                </div>
            </div>
        </div>;
    }
});
