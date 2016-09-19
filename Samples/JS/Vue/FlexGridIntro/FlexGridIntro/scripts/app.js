onload = function () {

    // Vue application
    var app = new Vue({
        el: '#app',
        data: {
            data: new wijmo.collections.CollectionView(getData(100)),
            frozenCount: 2,
            selMode: 'CellRange',
            selModes: 'None,Cell,CellRange,Row,RowRange,ListBox'.split(','),
            cvGroup: new wijmo.collections.CollectionView(getData(100)),
            groupBy: new wijmo.collections.CollectionView([
                { value: '', header: '(no grouping)' },
                { value: 'country', header: 'Country' },
                { value: 'amount', header: 'Revenue' },
                { value: 'date', header: 'Date' },
                { value: 'country,date', header: 'Country and Date' },
                { value: 'country,amount', header: 'Country and Revenue' },
                { value: 'country,date,amount', header: 'Country, Date, and Revenue' },
            ]),
            cvFilter: new wijmo.collections.CollectionView(getData(100)),
            filterText: '',
            filterRx: null,
            cvPaging: new wijmo.collections.CollectionView(getData(100), {
                pageSize: 10
            }),
            treeData: getTreeData()
        },
        methods: {
            toggleFreeze: function () {
                this.frozenCount = this.frozenCount == 0 ? 2 : 0;
            },
            updateGroups: function() {
                var cv = this.cvGroup;
                cv.groupDescriptions.clear();
                if (this.groupBy.currentItem) {
                    var groupNames = this.groupBy.currentItem.value.split(',');
                    for (var i = 0; i < groupNames.length; i++) {
                        var groupName = groupNames[i];
                        if (groupName == 'date') { // group dates by year
                            var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName, function (item, prop) {
                                return item.date.getFullYear();
                            });
                            cv.groupDescriptions.push(groupDesc);
                        } else if (groupName == 'amount') { // group amounts in ranges
                            var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName, function (item, prop) {
                                return item.amount >= 5000 ? '> 5,000' : item.amount >= 500 ? '500 to 5,000' : '< 500';
                            });
                            cv.groupDescriptions.push(groupDesc);
                        } else { // group everything else by value
                            var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName);
                            cv.groupDescriptions.push(groupDesc);
                        }
                    }
                }
            },
            filter: function (item) {
                return this.filterRx == null || this.filterRx.test(item.country);
            },
            formatCountry: function (s, e) {
                var flex = s;
                if (e.panel == flex.cells && flex.columns[e.col].binding == 'country') {
                    e.cell.innerHTML = wijmo.format(
                        '<img src="resources/{country}.png"> {country}',
                        flex.rows[e.row].dataItem);
                }
            },
            formatAmount: function (s, e) {

                // format cells in the "cells" panel only (not in headers)
                if (e.panel == s.cells) {

                    // start with default color
                    var color = '';

                    // customize color based on amount
                    if (s.columns[e.col].binding == 'amount') {
                        var amount = s.rows[e.row].dataItem.amount;
                        color = amount < 500 ? 'darkred' : amount < 2500 ? 'black' : 'darkgreen';
                    }

                    // always set the color, since cells are recycled
                    e.cell.style.color = color;
                }
            },
            sortedColumn: function (s, e) {

                // sort top-level items
                var view = s.collectionView;
                if (view && s.childItemsPath) {
                    for (var i = 0; i < view.items.length; i++) {
                        sortItem(view.items[i], view, s.childItemsPath);
                    }
                    view.refresh();
                }

                // sort child items
                function sortItem(item, view, childItemsPath) {
                    var children = item[childItemsPath];
                    if (children && wijmo.isArray(children)) {
                        children.sort(view._compareItems());
                        for (var i = 0; i < children.length; i++) {
                            sortItem(children[i], view, childItemsPath);
                        }
                    }
                }
            }
        },
        created: function () {
            this.cvFilter.filter = this.filter;
            this.$watch('filterText', function () {
                this.filterRx = this.filterText ? new RegExp(this.filterText, 'i') : null;
                this.cvFilter.refresh();
            });
        }
    });
}

// generate some random data
function getData(count) {
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = new wijmo.collections.ObservableArray();
    for (var i = 0; i < count; i++) {
        data.push({
            id: i,
            country: countries[i % countries.length],
            date: new Date(2014, i % 12, i % 28),
            amount: Math.random() * 10000,
            active: i % 4 == 0
        });
    }
    return data;
}

// generate some hierarchical data
function getTreeData() {
    return [
        {
            name: '\u266B Adriane Simione', items: [
              {
                  name: '\u266A Intelligible Sky', items: [
                    { name: 'Theories', length: '2:02' },
                    { name: 'Giant Eyes', length: '3:29' },
                    { name: 'Jovian Moons', length: '1:02' },
                    { name: 'Open Minds', length: '2:41' },
                    { name: 'Spacetronic Eyes', length: '3:41' }]
              }
            ]
        },
        {
            name: '\u266B Amy Winehouse', items: [
              {
                  name: '\u266A Back to Black', items: [
                    { name: 'Addicted', length: '1:34' },
                    { name: 'He Can Only Hold Her', length: '2:22' },
                    { name: 'Some Unholy War', length: '2:21' },
                    { name: 'Wake Up Alone', length: '3:43' },
                    { name: 'Tears Dry On Their Own', length: '1:25' }]
              },
              {
                  name: '\u266A Live in Paradiso', items: [
                    { name: "You Know That I'm No Good", length: '2:32' },
                    { name: 'Wake Up Alone', length: '1:04' },
                    { name: 'Valerie', length: '1:22' },
                    { name: 'Tears Dry On Their Own', length: '3:15' },
                    { name: 'Rehab', length: '3:40' }]
              }]
        },
        {
            name: '\u266B Black Sabbath', items: [
              {
                  name: '\u266A Heaven and Hell', items: [
                    { name: 'Neon Knights', length: '3:03' },
                    { name: 'Children of the Sea', length: '2:54' },
                    { name: 'Lady Evil', length: '1:43' },
                    { name: 'Heaven and Hell', length: '2:23' },
                    { name: 'Wishing Well', length: '3:22' },
                    { name: 'Die Young', length: '2:21' }]
              },
              {
                  name: '\u266A Never Say Die!', items: [
                    { name: 'Swinging The Chain', length: '4:32' },
                    { name: 'Breakout', length: '3:54' },
                    { name: 'Over To You', length: '2:43' },
                    { name: 'Air Dance', length: '1:34' },
                    { name: 'Johnny Blade', length: '1:02' },
                    { name: 'Never Say Die', length: '2:11' }]
              },
              {
                  name: '\u266A Paranoid', items: [
                    { name: 'Rat Salad', length: '3:44' },
                    { name: 'Hand Of Doom', length: '4:21' },
                    { name: 'Electric Funeral', length: '2:12' },
                    { name: 'Iron Man', length: '3:22' },
                    { name: 'War Pigs', length: '3:13' }]
              }]
        },
        {
            name: '\u266B Brand X', items: [
              {
                  name: '\u266A Unorthodox Behaviour', items: [
                    { name: 'Touch Wood', length: '2:54' },
                    { name: 'Running of Three', length: '1:34' },
                    { name: 'Unorthodox Behaviour', length: '2:23' },
                    { name: 'Smacks of Euphoric Hysteria', length: '3:12' },
                    { name: 'Euthanasia Waltz', length: '2:22' },
                    { name: 'Nuclear Burn', length: '4:01' }]
              }]
        }
    ];
}
