// data and helper methods for sample
var app = {
    getData: function() {
        var data = [],
            names = ['Oranges', 'Apples', 'Pears', 'Bananas', 'Pineapples'];

        // populate itemsSource
        for (var i = 0; i < names.length; i++) {
            data.push({
                name: names[i],
                value: Math.round(Math.random() * 100)
            });
        }

        return data;
    },
    updateMenuHeader: function (menu, prefix, text) {
        menu.header = prefix + text;
    },
    palettes: ['standard', 'cocoa', 'coral', 'dark', 'highcontrast', 'light', 'midnight', 'minimal', 'modern', 'organic', 'slate']
};