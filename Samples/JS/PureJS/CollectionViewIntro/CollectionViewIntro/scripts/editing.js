(function () {

    // create collectionview, grid
    var cvEditing = new wijmo.collections.CollectionView(getData(10)),
        editItem = null,
        editingGrid = new wijmo.grid.FlexGrid('#editingGrid', {
            selectionMode: wijmo.grid.SelectionMode.Row,
            itemsSource: cvEditing
        });

    // define new item creator with proper 'id'
    cvEditing.newItemCreator = function () {
        var item = getData(1)[0];
        item.id = wijmo.getAggregate(wijmo.Aggregate.Max, cvEditing.sourceCollection, 'id') + 1;
        return item;
    };

    // start editing item
    document.getElementById('btnEdit').addEventListener('click', function () {
        var editItem = cvEditing.currentItem;
        cvEditing.editItem(editItem);
        updateDialog(editItem, true);
    });

    // start adding item
    document.getElementById('btnAdd').addEventListener('click', function () {
        var newItem = cvEditing.addNew();
        updateDialog(newItem, false);
    });

    // delete current item
    document.getElementById('btnDelete').addEventListener('click', function () {
        cvEditing.remove(cvEditing.currentItem);
    });

    // commit editing or adding
    document.getElementById('btnCRUDOK').addEventListener('click', function () {
        if (editItem) {
            var updatedItem = getUpdatedData(),
            names = getNames();

            // update the item's values
            for (var i = 0; i < names.length; i++) {
                var fName = names[i];
                editItem[fName] = updatedItem[fName];
            }

            // commit the changes
            cvEditing.commitEdit();
            cvEditing.commitNew();
            cvEditing.refresh();
        }
    });

    // cancel editing or adding
    document.getElementById('btnCRUDCancel').addEventListener('click', function () {
        cvEditing.cancelEdit();
        cvEditing.cancelNew();
    });

    // populate the dialog with the current item's values
    function updateDialog(item, isEdit) {
        editItem = item;
        document.getElementById('edtID').value = item.id != null ? wijmo.Globalize.format(item.id) : '';
        document.getElementById('edtStart').value = item.start != null ? wijmo.Globalize.format(item.start) : '';
        document.getElementById('edtEnd').value = item.end != null ? wijmo.Globalize.format(item.end) : '';
        document.getElementById('edtCountry').value = item.country != null ? item.country : '';
        document.getElementById('edtProduct').value = item.product != null ? item.product : '';
        document.getElementById('edtColor').value = item.color != null ? item.color : '';
        document.getElementById('edtAmount').value = item.amount != null ? wijmo.Globalize.format(item.amount) : '';
        document.getElementById('edtActive').checked = item.active;
        var title = document.getElementById('dlgDetail').querySelector('div.modal-header h4.modal-title');
        title.innerHTML = isEdit ? 'Edit Item' : 'Add Item';
    }

    // get edited content from the dialog
    function getUpdatedData() {
        var item = {},
            content = document.getElementById('edtID').value;
        if (content) {
            item.id = wijmo.Globalize.parseInt(content);
        }
        content = document.getElementById('edtStart').value;
        if (content) {
            item.start = wijmo.Globalize.parseDate(content);
        }
        content = document.getElementById('edtEnd').value;
        if (content) {
            item.end = wijmo.Globalize.parseDate(content);
        }
        item.country = document.getElementById('edtCountry').value;
        item.product = document.getElementById('edtProduct').value;
        item.color = document.getElementById('edtColor').value;
        content = document.getElementById('edtAmount').value;
        if (content) {
            item.amount = wijmo.Globalize.parseFloat(content);
        }
        item.active = document.getElementById('edtActive').checked;
        return item;
    }
})();