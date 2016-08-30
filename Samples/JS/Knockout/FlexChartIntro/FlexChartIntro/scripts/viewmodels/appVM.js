// application view model
function viewModel1() {

    // Save this pointer
    var self = this;

    // generate some random data
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [];
    for (var i = 0; i < countries.length; i++) {
        data.push({
            country: countries[i],
            downloads: Math.round(Math.random() * 20000),
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000
        });
    }

    // add data array to scope
    this.data = data;

    // add chart properties to scope
    this.chartProps = {
        chartType: ko.observable('Column'),
        stacking: ko.observable('None'),
        legendPosition: ko.observable('Right'),
        rotated: ko.observable(false),
        header: ko.observable('Sample Chart'),
        footer: ko.observable('copyright (c) ComponentOne'),
        titleX: ko.observable('country'),
        titleY: ko.observable('amount'),
        selectionMode: ko.observable('Series'),
        selection: ko.observable(null),
        selectionPoint: ko.observable()
    };

    // update the selectionPoint observable on selection change
    this.selectionChangedEH = function(data, sender, args) {
        var curSel = sender.selection;
        self.chartProps.selectionPoint(curSel && curSel.collectionView.currentItem);

    };

    // series-toggling chart control
    this.visibility1 = ko.observable();
    this.visibility2 = ko.observable();
    this.visibility3 = ko.observable();

    // SeriesVisibility-to-boolean writable computed observable. 'this' references a source SeriesVisibility observable.
    this.visibilityToBool = {
        read: function() {
            var vis = this();
            return vis === wijmo.chart.SeriesVisibility.Visible || vis === wijmo.chart.SeriesVisibility.Plot;
        },
        write: function(value) {
            this(value ? wijmo.chart.SeriesVisibility.Visible : wijmo.chart.SeriesVisibility.Legend);
        }
    };

    // Format the specified value using according to the specified format.
    this.format = function(value, format) {
        return wijmo.Globalize.format(ko.unwrap(value), format);
    };

    // dynamic data
    var toAddData;
    this.trafficData = new wijmo.collections.ObservableArray();
    this.setInterval = function (interval) {
        if (toAddData) {
            clearTimeout(toAddData);
            toAddData = null;
        }
        self.interval = interval;
        if (interval) {
            toAddData = setTimeout(addTrafficItem);
        }
    };
    this.setInterval(500);

    function addTrafficItem() {
        var len = self.trafficData.length,    
            last = len ? self.trafficData[len - 1] : null,
            trucks = last ? last.trucks : 0,
            ships = last ? last.ships : 0,
            planes = last? last.planes : 0;
        trucks = Math.max(0, trucks + Math.round(Math.random() * 50 - 25));
        ships = Math.max(0, ships + Math.round(Math.random() * 10 - 5));
        planes = Math.max(0, planes + Math.round(Math.random() * 10 - 5));

        // add random data, limit array length
        self.trafficData.push({ time: new Date(), trucks: trucks, ships: ships, planes: planes });
        if (self.trafficData.length > 200) {
            self.trafficData.splice(0, 1);
        }

        // keep adding
        if (self.interval) {
            toAddData = setTimeout(addTrafficItem, self.interval);
        }
    }
}