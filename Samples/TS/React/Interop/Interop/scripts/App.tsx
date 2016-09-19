declare var React: any;

var names = 'Abraham,Andrew,Carter,Charles,Daniel,David,Edward,Gunning,Jacob,John,Josiah,Pierce,Richard,Samuel,Simon,Thomas,William'.split(','),
    count = 20,
    startDate = wijmo.DateTime.addDays(new Date(), -count),
    data = [];
for (var i = 0; i < 20; i++) {
    data.push({
        id: i,
        name: names[i % names.length],
        sales: Math.random() * 1000,
        expenses: Math.random() * 500,
        downloads: Math.random() * 2000,
        active: i % 2 == 0,
        date: wijmo.DateTime.addDays(startDate, i)
    });
}

var App = React.createClass({

    // initialize model: 
    // declare view and current item, update state when current item changes
    getInitialState: function() {
        return {
            names: names,
            view: new wijmo.collections.CollectionView(data, {
                currentChanged: () => {
                    this.forceUpdate();
                }
            })
        }
    },

    // two-way bindings
    salesChanged: function (s, e) {
        this.state.view.currentItem.sales = s.value;
        this.forceUpdate();
        this.state.view.refresh();
    },
    expensesChanged: function(s, e) {
        this.state.view.currentItem.expenses = s.value;
        this.forceUpdate();
        this.state.view.refresh();
    },
    dateChanged: function(s, e) {
        this.state.view.currentItem.date = s.value;
        this.forceUpdate();
        this.state.view.refresh();
    },
    nameChanged: function(s, e) {
        this.state.view.currentItem.name = s.text;
        this.forceUpdate();
        this.state.view.refresh();
    },

    // store a reference to the grid after it's initialized
    initGrid: function(s, e) {
        this.setState({ theGrid: s });
    },

    // store a reference to the editor after it's initialized
    initEditor: function(s, e) {
        this.setState({ theEditor: s });
    },
    editCurrentItem: function() {
        var view = this.state.view;
        view.editItem(view.currentItem);
        this.state.theEditor.show(true, (e) => {
            if (e.dialogResult == 'wj-hide-ok') {
                view.commitEdit();
            } else {
                view.cancelEdit();
            }
            this.forceUpdate(); // update after applying or cancelling changes
        });
    },

    // render the view
    render: function () {
        return <div>
            <div className="header">
                <div className="container">
                    <img src="resources/wj-react.png" alt="Wijmo React logo" />
                    <h1>
                        Wijmo and React
                    </h1>
                </div>
            </div>
            <div className="container">
                <p>
                    This sample was designed to show advanced data-binding scenarios using Wijmo
                    and different application frameworks.</p>
                <p>
                    This version of the sample uses React and the <b>wijmo.react.js</b> interop
                    module. Other versions use <b>Angular</b> and <b>VueJS</b>.</p>
                <p>
                    Together, the samples demonstrate the differences between popular
                    application  frameworks and Wijmo's framework-agnostic nature.</p>

                <h3>
                    FlexGrid
                </h3>
                <p>
                    Let's begin by showing some data on an editable <b>FlexGrid</b> control:</p>

                <Wj.FlexGrid
                    autoGenerateColumns={ false }
                    columns={[
                        { binding: 'name', header: 'Name' },
                        { binding: 'sales', header: 'Sales', format: 'c0' },
                        { binding: 'expenses', header: 'Expenses', format: 'c0' },
                        { binding: 'active', header: 'Active' },
                        { binding: 'date', header: 'Date' }
                    ]}
                    itemsSource={ this.state.view }
                    initialized={ this.initGrid } />

                <p>
                    All Wijmo React components expose an "initialized" pseudo-event that 
                    allows you to add the control to your component state. This way you 
                    can use the control in your markup. For example, the grid above 
                    has <b>{ this.state.theGrid ? this.state.theGrid.rows.length : 0 }</b> rows.
                </p>

                <h3>
                    FlexChart
                </h3>
                <p>
                    Next, let's show the same data as a chart using the <b>FlexChart</b> control:</p>

                <Wj.FlexChart 
                    itemsSource={ this.state.view }
                    bindingX="name"
                    series={[
                        { name: 'Sales', binding: 'sales' },
                        { name: 'Expenses', binding: 'expenses' },
                        { name: 'Downloads', binding: 'downloads', chartType: 'LineSymbols' }
                    ]} />

                <p>
                    The chart is bound to the same <b>CollectionView</b> as the grid, so if you 
                    edit or sort the data on the grid, the changes are automatically reflected
                    on the chart.</p>

                <h3>
                    Gauges
                </h3>
                <p>
                    Here's two gauges bound to the current customer's sales.
                    You can use the gauges to see and also to edit the sales amount.</p>

                <Wj.LinearGauge
                    min={ 0 }
                    max={ 1000 }
                    step={ 50 }
                    format="c0"
                    thumbSize={ 20 }
                    isReadOnly={ false }
                    showRanges={ false }
                    value={ this.state.view.currentItem.sales }
                    valueChanged={ this.salesChanged }
                    face={{ thickness:0.5 }}
                    pointer={{ thickness:0.5 }}
                    ranges={[
                        { min: 0, max: 333, color: 'red' },
                        { min: 333, max: 666, color: 'gold' },
                        { min: 666, max: 1000, color: 'green' }
                    ]} />

                <Wj.RadialGauge 
                    min={ 0 }
                    max={ 1000 }
                    step={ 50 }
                    format="c0"
                    showText="Value"
                    thumbSize={ 12 }
                    isReadOnly={ false }
                    showRanges={ false }
                    value={ this.state.view.currentItem.sales }
                    valueChanged={ this.salesChanged }
                    face={{ thickness:0.08 }}
                    pointer={{ thickness:0.08 }}
                    ranges={[
                        { min: 0, max: 333, color: 'red' },
                        { min: 333, max: 666, color: 'gold' },
                        { min: 666, max: 1000, color: 'green' }
                    ]} />

                <h3>
                    Input Controls
                </h3>
                <p>
                    This section shows several input controls bound to the current item's properties:</p>
                <table className="table table-condensed">
                    <tbody>
                        <tr>
                            <td><label htmlFor="c">Name:</label></td>
                            <td>
                                <Wj.ComboBox
                                    id="c"
                                    text={ this.state.view.currentItem.name }
                                    textChanged={ this.nameChanged }
                                    itemsSource={ this.state.names }
                                    isEditable={ true }
                                    isRequired={ false }
                                    placeholder="Name" />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="n">Sales:</label></td>
                            <td>
                                <Wj.InputNumber
                                    id="n"
                                    value={ this.state.view.currentItem.sales }
                                    valueChanged={ this.salesChanged }
                                    isRequired={ false }
                                    step={ 100 }
                                    format="c"
                                    plceholder="Sales" />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="d">Date/Time:</label></td>
                            <td>
                                <Wj.InputDate
                                    id="d"
                                    value={ this.state.view.currentItem.date }
                                    valueChanged={ this.dateChanged }
                                    isRequired={ false }
                                    format="MMM dd, yyyy"
                                    placeholder="Date" />
                                <Wj.InputTime
                                    value={ this.state.view.currentItem.date }
                                    valueChanged={ this.dateChanged }
                                    isRequired={ false }
                                    placeholder="Time" />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="dt">DateTime:</label></td>
                            <td>
                                <Wj.InputDateTime
                                    id="dt"
                                    value={ this.state.view.currentItem.date }
                                    valueChanged={ this.dateChanged }
                                    isRequired={ false }
                                    placeholder="Date and Time" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h3>
                    Modal Popups and Labeled Inputs
                </h3>
                <p>
                    This section shows a modal popup containing input controls with 
                    floating labels (inspired by the 
                    <a href="https://getmdl.io/">Material Design Lite</a> CSS library):</p>

                <button className="btn btn-primary" onClick={ this.editCurrentItem }>
                    Edit Current Item
                </button>
                <Wj.Popup className="modal-content" initialized={ this.initEditor } dialogResultEnter="wj-hide-ok">

                    <div className="modal-header">
                        <button type="button" tabindex="-1" className="close wj-hide">
                            <span>&times; </span>
                        </button>
                        <h4 className="modal-title">Edit Item</h4>
                    </div>

                    <div className="modal-body">
                        <div className="wj-labeled-input" >
                            <Wj.ComboBox
                                text={ this.state.view.currentItem.name }
                                textChanged={ this.nameChanged }
                                itemsSource={ this.state.names }
                                isEditable={ true }
                                isRequired={ false }
                                id="cmbName" />
                            <label htmlFor="cmbName">Name</label>
                        </div>
                        <div className="wj-labeled-input" >
                            <Wj.InputDate
                                value={ this.state.view.currentItem.date }
                                valueChanged={ this.dateChanged }
                                isRequired={ false }
                                format="MMM dd, yyyy"
                                id="idDate" />
                            <label htmlFor="idDate">Date</label>
                        </div>
                        <br/>
                        <div className="wj-labeled-input" >
                            <Wj.InputNumber
                                value={ this.state.view.currentItem.sales }
                                valueChanged={ this.salesChanged }
                                isRequired={ false }
                                step={ 100 }
                                format="c"
                                id="inSales" />
                            <label htmlFor="inSales">Sales</label>
                        </div>
                        <div className="wj-labeled-input" >
                            <Wj.InputNumber
                                value={ this.state.view.currentItem.expenses }
                                valueChanged={ this.expensesChanged }
                                isRequired={ false }
                                step={100}
                                format="c"
                                id="inExpenses" />
                            <label htmlFor="inExpenses">Expenses</label>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary wj-hide-ok">OK</button>
                        <button type="button" className="btn btn-default wj-hide">Cancel</button>
                    </div>
                </Wj.Popup>
            </div>
        </div>;
    }
});