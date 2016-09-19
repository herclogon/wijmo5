declare var React: any;

var CustomCells = React.createClass({

    // Wijmo event handler
    formatItem: function(s, e) {
        var flex = s;
        if (e.panel == flex.cells && flex.columns[e.col].binding == 'country') {
            e.cell.innerHTML = wijmo.format(
                '<img src="resources/{country}.png"> {country}', 
                flex.rows[e.row].dataItem);
        }
    },

    render: function () {
        return <div>
            <h2>
                Custom Cells
            </h2>
            <p>
                FlexGrid has a <b>formatItem</b> event that gives you complete control over
                the contents of the cells. The event handler can get all the information it
                needs from the grid, and then modify the cell element accordingly.</p>
            <p>
                The example below uses the <b>formatItem</b> event to add a flag to the 
                content of the 'Country' column:</p>

            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active"><a href="#ccJsx" role="tab" data-toggle="tab">JSX</a></li>
                        <li><a href="#ccJs" role="tab" data-toggle="tab">JS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active pane-content" id="ccJsx">
                            {'<Wj.FlexGrid\n'}
                            {'    itemsSource={ Util.getData() }\n'}
                            {'    formatItem={ this.formatItem } />'}
                        </div>
                        <div className="tab-pane pane-content" id="ccJs">
                            {'formatItem: function(s, e) {\n'}
                            {'    var flex = s;\n'}
                            {'    if (e.panel == flex.cells && flex.columns[e.col].binding == \'country\') {\n'}
                            {'        e.cell.innerHTML = wijmo.format(\n'}
                            {'            \'<img src="resources/{country}.png"> {country}\', \n'}
                            {'            flex.rows[e.row].dataItem);\n'}
                            {'    }\n'}
                            {'}'}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <Wj.FlexGrid 
                        itemsSource={ Util.getData() }
                        formatItem={ this.formatItem } />
                </div>
            </div>

        </div>;
    }
});
