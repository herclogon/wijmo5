function InputVM(countries) {
    this.pi = ko.observable(Math.PI);
    this.today = ko.observable(new Date());
    this.countries = countries;
    this.menuItemClicked = function(data, sender, args) {
        alert('You\'ve selected option ' + sender.selectedIndex + ' from the ' + sender.header + ' menu!');
    };
}

function GaugeVM() {
    this.value = ko.observable(0.5);
    this.min = ko.observable(0);
    this.max = ko.observable(1);
    this.step = ko.observable(0.05);
    this.readOnly = ko.observable(false);
    this.format = ko.observable('p0');
    this.showText = ko.observable('All');
}

function FlexPieVM(data) {
    this.itemsSource = data;
}

function FlexChartVM(data) {
    this.itemsSource = data;
}

function FlexGridVM(data) {
    this.itemsSource = data;
}