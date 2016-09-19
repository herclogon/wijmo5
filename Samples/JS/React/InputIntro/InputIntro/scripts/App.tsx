declare var React: any;

var App = React.createClass({
    render: function () {
        return <div>
            <div className="header">
                <div className="container">
                    <img src="resources/wijmo5.png" alt="Wijmo 5" />
                    <h1>Input 101 (React)</h1>
                    <p>
                        This page shows how to get started with Wijmo's Input controls.
                    </p>
                </div>
            </div>
            <div className="container">
                <GettingStarted/>
                <AutoComplete/>
                <ComboBox/>
                <InputDate/>
                <InputTime/>
                <InputDateValidation/>
                <ListBox/>
                <InputNumber/>
                <InputMask/>
                <Menu/>
                <Dialogs/>
            </div>
        </div>;
    }
});
