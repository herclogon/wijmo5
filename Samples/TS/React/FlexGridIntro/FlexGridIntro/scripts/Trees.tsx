declare var React: any;

var Trees = React.createClass({
    render: function () {
        return <div>
            <h2>
                Trees and Hierarchical Data
            </h2>
            <p>
                In addition to grouping, FlexGrid supports hierarchical data, that is, data with items
                that have lists of subitems. This type of hierarchical structure is very common, and is
                usually displayed in a tree-view control.
            </p>
            <p>
                To use FlexGrid with hierarchical data sources, set the <b>childItemsPath</b> property
                to the name of the data element that contains the child elements. The grid automatically
                scans the data and builds the tree for you.
            </p>

            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active"><a href="#trJsx" role="tab" data-toggle="tab">JSX</a></li>
                        <li><a href="#trJs" role="tab" data-toggle="tab">JS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active pane-content" id="trJsx">
                            {'<Wj.FlexGrid\n'}
                            {'    className="custom-flex-grid"\n'}
                            {'    childItemsPath="items"\n'}
                            {'    allowResizing="None"\n'}
                            {'    selectionMode="ListBox"\n'}
                            {'    headersVisibility="None"\n'}
                            {'    autoGenerateColumns={ false }\n'}
                            {'    itemsSource={ Util.getTreeData() }\n'}
                            {'    columns={[\n'}
                            {'        { binding: \'name\', width: \'*\' },\n'}
                            {'        { binding: \'length\', width: 80, align: \'center\' }\n'}
                            {'    ]}/>'}
                        </div>
                        <div className="tab-pane pane-content" id="trJs">
                            {'function getTreeData() {\n'}
                            {'    return [\n'}
                            {'        { name: \'\u266B Adriane Simione\', items: [\n'}
                            {'            { name: \'\u266A Intelligible Sky\', items: [\n'}
                            {'                { name: \'Theories\', length: \'2:02\' },\n'}
                            {'                { name: \'Giant Eyes\', length: \'3:29\' },\n'}
                            {'                { name: \'Jovian Moons\', length: \'1:02\' },\n'}
                            {'                { name: \'Open Minds\', length: \'2:41\' },\n'}
                            {'                { name: \'Spacetronic Eyes\', length: \'3:41\' }]\n'}
                            {'            }\n'}
                            {'        ]},\n'}
                            {'        { name: \'\u266B Amy Winehouse\', items: [\n'}
                            {'            { name: \'\u266A Back to Black\', items: [\n'}
                            {'                { name: \'Addicted\', length: \'1:34\' },\n'}
                            {'                { name: \'He Can Only Hold Her\', length: \'2:22\' },\n'}
                            {'                { name: \'Some Unholy War\', length: \'2:21\' },\n'}
                            {'                { name: \'Wake Up Alone\', length: \'3:43\' },\n'}
                            {'                { name: \'Tears Dry On Their Own\', length: \'1:25\' }]\n'}
                            {'            },\n'}
                            {'            { name: \'\u266A Live in Paradiso\', items: [\n'}
                            {'                { name: "You Know That I\'m No Good", length: \'2:32\' },\n'}
                            {'                { name: \'Wake Up Alone\', length: \'1:04\' },\n'}
                            {'                { name: \'Valerie\', length: \'1:22\' },\n'}
                            {'                { name: \'Tears Dry On Their Own\', length: \'3:15\' },\n'}
                            {'                { name: \'Rehab\', length: \'3:40\' }]\n'}
                            {'            }]\n'}
                            {'        }, ...'}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                <Wj.FlexGrid
                    className="custom-flex-grid"
                    childItemsPath="items" 
                    allowResizing="None"
                    selectionMode="ListBox"
                    headersVisibility="None"
                    autoGenerateColumns={ false }
                    itemsSource={ Util.getTreeData() }
                    columns={[
                        { binding: 'name', width: '*' },
                        { binding: 'length', width: 80, align: 'center' }
                    ]}/>
                </div>
            </div>
        </div>;
    }
});
