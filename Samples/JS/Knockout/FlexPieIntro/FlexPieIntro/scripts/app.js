var dataSvc = {
    getData: function() {
        var names = ['Oranges', 'Apples', 'Pears', 'Bananas', 'Pineapples'],
            data = [];

        // populate itemsSource
        for (var i = 0; i < names.length; i++) {
            data.push({
                name: names[i],
                value: Math.round(Math.random() * 100)
            });
        }

        return data;
    }
};

(function() {
    ko.applyBindings(new SimpleVM(dataSvc.getData()), document.getElementById('gettingStarted'));
    ko.applyBindings(new BasicVM(dataSvc.getData()), document.getElementById('basicFeatures'));
    ko.applyBindings(new LegendTitlesVM(dataSvc.getData()), document.getElementById('legendTitles'));
    ko.applyBindings(new SelectionVM(dataSvc.getData()),document.getElementById('selection'));
    ko.applyBindings(new SimpleVM(dataSvc.getData()), document.getElementById('theming'));
})();