declare var React: any;

var ConditionalStyling = React.createClass({

    // Wijmo event handler
    formatItem: function(s, e) {

        // format cells in the "cells" panel only (not in headers)
        if (e.panel == s.cells) {

            // start with default color
            var color = '';

            // customize color based on amount
            if (s.columns[e.col].binding == 'amount') {
                var amount = s.rows[e.row].dataItem.amount;
                color = amount < 500 ? 'darkred' :
                    amount < 2500? 'black' :
                    'darkgreen';
            }

            // always set the color, since cells are recycled
            e.cell.style.color = color; 
        }
    },

    render: function () {
        return <div>
            <h2>
                Conditional Styling
            </h2>
            <p>
                The <b>formatItem</b> event can also be used to provide conditional formatting for 
                cells.</p>
            <p>
                This example has a <b>formatItem</b> event handler that changes the foreground color
                of the cell element depending on the amount it contains.</p>

            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active"><a href="#csJsx" role="tab" data-toggle="tab">JSX</a></li>
                        <li><a href="#csJs" role="tab" data-toggle="tab">JS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active pane-content" id="csJsx">
                            {'<Wj.FlexGrid\n'}
                            {'    itemsSource={ Util.getData() }\n'}
                            {'    formatItem={ this.formatItem } />\n'}
                        </div>
                        <div className="tab-pane pane-content" id="csJs">
                            {'formatItem: function(s, e) {\n'}
                            {'\n'}
                            {'    // format cells in the "cells" panel only (not in headers)\n'}
                            {'    if (e.panel == s.cells) {\n'}
                            {'\n'}
                            {'        // start with default color\n'}
                            {'        var color = \'\';\n'}
                            {'\n'}
                            {'        // customize color based on amount\n'}
                            {'        if (s.columns[e.col].binding == \'amount\') {\n'}
                            {'            var amount = s.rows[e.row].dataItem.amount;\n'}
                            {'            color = amount < 500 ? \'darkred\' :\n'}
                            {'                amount < 2500? \'black\' :\n'}
                            {'                \'darkgreen\';\n'}
                            {'        }\n'}
                            {'\n'}
                            {'        // always set the color, since cells are recycled\n'}
                            {'        e.cell.style.color = color;\n'}
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
