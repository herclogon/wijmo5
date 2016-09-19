declare var React: any;

var App = React.createClass({
    render: function () {
        return <div>
            <div className="header">
                <div className="container">
                    <img src="resources/wijmo5.png" alt="Wijmo 5" />
                    <h1>FlexChart 101 (React) </h1>
                    <p>
                        This page shows how to get started with Wijmo's FlexChart control.
                    </p>
                </div>
            </div>
            <div className="container">
                <GettingStarted/>
                <ChartTypes/>
                <MixedChartTypes/>
                <LegendAndTitles/>
                <Tooltips/>
                <StylingSeries/>
                <CustomizingAxes/>
                <Theming/>
                <SelectionModes/>
                <ToggleSeries/>
                <DynamicCharts/>
            </div>
        </div>;
    }
});
