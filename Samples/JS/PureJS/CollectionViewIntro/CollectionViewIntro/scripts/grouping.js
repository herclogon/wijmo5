(function () {
    // create collectionview, grid, the select element and the names list.
    var cvGrouping = new wijmo.collections.CollectionView(getData(20)),
        groupingGrid = new wijmo.grid.FlexGrid('#groupingGrid'),
        groupingFieldNameList = document.getElementById('groupingFieldNameList'),
        groupingNames = getNames();

    // initialize grid
    groupingGrid.initialize({
        isReadOnly: true,
        itemsSource: cvGrouping
    });

    // initialize the list and listen to the list's change.
    groupingFieldNameList.innerHTML += '<option value="" selected="selected">Please choose the field you want to group by...</option>';
    for (var i = 0; i < groupingNames.length; i++) {
        groupingFieldNameList.innerHTML += '<option value="' + groupingNames[i] + '">' + groupingNames[i] + '</option>';
    }
    groupingFieldNameList.addEventListener('change', groupGrid);

    // update the group settings.
    function groupGrid() {
        var gd,
            fieldName = groupingFieldNameList.value;

        gd = cvGrouping.groupDescriptions;

        if (!fieldName) {
            // clear all the group settings.
            gd.splice(0, gd.length);
            return;
        }

        if (findGroup(fieldName) >= 0) {
            return;
        }

        if (fieldName === 'amount') {
            // when grouping by amount, use ranges instead of specific values
            gd.push(new wijmo.collections.PropertyGroupDescription(fieldName, function (item, propName) {
                var value = item[propName]; // amount
                if (value > 1000) return 'Large Amounts';
                if (value > 100) return 'Medium Amounts';
                if (value > 0) return 'Small Amounts';
                return 'Negative Amounts';
            }));
        }
        else {
            // group by specific property values
            gd.push(new wijmo.collections.PropertyGroupDescription(fieldName));
        }
    }

    // check whether the group with the specified property name already exists.
    function findGroup(propName) {
        var gd = cvGrouping.groupDescriptions;
        for (var i = 0; i < gd.length; i++) {
            if (gd[i].propertyName === propName) {
                return i;
            }
        }

        return -1;
    }
})();