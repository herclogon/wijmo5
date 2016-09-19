declare var React: any;

// make components available through the "Wj" prefix, so users can write
// "Wj.FlexGrid" instead of "wijmo.react.FlexGrid":
var Wj = wijmo.react;

var App = React.createClass({
    render: function () {
        return <div>
            <div className="header">
                <div className="container">
                    <img src="resources/wijmo5.png" />
                    <h1>
                        FlexGrid 101 (React)</h1>
                    <p>
                        This page shows how to get started with Wijmo's FlexGrid control.</p>
                </div>
            </div>
            <div className="container">
                <GettingStarted/>
                <ColumnDefinitions/>
                <SelectionModes/>
                <CellFreezing/>
                <Editing/>
                <Grouping/>
                <Filtering/>
                <Paging/>
                <MasterDetail/>
                <CustomCells/>
                <ConditionalStyling/>
                <Themes/>
                <Trees/>
                <SortingTrees/>
                <NullValues/>
            </div>
        </div>;
    }
});
