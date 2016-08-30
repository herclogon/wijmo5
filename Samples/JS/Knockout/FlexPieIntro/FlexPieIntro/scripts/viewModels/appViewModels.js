// Getting Started and Theming
function SimpleVM(data) {
    this.itemsSource = data;
}

// Legend & Titles
function LegendTitlesVM(data) {
    this.itemsSource = data;
    this.header = ko.observable('Fruit by Value');
    this.footer = ko.observable('2014 GrapeCity, inc.');
    this.legendPosition = ko.observable('Right');
}

// Basic Features
function BasicVM(data) {
    var self = this;

    // get a reference to the FlexPie control
    this.chart = ko.observable(undefined);
    this.itemsSource = data;
    this.innerRadius = ko.observable(0);
    this.offset = ko.observable(0);
    this.startAngle = ko.observable(0);
    this.reversed = ko.observable(false);
    this.palette = ko.observable('standard');

    this.paletteChanged = function (data, sender, args) {
        // update FlexPie control's palette
        self.chart().palette = wijmo.chart.Palettes[sender.selectedValue];
    };
}

// Selection
function SelectionVM(data) {
    this.itemsSource = data;
    this.selectedPosition = ko.observable('Top');
    this.selectedOffset = ko.observable(0);
    this.isAnimated = ko.observable(true);
}