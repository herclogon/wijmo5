declare var React: any;

var Themes = React.createClass({
    render: function () {
        return <div>
            <h2>
                Themes
            </h2>
            <p>
                The appearance of the FlexGrid is defined in CSS. In addition to the default theme, we
                include about a dozen professionally designed themes that customize the appearance of
                all Wijmo controls to achieve a consistent, attractive look.
            </p>
            <p>
                You can customize the appearance of the grid using CSS. To do this, copy CSS rules
                from the default theme to a new CSS file and modify the style attributes you want to change.
            </p>
            <p>
                In this example, we add a "custom-flex-grid" class to the grid element and define some
                CSS rules to create a simple "black and white, no borders" theme for any grids that
                have the "custom-flex-grid" class.
            </p>

            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active"><a href="#thJsx" role="tab" data-toggle="tab">JSX</a></li>
                        <li><a href="#thCss" role="tab" data-toggle="tab">CSS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active pane-content" id="thJsx">
                            {'<Wj.FlexGrid\n'}
                            {'    className="custom-flex-grid"\n'}
                            {'    itemsSource={ Util.getData() }/>\n'}
                        </div>
                        <div className="tab-pane pane-content" id="thCss">
                            {'.custom-flex-grid .wj-header.wj-cell {\n'}
                            {'    background-color: #000;\n'}
                            {'    color: #fff;\n'}
                            {'    font-weight: bold;\n'}
                            {'    border-right: solid 1px #404040;\n'}
                            {'    border-bottom: solid 1px #404040;\n'}
                            {'}\n'}
                            {'.custom-flex-grid .wj-cell {\n'}
                            {'    border: none;\n'}
                            {'    background-color: #fff;\n'}
                            {'}\n'}
                            {'.custom-flex-grid .wj-alt:not(.wj-state-selected):not(.wj-state-multi-selected) {\n'}
                            {'    background-color: #fff;\n'}
                            {'}\n'}
                            {'.custom-flex-grid .wj-state-selected {\n'}
                            {'    background: #000;\n'}
                            {'    color: #fff;\n'}
                            {'}\n'}
                            {'.custom-flex-grid .wj-state-multi-selected {\n'}
                            {'    background: #222222;\n'}
                            {'    color: #fff;\n'}
                            {'}\n'}
                            {'/* override the glyphs used to show sorting and grouping */\n'}
                            {'.custom-flex-grid .wj-glyph-up {\n'}
                            {'    background-image:url(\'../resources/ascending.png\);\n'}
                            {'    background-repeat: no-repeat;\n'}
                            {'    background-position: bottom right;\n'}
                            {'    width: 1em; height: 1em;\n'}
                            {'    border-top: 0px; border-bottom: 0px; border-left: 0px; border-right: 0px;\n'}
                            {'    opacity: 1;\n'}
                            {'}\n'}
                            {'.custom-flex-grid .wj-glyph-down {\n'}
                            {'    background-image:url(\'../resources/descending.png\');\n'}
                            {'    background-repeat: no-repeat;\n'}
                            {'    background-position: bottom right;\n'}
                            {'    width: 1em; height: 1em;\n'}
                            {'    border-top: 0px; border-bottom: 0px; border-left: 0px; border-right: 0px;\n'}
                            {'    opacity: 1;\n'}
                            {'}\n'}
                            {'.custom-flex-grid .wj-glyph-right {\n'}
                            {'    background-image:url(\'../resources/collapsed.png\');\n'}
                            {'    background-repeat: no-repeat;\n'}
                            {'    background-position: bottom right;\n'}
                            {'    width: 1em; height: 1em;\n'}
                            {'    border-top: 0px; border-bottom: 0px; border-left: 0px; border-right: 0px;\n'}
                            {'}\n'}
                            {'.custom-flex-grid .wj-glyph-down-right {\n'}
                            {'    background-image:url(\'../resources/expanded.png\');\n'}
                            {'    background-repeat: no-repeat;\n'}
                            {'    background-position: bottom right;\n'}
                            {'    width: 1em; height: 1em;\n'}
                            {'    border-top: 0px; border-bottom: 0px; border-left: 0px; border-right: 0px;\n'}
                            {'}'}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <Wj.FlexGrid 
                        className="custom-flex-grid"
                        itemsSource={ Util.getData() }/>
                </div>
            </div>
        </div>;
    }
});
